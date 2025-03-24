import React from 'react'
import Hijo1 from "../components/Hijo1";
import Hijo2 from "../components/Hijo2"
const Padre = (props) => {
 // console.log(props.titulo);
  
  return (
    <>
       <Hijo1 info={props.informacion_nieto1} new_titulo = {props.titulo} />
       <Hijo2 arreglo = {props.arreglo}/>
    </>     
  )
}

export default Padre