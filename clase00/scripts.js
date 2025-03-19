console.log("Anda bien")
const documento = "231313133";
console.log(typeof(documento))

let personas = ["jose","maria","gimena","emilia","marisol"];
let variado = ["marialena",12,240.33,'a',undefined];

console.log("Cantidad de nombres: " + personas.length);
for (let i=0;i<personas.length;i++)
{
    console.log(personas[i])
}

personas.forEach(persona => {
    console.log(persona)
});

personas.map(persona=>console.log(persona))
console.log(personas.sort())
console.log(personas.concat(variado))
console.log(personas.pop())

const saludo = ( ) =>{
   console.log("Hola")
}
saludo()
saludo()
saludo()
saludo()

ESTRUCTURAS SELECTIVAS

let edad_persona = 22;
if(edad_persona > 18)
{
  console.log("podes manejar")
}
else
{
  console.log("no puede conducir")
}


//operador ternario.
edad_persona > 18 ? console.log("podes manejar") : console.log("no podes manejar");


const persona = {
    nombre:"jose",
    edad:12,
    habilidades:["veloz","rapido"],
}

console.log(persona)
console.log(persona.habilidades[1])


let conversion = JSON.stringify(persona)
console.log(conversion)

const url = "https://jsonplaceholder.typicode.com/posts/1"
const obtener_data = ( ) =>{
   axios.get(url)
   .then(respuesta=>console.log(respuesta.data))
   .catch(error=>console.log(error))
}
obtener_data()


const saludar = () =>{
    alert("Hola,buenas noches");
}

const cambiarcolor = ( ) =>{
    document.getElementById("parrafo").style.backgroundColor = "rgb(255,0,0)"
    document.getElementById("parrafo").style.color = "rgb(0,255,0)";
}

document.getElementById("root").innerHTML+=`
   <div>
      <h2>Pagina creada</h2>
   </div>
`

