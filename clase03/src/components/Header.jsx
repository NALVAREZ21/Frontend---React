import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <>
      <ul>
        <li>Nombre: {props.informacion.nombre}</li>
        <li>Domicilio: {props.informacion.domicilio}</li>
        <li>Edad: {props.informacion.edad} años</li>
        <br/>
        <li>{props.mi_frase}</li>
      </ul>
    </>
  )
}

export default Header