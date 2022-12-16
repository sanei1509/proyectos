import { genericData } from "./MockInfo/genericData.js";
import GenericList from "./componentsPrueba/GenericList";

function AppPruebas() {
  return (
    <>
      <h1>Probando cositas de react</h1>
      <GenericList collection={genericData} />
    </>
  );
}

export default AppPruebas;
