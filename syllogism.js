/**
 * 
 * Homework Assignment #4: Functions
 * 
 * 
 * 
 * 
 * */


function syllogism(name) {
    let listObject = {
        'pen': 'object',
        'house': 'object',
        'Socrates': 'man',
        'Dogs': 'animals',
        'trees': 'plants'
    }

    const typemortals = ['man', 'animal', 'plants'];

    if (typeof name != 'string') {
        return 'Error parameter, should be a string';
    }

    if (listObject.hasOwnProperty(name)) {
        if (typemortals.includes(listObject[name])) {
            return true;
        } else {
            return false
        }

    } else {
        return 'Name do not exist';
    }
}

console.log(syllogism('Dogsxpto')); // Name do not exist
console.log(syllogism(123)); // Error parameter, should be a string
console.log(syllogism('Dogs')); // False
console.log(syllogism('Socrates')); // False


/**
*
*
* If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:
* An array of all cake possibilities (vanilla or chocolate)
* A boolean representing whether or not the cake is chocolate.
* It should return a string indicating the actual flavor of the cake.
*
*/



function cakes(flavors, isChocolate) {

    if(!isChocolate) {
        console.log(`this cake is not ${flavors[1]}, therefore, this cake is ${flavors[0]}`)
    } else {
        console.log(`this cake is not ${flavors[0]}, therefore, this cake is ${flavors[1]}`)
 
    }

}

const fv = ['vanilla', 'chocolate'];
cakes(fv, true);