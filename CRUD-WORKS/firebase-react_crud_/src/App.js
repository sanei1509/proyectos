import "./App.css";
import { useEffect, useState } from "react";
import app from "./firebase";
import AddEmpleado from "./components/AddEmpleado";

function App() {
  const [newEmpleado, setNewEmpleado] = useState({ name: "", apellido: "" });
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
        | <AddEmpleado setNewEmpleado={setNewEmpleado} />
        <div className="container">
          {/* HEADER DE LA TABLA */}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                {/* agrego un espacio */}
                <th>APELLIDO</th>
              </tr>
            </thead>
            {/* BODY DE LA TABLA */}
            <tbody>
              {empleados.map((empleado, index) => (
                <tr key={empleado.id}>
                  <td>{index + 1}</td>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.apellido}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
