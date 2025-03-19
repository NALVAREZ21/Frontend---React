import React from "react";
import "./Header.css";
function Header ()
{
   const suma = 5+2;
   console.log("Hola mundo")
   return(
    <>
      <h2>REACT 2025</h2>
      <h3>CLASE 01 - 1° COMPONENTE</h3>
      <h4>SUMA: {suma} </h4>
    </>
   )
}
export default Header;
