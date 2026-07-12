/*// ******* Normal object data type problems 1 ********
let user = {
  isAdmin: true,
};
console.log(user.isAdmin);
console.log(typeof user.isAdmin);*/

/*// ******* Normal object data type problems 2 ********
// We can also use multiword property name it must quoted.
let user2 = {
  name: "Avik", //single word property name
  nameofFroute: "Banana", //single word property name
  "Froute Name": "Apple", //multiword property name it must quoted.
};
//for accsesing single word property name we can use dot(.)
console.log(user2.name); //worked
// but for accessing multiword property name it must use squear braces []
console.log(user2["Froute Name"]); //worked
// console.log(user2.Froute Name) // SyntaxError: missing ) after argument list
*/

/*// ******* Normal object data type problems 3 ********
let user3 = {
  name: prompt("Enter Your Name"),
  age: parseFloat(prompt("Enter your age")),
};

console.log(user3.name);
console.log(user3.age);
console.log(`My name is ${user3.name}`);

// let key = prompt("My name is", "name");
// console.log(key);*/

/*// ******* Normal object data type problems 4 ********
let fruit = prompt("Which Fruit to buy?", "Apple");
let food = prompt("Which Food to buy?", "Rice");

console.log(fruit);
console.log(food);
let cart = {
  [fruit]: 5,
  [food]: 10,
};

//get all keys
let keys = Object.keys(cart);

console.log(cart[fruit]);
console.log(keys); //['Apple', 'Rice']*/

/*// ****** Normal object data type problems 5 **********
let fruit2 = "Apple";

let bag = {
  [fruit2 + "Computer"]: 5,
};
console.log(bag[fruit2 + "Computer"]);
console.log(bag); //{AppleComputer: 5}*/

/*// ******* Normal object data type problems 6 ********
let obj = {
  //Property keys must be strings or symbols (usually strings).
  "Student Name": "Avik Mondal", //Values can be of any type.
  "Subject Name": "Computer Sceience", //Values can be of any type.
  "Current Year Of Study": 2026, //Values can be of any type.
};

console.log(obj);
console.log(obj["Student Name"]);
console.log(obj["Subject Name"]);
console.log(obj["Current Year Of Study"]);*/

/*// ******* Normal object data type problems 7 ********
let company = {
  "Company Name": "Cognigent",
  isOpen: true,
};

console.log(company.isOpen);
console.log(company["Company Name"]);
console.log(Object.keys(company)); // this is the most propuler way to get all the keys of any object.
console.log(Object.keys(company)[0]); // this is the way to get specific keys.
console.log(Object.keys(company)[1]);

// ***********
console.log(typeof Object.keys(company)[0]);
console.log(typeof company["Company Name"]);
console.log(typeof Object.keys(company)[1]);
console.log(typeof company.isOpen);*/

/*// ******* Normal object data type problems 8 ********
const measuringTools = {
  "vernier caliper":
    "Measures precise internal and external distances or depths",
  micrometer: "Measures extremely small thicknesses, diameters, or depths",
  "tape measure": "Measures long distances and flexible lengths",
  ruler: "Measures short, straight lines",
  "laser measure": "Measures long distances using laser reflections",
  protractor: "Measures angles in degrees",
};

console.log(measuringTools);
delete measuringTools.micrometer;
// console.log(delete measuringTools.micrometer);
console.log(measuringTools);
console.log("vernier caliper" in measuringTools); // true
console.log("micrometer" in measuringTools); // false*/

/*// ******* Normal object data type problems 9 ********
let user = {
  name: "John",
  surname: "Smith",
};
user.name = "Pete";
console.log(user.name);
console.log(user);
delete user.name;
console.log(user);*/

/*// ******* Normal object data type problems 10 ********
function isEmpty() {
  let schedule = { "08:30": "Get up" };
  console.log(schedule);
  if (Object.keys(schedule).length === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isEmpty());
console.log(isEmpty());*/

/*let schedule = { "08:30": "Get up" };
function isEmpty() {
  return Object.keys(schedule).length === 0;
}
console.log(isEmpty());
*/

/*// ******* Normal object data type problems 11 ********
// use the `for..in` loop for iterate over the properties of an object.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);
console.log(salaries.John + salaries.Ann + salaries.Pete);*/

// ******* Normal object data type problems 12 ********
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
let menu2 = {
  width: 100,
  height: 200,
  title: "My menu2",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyNumeric(menu);
multiplyNumeric(menu2);
console.log(menu);
console.log(menu2);
