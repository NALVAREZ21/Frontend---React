import React from 'react'
import Main from "../components/Main"
const Home = (props) => {
  //console.log(props)
  return (
    <>
      <Main agenda = {props.lista_contactos}/>
    </>
  )
}

export default Home