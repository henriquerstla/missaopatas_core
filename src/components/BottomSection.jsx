{/*TEXTO AQUI: Componente BottomSection atualizado com bypass de SVG nativo para contornar falha de módulo do Lucide React*/}
import React, { useState } from 'react';
import { PawPrint, Heart, MessageCircle, Copy, CheckCircle, Package, Stethoscope, Hammer, Home, Share2, ShoppingBag, Droplet, Shirt, Sparkles } from 'lucide-react';

export default function BottomSection() {
  const pixKey = "21 99711-1987";
  const [copied, setCopied] = useState(false);
  const whatsappLink = "https://wa.me/5521997111987?text=Ol%C3%A1%2C%20quero%20ajudar%20no%20caso%20dos%20animais%20%F0%9F%90%BE";

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText("21997111987");
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Falha', err);
    }
  };

  return (
    <>
      <section id="area-ajuda" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-escuro items-stretch">
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 font-bold text-lg mb-4">
                <PawPrint className="w-6 h-6 text-dourado" /> COMO VOCÊ PODE AJUDAR
              </div>
              <ul className="text-sm font-medium space-y-3 text-left inline-block w-fit mx-auto">
                <li className="flex items-start gap-3"><Package className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Doação de ração</span></li>
                <li className="flex items-start gap-3"><Stethoscope className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Apoio a tratamentos e cirurgias</span></li>
                <li className="flex items-start gap-3"><Hammer className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Melhorias no espaço</span></li>
                <li className="flex items-start gap-3"><Home className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Lar temporário</span></li>
                <li className="flex items-start gap-3"><ShoppingBag className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Doação de mantimentos para a cuidadora</span></li>
                <li className="flex items-start gap-3"><Droplet className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Doação de itens de higiene pessoal</span></li>
                <li className="flex items-start gap-3"><Shirt className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Doação de vestuário, toalhas e roupas de cama</span></li>
                <li className="flex items-start gap-3"><Sparkles className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Doação de produtos de limpeza</span></li>
                <li className="flex items-start gap-3"><Share2 className="w-5 h-5 shrink-0 text-verdeConfianca"/> <span>Compartilhamento</span></li>
              </ul>
              <p className="text-xs text-zinc-600 mt-4 pt-4 border-t border-zinc-200">Toda ajuda faz diferença na vida deles.</p>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-zinc-100 flex flex-col justify-between">
              <div className="flex items-center justify-center gap-2 font-bold text-lg">
                <Heart className="w-6 h-6 text-zinc-400" /> FAÇA SUA DOAÇÃO
              </div>
              <p className="text-sm text-zinc-700">Qualquer valor ajuda a salvar vidas.</p>
              <div className="my-auto">
                <p className="text-xs uppercase text-zinc-500 font-bold mb-1">PIX (celular)</p>
                <p className="text-3xl font-bold font-titulo tracking-wide">{pixKey}</p>
              </div>
              <button onClick={handleCopyPix} className="w-full bg-[#1e3b20] hover:bg-verdeConfianca text-white py-3 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'COPIADA' : 'COPIAR CHAVE PIX'}
              </button>
              <p className="text-sm font-medium flex items-center justify-center gap-1">Muito obrigado! <Heart className="w-4 h-4 text-red-500" /></p>
            </div>

            <div className="space-y-4 flex flex-col justify-between p-6">
              <div className="flex items-center justify-center gap-2 font-bold text-lg">
                <MessageCircle className="w-6 h-6 text-zinc-400" /> FALAR NO WHATSAPP
              </div>
              <p className="text-sm text-zinc-700">Tire dúvidas ou veja como ajudar.</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full bg-[#1e3b20] hover:bg-verdeConfianca text-white py-3 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors mt-auto mb-4">
                <MessageCircle className="w-4 h-4" /> FALAR AGORA
              </a>
              <p className="text-xs text-zinc-600 border-t border-zinc-200 pt-4">Sua mensagem faz a diferença.<br/>Vamos juntos por eles!</p>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-black py-8 text-zinc-400 border-t-2 border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left text-sm">
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <PawPrint className="w-10 h-10 text-dourado fill-transparent stroke-[1.5]" />
            <div className="flex flex-col">
              <span className="font-titulo text-2xl text-white leading-none">MISSÃO</span>
              <span className="font-titulo text-2xl text-white leading-none">PATAS RJ</span>
              <span className="text-[10px] tracking-widest mt-1">Amor que resgata.<br/>Ajuda que transforma.</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-xs space-y-1">
            <p>Nosso propósito é garantir cuidado, dignidade</p>
            <p>e respeito aos animais e a quem cuida deles.</p>
            <p>Toda ajuda, de qualquer forma, muda vidas.</p>
            <Heart className="w-3 h-3 text-dourado mt-1" />
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-xs font-bold text-white tracking-widest">SIGA E COMPARTILHE</p>
            
            <div className="flex flex-col items-center md:items-end gap-3">
              <a href="https://www.facebook.com/brunnadepatasdadas" target="_blank" rel="noreferrer" className="text-white hover:text-dourado transition-colors flex items-center gap-2">
                {/*TEXTO AQUI: Injeção de SVG direto para o Facebook*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="font-semibold text-sm">/brunnadepatasdadas</span>
              </a>

              <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
                <a href="https://instagram.com/dendeosrd" target="_blank" rel="noreferrer" className="text-white hover:text-dourado transition-colors flex items-center gap-2">
                  {/*TEXTO AQUI: Injeção de SVG direto para o Instagram*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="font-semibold text-sm">@dendeosrd</span>
                </a>
                
                <a href="https://www.instagram.com/guga_ungerer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-white hover:text-dourado transition-colors flex items-center gap-2">
                  {/*TEXTO AQUI: Injeção de SVG direto para o Instagram*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="font-semibold text-sm">@guga_ungerer</span>
                </a>

                <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-white hover:text-dourado transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}