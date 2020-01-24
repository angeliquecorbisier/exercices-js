/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


const afftable = document.getElementById("target");

              table = document.createElement("table");

      for (let i=1; i<11; i++) {
            let col = document.createElement("td");

            for (let j=1; j<11; j++) {

                  let row = document.createElement("tr");
                  row.innerHTML = i*j;
                  col.appendChild(row);
            }
            table.appendChild(col);
      }
      

      afftable.appendChild(table);