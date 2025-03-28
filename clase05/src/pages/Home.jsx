import React from 'react'
import Main from "../components/Main"
const Home = (props) => {
  console.log(props)
  return (
    <>
       <Main saludo= {props.frase}/>
    </>
  )
}

export default Home