import React from 'react'
import "../Css/main.css"
const Main = (props) => {
  //props.Saludo();
  const Persona = {
     apellido:"diaz",
     edad:12,
     altura:1.66,
     estadocivil: false,
  }

  return (
    <>
       <h3 id='titulo-main'>SOY UN MAIN</h3>
       <ul>
        <li>Apellido de persona 1 {Persona.apellido}</li>
        <li>Edad de mi persona 1{Persona.edad}</li>
        <li>Altura de mi persona 1{Persona.altura}</li>
        <li>Estado de mi persona 1{Persona.estadocivil == true ? "esta casada" : "esta soltero"}</li>
       </ul>
    </>
  )
}

export default Main