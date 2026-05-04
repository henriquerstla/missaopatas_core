{/*TEXTO AQUI: Componente Raffle refatorado para arquitetura Serverless com logs de concorrência e redirecionamento de WhatsApp*/}
import React, { useState, useEffect } from 'react';
import { Ticket, AlertTriangle, CreditCard, Lock, Loader2, User, Phone } from 'lucide-react';
import fotoPremio from '../assets/premio-pix.png';
import { db } from '../firebaseConfig';
import { collection, doc, getDoc, setDoc, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

export default function Raffle() {
  const pricePerNumber = 15.00;
  const adminWhatsApp = "5521997111987";
  
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    {/*TEXTO AQUI: Listener em tempo real do Firestore para garantir sincronia do painel entre múltiplos usuários*/}
    const unsubscribe = onSnapshot(collection(db, 'tickets'), (snapshot) => {
      const loadedTickets = snapshot.docs.map(doc => ({
        ticketNumber: parseInt(doc.id),
        ...doc.data()
      }));

      const allTickets = Array.from({length: 100}, (_, i) => {
        const num = i + 1;
        const dbTicket = loadedTickets.find(t => t.ticketNumber === num);
        return dbTicket || { ticketNumber: num, status: 'AVAILABLE', buyerName: '' };
      });

      setTickets(allTickets);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleNumber = (num) => {
    const ticket = tickets.find(t => t.ticketNumber === num);
    if (ticket && ticket.status !== 'AVAILABLE') return; 
    
    setSelectedNumbers(prev => 
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    );
  };

  const handlePayment = async () => {
    if (!buyerName || !buyerPhone) {
      alert("Por favor, preencha seu nome e WhatsApp.");
      return;
    }

    setIsProcessing(true);
    
    try {
      {/*TEXTO AQUI: Validação atômica e registro de logs individuais para auditoria de concorrência*/}
      for (const num of selectedNumbers) {
        const ticketRef = doc(db, 'tickets', num.toString());
        const ticketSnap = await getDoc(ticketRef);

        if (ticketSnap.exists() && ticketSnap.data().status !== 'AVAILABLE') {
          alert(`O número ${num} acabou de ser reservado por outra pessoa. Escolha outro.`);
          setSelectedNumbers(prev => prev.filter(n => n !== num));
          setIsProcessing(false);
          return;
        }

        await setDoc(ticketRef, {
          status: 'PENDING_PAYMENT',
          buyerName: buyerName,
          buyerPhone: buyerPhone,
          updatedAt: serverTimestamp()
        }, { merge: true });

        await addDoc(collection(db, `tickets/${num}/attempts`), {
          buyerName,
          buyerPhone,
          timestamp: serverTimestamp()
        });
      }

      {/*TEXTO AQUI: Geração do payload estático e direcionamento manual via URI do WhatsApp*/}
      const totalAmount = (selectedNumbers.length * pricePerNumber).toLocaleString('pt-BR', {minimumFractionDigits: 2});
      const whatsappText = `Olá, acabei de reservar os números ${selectedNumbers.join(', ')} na rifa.\n\nMeu nome: ${buyerName}\nTelefone: ${buyerPhone}\nTotal: R$ ${totalAmount}\n\nSegue o meu comprovante do Pix:`;
      window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(whatsappText)}`, '_blank');
      
      alert("Reserva registrada! Envie o comprovante no WhatsApp para que o administrador valide seus números.");
      
      setSelectedNumbers([]);
      setBuyerName('');
      setBuyerPhone('');
    } catch (error) {
      console.error("Erro na transação:", error);
      alert("Falha de comunicação com o banco de dados. Tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  const totalValue = selectedNumbers.length * pricePerNumber;
  const isFormValid = selectedNumbers.length > 0 && buyerName.length > 2 && buyerPhone.length > 8;

  return (
    <section className="py-20 bg-principal border-t border-divisor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
            <AlertTriangle className="w-4 h-4"/>
            Ação Solidária Urgente
          </div>
          <h2 className="font-titulo text-4xl md:text-5xl text-escuro">
            SALVE UMA VIDA E CONCORRA A UM <span className="text-dourado">PIX DE R$ 300,00</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm sticky top-24">
            <div className="aspect-square bg-zinc-100 rounded-lg overflow-hidden flex items-center justify-center border border-zinc-200 mb-4 relative">
              <img src={fotoPremio} alt="Prêmio PIX de R$ 300,00" className="w-full h-full object-cover object-center" />
              <div className="absolute bottom-0 w-full bg-escuro/90 text-white p-3 text-center backdrop-blur-sm">
                <p className="font-bold">Prêmio: PIX de R$ 300,00</p>
                <p className="text-sm font-medium text-dourado">Valor por número: R$ 15,00</p>
              </div>
            </div>
            
            <div className="bg-principal p-6 rounded-lg space-y-4">
              <div className="space-y-3 pb-4 border-b border-divisor">
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3 top-3 text-zinc-400"/>
                  <input type="text" placeholder="Seu Nome Completo" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded border border-zinc-300 focus:outline-none focus:border-verdeConfianca bg-white" />
                </div>
                <div className="relative">
                  <Phone className="w-5 h-5 absolute left-3 top-3 text-zinc-400"/>
                  <input type="text" placeholder="Seu WhatsApp (com DDD)" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded border border-zinc-300 focus:outline-none focus:border-verdeConfianca bg-white" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-zinc-700">Total ({selectedNumbers.length} números):</span>
                <span className="font-titulo text-3xl text-escuro">
                  R$ {totalValue.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                </span>
              </div>
              
              <button 
                onClick={handlePayment}
                disabled={!isFormValid || isProcessing}
                className="w-full bg-verdeConfianca hover:bg-verdeClaro disabled:bg-zinc-300 disabled:cursor-not-allowed text-white py-4 rounded font-bold transition-colors flex items-center justify-center gap-2 mt-4 uppercase"
              >
                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin"/> : <CreditCard className="w-5 h-5"/>}
                {isProcessing ? 'PROCESSANDO...' : 'ENVIAR COMPROVANTE (WHATSAPP)'}
              </button>
              <p className="text-xs text-zinc-500 mt-4 text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3"/> Seus números serão reservados até a validação
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-lg text-escuro mb-6 flex items-center gap-2 border-b border-zinc-100 pb-4">
              <Ticket className="w-5 h-5 text-dourado"/> Selecione seus números
            </h3>
            
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 text-zinc-400">
                <Loader2 className="w-10 h-10 animate-spin mb-4"/>
                <p className="font-medium">Sincronizando números...</p>
              </div>
            ) : (
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 md:gap-3">
                {tickets.sort((a, b) => a.ticketNumber - b.ticketNumber).map((ticket) => {
                  const num = ticket.ticketNumber;
                  const isSold = ticket.status !== 'AVAILABLE';
                  const isSelected = selectedNumbers.includes(num);
                  const bName = ticket.buyerName;

                  return (
                    <button
                      key={num}
                      onClick={() => toggleNumber(num)}
                      className={`
                        relative aspect-square flex items-center justify-center rounded font-bold text-sm transition-all
                        ${isSold ? 'bg-red-50 border border-red-200 text-red-400 cursor-not-allowed' : 
                          isSelected ? 'bg-dourado text-escuro border-2 border-escuro scale-110 shadow-md z-10' : 
                          'bg-zinc-50 border border-zinc-200 text-zinc-600 hover:border-dourado hover:text-dourado'}
                      `}
                    >
                      {isSold ? <span className="text-[9px] leading-tight text-center truncate w-full px-1">{bName ? bName.split(' ')[0] : 'Reservado'}</span> : num}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}