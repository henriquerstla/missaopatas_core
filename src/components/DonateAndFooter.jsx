import React, { useState } from 'react';
import { Copy, CheckCircle, MessageCircle, Heart } from 'lucide-react';

export default function DonateAndFooter() {
  const pixKey = "21 99711-1987";
  const [copied, setCopied] = useState(false);
  const whatsappLink = "https://wa.me/5521997111987?text=Ol%C3%A1%2C%20quero%20ajudar%20no%20caso%20dos%20animais%20%F0%9F%90%BE";

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText("21997111987");
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Falha ao copiar', err);
    }
  };

  return (
    <>
      {/* Doação e Contato */}
      <section id="doacao" className="py-20 bg-verdeConfianca text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 border-b border-verdeClaro pb-20">
          
          <div className="bg-white text-escuro p-8 md:p-12 rounded-2xl text-center shadow-lg border-b-4 border-dourado">
            <Heart className="w-8 h-8 text-dourado mx-auto mb-4" />
            <h2 className="font-titulo text-4xl mb-4">FAÇA SUA DOAÇÃO</h2>
            <p className="text-zinc-600 mb-8">Qualquer valor ajuda a salvar vidas.</p>
            
            <div className="bg-principal p-4 rounded-lg mb-6">
              <span className="block text-xs uppercase font-bold text-zinc-500 mb-1">PIX (CELULAR)</span>
              <span className="text-3xl font-bold font-titulo">{pixKey}</span>
            </div>

            <button 
              onClick={handleCopyPix}
              className="w-full bg-escuro hover:bg-zinc-800 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors mb-4"
            >
              {copied ? <CheckCircle className="w-5 h-5 text-verdeConfianca"/> : <Copy className="w-5 h-5"/>}
              {copied ? 'CHAVE COPIADA!' : 'COPIAR CHAVE PIX'}
            </button>
            <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
              Toda ajuda será usada com responsabilidade para alimentação, cuidados veterinários, higiene, estrutura e suporte aos animais.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="font-titulo text-5xl mb-4 text-dourado">QUER AJUDAR DE OUTRA FORMA?</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Fale conosco para combinar doações de itens, transporte, lar temporário, ajuda profissional ou participação em mutirões.
              </p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-white hover:bg-zinc-100 text-escuro px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2 w-fit">
              <MessageCircle className="w-5 h-5 text-verdeConfianca" />
              FALAR AGORA NO WHATSAPP
            </a>
          </div>

        </div>
      </section>

      {/* Transparência */}
      <section id="transparencia" className="py-20 bg-escuro text-zinc-400">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-titulo text-4xl text-white">TRANSPARÊNCIA</h2>
          <p>Este projeto é independente e feito por voluntários.</p>
          <p>Nosso compromisso é agir com respeito, responsabilidade e cuidado. Toda ajuda recebida será direcionada para necessidades reais do caso: alimentação, medicamentos, atendimentos veterinários, castrações, limpeza, transporte, melhorias no espaço e apoio à cuidadora.</p>
          <p>Sempre que possível, serão compartilhadas atualizações, fotos, notas e prestação de contas.</p>
          <p className="text-dourado font-bold text-xl mt-8">Confiança também se constrói com clareza.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-white border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Heart className="w-6 h-6 text-dourado" />
              <span className="font-titulo text-2xl tracking-wider">MISSÃO PATAS RJ</span>
            </div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">Amor que resgata. Ajuda que transforma.</p>
          </div>

          <div className="text-sm text-zinc-400 space-y-2">
            <p>Nosso propósito é garantir cuidado, dignidade e respeito aos animais e a quem cuida deles.</p>
            <p>Pix: {pixKey} | WhatsApp: {pixKey}</p>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            {/* SVG Nativo do Instagram no lugar do componente Lucide */}
            <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}