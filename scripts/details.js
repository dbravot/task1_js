
const queryString = location.search
import { data } from './data.js'
let allevents = (data.events)

const params = new URLSearchParams(queryString)

const id = params.get("id")



const div = document.querySelector("#containerdetails")



const evselect = allevents.find (ev => ev._id == id)
console.log(evselect); 

 

div.innerHTML= `<div class="cardDetails">
<h3> ${evselect.category}</h3>
 <figure>
   <img src= ${evselect.image} alt=${evselect.name}>
   </figure>
   
    
     <p> ${evselect.description}</p>
  
   <div class="price"> 
   <h4> price $ ${evselect.price} </h4>
  
             </div> 
             </div>
 
</div>`
 






/*  
for (let seleccionado of allevents) {
  div.innerHTML+= `<h2> ${seleccionado.name} </h2>`
} */


  

