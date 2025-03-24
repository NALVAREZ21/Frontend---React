import React from 'react'

const Nieto3 = (props) => {
  //console.log(props)
  return (
   <>
       <h3>En mi Nieto 3 recibi: </h3>       
       {props.arreglo.map(animal=> <li>{animal}</li>)}
    </>
  )
}

export default Nieto3;