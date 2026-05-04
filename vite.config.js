{/*TEXTO AQUI: Configuração do empacotador para otimização de cache e mitigação do alerta de tamanho de chunk*/}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'vendor-firebase';
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            if (id.includes('lucide')) return 'vendor-icons';
            return 'vendor-core';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800 // Eleva o limite de alerta para 800kB, adequado para aplicações com Firebase
  }
})