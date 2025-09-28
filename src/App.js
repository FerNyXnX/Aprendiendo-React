import React, { useState, useEffect } from 'react';
import FraseActual from './components/FraseActual';
import AgregarFrase from './components/AgregarFrase';
import ContadorFrases from './components/ContadorFrase';
import Bienvenida from './components/Bienvenida';

const frasesIniciales = [
  "Sigue adelante, no te detengas.",
  "Cada día es una nueva oportunidad.",
  "El éxito es la suma de pequeños esfuerzos.",
  "Cree en ti mismo."
];

function App() {
  const [frases, setFrases] = useState(frasesIniciales);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual(prev => (prev + 1) % frases.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [frases.length]);

  const agregarFrase = (nuevaFrase) => {
    setFrases([...frases, nuevaFrase]);
  };

  return (
    <div className="app">
      <Bienvenida />
      <FraseActual frase={frases[indiceActual]} />
      <AgregarFrase onAgregar={agregarFrase} />
      <ContadorFrases total={frases.length} />
    </div>
  );
}

export default App;