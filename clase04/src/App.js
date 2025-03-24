import './App.css';
import Padre from "./pages/Padre"
function App() {
  const nieto1 = {
    Nombre:"Tamara",
    Edad:44,
    Genero:"Femenino",
  }

  const mascotas = ["garfield","otto","firulais"];
  return (
    <>
        <Padre informacion_nieto1={nieto1} arreglo ={mascotas} titulo={"Buenas noches,hoy es 2025-03-23"}/>
    </>
  );
}

export default App;
