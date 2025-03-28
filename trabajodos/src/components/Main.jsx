import React from 'react'
import "../css/main.css"
const Main = (props) => {
  //console.log(props)
  return (
    <>
      <div id='principal-main'>
        <p>Mi nombre completo es {props.detalles.Nombre} {props.detalles.Apellido} y actualmente estoy cursando  
            {props.detalles.carrera} en la provincia de {props.detalles.provincia} desde el año {props.detalles.año_ingreso}
        </p>
        <img src="https://th.bing.com/th/id/OIP.uCGyhpzCD2fsVNiOt87XRwHaLm?rs=1&pid=ImgDetMain" width={140} height={30} alt=""/>
      </div>
     
    </>
  )
}

export default Main