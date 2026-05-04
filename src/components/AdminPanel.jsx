{/*TEXTO AQUI: Componente AdminPanel.jsx com roteamento interno de módulos*/}
import React, { useState } from 'react';
import { LayoutDashboard, Ticket, Users, Settings, LogOut, Menu } from 'lucide-react';
import AdminRaffle from './AdminRaffle';

export default function AdminPanel({ onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'rifas', label: 'Gestão de Rifas', icon: Ticket },
    { id: 'doadores', label: 'Doadores', icon: Users },
    { id: 'config', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 flex font-texto text-escuro">
      
      {/* Sidebar (Menu Lateral) */}
      <aside className={`bg-escuro text-zinc-300 w-64 flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'ml-0' : '-ml-64'}`}>
        <div className="h-20 flex items-center justify-center border-b border-zinc-800">
          <span className="font-titulo text-2xl text-white tracking-widest">ADMIN APP</span>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium text-sm ${
                  isActive ? 'bg-verdeConfianca text-white' : 'hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content (Área Central) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded hover:bg-zinc-100 transition-colors">
              <Menu className="w-6 h-6 text-zinc-600" />
            </button>
            <h2 className="font-titulo text-2xl text-escuro hidden sm:block">
              {menuItems.find(m => m.id === activeTab)?.label}
            </h2>
          </div>
          
          <button onClick={onLogout} className="flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors px-4 py-2 rounded hover:bg-red-50">
            <LogOut className="w-4 h-4" />
            SAIR DO PAINEL
          </button>
        </header>

        {/* Dynamic Area (Onde os módulos serão renderizados) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {activeTab === 'rifas' ? (
            <AdminRaffle />
          ) : (
            <div className="bg-white border border-zinc-200 rounded-xl p-8 shadow-sm min-h-[500px] flex items-center justify-center">
              <p className="text-zinc-400 font-medium">O módulo "{menuItems.find(m => m.id === activeTab)?.label}" será renderizado aqui.</p>
            </div>
          )}
        </main>
      </div>

    </div>
  );
}