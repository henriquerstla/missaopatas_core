import React from 'react';
import { ShieldCheck, Package, Stethoscope, Hammer, Home, Share2, AlertCircle } from 'lucide-react';

export default function MissionAndHelp() {
  const helps = [
    { icon: <Package className="w-6 h-6 text-verdeConfianca"/>, title: "Doação de ração", desc: "Alimentação é urgência diária. Precisamos de ração para cães adultos, filhotes e gatos." },
    { icon: <Stethoscope className="w-6 h-6 text-verdeConfianca"/>, title: "Apoio a tratamentos", desc: "Consultas, exames, medicamentos, cirurgias, vermífugos e controle de pulgas/carrapatos." },
    { icon: <Hammer className="w-6 h-6 text-verdeConfianca"/>, title: "Melhorias no espaço", desc: "Precisamos de ajuda com água, limpeza, divisórias, cercas, organização e estrutura." },
    { icon: <Home className="w-6 h-6 text-verdeConfianca"/>, title: "Lar temporário", desc: "Um lar temporário pode mudar o destino de um animal enquanto buscamos adoção." },
    { icon: <Share2 className="w-6 h-6 text-verdeConfianca"/>, title: "Compartilhamento", desc: "Compartilhar também salva. Quanto mais pessoas souberem, mais ajuda chega." }
  ];

  return (
    <section id="missao" className="py-20 bg-offWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Nossa Missão */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-titulo text-5xl text-escuro">NOSSA MISSÃO</h2>
          <div className="text-lg text-zinc-700 space-y-4">
            <p>A Missão Patas RJ nasceu para organizar ajuda responsável para animais em situação de vulnerabilidade e para a cuidadora que, mesmo sem recursos, não desistiu deles.</p>
            <p>O objetivo não é expor, julgar ou retirar animais sem critério.</p>
            <p>O objetivo é construir uma rede de apoio para garantir cuidado, castração, tratamento, alimentação, limpeza, estrutura mínima e adoções responsáveis.</p>
          </div>
          <div className="inline-flex items-center gap-3 bg-verdeConfianca/10 text-verdeConfianca px-6 py-4 rounded-lg mt-6">
            <ShieldCheck className="w-6 h-6" />
            <p className="font-bold text-xl">Ajudar com responsabilidade também é proteger.</p>
          </div>
        </div>

        {/* Como Ajudar */}
        <div id="ajudar">
          <h2 className="font-titulo text-5xl text-escuro text-center mb-12">COMO VOCÊ PODE AJUDAR</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helps.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-divisor shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-principal w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg text-escuro mb-2">{item.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgências Atuais */}
        <div className="bg-principal border border-dourado/30 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-3 mb-4 text-dourado">
                <AlertCircle className="w-8 h-8" />
                <h2 className="font-titulo text-4xl text-escuro m-0">URGÊNCIAS ATUAIS</h2>
              </div>
              <p className="font-bold text-escuro bg-dourado/20 p-4 rounded-lg text-sm">
                Prioridade imediata: água, ração, limpeza, controle de pulgas e cuidados veterinários.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-zinc-700 text-sm">
              <ul className="space-y-3">
                <li>• Água / galões / solução hidráulica</li>
                <li>• Ração para cães e gatos</li>
                <li>• Sachês</li>
                <li>• Produtos de limpeza e Sacos de lixo</li>
                <li>• Luvas</li>
                <li>• Transporte solidário</li>
                <li>• Divisórias e melhorias no espaço</li>
              </ul>
              <ul className="space-y-3">
                <li>• Shampoo terapêutico</li>
                <li>• Remédio de pulga e carrapato</li>
                <li>• Vermífugos</li>
                <li>• Medicamentos para pele</li>
                <li>• Castrações</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}