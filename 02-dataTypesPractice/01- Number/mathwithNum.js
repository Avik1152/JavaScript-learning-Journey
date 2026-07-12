// console.log(255 === 255.0); // true

const score = 400;
// console.log(score);

const balence = new Number(100);
// console.log(balence);
//use of toFixed()
// console.log(balence.toFixed(2));
// console.log(typeof balence);

//use of toString()
const balenceStr = new Number("100").toString();
// console.log(balenceStr);
// console.log(typeof balenceStr);
// console.log(balenceStr.length);

//use of toPrecision()
const covertPrecision = 123.8966;
// console.log(covertPrecision.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

//NaN - Not a Number

function isNumber(value) {
  if (isNaN(value)) {
    return `${value} is NaN`;
  }
  return `${value} is a number`;
}

console.log(isNumber(100));
console.log(isNumber("Hello"));

// +++++++++++++ Math Library in JavaScript +++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // Converts negative numbers to positive
// console.log(`Rounds up to the nearest integer: ${Math.round(4.5)}`); // Rounds up to the nearest integer
// console.log(`Rounds up to the nearest integer: ${Math.ceil(4.1)}`); // Rounds up to the nearest integer(ceiling mean upper)
// console.log(`Rounds down to the nearest integer: ${Math.floor(4.8)}`); // Rounds down to the nearest integer(floor mean lower)
// console.log(`Rounds to the nearest integer: ${Math.round(4.5)}`); // Rounds to the nearest integer
// console.log(`minimum number: ${Math.min(4, 5, 6, 7, 8)}`); // Returns the minimum number
// console.log(`maximum number: ${Math.max(4, 5, 6, 7, 8)}`); // Returns the maximum number
//**********************
//Random Numbers in JavaScript
// console.log(`Random number between 0 and 1: ${Math.random()}`); // Returns a random number between 0 and 1
// console.log(
//   `Random number between 0 and 10: ${Math.floor(Math.random() * 10) + 1}`,
// ); // Returns a random number between 0 and 10

const min = 10;
const max = 20;
// console.log(
//   `Random number between ${min} and ${max}: ${Math.floor(Math.random() * (max - min + 1)) + min}`,
// );
