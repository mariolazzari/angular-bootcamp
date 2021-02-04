let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// obj
let now: Date = new Date();

// arrays
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3];
let booleans: boolean[] = [true, false];

// class
class Car {}
let car: Car = new Car();
// obj literal
let point: { x: number; y: number } = { x: 10, y: 20 };

// fx
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// any type
const json = { x: 19, y: 20 };
const coordinates: { x: number; y: number } = JSON.parse(json.toString());
console.log(coordinates);

// declaration and init
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// no infer
numbers = [-10, 1, -12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
