// self try form mind
let fruitList = ["Apple", "Mango", "Orange"];

// console.log(fruitList);

fruitList[0] = "lemon";

for (let i in fruitList) {
  // console.log(fruitList[i]);
}

let arr = new Array();

arr[0] = "Avik";
arr[1] = "Aksahy";
arr[2] = "Ashish";
arr[3] = "Avshek";
arr[4] = "Anima";
arr[5] = "Anima";
arr[6] = "Anima";

// console.log(arr);

// *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*
// mix of values
/*let mixVal = [
  "Apple",
  { name: "john" },
  true,
  function () {
    let check = prompt("Enter", "check");
    console.log(check);
  },
];
console.log(mixVal.shift());
// get the object at index 0 and then show its name
console.log(mixVal[0].name);
// get the function at index 2 and run it
mixVal[2]();
console.log(mixVal);*/

let fruitList2 = ["Apple", "Mango", "Orange"];
fruitList2.push("Lemon", "Goava", "Lichies"); // push ➔ add items in last
fruitList2.unshift("Jackfruit", "Banana", "Watermelon"); // unshift ➔ add items in first

// console.log(fruitList2);
// console.log(fruitList2.at(-1));

// console.log(fruitList2.pop()); // remove and return from last
// console.log(fruitList2.shift()); // remove and return from first
// console.log(fruitList2);

//One of the oldest ways to cycle array items is the for loop over indexes:
/*for (let i = 0; i < fruitList2.length; i++) {
  console.log(fruitList2[i]);
}*/

// but we have now for..of loop

/*for (let fruits in fruitList2) {
  console.log(fruitList2[fruits]);
}*/

let fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name
// console.log(fruits);

//multidimentional Array

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matrix);
// console.log(matrix[0][2]);
// console.log(matrix[1][1]);

// console.log(typeof matrix);
// console.log(String(matrix[0][1]) === "2"); //true
// console.log(typeof matrix[0][1] === "string"); // false
// console.log(matrix[1]); //  [4, 5, 6]

let convert = [1, 2, 3];

// console.log(convert);
// console.log(typeof convert);
// console.log(String(convert) === "1,2,3"); //true
// console.log(typeof String(convert) === "string"); //true

// **** splice() ****
let userThought = ["I", "study", "JavaScript", "right", "now"];

userThought.splice(2, 0, "complex", "Language");
userThought.splice(1, 0, "Who", "is", "Avik");

// console.log(userThought);

// **** slice() ****
let userThought2 = ["I", "study", "JavaScript", "right", "now"];

let userThought3 = userThought2.slice(1, 3);
// console.log(userThought3);

// console.log(userThought2); // original Array untouched

// **** concat() ****
// example 1
let concatenateCheck1 = ["I", "study"];
let concatenateCheck2 = ["JavaScript", "right", "now"];
let concatenateCheck3 = ["then", "DSA"];

let concatenateCheck4 = concatenateCheck1.concat(
  concatenateCheck2,
  concatenateCheck3,
);
// console.log(concatenateCheck4);

// example 2
let arrConcatenate = [1, 2];

let arrayLike = {
  0: "something",
  length: 1,
};

// **** forEach() ****
let sumArr = [1, 2, 3, 4];

/*for (let i of sumArr) {
  console.log(sumArr[i - 1]);
}*/

sumArr.forEach((element) => {
  console.log(element + 2);
});

console.log(sumArr);
// console.log(arrConcatenate.concat(arrayLike));
// *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*

// **** Normal Array Problems 1 — ****

/*//let fruits = ["Apple", "Mango", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(shoppingCart);

console.log(fruits);
console.log(fruits.length);
//That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.*/

// **** Normal Array Problems 2 — Array Operations ****

/*let style = ["Jazz", "Blues"];
console.log(style); //1
style.push("Rock-n-Roll");
console.log(style); //2
style[Math.floor(style.length - 1) / 2] = "Classics";
console.log(style);
style.shift(); //4
console.log(style);
style.unshift("Rap", "Reggae");
console.log(style);*/

// **** Normal Array Problems 3 ****

/*let arrProb3 = ["a", "b"];

arrProb3.push(function () {
  alert(this);
});

console.log(arrProb3); // we can store any data type in Array
console.log(arrProb3[2]());*/

// **** Normal Array Problems 4 ****

/*function sumInput() {
  let sumArray = [];
  console.log(sumArray);
  while (true) {
    let sumArrayUser = prompt("Enter Numbers", 0);

    if (sumArrayUser === "" || sumArrayUser === null || !isFinite(sumArrayUser))
      break;

    sumArray.push(+sumArrayUser);
  }
  let sum = 0;
  for (let number of sumArray) {
    sum += number;
  }
  return sum;
}
console.log(sumInput());*/

// **** Normal Array Problems 5 - Maximal Subarray****
/*let maximalSubArray = [1, -2, 3, 4, -9, 6];

function getMaxSubSum() {}  *********Incomplete for letter*/
