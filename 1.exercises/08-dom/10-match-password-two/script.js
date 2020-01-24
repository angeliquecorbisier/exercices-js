/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.querySelector("button").addEventListener("click", () => {
    let password = document.getElementById("pass-one");
    let matchpassword = document.getElementById("pass-two");


       if (password.value == matchpassword.value) {
         password.style.border = "3px solid green";
         matchpassword.style.border = "3px solid green";

         alert ("Félicitations, ta mémoire est excellente ! Prends une gommette, ça fait plaiz")
       }

       else 

       {
          password.setAttribute("class", "error");
          matchpassword.setAttribute("class", "error");

          alert ("Franchement, arrête de geek sur LOL, ça ne te réussit pas...")
         }
     });