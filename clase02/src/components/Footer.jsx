import React from 'react'
import "../Css/footer.css"
const Footer = (props) => {
  //console.log(props)
  return (
    <>
      <h6 id='titulo-footer'>SOY UN FOOTER</h6>
      <h4>{props.Habilidad.map(habi=><li>{habi}</li>)}</h4>
    </>
  )
}

export default Footer

