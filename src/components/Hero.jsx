{/*TEXTO AQUI: Componente Hero.jsx atualizado com o nome Vitória*/}
import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import velhinhaCapa from '../assets/velhinha-capa.png';

export default function Hero() {
  const whatsappLink = "https://wa.me/5521997111987?text=Ol%C3%A1%2C%20quero%20ajudar%20no%20caso%20dos%20animais%20%F0%9F%90%BE";

  return (
    <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden border-b-4 border-divisor">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 w-full md:w-2/3 h-full"></div>
        <img 
          src={velhinhaCapa} 
          alt="Vitória" 
          className="absolute right-0 top-0 w-full md:w-3/4 h-full object-cover object-center z-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-20">
        <div className="max-w-2xl space-y-6">
          
          <div className="mb-12">
            <h1 className="font-titulo text-6xl md:text-[5rem] text-white leading-none tracking-tight">
              ELA CONSEGUIU.<br/>
              <span className="text-dourado">OS OUTROS AINDA ESTÃO LÁ.</span>
            </h1>
          </div>

          <div className="space-y-2 text-white text-lg md:text-xl font-light">
            <p className="font-semibold">Essa é a Vitória.</p>
            <p>Resgatada na <span className="text-dourado font-medium">quarta-feira, 29/04/2026</span>.</p>
            <p>Ela estava assim. Frágil. Com dor. Sem esperança.</p>
            <p className="font-medium pt-2">Agora, ela tem uma chance.</p>
            <p>Mas muitos ainda esperam por ajuda.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link 
              to="area-ajuda" 
              smooth={true} 
              duration={600} 
              offset={-50}
              className="cursor-pointer bg-dourado hover:bg-yellow-500 text-escuro px-8 py-4 font-bold transition-colors flex items-center justify-center gap-2 text-sm md:text-base border border-transparent"
            >
              <Heart className="w-5 h-5 fill-current" />
              AJUDAR AGORA
            </Link>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-transparent border border-white hover:bg-white hover:text-escuro text-white px-8 py-4 font-bold transition-all flex items-center justify-center gap-2 text-sm md:text-base">
              <MessageCircle className="w-5 h-5" />
              FALAR NO WHATSAPP
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}