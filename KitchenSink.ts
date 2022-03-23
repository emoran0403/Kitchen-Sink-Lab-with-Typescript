let myName: string = "Eric Moran"; // let myName be of type string with a value of Eric Moran
const myStates: number = 50; // const myStates is of type number with a value of 50
var mySum: number = 4 + 5; // variable mySum is of type number with a value equal to the result of the expression 4+5

console.log(`the sum of 4+5 is ${mySum}`);

function mySayHello(): string {
  // this function takes no arguments, but will return a string type
  return "Hello!";
}

mySayHello();

function myCheckAge(name: string, age: number): string {
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

let myVegetables: string[] = ["spinach", "bell peppers", "onion", "eggplant", "tomato", "zucchini"]; // let myVegetables be an array containing strings

for (let i = 0; i < myVegetables.length; i++) {
  console.log(myVegetables[i]);
}

interface pet {
  // this interface defines the pet type, the name entry will be of type string and the breed entry will be of type string
  name: string;
  breed: string;
}

let myPet: pet = {
  // let myPet be of type pet
  name: "Lizzie",
  breed: "Chihuahua-Daschund",
};

console.log(`${myPet.name} is a ${myPet.breed}`);

interface person {
  // this interface defines the person type, with required entries of name being of type string, and age being of type number
  name: string;
  age: number;
}

let myP1: person = {
  // let myP1 be of type person
  name: "Eric",
  age: 30,
};
let myP2: person = {
  name: "Joe",
  age: 7,
};
let myP3: person = {
  name: "Risa",
  age: 20,
};
let myP4: person = {
  name: "Rich",
  age: 56,
};
let myP5: person = {
  name: "Sharon",
  age: 54,
};

let myFamily: person[] = [myP1, myP2, myP3, myP4, myP5]; // let myFamily be an array of person types

for (let i = 0; i < myFamily.length; i++) {
  console.log(myCheckAge(myFamily[i].name, myFamily[i].age));
}

let myString: string = `Hello World!`; // let myString be of type string

function myGetLength(string: string): string {
  // let the function myGetLength take an argument of type string, and return a string type
  if (string.length % 2 == 0) {
    return "The world is nice and even!";
  }
  return "The world is an odd place!";
}

console.log(myGetLength(myString));
