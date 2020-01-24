/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let date = new Date();
let month = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre", ];


document.getElementById("run").addEventListener("click", () => {
    let annee = document.getElementById("year").value;
    
    for (let i = 0; i < 12; i++) {
        date.setDate(13);
        date.setMonth(i);
        date.setYear(annee);
        if (date.getDay() == 5) {
            console.log(month[i]);
        }
    }
})