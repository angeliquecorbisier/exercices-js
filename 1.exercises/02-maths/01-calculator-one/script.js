/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
  
   
   

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
    var num1 = document.getElementById ("op-one").value;
    var num2 = document.getElementById ("op-two").value;
    var result = parseInt (num1) + parseInt (num2);
        alert (result);
    
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        var num1 = document.getElementById ("op-one").value;
        var num2 = document.getElementById ("op-two").value;
        var result = parseInt (num1) - parseInt (num2);
            alert (result);

    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        var num1 = document.getElementById ("op-one").value;
        var num2 = document.getElementById ("op-two").value;
        var result = parseInt (num1) * parseInt (num2);
            alert (result);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        var num1 = document.getElementById ("op-one").value;
        var num2 = document.getElementById ("op-two").value;
        var result = parseInt (num1) / parseInt (num2);
            alert (result);
    });

    var num1 = document.getElementById ("op-one").value;
    var num2 = document.getElementById ("op-two").value;

})();
