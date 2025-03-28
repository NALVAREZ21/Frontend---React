import React from 'react'
import Navbar from "./Navbar"
import {useState} from "react";
import {Button} from "react-bootstrap";
import "../Css/main.css"
const Main = (props) => {
  //console.log(props)
  //let resultado = useState();
  //console.log(resultado)
  
  let legajo = 100;
  legajo = 200;
  console.log(legajo)
  const [nombre,setNombre] = useState("Jose");
  const [numero,setNumero] = useState(0);
  const [apellido, setApellido] = useState("ruiz")
  const [count,setCount] = useState();
  const [tittle,setTittle] = useState(props.saludo);
  const [mostrar,setMostrar] = useState(false);

  function contador() {
     setCount(count + 1);
  }
  const aparecer_componente = () =>{
    setMostrar(!mostrar)
  }

  const cambiar_nombre = () =>{
     setNombre("maria");
  }

  const cambiar_numero = () =>{
    setNumero(numero + 10)
  }

  const cambiar_apellido = () =>{
    setApellido("domingues")
  }
  const ponerbuenasnoches = () =>{
    console.log("holaa")
    setTittle("hola,buenas noches") 
  }
  return (
    <>
      <button onClick={cambiar_nombre}>Cambiar</button>
      <h2>Mi nombre es: {nombre} </h2>
      <br />
      <button id='boton-numero' onClick={cambiar_numero}>Cambiar numero</button>
      <h3>Valor numero: {numero}</h3>
      <br />
      <button id="boton-apellido" onMouseEnter={cambiar_apellido}>Cambiar apellido</button>
      <h4>Mi apellido es: {apellido}</h4>
      <hr />
      <Button variant="success" onClick={contador}>+</Button>
      <h5>Valor: {count}</h5>
      <h6>{tittle}</h6>
      <button onClick={ponerbuenasnoches}>saludar</button>
      <br /><br />
      <button onClick={aparecer_componente} >{mostrar === true ? "ocultar" : "ver"}</button>
      {mostrar === true ? <Navbar/> : "no aparece"}
 
    </>
  )
}
export default Main