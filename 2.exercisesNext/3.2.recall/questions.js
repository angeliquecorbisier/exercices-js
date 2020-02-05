let selectElementsStartingWithA = (array) => {
    return array.filter(word => word[0] == 'a');
}

let selectElementsStartingWithVowel = (array) => array.filter((element) => element.match(/^[aeiouy]/));
    //return array.filter(word => word[0] == 'a' || word[0] == 'o' || word[0] == 'i' || word[0] == 'e' || word[0] == 'u' || word[0] == 'y');
     
    


let removeNullElements = (array) => {
    return array.filter(word => word != null);
}

let removeNullAndFalseElements = (array) => {
    let arr = array.filter(word => word != null);
    return arr.filter(word => word !== false);
}

let reverseWordsInArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split('').reverse().join('');
    }
    return array;
}

let everyPossiblePair = (array) => {
    let arr = [];
    arr.push([array[2], array[0]]);
    arr.push([array[2], array[1]]);
    arr.push([array[0], array[1]]);
    return arr;
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3, array.length - 3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {
return array.map(element => element.split("").reverse().join("")).sort().map((element)=>element.split("").reverse().join(""));
 
}


let getFirstHalf = (string) => {
       return string.substr(0,Math.ceil(string.length/2));
    }


let makeNegative = (number) => {
    return -Math.abs(number);
}

//!!!!!!!!!!!

let numberOfPalindromes = (array) => {

    let palindromeArr=0;

    array.forEach(word => {
        if(word == word.split('').reverse().join('')) {
            palindromeArr++;
        }
    });
        return palindromeArr;


}
    


let shortestWord = (array) => {
//let shortesWord = (array) => array.map(element => element.split("")).sort((a,b)=>a.length - b.length)[0].join(""); 

    shortestWord = array.reduce(function(prev, next) {
        if (prev.length < next.length) {
            return prev;
        } else if (prev.length === next.length){
           return prev;
        } else {
           return next;
        }
      });
   
      return shortestWord;
  
}


let longestWord = (array) => {
    //let longestWord = (array) => array.map(element => element.split("")).sort((a,b)=>b.length - a.length)[0].join(""); 


    let word ="";
    for (let i = 0; i < array.length; i++) {
        if(word.length < array[i].length) {
            word = array [i];

        }
    }

    return word;
 
}

let sumNumbers = (array) => {

let sum = 0;

for (let index =0; index <array.length; index++) {
    sum += array[index];
}

return sum; 

}

//!!!!!!!!!!!!!!

let repeatElements = (array) => {

    array.forEach(element => {array.push(element)});
    return array;

}

let stringToNumber = (string) => {

    let number = parseInt(string); 
    return number;

}

let calculateAverage = (array) => {
 return array.reduce((a,b)=>(a+b)) / array.length;

}

//!!!!!!!!!!!!!

let getElementsUntilGreaterThanFive = (array) => {array.splice(6, array.length); return array;}



//!!!!!!!!!!!!!!!!!
 

let convertArrayToObject = (array) => {

    let obj = {};

    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = array[i+1];
        i++
    }

    return obj;

}

//!!!!!!!!!!!!!!

let getAllLetters = (array) => {
    let result=[];
for (elem in array ) {
    result.push(array[elem].split(''))
}let x= new Set(result.flat().sort())
    return Array.from(x);
  
}


let swapKeysAndValues = (object) => {

    let new_obj = {};

    for (let el in object) {
        if (object.hasOwnProperty(el)) {
            let value = object [el]; 
            new_obj[value] = el;
        }
    }

    return new_obj;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let sumKeysAndValues = (object) => {
    return Object.entries(object).join(',').split(',').reduce((a, b) => Number(a) + Number(b));
    }



// !!!!!!!!!!!!!!!!!!!!!!!!!!!

let removeCapitals = (string) => {

    return string.replace(/([A-Z])/g, '');
 
}


let roundUp = (number) => {

    let roundnumber = Math.ceil(number);
   return roundnumber;

}


let formatDateNicely = (date) => {

    return date.toLocaleDateString();

}

let getDomainName = (string) => {

    return string.substring(0, string.length - 4).split("@")[1];
 
}




let titleize = (string) => {

    return string.replace(/(^[^ ])|(?<= )([^ at])|(?<=\. )([^ ])/g, (elem) => elem.toUpperCase());
        
}


let checkForSpecialCharacters = (string) => {

    // /\w/.test(string); 

    let pattern = /[a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/; 
        if ( string && string.length > 2 && pattern.test(string)) {
            return true;
          } else {
            return false;
          }
        };


let squareRoot = (number) => {

    return Math.sqrt(number);
}



let factorial = (number) => {

    let total = 1; 

    for (let i = 1; i <= number; i++) {
        total *= i 
    }
        return total; 
}

//!!!!!!!!!!!!!!!!!!!

let allAnagram = function(string) {
    if (string.length === 0) {
        return [""];
    }
    let result = {};
    string.split("").forEach(function(oneletter, i) {
        let sololetters = string.slice(0, i) + string.slice(i + 1);
        allAnagram(sololetters).forEach(function(anagramtotal) {
            result[oneletter + anagramtotal] = true;
        });
    });
    return Object.keys(result);
};

        let findAnagrams = (string) => {
    return allAnagram(string);
}

let convertToCelsius = (number) => {

let celsius = Math.round((number - 32) *(5/9));

return celsius; 

}

let letterPosition = (array) => {

    return array.map(element => element.toLowerCase().charCodeAt(0) - 96);
   
}