/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

document.getElementById("run").addEventListener("click", () => {


    const capu = new Person ("Capuchin", "Brave" );


    console.log(capu.sayHello());
   

}) 