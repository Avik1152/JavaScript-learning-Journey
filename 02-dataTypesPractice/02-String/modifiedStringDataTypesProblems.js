// String Modified Problems 1 - String Inspector

let sentence = "JavaScript is the language of the web.";

// Find and print:
// 1) Total length of sentence
// console.log(sentence.length); //  38
// 2) First character
// console.log(sentence[0]); //  J
// 3) Last character using .at()
// console.log(sentence.at(-1)); //  .
// 4) Index of word "language"
// console.log(sentence.indexOf("language")); //  18
// 5) Does it include "web"? (true/false)
// console.log(sentence.includes("web")); //  true
// 6) Character at index 11
// console.log(sentence.charAt(11)); //  i

// String Modified Problems 2 - Unicode Explorer

let word = "Hello😎";

// 1) Print total length
// console.log(word.length);
// 2) Print charCodeAt(0)  → Unicode of 'H'
// console.log(word.charCodeAt(0));
// 3) Print charCodeAt(1)  → Unicode of 'e'
// console.log(word.charCodeAt(1));
// 4) Spread the word into array using [...word]
// console.log([...word]);
// 5) Print last character using [...word] with .length

//Spread the string into an array of individual characters
const charArray = [...word];
//Use the array's length minus 1 to get the last character
const lastChar = charArray[charArray.length - 1];

// console.log(lastChar); // Output: "😎"

// Predict: will .length give 6 or 7 for "Hello😎"?
//7
// Write your prediction as comment, then check
//7
//72
//101
//['H', 'e', 'l', 'l', 'o', '😎']
//😎

// String Modified Problems 3 - String Immutability Test

let myName = "john";

// Try to change first letter to capital 'J'
// console.log(myName[0].toUpperCase()); //J

// directly like: myName[0] = "J"
myName[0] = "J";
// Check if it worked
// console.log(myName); //john (not changed, because string is immutable)

// Then do it the CORRECT way:
// Build new string using myName[1], myName[2]... etc
// Print the corrected name
// console.log(myName[0].toUpperCase() + myName[1] + myName[2] + myName[3]); // John

// String Problem 4 — indexOf Loop Challenge

let paragraph = "the cat sat on the mat near the vat";
let target = "at";

// Using the while loop pattern from your practice today,
// find ALL positions where "at" appears
// Print each position
let position = 0;
while (true) {
  let index = paragraph.indexOf(target, position);
  if (index === -1) {
    break;
  }
  // console.log(index);
  position = index + 1;
  paragraph = paragraph.replace(target, "ut"); // Replace "at" with "ut" to avoid finding the same instance again
}
// console.log(paragraph);

//***to differce meaning of -1 hare***
// console.log(paragraph.indexOf("z")); //-1 (hare -1 mean the character is not found.)
// console.log(paragraph.at(-1)); //Hare -1 mean the last caharacters.

// String Problem 7 — String Case Converter

let mixedText = "hElLo wOrLd";

// 1) Print full string in UPPERCASE
console.log(mixedText.toUpperCase()); // HELLO WORLD
// 2) Print full string in lowercase
console.log(mixedText.toLowerCase()); // hello world
// 3) Print length of string
console.log(mixedText.length); //11
// 4) Does it include "wOrLd"?
console.log(mixedText.includes("wOrLd")); //true
// 5) Does it include "world"? (lowercase)
console.log(mixedText.includes("world")); //false
// Predict output of 4 and 5 before running — write in comment
// 4) true
// 5) false
