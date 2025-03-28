import './App.css';
import Home from "../../clase03/src/pages/Home"
function App() {
  const Alumno = {
    legajo:123,
    carrera:"Ingenieria en sistemas",
    año_ingreso:2022,
    sede:"Tucuman"
  }
  const Persona = {
    nombre:"jose",
    edad:44,
    domicilio:"las heras 1111"
  }
  
  const habilidades = ["rapido","simpatico"];
  let materias = ["programacion I"," base de datos II"," lesgilacion"];

  let titulo = "derechos reservados 2025"
  return (
    <>
       <Home frase={"hola mundo"} {...habilidades} {...Alumno}  mi_persona = {Persona} cursado = {materias} detalles_footer = {titulo} />
    </>
  );
}

export default App;
