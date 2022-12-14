import "./Basic.css";
import { EntradaTexto, Lenguajes, Traduccion } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Traductor de Texto</h1>

      <main className="App-header">
        <EntradaTexto />
        <br />
        <Lenguajes />
        <br />
        <Traduccion />
      </main>
    </div>
  );
}

export default App;
