/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

 // Function to check Whether both passwords 
            // is same or not. 




            document.querySelector("button").addEventListener("click", () => {
             let password = document.getElementById("pass-one");
             let matchpassword = document.getElementById("pass-two");


                if (password.value == matchpassword.value) {
                  password.style.border = "3px solid green";
                  matchpassword.style.border = "3px solid green";
                }

                else 

                {
                    password.style.border = "3px solid pink";
                    matchpassword.style.border = "3px solid pink";
                  }
              });