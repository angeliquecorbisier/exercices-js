/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    const increment = (ref) =>{
    switch (ref) {
    case "part-one":
    one++
    document.querySelector("#part-one").innerHTML = one;
    console.log(one);
    
            if (one >= 499){
                document.querySelector("#part-one").disabled = true;
            }
            break;
            
            case "part-two":
            two++;
            document.querySelector("#part-two").innerHTML = two;
            if (two >= 99){
                document.querySelector("#part-two").disabled = true;  
            }
            break;
            case "part-three":
            three++
            document.querySelector("#part-three").innerHTML = three;
            if ( three >= 99){
                document.querySelector("#part-three").disabled = true;
            } 
            break;
            case "part-four":
            four++;
            document.querySelector("#part-four").innerHTML = four;
            if ( four >=99){
                document.querySelector("#part-four").disabled = true;
            }
            break;   
        }
    }
    let one = 460;
    let two = 0;
    let three = 0;
    let four = 0;
    Array.from(document.querySelectorAll("button")).forEach(btn => {
        btn.addEventListener("click", () =>{
            increment(btn.id,);
        })
    });
