import React from 'react'
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx"
import Footer from "../components/Footer.jsx";
import Aside from '../components/Aside.jsx';

const Home = (props) => {
 console.log(props)
  return (
    <>
        <Header mi_frase = {props.frase}  informacion = {props.mi_persona}/>
        <Main detalles_cursada = {props.cursado} />
        <Footer info_footer = {props.detalles_footer} />
        {/* <Aside año={año_ingreso} leg={legajo} sed={sede} carr={carrera} /> */}
        <Aside {...props.habilidades}/>
    </>
  )
}

export default Home