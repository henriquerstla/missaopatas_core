{/*TEXTO AQUI: Componente Story.jsx atualizado com o nome Vitória*/}
import React from 'react';
import { Heart, CheckCircle2, PawPrint } from 'lucide-react';
import { Link } from 'react-scroll';
import velhinhaResgate from '../assets/velhinha-resgate.png';
import velhinhaTratamento from '../assets/velhinha-tratamento.png';

export default function Story() {
  return (
    <section className="py-16 bg-principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <PawPrint className="w-6 h-6 text-dourado" />
            <h2 className="font-titulo text-4xl md:text-5xl text-escuro">VITÓRIA</h2>
            <PawPrint className="w-6 h-6 text-dourado" />
          </div>
          <p className="text-zinc-600 font-medium tracking-wide uppercase text-sm">
            Uma história real de dor, resgate e esperança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
          
          <div className="relative rounded-lg overflow-hidden shadow-sm border border-zinc-200 bg-zinc-100 flex items-center justify-center">
            <div className="absolute top-4 left-0 bg-red-800 text-white px-4 py-1 font-bold text-xs md:text-sm z-10 rounded-r shadow-sm">
              ANTES – RESGATE
            </div>
            <img 
              src={velhinhaResgate} 
              alt="Resgate da Vitória" 
              className="w-full h-auto max-h-[500px] object-contain" 
            />
          </div>

          <div className="flex flex-col justify-between h-full py-4 space-y-6 text-sm md:text-base text-zinc-800 font-medium">
            <div className="space-y-3">
              <p>Ela foi encontrada assim.</p>
              <p>Frágil.</p>
              <p>Debilitada.</p>
              <p>Com um tumor.</p>
              <p>Sem assistência.</p>
              <p>Sem saber se teria tempo.</p>
            </div>
            <div className="border-l-2 border-zinc-300 pl-4 space-y-2 relative">
              <Heart className="w-8 h-8 text-red-500 font-light stroke-1 mb-2" />
              <p className="italic text-xl text-zinc-700" style={{ fontFamily: 'Georgia, serif' }}>
                Ela conseguiu.<br/>Os outros<br/>ainda estão lá.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-sm border border-zinc-200 bg-zinc-100 lg:mt-0 mt-8 flex items-center justify-center">
            <div className="absolute top-4 right-0 bg-verdeConfianca text-white px-4 py-1 font-bold text-xs md:text-sm z-10 rounded-l shadow-sm">
              DEPOIS – EM TRATAMENTO
            </div>
            <img 
              src={velhinhaTratamento} 
              alt="Tratamento da Vitória" 
              className="w-full h-auto max-h-[500px] object-contain" 
            />
          </div>

          <div className="py-4 space-y-6 text-sm md:text-base text-zinc-800 font-medium">
            <p>Foi levada imediatamente para atendimento.</p>
            <p>Foi operada.</p>
            <p className="flex items-center gap-2 font-bold text-verdeConfianca">
              <CheckCircle2 className="w-5 h-5 fill-verdeConfianca text-white" /> 
              O tumor não tem metástase.
            </p>
            <p className="pt-4">Agora, ela está na clínica.<br/>Sendo cuidada.</p>
            <p>Pela primeira vez.</p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <Link 
            to="area-ajuda" 
            smooth={true} 
            duration={600} 
            offset={-50}
            className="cursor-pointer inline-flex items-center justify-center bg-verdeConfianca hover:bg-verdeClaro text-white px-8 py-4 rounded font-bold transition-colors gap-2 text-sm uppercase"
          >
            <PawPrint className="w-5 h-5 fill-current" />
            AJUDAR OUTROS COMO A VITÓRIA
          </Link>
        </div>

      </div>
    </section>
  );
}