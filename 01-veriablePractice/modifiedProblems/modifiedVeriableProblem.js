/*
**Modified Problem 1 — Swap Two Variables**

let foodItemMenu_1 = "Tea";
let foodItemMenu_2 = "Coffee";

let foodItemSwap;

foodItemSwap = foodItemMenu_2;
foodItemMenu_2 = foodItemMenu_1;
foodItemMenu_1 = foodItemSwap;

// console.log(foodItemMenu_1);
console.log(`foodItemMenu_1 : ${foodItemMenu_1}`);
// console.log(foodItemMenu_2);
console.log(`foodItemMenu_2 : ${foodItemMenu_2}`);*/

/*
// Modified Problem 2 — Update a Variable's Value

let score = 0;

score = score + 10;
score = score + 10;
score = score + 10;

console.log("Final Score: " + score);*/

/*

// Modified Problem 3 — Const vs Let Experiment

const appName = "MyApp";
let version = 1;

// Try changing appName → see the error
// appName = "MyApplication";
// console.log(appName); //Uncaught TypeError: Assignment to constant variable.

// Then change version to 2 → works fine
version = 2;
console.log(version); // 2

// Question: why does one give error and other doesn't?
// Write the answer in a comment
/*
First variable is decleared by const that means this is a constant variable(constant variable's value don't changeable) that's why it gives error. And Other variable is decleared by let and which variables are decleared by let that is changeable that why it don't give any error.
 */

// Modified Problem 4 — Template Literal with Multiple Variables

/*let firstName = "Your Name";
let city = "Kolkata";
let course = "Diploma CS";

// Using template literal, print:
// "My name is [name], I live in [city] and I study [course]."
console.log(`My name is ${firstName}, I live in ${city},I study ${course}.`);*/

// Modified Problem 5 — Prompt + Template Literal Together
// Ask user: What is your name?
// Ask user: How old are you?
// Then alert: "Hello [name]! You are [age] years old."

/*let userName = prompt("What is your name?");
let age = prompt("How old are you?");

alert(`Hello ${userName}! You are ${age} years old.`);*/
