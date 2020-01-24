/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

 document.getElementById("run").addEventListener("click", () => {
   
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];


//const tableau = [];

//for (let i=0; i <length; i++) {

//tableau[i] = [keys[i], values [i]];

//}   

//console.log(Object.fromEntries(tableau));


const myMap = new Map ();

myMap.set(keys);
myMap.set(values);

const myObj = Object.fromEntries(myMap); 

console.log(myObj); 

    });
