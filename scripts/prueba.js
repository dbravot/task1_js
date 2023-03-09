const contenidocentral = document.getElementById('container')
import { data } from './data.js'



let allevents = (data.events);

let container = "";

let fecha = new Date ()

let pasado = allevents.filter (all => {
  let eventoPasado = new Date (all.date);
  return fecha < eventoPasado
  
  
 });
 console.log(pasado);
  


pasado.forEach(publish => {
  container += `<div class="card">
    <figure>
      <img src= ${publish.image} alt=${publish.name}>
      </figure>
      
        <h3> ${publish.name}</h3>
        <p> ${publish.description}</p>
     
      <div class="price"> 
      <h4> price $ ${publish.price} </h4>
      <a href="#">Ver más</a>
                </div> 
                </div>
    
  </div>`;
});



contenidocentral.innerHTML = container;

/* console.log(container) */

/* let conteneder = document.createElement("div")
conteneder.className = "container" */

/* allevents.forEach(espectaculo => {
  let div = document.createElement("div")
  div.className = "card"
  div.innerHTML =  <div class ="card">
    <img src = "${espectaculo.image}" >
    <div class ="card-body">

     <h5 class ="card-title"> ${espectaculo.name}   </h5>
    </div>
    </div>
    
    
conteneder.appendChild(div)

  });
  contenidocentral.appendChild(conteneder) */


/* allevents.forEach(defe => {
  let contenedor = document.createElement('div')
 contenedor.classList.add ('card')
  contenedor.innerHTML =  (defe.name)
  
  <h3> ${ defe.category } </h3>
  
  contenidocentral.appendChild(contenedor)
 
  
}) */


