/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

 
document.getElementById("run").addEventListener("click", () => {

let donneeinputname = document.getElementById("hero-name").value; 
let donneeinputae = document.getElementById("hero-alter-ego").value; 
let donneinputpowers = document.getElementById ("hero-powers").value; 


    fetch ('http://localhost:3000/heroes', {
    method: 'POST',

    headers: { 
                'Content-Type': 'application/json;charset=UTF-8'

    },

    body: JSON.stringify({
        name: donneeinputname,
        ae : donneeinputae,
        powers : donneinputpowers,
        }),
})
.then((res) =>res.json())
.then((data) =>console.log(data))





});


