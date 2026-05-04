import React from 'react';
import { Droplet, AlertTriangle, Home, PawPrint } from 'lucide-react';
import realidadeCorredor from '../assets/realidade-corredor.png';
import realidadePneus from '../assets/realidade-pneus.png';
import realidadeChao from '../assets/realidade-chao.png';
import realidadeQuintal from '../assets/realidade-quintal.png';

export default function Reality() {
  const images = [
    { src: realidadeCorredor, label: "Sem água adequada", icon: Droplet },
    { src: realidadePneus, label: "Ambiente insalubre", icon: AlertTriangle },
    { src: realidadeChao, label: "Sem estrutura mínima", icon: Home },
    { src: realidadeQuintal, label: "Muitos animais sem castração", icon: PawPrint }
  ];

  return (
    <section className="py-16 bg-[#0f0f0f] text-white border-y-2 border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-titulo text-3xl md:text-4xl tracking-wide uppercase">
            A REALIDADE QUE <span className="text-dourado">NÃO PODE SER IGNORADA</span>
          </h2>
          <p className="text-zinc-400 font-medium mt-1">Esse é o local onde muitos animais ainda vivem.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {images.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col gap-3">
                <div className="aspect-video rounded overflow-hidden">
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-center gap-2 text-dourado text-sm font-semibold">
                  <Icon className="w-4 h-4" />
                  <span className="text-zinc-200">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-2">
          <p className="text-base text-zinc-300 font-medium">
            Uma senhora cuida deles como pode. Sozinha. Sem recursos.
          </p>
          <h3 className="font-titulo text-2xl md:text-3xl text-dourado tracking-wide uppercase">
            NÃO É ABANDONO. É FALTA DE SUPORTE.
          </h3>
        </div>

      </div>
    </section>
  );
}