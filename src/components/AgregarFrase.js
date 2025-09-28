import { useState } from 'react';

function AgregarFrase({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onAgregar(texto.trim());
      setTexto('');
    }
  };

  return (
    <form className="agregar-frase" onSubmit={manejarEnvio}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Agrega tu frase"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AgregarFrase;