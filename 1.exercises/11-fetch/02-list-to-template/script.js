/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Code Kévin !!!!!!


document.getElementById("run").addEventListener("click", async () => {
    let res = await fetch("http://localhost:3000/heroes");
    let newdonnee = await res.json();
    console.log(newdonnee);


    document.getElementById("target").innerHTML =

        newdonnee.map((superkitty) => {
            return `
            
            <div id=${superkitty.id}>
                 <li class="hero">
                     <h4 class="title">
                      <strong class="name">${superkitty.name}</strong>
                          <em class="alter-ego">${superkitty.alterEgo}</em>
                     </h4>
                            <p class="powers">${superkitty.abilities}</p>
                 </li>
             </div>
   `

        })













})