import React from 'react';
import { Link } from 'react-scroll';
import { Heart, Menu } from 'lucide-react';

export default function Header() {
  const whatsappLink = "https://wa.me/5521997111987?text=Ol%C3%A1%2C%20quero%20ajudar%20no%20caso%20dos%20animais%20%F0%9F%90%BE";

  return (
    <header className="fixed w-full z-50 bg-escuro text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-dourado" />
            <div className="flex flex-col">
              <span className="font-titulo text-2xl tracking-wider leading-none text-white">MISSÃO PATAS RJ</span>
              <span className="text-[10px] text-gray-300 uppercase tracking-widest">Amor que resgata. Ajuda que transforma.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <Link to="missao" smooth={true} className="cursor-pointer hover:text-dourado transition-colors">Nossa missão</Link>
            <Link to="historia" smooth={true} className="cursor-pointer hover:text-dourado transition-colors">A Velhinha</Link>
            <Link to="ajudar" smooth={true} className="cursor-pointer hover:text-dourado transition-colors">Como ajudar</Link>
            <Link to="transparencia" smooth={true} className="cursor-pointer hover:text-dourado transition-colors">Transparência</Link>
            
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-verdeConfianca hover:bg-verdeClaro text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2">
              Falar no WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button - Simplificado para o escopo */}
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}