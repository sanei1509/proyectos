import "./Basic.css";
import { EntradaTexto, Lenguajes, Traduccion } from "./components";
import { useState } from "react";

function App() {
  // Estado del lenguaje del que va a depender la traducción
  const [lenguaje, setLenguaje] = useState("es");
  // captura el texto que se escribe en el input y lo guarda en el estado
  const [contenido, setContenido] = useState("");

  return (
    <div className="App">
      <h1>Traductor de Texto</h1>

      <main className="App-header">
        <EntradaTexto onChange={setContenido} />
        <br />
        <Lenguajes
          valorActualLenguaje={lenguaje}
          controladorLenguaje={setLenguaje}
        />
        <br />
        <Traduccion contenido={contenido} lenguaje={lenguaje} />
      </main>
    </div>
  );
}

export default App;
