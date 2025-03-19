import React from 'react'
import Header from '../components/Header'
import Main from "../components/Main.jsx";
import Footer from '../components/Footer.jsx';
const Home = (props) => {
  //console.log(props.Nombre);
props.Saludo()
  return (
    <>
      <Header Nombre={props.Nombre} Alumno={props.Alumno}/>
      <Main Saludo = {props.Saludo} />
      <Footer Habilidad={props.Habilidad}/>
    </>
  )
}
export default Home