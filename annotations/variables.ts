let apples = 5; // type inference
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialise it later
let words = ['red', 'green', 'yellow'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let newNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < newNumbers.length; index++) {
  if (newNumbers[index] > 0) {
    numberAboveZero = newNumbers[index];
  }
}
