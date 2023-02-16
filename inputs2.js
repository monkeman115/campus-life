//1
const readline = require("readline-sync");
let number = Number(readline.question("Enter a number: "));
let number1 = Number(readline.question("Enter a number: "));
let newSum = number + number1;
console.log(`Your sum is ${newSum.toFixed( 2)}`);