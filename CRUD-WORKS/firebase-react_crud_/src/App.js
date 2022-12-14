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
        const arrayData = await data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(data.docs);
        console.log(arrayData);
        setEmpleados(arrayData);
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

        <div className="container">
          {empleados.map((empleado) => (
            <ol>
              <li key={empleado.id}>{empleado.nombre}</li>
            </ol>
          ))}
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default App;
