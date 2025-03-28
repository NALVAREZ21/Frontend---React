import './App.css';
import Home from "./pages/Home.jsx";
function App() {

  const Informacion_Personal = {
     Nombre:"viviana",
     Apellido:"ruiz",
     carrera: "Tecnicatura en programacion",
     provincia: "Tucuman",
     año_ingreso:2022,
  }
  const info_footer = "Todos los derechos reservados 2025"
  return (
    <>
      <Home datos = {Informacion_Personal}  detalles_footer = {info_footer} />
    </>
  );
}

export default App;

