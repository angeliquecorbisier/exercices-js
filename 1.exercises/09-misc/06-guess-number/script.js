/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const   random = Math.floor(Math.random()*50);


    const numberguess = () => {
        let trytest = prompt("Es-tu devin ?");
        if (random > trytest) {

            alert("Plus mec/meuf");
            numberguess();
        }else if(random < trytest){

            alert("C'est moins enfin...");
            numberguess();
        }else{

            alert("Bravo mon lapin!");
        }
    }


    numberguess();