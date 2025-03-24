import React from 'react'
import Nieto1 from "../components/Nieto1";
import Nieto2 from "../components/Nieto2";
const Hijo1 = (props) => {
  //console.log(props)
  return (
    <>
       <Nieto1 info_total = {props.info} />
       <Nieto2 tittle ={props.new_titulo}/>
    </>
  )
}

export default Hijo1

