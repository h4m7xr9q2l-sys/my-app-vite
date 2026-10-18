import { useState } from "react";

const ejercicios = [
  {
    n: "01",
    titulo: "Hola Mundo",
    archivo: "HelloWorld.jsx",
    tag: "Componente",
    desc: "Primer componente: una función que devuelve un <h1> y se exporta con export default.",
  },
  {
    n: "02",
    titulo: "Fragment",
    archivo: "FirstComponent.jsx",
    tag: "JSX",
    desc: "Devuelve un h1 y un p sin un div extra, usando el fragment <> </>.",
  },
  {
    n: "03",
    titulo: "Operador ternario ?",
    archivo: "Renderizado.jsx",
    tag: "Renderizado condicional",
    desc: "PanelUsuario: muestra Cerrar Sesión o Iniciar Sesión según isLogged, con useState.",
  },
  {
    n: "04",
    titulo: "Operador AND &&",
    archivo: "Render2.jsx",
    tag: "Renderizado condicional",
    desc: "Mensajes: el aviso solo aparece si nuevosMensajes.length > 0.",
  },
  {
    n: "05",
    titulo: "Control de flujo con if",
    archivo: "Render2.jsx",
    tag: "Renderizado condicional",
    desc: "PerfilUsuario: if antes del return para los casos cargando, sin usuario (null) y con datos.",
  },
  {
    n: "06",
    titulo: "Funciones de renderizado",
    archivo: "Render2.jsx",
    tag: "Funciones",
    desc: "EstadoPedido: función auxiliar con switch que devuelve el JSX según el estado.",
  },
  {
    n: "07",
    titulo: "Método .map()",
    archivo: "Funciones.jsx",
    tag: "Listas",
    desc: "Convierte un arreglo de frutas en elementos <li>, cada uno con su key.",
  },
  {
    n: "08",
    titulo: "Estado con useState",
    archivo: "Contador.jsx",
    tag: "Hooks",
    desc: "El contador de esta página: count guarda el valor y setCount lo cambia.",
  },
  {
    n: "09",
    titulo: "CSS global",
    archivo: "styles.css",
    tag: "Estilos",
    desc: "Estilos de toda la app, importados una sola vez en main.jsx.",
  },
];

function Contador() {
  const [count, setCount] = useState(0);

  const sumar = () => setCount((c) => Math.min(c + 1, 9));
  const restar = () => setCount((c) => Math.max(c - 1, 0));
  const reiniciar = () => setCount(0);

  return (
    <main className="page">
      <section className="hero">
        <span className="chip">React + Vite</span>
        <h1 className="nombre">VIDAL CRUZ</h1>
        <p className="sub">
          Edit <code>src/Contador.jsx</code> and save to test HMR
        </p>

        <div className="botones">
          <button
            className={count === 9 ? "count-btn max" : "count-btn"}
            onClick={sumar}
          >
            Count is {count}
          </button>
          <button className="reset-btn" onClick={restar}>
            Restar
          </button>
          <button className="reset-btn" onClick={reiniciar}>
            Reiniciar
          </button>
        </div>

        {count === 9 && <p className="aviso">Llegaste al máximo (9)</p>}
      </section>

      <section className="docs">
        <h2>Ejercicios realizados</h2>
        <p className="docs-sub">Todo lo que vimos en clase de React</p>

        <div className="grid">
          {ejercicios.map((e) => (
            <article className="card" key={e.n}>
              <div className="card-top">
                <span className="num">{e.n}</span>
                <span className="tag">{e.tag}</span>
              </div>
              <h3>{e.titulo}</h3>
              <p>{e.desc}</p>
              <code className="archivo">{e.archivo}</code>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contador;