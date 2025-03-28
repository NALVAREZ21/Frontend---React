import React from 'react'
import "../css/footer.css"
const Footer = (props) => { 
  console.log(props)
  return (
    <>
      <h3 id='derechos'>{props.data}</h3>
    </>
  )
}

export default Footer