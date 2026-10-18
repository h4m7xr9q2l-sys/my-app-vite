import React from "react";
import ReactDOM from "react-dom/client";
import Contador from "./Contador";
// importar css
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>,
);