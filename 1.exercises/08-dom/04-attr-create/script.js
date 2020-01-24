/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


//on récupère les données de l'image source
const oldimg = document.getElementById("source").getAttribute("data-image");

//on crée une nouvelle image
const newimg = document.createElement("img");
newimg.src = oldimg; 

//de la target, on supprime l'image source
document.getElementById("target").appendChild(newimg);
document.getElementById("source").remove(); 

