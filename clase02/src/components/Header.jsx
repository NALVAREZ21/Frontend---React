import React from 'react'
import "../Css/header.css"
const Header = (props) => {
    //console.log(props)
    return(
    <>
       <h1 id='titulo-header'>SOY UN HEADER</h1>
       <h2>Mi nombre es {props.Nombre} </h2>
       <br />
       <p>La facultad queda en: {props.Alumno.domicilio} </p>
       <p>Mi legajo es {props.Alumno.legajo}</p>
       <p>Mi facultad se llama {props.Alumno.facultad}</p>


    </>
  )
}

export default Header