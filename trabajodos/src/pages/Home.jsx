import React from 'react'
import Header from "../components/Header";
import Main from "../components/Main"
import Footer from "../components/Footer"

const Home = (props) => {
  console.log(props)
  return (
    <>
      <Header/>
      <Main detalles={props.datos}/>
      <Footer  data = {props.detalles_footer}/>
    </>
  )
}

export default Home