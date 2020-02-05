// exercice 1

let character = {
    name: "Kévïnoû",
    age: 26,
    items_to_give: ["obj1", "obj2", "obj3"],

    giveItem: () => {
        console.log("bimbamboum");
        console.log(character.items_to_give);
    }

};

character.giveItem();


for (let property in character) {
    console.log(`${property}: ${character[property]}`);

}

// exercice 2

let shop = [


    {
        title: "épée",
        physic: 5,
        magic: 6,
        minLevel: 5,
        available: true,
    },

    {

        title: "hache",
        physic: 7,
        magic: 3,
        minLevel: 5,
        available: true,


    },

    {

        title: "sceptre",
        physic: 4,
        magic: 8,
        minLevel: 5,
        available: true,


    },
]

let showitem = () => {
    shop.forEach( item => {
        console.log(item);
        
    })
}

let availableitem = () => {
    shop.forEach(item => {
        if (item.minLevel >= 10) {
            console.log(item);
            
        }
    })
}


// exercice 3

let mainCharacter = {
    name: "Axel",
    level: 86,
    life: 999, 
    weapon :{
        name: "boulettepower",
        damage: 1000,
    },

    attack () {
        let degats = this.level * this.weapon.damage; 

       console.log(
        `${this.name} random ${this.weapon.name} random ${degats}`

    );

    }

};

mainCharacter.attack();




