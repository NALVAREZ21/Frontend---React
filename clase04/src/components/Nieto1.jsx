import React from 'react'

const Nieto1 = (props) => {
  //console.log(props);
  return (
    <>
       <h2>Nombre En nieto1:{props.info_total.Nombre}</h2>
       <h2>Edad en nieto1: {props.info_total.Edad} años</h2>
       <h2>Genero en nieto1: {props.info_total.Genero}</h2>
    </>
  )
}

export default Nieto1
