import { useState } from "react";

const PanelUsuario = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>Cerrar Sesión</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>Iniciar Sesión</button>
      )}
    </div>
  );
};

export default PanelUsuario;