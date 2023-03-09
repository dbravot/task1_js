const contenidocentral = document.getElementById('container')
import { data } from './data.js'



let allevents = (data.events);

let container = "";

let fecha = new Date ()

let pasado = allevents.filter (all => {
  let eventoPasado = new Date (all.date);
  return fecha > eventoPasado
  
  
 });

  


pasado.forEach(publish => {
  container += `<div class="card">
    <figure>
      <img src= ${publish.image} alt=${publish.name}>
      </figure>
      
        <h3> ${publish.name}</h3>
        <p> ${publish.description}</p>
     
      <div class="price"> 
      <h4> price $ ${publish.price} </h4>
      <a  href="../Details.html?id= ${publish._id}" class="card">Ver más</a>
                </div> 
                </div>
    
  </div>`;
});



contenidocentral.innerHTML = container;