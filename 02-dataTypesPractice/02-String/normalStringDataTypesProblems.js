// ****String****

// String Normal Problem 1 - use embed expressions ${…}
function sum(group_a_Score, group_b_Score) {
  return group_a_Score + group_b_Score;
}
// console.log(`The Sum of group: A and group: B is: ${sum(15, 10)}`); //embed expressions ${…}

// String Normal Problem 2 - multiple lines and special character
let list_Of_SuperHeroes = `* Spider Man
* Bat Man
* Ant Man
* Super Man
* Men In Black`;

// console.log(list_Of_SuperHeroes);

let list_Of_Cartoon = " Chota Bheem \n Motu Patlu \n Ben 10";

// console.log(list_Of_Cartoon);

let str1 = `Hello
World`;

let str2 = "Hello\nWorld";

// console.log(str1 === str2); //true*

//String Normal Problem 3 - Accessing characters and use of lenght

let accessing_Charecter = "Hello";

// console.log(accessing_Charecter[0]); //H
// console.log(accessing_Charecter[-2]); //undefined
// console.log(accessing_Charecter[accessing_Charecter.length - 2]); //l
// console.log(accessing_Charecter.at(-1)); //o
// console.log(accessing_Charecter.at(-2)); //l

//String Normal Problem 4 - Strings are immutable and Changing The Case
let immutable_str = "Hello";
// let mutable_arr = [10, 15, 20, 25, 30]; // Arrays are mutable.

immutable_str[0] = "h"; // error
// console.log(immutable_str); // doesn't work

//create a whole new string and assign it to str instead of the old one.
immutable_str =
  "h" +
  immutable_str[1] +
  immutable_str[2] +
  immutable_str[3] +
  immutable_str[4];
// mutable_arr[0] = 11;
// console.log(immutable_str.toUpperCase());
// // console.log(
//   immutable_str[0].toLowerCase() +
//     immutable_str[1].toUpperCase() +
//     immutable_str[2] +
//     immutable_str[3].toUpperCase() +
//     immutable_str[4],
// );
// console.log(mutable_arr);

//String Normal Problem 5 - Searching for a substring and Extracting a substring
let str = "Hello World";
// console.log(str.indexOf("World")); //6
// console.log(str.includes("world")); //false
// console.log(str.indexOf("World", 1)); //6

let subStr = "I learning JavaScript";

//  console.log(subStr.includes("I")); //true
//  console.log(subStr.includes("i")); //false

let str3 = "Hello World";
//   console.log(str3.slice(0, 5)); //Hello
//   console.log(str3.slice(6)); //World
//   console.log(str3.slice(-5)); //World
//   console.log(str3.slice(0, -6)); //Hello
//   console.log(str3.substring(-11, -6)); //Hello

//String Normal Problem 6 - Type conversion for String
let convertNumToStr = 12;
let convertNullToStr = null;

//1. The Main Method: `String()`
let typeConversionNumtoStr2 = String(convertNumToStr);
console.log(typeof typeConversionNumtoStr2); //string
console.log(typeConversionNumtoStr2); //"12"

//2. Using Main method `String()`
let typeConversionNulltoStr = String(convertNullToStr);
console.log(typeof typeConversionNulltoStr); //string
console.log(typeConversionNulltoStr); //"null"

//2. Using `toString()` method
let typeConversionNumtoStr1 = convertNumToStr.toString();
console.log(typeof typeConversionNumtoStr1); //string
console.log(typeConversionNumtoStr1); //"12"

//3. Using `toString()` method
let typeConversionNulltoStr2 = convertNullToStr.toString();
console.log(typeof typeConversionNulltoStr2); //string
console.log(typeConversionNulltoStr2); //TypeError: Cannot read properties of null (reading 'toString')
