import React from 'react'
import Cards from "../components/Cards"
const Main = (props) => {
  //console.log(props);
  return (
    <>
      <Cards informacion_a_mostrar = {props.agenda}/>
    </>
  )
}

export default Main