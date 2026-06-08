// Number Problem 1 — Type Conversion Chain
/*let price = 499;

// Convert price to string
price = price.toString();
console.log(price);
// Then check its type
console.log(typeof price);
// Then convert back to number
price = parseInt(price);
console.log(price);
// Then check type again
console.log(typeof price);
// Print all 4 results using console.log*/

// Number Problem 2 — Infinity & NaN Detective
// Try these 4 operations and predict output BEFORE running:
// 1) 10 / 0
// 2) -10 / 0
// 3) "hello" * 5
// 4) 0 / 0

// Write your prediction in a comment first

/*Infinity happens when a number becomes too large or when you divide by 0. Hare 1) and 2) devided by 0.

"hello" * 5 → NaN because text cannot multiply with a number
0 / 0 → NaN because JavaScript cannot determine the result*/

// Then run and check if you were right
console.log(10 / 0); //Infinity
console.log(-10 / 0); //-Infinity
console.log("hello" * 5); //NaN
console.log(0 / 0); //NaN
