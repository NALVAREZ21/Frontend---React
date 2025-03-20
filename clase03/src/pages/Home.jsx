import React from 'react'
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx"
import Footer from "../components/Footer.jsx";
const Home = (props) => {
 //console.log(props)
  return (
    <>
        <Header  informacion = {props.mi_persona}/>
        <Main detalles_cursada = {props.cursado} />
        <Footer info_footer = {props.detalles_footer} />
    </>
  )
}

export default Home