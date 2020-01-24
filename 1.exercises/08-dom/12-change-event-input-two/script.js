/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


//pas du tout fait seule....mais compris ! (problème pour la condition concernant les deux chiffres)

inputvalid = document.querySelector(".indicator");

  document.getElementById("pass-one").addEventListener("input", function(e) {

    if (e.target.value.length >= 8 && e.target.value.match("")) {
      
      
        inputvalid.textContent = "T'as dead ça chacal";
    }
  });