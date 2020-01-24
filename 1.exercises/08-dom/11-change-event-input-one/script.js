/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// pas du tout fait seule mais compris !

document.getElementById("pass-one").addEventListener("input", function(xblock) {

    if (xblock.target.value.length >= 10) {
      document.querySelector("#pass-one").addEventListener("keypress", xblock => xblock.preventDefault());
    }

    let indicator = document.querySelector(".indicator");
    let length = xblock.target.value.length;
    indicator.textContent = length;
  });