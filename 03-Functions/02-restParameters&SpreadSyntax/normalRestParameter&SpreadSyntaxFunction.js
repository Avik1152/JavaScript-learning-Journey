// Rest parameter
/*function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
*/
/*let total = sumAll(1, 2, 3, 4, 5);
console.log(total);

function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");
*/
/*
function showName2() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  // it's iterable
  //   for (let arg of arguments) {
  //     console.log(arg);
  //   }
}

// shows: 2, Julius, Caesar
showName2("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName2("Ilya");
*/

// Spread syntax

let newarr1 = [1, 2, 3];
let newarr2 = [4, 5, 6];
let newarr3 = [...newarr1, ...newarr2];
console.log(newarr3); // [1, 2, 3, 4, 5, 6]

console.log(Math.max(3, 5, 1));

let arr = [3, 5, 1];
console.log(Math.max(arr)); //NaN
console.log(Math.max(...arr)); // 5, spread turns array into a list of arguments

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2));

console.log(Math.max(1, ...arr1, 2, ...arr2, 25));

let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

console.log(merged); // 0,3,5,1,2,8,9,15

let str = "Hello";

console.log([...str]);

let str2 = "Hello";

// Array.from converts an iterable into an array
console.log(Array.from(str2)); // H,e,l,l,o

// copy an Array / Object

let testArr = [1, 2, 3];

let copyTestArr = [...testArr]; // spread the array into a list of parameters
// then put the result into a new array

console.log(copyTestArr);

console.log(JSON.stringify(testArr) === JSON.stringify(copyTestArr));

console.log(testArr === copyTestArr); // false (not same reference)

testArr.push(4);
console.log(testArr);
console.log(copyTestArr);

let obj = { a: 1, b: 2, c: 3 };
// console.log(obj);
let objCopy = { ...obj }; // spread the object into a list of parameters
// then return the result in a new object
// console.log(objCopy);
// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
