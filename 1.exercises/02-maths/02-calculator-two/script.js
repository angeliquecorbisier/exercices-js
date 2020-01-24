/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
  

    const performOperation = operation => {   
        var num1 =parseInt (document.getElementById ("op-one").value);
        var num2 =parseInt (document.getElementById ("op-two").value);

        // perform the operation
        switch (operation)
        {
            case 'addition': 
            var result=num1 + num2;
            alert (result);
            break;

            case 'substraction':
            var result=num1 - num2;
            alert (result);            
            break; 

            case 'multiplication':
            var result=num1 * num2;
            alert (result);
                break;

            case 'division':
            var result=num1 / num2;
            alert (result);
                break; 
        }

     

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
