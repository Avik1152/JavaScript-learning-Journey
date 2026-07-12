// ******* Modified object data type problems 1 — Student Profile********
// Create an object called "student" with these properties:
// name, age, course, city, isEnrolled(boolean)

// Then print:
// 1) Each value using dot notation
// 2) All keys using Object.keys()
// 3) Total number of properties

/*const student = {
  name: "Akshay Saini",
  age: 22,
  city: "Kolkata",
  isEnrolled: true,
};

console.log(student.name); // "Akshay Saini"
console.log(student.age); // 22
console.log(student.city); // "Kolkata"
console.log(student.isEnrolled); // true
console.log(Object.keys(student)); // [ 'name', 'age', 'city', 'isEnrolled' ]
console.log(Object.keys(student).length); // 4*/

// ******* Modified object data type problems 2 — Multiword Property Access********

// Create an object called "idCard" with these properties:
// "full name", "date of birth", "blood group", city

// Print:
// 1) full name using square bracket notation
// 2) blood group using square bracket notation
// 3) city using dot notation
// 4) All keys using Object.keys()

/*const idCard = {
  "full name": "Akshay Saini",
  "date of birth": "1999-05-15",
  "blood group": "O+",
  city: "Kolkata",
};

console.log(idCard["full name"]); // "Akshay Saini"
console.log(idCard["blood group"]); // "O+"
console.log(idCard.city); // "Kolkata"
console.log(Object.keys(idCard)); // [ 'full name', 'date of birth', 'blood group', 'city' ]*/

// ******* Modified object data type problems 3 — Add & Delete Properties********
// 1) Add new property: price = 800000
// 2) Add new property: isAutomatic = true
// 3) Print full object
// 4) Delete color property
// 5) Print full object again
// 6) Print total keys count after deletion

/*let car = {
  brand: "Toyota",
  color: "Red",
  year: 2020,
};

car.price = 800000; // Add a new property "price" with value 800000
car.isAutomatic = true; // Add a new property "isAutomatic" with value true
console.log(car); // { brand: 'Toyota', color: 'Red', year: 2020, price: 800000, isAutomatic: true }

delete car.color; // Delete the property "color"
console.log(car); // { brand: 'Toyota', year: 2020, price: 800000, isAutomatic: true }
console.log(Object.keys(car).length); // 4*/

// ******* Modified object data type problems 4 — Property Existence Check********
// Check using "in" operator:
// 1) Is "beds" in hospital?
// 2) Is "hasICU" in hospital?
// 3) Is "doctor" in hospital?
// 4) Is "name" in hospital?
// Print all 4 results

/*let hospital = {
  name: "Apollo",
  city: "Kolkata",
  beds: 500,
  hasICU: true,
};
console.log("beds" in hospital); // true
console.log("hasICU" in hospital); // true
console.log("doctors" in hospital); // false
console.log("name" in hospital); // true*/

// ******* Modified object data type problems 5 — Update Object Values********
// 1) Update followers to 250
// 2) Update isVerified to true
// 3) Update username to "avik_dev"
// 4) Print full updated object
// 5) Print each value separately

/*let profile = {
  username: "avik_2000",
  followers: 100,
  isVerified: false,
};

profile.followers = 250;
profile.isVerified = true;
profile.username = "avik_dev";
console.log(profile);
console.log(profile.username); // "avik_dev"
console.log(profile.followers); // 250
console.log(profile.isVerified); // true
*/

// ******* Modified object data type problems 6 — for...in Loop********
// Using for...in loop:
// 1) Print each subject and its marks like:
//    "Math : 85"
//    "Science : 90"
// 2) Calculate total marks using for...in
// 3) Print total

/*let marks = {
  Math: 85,
  Science: 90,
  English: 78,
  History: 82,
};

let subjectsTotal = 0;
for (let subject in marks) {
  subjectsTotal += marks[subject];
  console.log(`"${subject}: ${marks[subject]}"`);
}
console.log(`Total Marks: ${subjectsTotal}`);
*/

// ******* Modified object data type problems 7 — isEmpty Function********
// Write a function called isEmpty(obj)
// Return true if object has no properties
// Return false if object has properties

// Test with both obj1 and obj2
// Print results

/*let obj1 = {};
let obj2 = { name: "Avik" };

function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isEmpty(obj1)); // true
console.log(isEmpty(obj2)); // false*/

// ******* Modified object data type problems 8 — Computed Property Name********
// Ask user: "Enter a fruit name" using prompt()
// Store it in variable called fruit

// Create object using computed property:
// [fruit]: "available"

// Then print:
// 1) The object
// 2) Value using cart[fruit]
// 3) All keys using Object.keys()

/*let fruit = prompt("Enter fruit name:");

let fruitPrices = {
  [fruit]: 100,
};
console.log(fruitPrices);
console.log(fruitPrices[fruit]); // 100
console.log(Object.keys(fruitPrices)); // [fruit]*/

// ******* Modified object data type problems 9 — Multiply Numeric Values********
// Write a function multiplyNumeric(obj)
// It should multiply all NUMBER values by 2
// String values should stay unchanged

// Print object before and after function call

/*let product = {
  name: "Laptop",
  price: 45000,
  discount: 10,
  rating: 4,
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(product);
multiplyNumeric(product);
console.log(product); // { name: 'Laptop', price: 90000, discount: 20, rating: 8 }
*/

// ******* Modified object data type problems 10 — typeof Inside Object********
// Using for...in loop:
// Print each key, its value, AND its type like:
// "username → avik → string"
// "age → 21 → number"
// "isStudent → true → boolean"

/*let mixedObj = {
  username: "avik",
  age: 21,
  isStudent: true,
  score: 99.5,
};
for (let key in mixedObj) {
  console.log(`${key} → ${mixedObj[key]} → ${typeof mixedObj[key]}`);
}*/

// ******* Modified object data type problems 11 — Salary Sum********

// 1) Calculate total salary using for...in loop
// 2) Calculate average salary
// 3) Print:
//    "Total Salary: ₹[amount]"
//    "Average Salary: ₹[amount]"

/*let salaries = {
  Avik: 25000,
  Rahul: 32000,
  Priya: 28000,
  Sourav: 35000,
};
let totalSalary = 0;
for (let key in salaries) {
  totalSalary += salaries[key];
}
console.log(`Total Salary: ₹${totalSalary}`);
console.log(`Average Salary: ₹${totalSalary / Object.keys(salaries).length}`); // Average Salary*/

// ******* Modified object data type problems 12 —  Object Summary Printer********
// Without hardcoding property names:
// Using Object.keys() and for...in loop together
// Print a summary like:
// "Total Properties: 5"
// "Keys: title, language, year, rating, isBlockbuster"
// Then print each key: value on new lines

let movie = {
  title: "KGF",
  language: "Kannada",
  year: 2018,
  rating: 8.5,
  isBlockbuster: true,
};
let totalProperties = Object.keys(movie).length;
let summary;
console.log(summary);
for (let key in movie) {
  summary = `Keys: ${Object.keys(movie).join(", ")}`;
  console.log(`${key} : ${movie[key]}`);
}
console.log(`Total Properties: ${totalProperties}`);
console.log(summary);
