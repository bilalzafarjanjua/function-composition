"# function-composition"
Function composition is a technique in JavaScript where we can combine multiple functions into a single function, with each function passing its result to the next.This allows for modular, reusable, and more readable code by composing smaller functions into a larger one that performs more complex operations.

Example:
const add= (x) => x + 1;
const multiply = (x) => x \* 2;
const subtract = (x) =>x - 3;

const result = subtract(multiply(add(5)));
console.log(result);
