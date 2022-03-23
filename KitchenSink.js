"use strict";
let myName = "Eric Moran"; // let myName be of type string with a value of Eric Moran
const myStates = 50; // const myStates is of type number with a value of 50
var mySum = 4 + 5; // variable mySum is of type number with a value equal to the result of the expression 4+5
console.log(`the sum of 4+5 is ${mySum}`);
function mySayHello() {
    // this function takes no arguments, but will return a string type
    return "Hello!";
}
mySayHello();
function myCheckAge(name, age) {
    // this function takes a name argument of type string, and an age argument of type string, and returns with a string type
    if (age == 21) {
        return `Grats ${name}, enjoy being 21 while it lasts`;
    }
    if (age > 21) {
        return `${name}, you are old enough to view this page!`;
    }
    if (age < 21) {
        return `Sorry ${name}, you're only ${age}.  You need to wait another ${18 - age} years until you can view this page!`;
    }
    return `The checkAge function did not work as expected :(`;
}
console.log(myCheckAge("Charles", 21));
console.log(myCheckAge("Abby", 27));
console.log(myCheckAge("James", 18));
console.log(myCheckAge("John", 17));
let myVegetables = ["spinach", "bell peppers", "onion", "eggplant", "tomato", "zucchini"]; // let myVegetables be an array containing strings
for (let i = 0; i < myVegetables.length; i++) {
    console.log(myVegetables[i]);
}
let myPet = {
    // let myPet be of type pet
    name: "Lizzie",
    breed: "Chihuahua-Daschund",
};
console.log(`${myPet.name} is a ${myPet.breed}`);
let myP1 = {
    // let myP1 be of type person
    name: "Eric",
    age: 30,
};
let myP2 = {
    name: "Joe",
    age: 7,
};
let myP3 = {
    name: "Risa",
    age: 20,
};
let myP4 = {
    name: "Rich",
    age: 56,
};
let myP5 = {
    name: "Sharon",
    age: 54,
};
let myFamily = [myP1, myP2, myP3, myP4, myP5]; // let myFamily be an array of person types
for (let i = 0; i < myFamily.length; i++) {
    console.log(myCheckAge(myFamily[i].name, myFamily[i].age));
}
let myString = `Hello World!`; // let myString be of type string
function myGetLength(string) {
    // let the function myGetLength take an argument of type string, and return a string type
    if (string.length % 2 == 0) {
        return "The world is nice and even!";
    }
    return "The world is an odd place!";
}
console.log(myGetLength(myString));
