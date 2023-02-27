const contenidocentral = document.getElementById('container')
import { data } from './data.js'



let allevents = (data.events);

let container = "";


allevents.forEach(publish => {
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