{/*TEXTO AQUI: App.jsx com controle de acesso por senha na mutacao de estado*/}
import React, { useState } from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Reality from './components/Reality';
import Raffle from './components/Raffle';
import BottomSection from './components/BottomSection';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  {/*TEXTO AQUI: Funcao manipuladora do evento que pausa a execucao e exige a credencial*/}
  const handleAdminAccess = () => {
    const password = window.prompt("Digite a senha de acesso administrativo:");
    
    if (password === "030813") {
      setIsAdminView(true);
    } else if (password !== null) {
      alert("Acesso negado: Senha incorreta.");
    }
  };

  if (isAdminView) {
    return <AdminPanel onLogout={() => setIsAdminView(false)} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-escuro">
      <main>
        <Hero />
        <Story />
        <Reality />
        <Raffle />
        <BottomSection />
      </main>

      <button 
        onClick={handleAdminAccess}
        className="fixed bottom-4 left-4 bg-escuro text-white border border-zinc-700 px-4 py-2 rounded shadow-lg text-xs font-bold z-50 hover:bg-zinc-800 transition-colors opacity-50 hover:opacity-100"
      >
        ACESSAR ADMIN DEV
      </button>
    </div>
  );
}

export default App;