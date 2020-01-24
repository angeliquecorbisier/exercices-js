/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


//Code Kévin !!!! 

 document.getElementById("run").addEventListener("click", async () => {

    //On lance une requête pour se connecter au serveur et récupérer le "tableau" qui comprend tous les super-héros.
  let res = await fetch ("http://localhost:3000/heroes"); 
  let newdonnee = await res.json(); console.log(newdonnee);
  

  //On cible la valeur de l'input, puis on récupère celle-ci afin de pouvoir l'utiliser
  
    let donneeinput = document.getElementById("hero-id").value; console.log(donneeinput);
    const found = newdonnee.find(donnee => donnee.id == donneeinput || donnee.name == donneeinput); console.log(found);
    
    if (found) {

    alert("T'as géré ma gueule")
        
}else if (donneeinput == ""){

    alert("Remplis stp")
return;

}else{


alert("ça marche pas parce-que je suis débiiile")
        return; 
}


    document.getElementById("target").innerHTML =

 
         `
        
        <div id=${found.id}>
             <li class="hero">
                 <h4 class="title">
                  <strong class="name">${found.name}</strong>
                      <em class="alter-ego">${found.alterEgo}</em>
                 </h4>
                        <p class="powers">${found.abilities}</p>
             </li>
         </div>
`

    })






