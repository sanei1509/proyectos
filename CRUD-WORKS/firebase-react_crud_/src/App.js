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
        console.log(arrayData);
        setEmpleados(arrayData);
      } catch (error) {
        console.log(error);
      }
    };

    getEmpleados();
  }, []);

  // FUNCIONES
  const editar = async (e) => {
    e.preventDefault();
    // comprobamos que no esten mandando el campo vacío
    if (!item.trim()) {
      console.log("vacío");
      return;
    }
    try {
      const db = app.firestore();
      // metodo update() de firebase
      await db.collection("empleados").doc(id).update({
        name: item,
      });
      const arrayEditado = empleados.map((empleado) =>
        // Si el id del empleado es igual al id que estamos editando, entonces retornamos un objeto con el id y el nuevo nombre, sino retornamos el objeto tal cual
        empleado.id === id ? { id: empleado.id, name: item } : empleado
      );

      setEmpleados(arrayEditado);
      setItem("");
      setEditando(false);
      setId("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD utilizando React y Firebase como conjunto de servicios</h1>
        | <AddEmpleado empleados={empleados} setEmpleados={setEmpleados} />
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
