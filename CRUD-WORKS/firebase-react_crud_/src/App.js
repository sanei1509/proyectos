import "./App.css";
import { useEffect, useState } from "react";
import app from "./firebase";

function App() {
  const [empleados, setEmpleados] = useState([]);

  // useEffects' callback function
  useEffect(() => {
    const getEmpleados = async () => {
      try {
        const db = app.firestore();
        const data = await db.collection("empleados").get();
        console.log(data.docs);
      } catch (error) {
        console.log(error);
      }
    };

    getEmpleados();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD utilizando React y Firebase como conjunto de servicios</h1>
      </header>
      <main></main>
    </div>
  );
}

export default App;
