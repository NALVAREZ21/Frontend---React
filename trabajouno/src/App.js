import './App.css';
import Home from "./pages/Home"
function App() {

  const contactos = 
  [
     {
        Id:1,
        Nombre:"maria",
        Apellido:"Dominguez",
        Telefono:3864546,
     },
     {
        Id:2,
        Nombre:"Guillermo",
        Apellido:"Suarez",
        Telefono:38135099,
     },
  ]
  return (
    <>
       <Home lista_contactos = {contactos}/>
    </>
  );
}

export default App;


