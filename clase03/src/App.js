import './App.css';
import Home from "../../clase03/src/pages/Home"
function App() {

  const Persona = {
    nombre:"jose",
    edad:44,
    domicilio:"las heras 1111"
  }

  let materias = ["programacion I"," base de datos II"," lesgilacion"];

  let titulo = "derechos reservados 2025"
  return (
    <>
       <Home mi_persona = {Persona} cursado = {materias} detalles_footer = {titulo} />
    </>
  );
}

export default App;
