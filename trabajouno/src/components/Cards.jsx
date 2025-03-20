import Card from 'react-bootstrap/Card';
import "../Css/Cards.css";
function BasicExample(props) {
  //console.log(props);
  return (
    <>
    <Card id="color-card-1" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>#{props.informacion_a_mostrar[0].Id}</Card.Title>
        <Card.Text>
             Nombre: {props.informacion_a_mostrar[0].Nombre}
             <br />
             Apellido: {props.informacion_a_mostrar[0].Apellido}
             <br />
             Telefono: {props.informacion_a_mostrar[0].Telefono}
        </Card.Text>
      </Card.Body>
    </Card>

    <Card id="color-card-2" style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>#{props.informacion_a_mostrar[1].Id}</Card.Title>
    <Card.Text>
        Nombre: {props.informacion_a_mostrar[1].Nombre}
        <br />
        Apellido: {props.informacion_a_mostrar[1].Apellido}
        <br />
        Telefono: {props.informacion_a_mostrar[1].Telefono}
    </Card.Text>
    </Card.Body>
    </Card>
    </>
  );
  
}

export default BasicExample;