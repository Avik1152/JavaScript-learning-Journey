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

console.log(accessing_Charecter[0]); //H
console.log(accessing_Charecter[-2]); //undefined
console.log(accessing_Charecter[accessing_Charecter.length - 2]); //l
console.log(accessing_Charecter.at(-1)); //o
console.log(accessing_Charecter.at(-2)); //l
