import React from 'react'
import {useState} from "react";
import "../Css/main.css"
const Main = () => {
  // let resultado = useState();
  // console.log(resultado)
  const [nombre,setNombre] = useState("Jose");
  const [numero,setNumero] = useState(0);
  const [apellido, setApellido] = useState("ruiz")

  const cambiar_nombre = () =>{
     setNombre("maria");
  }

  const cambiar_numero = () =>{
    setNumero(numero + 10)
  }

  const cambiar_apellido = () =>{
    setApellido("domingues")
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
    </>
  )
}
export default Main