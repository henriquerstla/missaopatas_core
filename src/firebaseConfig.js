{/*TEXTO AQUI: Arquivo firebaseConfig.js atualizado integrando Analytics e a exportação do Firestore para os componentes React*/}
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD2l7z08As6f6i5nn5izkvsG7G3y7AgeMM",
  authDomain: "missaopatas-65a5c.firebaseapp.com",
  projectId: "missaopatas-65a5c",
  storageBucket: "missaopatas-65a5c.firebasestorage.app",
  messagingSenderId: "62283071376",
  appId: "1:62283071376:web:21af8b59884459a894fd15",
  measurementId: "G-40G0XGLG55"
};

const app = initializeApp(firebaseConfig);

{/*TEXTO AQUI: Exportação do Analytics com verificação de janela para evitar erros de renderização, e exportação vitalícia do banco de dados*/}
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);