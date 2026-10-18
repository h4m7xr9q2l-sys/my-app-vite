const Mensajes = ({ nuevosMensajes }) => {
  return (
    <div>
      <h1>Buzón de entrada</h1>
      {/* Solo se muestra si hay mensajes */}
      {nuevosMensajes.length > 0 && (
        <span className="badge">Tienes mensajes sin leer</span>
      )}
    </div>
  );
};

const PerfilUsuario = ({ usuario, isLoading }) => {
  // 1. Si está cargando, devolvemos esto y terminamos
  if (isLoading) {
    return <div>Cargando perfil ...</div>;
  }

  // 2. Si no hay usuario (es null), no se pinta nada
  if (!usuario) {
    return null;
  }

  // 3. Si llegamos aquí, tenemos datos y no estamos cargando
  return (
    <div className="perfil">
      <h1>{usuario.nombre}</h1>
      <p>{usuario.bio}</p>
    </div>
  );
};

const EstadoPedido = ({ estado }) => {
  const renderIcono = () => {
    switch (estado) {
      case "enviado":
        return <h1>Enviado</h1>;
      case "entregado":
        return <h1>Entregado</h1>;
      case "cancelado":
        return <h1>Cancelado</h1>;
      default:
        return <h1>Desconocido</h1>;
    }
  };

  return (
    <div className="tarjeta-pedido">
      {renderIcono()}
      <span>Estado: {estado}</span>
    </div>
  );
};

const Render2 = () => {
  return (
    <div>
      <Mensajes nuevosMensajes={["Hola", "Reunión mañana"]} />
      <PerfilUsuario
        usuario={{ nombre: "Vidal", bio: "Estudiante de Ingeniería de Sistemas" }}
        isLoading={false}
      />
      <EstadoPedido estado="enviado" />
    </div>
  );
};

export default Render2;