{/*TEXTO AQUI: Componente AdminRaffle refatorado. Atua como painel de controle direto no Firestore, substituindo a rota administrativa do Railway*/}
import React, { useState, useEffect } from 'react';
import { TrendingUp, Ticket, DollarSign, CheckCircle, XCircle, Clock, Search, AlertCircle } from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, query, onSnapshot, doc, updateDoc, orderBy } from 'firebase/firestore';

export default function AdminRaffle() {
  const totalNumbers = 100;
  const price = 15.00;
  const prizeCost = 300.00;
  
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    {/*TEXTO AQUI: Escuta ativa do Firestore para auditar o status das vendas e conflitos em tempo real*/}
    const q = query(collection(db, 'tickets'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dbTickets = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Formatador seguro para o Timestamp do Firebase
        formattedDate: doc.data().updatedAt ? new Date(doc.data().updatedAt.seconds * 1000).toLocaleString('pt-BR') : 'Sem data'
      }));
      setTickets(dbTickets);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleStatusChange = async (ticketId, newStatus) => {
    try {
      const ticketRef = doc(db, 'tickets', ticketId);
      await updateDoc(ticketRef, { 
        status: newStatus 
      });
      // Se for CANCELAR, também poderíamos limpar o nome/telefone, 
      // mas mantemos o histórico no painel para auditoria. Apenas mudamos o status para AVAILABLE
    } catch (error) {
      console.error("Erro ao atualizar ticket:", error);
      alert("Falha de comunicação com o banco de dados.");
    }
  };

  // Cálculos dinâmicos em cima dos dados reais
  const soldTickets = tickets.filter(t => t.status === 'SOLD');
  const pendingTickets = tickets.filter(t => t.status === 'PENDING_PAYMENT');
  
  const soldCount = soldTickets.length;
  const grossRevenue = soldCount * price;
  const netRevenue = (totalNumbers * price) - prizeCost;

  const filteredTickets = tickets
    .filter(t => t.status !== 'AVAILABLE') // Mostra apenas os reservados ou vendidos
    .filter(t => 
      t.buyerName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      t.id.includes(searchTerm)
    )
    .sort((a, b) => b.updatedAt?.seconds - a.updatedAt?.seconds); // Mais recentes primeiro

  return (
    <div className="space-y-6">
      
      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3 text-zinc-500">
              <Ticket className="w-5 h-5" /> <h3 className="font-bold">Números Pagos</h3>
            </div>
            <span className="text-xs font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{pendingTickets.length} pendentes</span>
          </div>
          <p className="font-titulo text-4xl text-escuro">{soldCount} / {totalNumbers}</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 text-zinc-500 mb-2">
            <DollarSign className="w-5 h-5" /> <h3 className="font-bold">Receita (Números Pagos)</h3>
          </div>
          <p className="font-titulo text-4xl text-escuro">R$ {grossRevenue.toFixed(2)}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-dourado shadow-sm">
          <div className="flex items-center gap-3 text-dourado mb-2">
            <TrendingUp className="w-5 h-5" /> <h3 className="font-bold">Projeção Líquida (100%)</h3>
          </div>
          <p className="font-titulo text-4xl text-escuro">R$ {netRevenue.toFixed(2)}</p>
          <p className="text-xs text-zinc-500 mt-1">Já subtraído R$ 300,00 do prêmio</p>
        </div>
      </div>

      {/* Tabela de Auditoria e Resolução de Conflitos */}
      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-bold text-lg text-escuro flex items-center gap-2">
            <Clock className="w-5 h-5 text-zinc-400" /> Transações e Conflitos
          </h3>
          
          <div className="relative w-full sm:w-72">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Buscar nome ou número..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:border-verdeConfianca"
            />
          </div>
        </div>
        
        {loading ? (
          <div className="p-8 text-center text-zinc-500 font-medium animate-pulse">Sincronizando banco de dados...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-600 min-w-[800px]">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-escuro">Nº</th>
                  <th className="px-6 py-4 font-bold text-escuro">Comprador</th>
                  <th className="px-6 py-4 font-bold text-escuro">WhatsApp</th>
                  <th className="px-6 py-4 font-bold text-escuro">Hora do Log</th>
                  <th className="px-6 py-4 font-bold text-escuro">Status Atual</th>
                  <th className="px-6 py-4 font-bold text-escuro text-right">Ação Manual</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50">
                    <td className="px-6 py-4 font-titulo text-xl text-escuro">{ticket.id}</td>
                    <td className="px-6 py-4 font-bold text-escuro">{ticket.buyerName}</td>
                    <td className="px-6 py-4 font-mono text-xs">{ticket.buyerPhone}</td>
                    <td className="px-6 py-4 text-xs">{ticket.formattedDate}</td>
                    <td className="px-6 py-4">
                      {ticket.status === 'SOLD' ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200">
                          PAGO
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 w-fit px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200">
                          <AlertCircle className="w-3 h-3" /> PENDENTE
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 flex justify-end gap-2">
                      {/*TEXTO AQUI: Bloqueia acidental duplo clique ocultando botões se já estiver PAGO*/}
                      {ticket.status === 'PENDING_PAYMENT' && (
                        <>
                          <button 
                            onClick={() => handleStatusChange(ticket.id, 'SOLD')}
                            className="bg-verdeConfianca hover:bg-verdeClaro text-white px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1 shadow-sm"
                          >
                            <CheckCircle className="w-3.5 h-3.5" /> Validar Pix
                          </button>
                          <button 
                            onClick={() => {
                              if(window.confirm(`Tem certeza que deseja cancelar o número ${ticket.id} e devolvê-lo para venda?`)) {
                                handleStatusChange(ticket.id, 'AVAILABLE');
                              }
                            }}
                            className="bg-zinc-100 hover:bg-red-50 text-zinc-600 hover:text-red-600 border border-zinc-200 hover:border-red-200 px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1"
                          >
                            <XCircle className="w-3.5 h-3.5" /> Cancelar
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
                
                {filteredTickets.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-zinc-500">
                      Nenhuma reserva pendente ou número vendido encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}