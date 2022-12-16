import { useState } from "react";
import app from "firebase";

function AddEmpleado({ empleados, setEmpleados }) {
  // Funcion para agregar un empleado
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    apellido: "",
  });

  const AgregarEmpleado = async (e) => {
    e.preventDefault();

    // console.log(e.target.nombre.value);
    // console.log(e.target.apellido.value);
    await setNuevoEmpleado({
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
    });

    // try catch hacia firebase
    try {
      const nuevoEmpl = {
        nombre: nuevoEmpleado.nombre,
        apellido: nuevoEmpleado.apellido,
      };

      const db = app.firestore();

      let collection = null;

      if (nuevoEmpl.nombre === "" || nuevoEmpl.apellido === "") {
        alert("Debe completar todos los campos");
      } else {
        collection = db.collection("empleados").add(nuevoEmpl);
      }
      // ACTUALIZAMOS LA COLECCIÓN DE EMPLEADOS

      setEmpleados([...empleados, { ...nuevoEmpl, id: collection.id }]);
    } catch (error) {
      console.log(error + "al intentar agregar un empleado");
    }
  };
  return (
    <>
      <form onSubmit={AgregarEmpleado}>
        <h3>Agrega un Empleado</h3>
        <input id="nombre" type="text" placeholder="Nombre" />
        <br />
        <input id="apellido" type="text" placeholder="Apellido" />
        <br />
        <button type="submit">Agregar</button>
        <br />
      </form>
    </>
  );
}

export default AddEmpleado;
