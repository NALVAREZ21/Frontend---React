import './App.css';
import Home from "./pages/Home";
function App() {
  const nombre = "maria";
  
  const saludo = () =>{
     console.log("Hola,buenas noches!");
  } 

  const habilidades = ["rapido","inteligente","simpatica"];
 
  const Estudiante ={
    legajo:"1233",
    domicilio:"las heras 1111",
    facultad:"UTN FRT"
  } 
  return (
    <div className="App">
      <Home Nombre = {nombre} Saludo={saludo} Habilidad = {habilidades} Alumno = {Estudiante}  />
    </div>
  );
}
export default App;
