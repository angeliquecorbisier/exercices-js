/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Jonh - Complètement aidée mais j'ai compris l'exo

(() => {

    document.getElementById("run").addEventListener("click", () => {
        let sum = 0;
        let table = [];
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(99)+ 1);
    }
            for (let i = 1; i <= 10; i++){
            nbr = document.getElementById("n-"+i).innerHTML = getRandomInt(100);
    
            table.push(nbr);
        }
        console.log(table);

    
        max = Math.max.apply(null, table)
        min = Math.min.apply(null, table)
    
        table.forEach(somme => {
            sum += somme ;
        })
    
        let moyenne = sum/table.length;
    
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = moyenne;
    })
    })();











