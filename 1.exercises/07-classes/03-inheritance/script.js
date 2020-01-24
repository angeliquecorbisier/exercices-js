/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! Je suis ${this.name}!`;
        }
    }

class Cat extends Animal {
    constructor (name) {
    super();
    this.name = name; 
}

static greeting ="Wesh bien ou bien ?"; 

}

class Dog extends Animal {
    constructor (name) {
    super();
    this.name = name; 
}

static greeting ="Nickel frère !"; 

}

document.getElementById("run").addEventListener("click", () => {


    const chatchat = new Cat ("Boulette");

    console.log(chatchat.sayHello());

    const chienchien = new Dog ("Tartiflette");

    console.log(chienchien.sayHello());


}) 