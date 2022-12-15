import { useState } from "react";

function AddEmpleado() {
  // Funcion para agregar un empleado
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    apellido: "",
  });

  const handleName = (e) => {
    // console.log(e.target.name, e.target.value);
    // setNuevoEmpleado({ ...nuevoEmpleado, [e.target.name]: e.target.value });
    // console.log(nuevoEmpleado);
  };

  const AgregarEmpleado = async (e) => {
    e.preventDefault();

    console.log(e.target.nombre.value);
    console.log(e.target.apellido.value);
    await setNuevoEmpleado({
      ...nuevoEmpleado,
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
    });

    await console.log(nuevoEmpleado);
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
