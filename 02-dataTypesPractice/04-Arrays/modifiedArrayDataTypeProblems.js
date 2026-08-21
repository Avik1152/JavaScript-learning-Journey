// **** Modified Array Problems 1 — Array Creator & Accessor ****
// Create an array called "students" with 5 names
// Then print:
// 1) First element using [0]
// 2) Last element using .at(-1)
// 3) Total length
// 4) 3rd element using index
// 5) Change 2nd element to "Rahul"
// 6) Print full array after change

/*let students = ["Akshay", "Subho", "Ashish", "Avik", "Ashish"];

console.log(students[0]);
console.log(students.at(-1));
console.log(students.length);
console.log(students[2]);

students.splice(1, 1, "Rahul");
console.log(students);*/

// **** Modified Array Problems 2 — push & pop Practice
// 1) Add "Animal" and "Jawan" to END using push()
// 2) Print array and length
// 3) Remove last item using pop() — store it in variable
// 4) Print what was removed
// 5) Print final array

/*let watchlist = ["RRR", "KGF", "Pushpa"];

watchlist.push("Animal", "Jawan");
console.log(watchlist);
console.log(watchlist.length);

let removeItems = watchlist.pop();
console.log(removeItems);

console.log(watchlist);*/

// **** Modified Array Problems 3 — unshift & shift Practice
// 1) Add "Alice" and "Bob" to BEGINNING using unshift()
// 2) Print full queue
// 3) Remove first person using shift() — store in variable
// 4) Print who left the queue
// 5) Print remaining queue

/*let queue = ["Charlie", "David", "Eve"];

queue.unshift("Alice", "Bob");
console.log(queue);

let removePerson = queue.shift();
console.log(removePerson);

console.log(queue);*/

// **** Modified Array Problems 4 — for Loop vs for...of ****
// Do these TWICE — once with for loop, once with for...of:
// 1) Print each price
// 2) Calculate total of all prices
// 3) Print total

/*let prices = [120, 250, 80, 450, 30];

// twice using for loop
console.log("---twice using for loop---");
let twicePrices = 0;
for (let index = 0; index < prices.length; index++) {
  twicePrices += prices[index];
  console.log(prices[index]);
}
console.log(`Total price using for Loop: ${twicePrices}`);

// twice using for..of loop
console.log("---twice using for..of loop---");
let total = 0;
for (let item of prices) {
  total += item;
  console.log(item * 2);
}
console.log(`Total price using for..of Loop: ${total}`);*/

// **** Modified Array Problems 5 — forEach() Practice ****

/*let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

colors.forEach((eliment, index) => {
  console.log(`"${index} : ${eliment}"`);
});

colors.forEach((eliment, index) => {
  if (eliment.length > 4) {
    console.log(`"${index} : ${eliment}, lenght: ${eliment.length}"`);
  }
});*/

// **** Modified Array Problems 6 - splice() Inserter ****

/*let days = ["Monday", "Tuesday", "Friday", "Saturday"];

days.splice(2, 0, "Wednesday", "Thursday");

console.log(days);

days.splice(5, 1);

console.log(days);*/

// **** Modified Array Problems 7 - slice() Extractor

/*let subjects = ["Math", "Science", "English", "History", "Computer", "Art"];

let newArr = subjects.slice(0, 3);
let newArr2 = subjects.slice(-2, subjects.length);
let newArr3 = subjects.slice(2, 5);

console.log(newArr);
console.log(newArr2);
console.log(newArr3);

console.log("Original Array Unchanged:", subjects);*/

// **** Modified Array Problems 8 - concat() Combiner ****

/*let batch1 = ["Avik", "Rahul", "Priya"];
let batch2 = ["Sourav", "Sneha"];
let batch3 = ["Rohan", "Tina", "Mehul"];

let fullClass = batch1.concat(batch2, batch3);

console.log(fullClass);
console.log(`Total Student count is: ${fullClass.length}`);
console.log(
  `First Student Name: ${fullClass[0]} and Last Student Name: ${fullClass.at(-1)}`,
);*/

// **** Modified Array Problems 9 - 2D Array Practice ****

/*let subjectArr = [
  [85, 90, 78],
  [92, 88, 76],
  [70, 85, 95],
];

console.log(subjectArr[0][1]);
console.log(subjectArr[1][0]);

subjectArr[0][0] = 95;

console.log(subjectArr);

for (let eliment of subjectArr) {
  console.log(eliment.join(" | "));
}*/

// **** Modified Array Problems 10 - Mixed Array Explorer ****

/*let mixedArr = [
  "JavaScript",
  42,
  true,
  { language: "JS" },
  ["nested", "array"],
];

for (let element of mixedArr) {
  console.log(`"${element} → ${typeof element}"`);
}

console.log(mixedArr[3].language);
console.log(mixedArr[4][0]);
console.log(mixedArr.length);*/

// **** Modified Array Problems 11 - new Array() Constructor ****

/*let studentArr = new Array("Akash", "Ashish", "Aksay", "Rahul");

studentArr.push("Sima", "Rima");

console.log(studentArr);
console.log(studentArr.length);

for (let element of studentArr) {
  console.log(element);
}*/

// **** Modified Array Problems 12 - Array + Object Combined ****

/*let classRoom = [
  { name: "Avik", marks: 85 },
  { name: "Rahul", marks: 92 },
  { name: "Priya", marks: 78 },
];
let totalMarks = 0;
classRoom.forEach((eliment, index) => {
  console.log(`${eliment.name} scored ${eliment.marks}`);
  totalMarks += eliment.marks;
});
let avgMarks = totalMarks / 3;

console.log(`Tolal Marks: ${totalMarks}`);
console.log(`Average Marks: ${avgMarks}`);*/

// *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*

// ****12 Modified Problems — map(), filter(), reduce(), forEach()****

// **** Modified Array method Problem 1 - map() Double Values(Easy Problem) ****

/*let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((element) => {
  return element * 2;
});

let squared = numbers.map((eliment) => {
  return eliment * eliment;
});

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(squared); // [1, 4, 9, 16, 25]

console.log(numbers); // Original Array Unchanged*/

// **** Modified Array method Problem 2 - map() String Transformer(Easy Problem) ****

// Using map():
// 1) Create new array with all names in UPPERCASE
// 2) Create new array with each name's length
// 3) Print both results like:
//    ["AVIK", "RAHUL", "PRIYA", "SOURAV"]
//    [4, 5, 5, 6]

/*let names = ["avik", "rahul", "priya", "sourav"];

let Upper = names.map((element) => {
  return element.toUpperCase();
});

let lenghtName = names.map((element) => {
  return element.length;
});

console.log(Upper);
console.log(lenghtName);*/

// **** Modified Array method Problem 3 - filter() Basic(Easy Problem) ****
// Using filter():
// 1) Filter only PASSING marks (>= 40)
// 2) Filter only FAILING marks (< 40)
// 3) Print both arrays
// 4) Print count of passed and failed students

/*let marks = [35, 72, 48, 90, 28, 55, 61, 40];

let PassingMarks = marks.filter((element) => {
  return element >= 40;
});

let FailingMarks = marks.filter((element) => {
  return element < 40;
});

console.log(PassingMarks);
console.log(FailingMarks);
console.log(
  `Passing Student Count: ${PassingMarks.length} and Failing Student Count: ${FailingMarks.length}`,
);*/

// **** Modified Array method Problem 4 - forEach() Index Printer(Easy Problem) ****

/*let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

fruits.forEach((element, index) => {
  console.log(`${index + 1}. ${element}`);
});
fruits.forEach((element, index) => {
  if (element.length >= 6) {
    console.log(element);
  }
});*/

// **** Modified Array method Problem 5 - map() Temperature Converter ****

/*let celsius = [0, 20, 37, 100, -10];

let celsiusToFahrenheit = celsius.map((element) => {
  return (element * 9) / 5 + 32;
});

let celsiusToKelvin = celsius.map((element) => {
  return element + 273.15;
});

console.log(celsiusToFahrenheit);
console.log(celsiusToKelvin);*/

// **** Modified Array method Problem 6 - filter() + length ****

/*let products = [
  "Pen",
  "Notebook",
  "Eraser",
  "Geometry Box",
  "Sharpener",
  "Bag",
];

let moreThanFive = products.filter((element) => {
  return element.length > 5;
});
let lessThanFive = products.filter((element) => {
  return element.length <= 5;
});
console.log(moreThanFive); //['Notebook', 'Eraser', 'Geometry Box', 'Sharpener']
console.log(lessThanFive); // ['Pen', 'Bag']

let newArr = [moreThanFive, lessThanFive];

if (moreThanFive.length > lessThanFive.length) {
  console.log(
    `Group with named moreThanFive has more items (${moreThanFive.length} items).`,
  );
} else if (lessThanFive.length > moreThanFive.length) {
  console.log(
    `Group with named lessThanFive has more items (${lessThanFive.length} items).`,
  );
} else {
  console.log(
    `Both groups have the same number of items (${moreThanFive.length} items each).`,
  );
}
//Group with named moreThanFive has more items (4 items).*/

// **** Modified Array method Problem 7 - reduce() Calculator ****

/*let cartPrices = [199, 499, 149, 999, 299];

let totalPrice = cartPrices.reduce((element, total) => {
  return (total += element);
});

let discount = (totalPrice * 10) / 100;
let finalPrice = totalPrice - discount;

console.log(`Total amount of Cart Price ${totalPrice}`);
console.log(`Total amount of Discount ${discount}`);
console.log(`Final Price amount after Discount ${finalPrice}`);*/

// **** Modified Array method Problem 8 - map() on Array of Objects ****

/*let students = [
  { name: "Avik", marks: 85 },
  { name: "Rahul", marks: 92 },
  { name: "Priya", marks: 78 },
  { name: "Sourav", marks: 45 },
];

let studentName = students.map((element) => {
  return element.name;
});
let studentMarks = students.map((element) => {
  return element.marks;
});

let Grade = students.map((element, grade, marks) => {
  if (element.marks >= 80) {
    return { name: element.name, grade: "A" };
  } else {
    return { name: element.name, grade: "B" };
  }
});
console.log(studentName);
console.log(studentMarks);
console.log(Grade);*/

// **** Modified Array method Problem 9 - filter() on Array of Objects ****

/*let employees = [
  { name: "Alice", salary: 25000, department: "HR" },
  { name: "Bob", salary: 45000, department: "Tech" },
  { name: "Carol", salary: 32000, department: "Tech" },
  { name: "David", salary: 28000, department: "HR" },
  { name: "Eve", salary: 52000, department: "Tech" },
];

let techEmployees = employees.filter((element) => {
  return element.department === "Tech";
});

let salaryFilter = employees.filter((element) => {
  return element.salary > 30000;
});

console.log(techEmployees);
console.log(salaryFilter);
console.log(
  `Array filtered by Count of Tech Employees: ${techEmployees.length} and Array filtered by Count of Employees salary above 30000: ${salaryFilter.length}`,
);*/

// **** Modified Array method Problem 10 - reduce() to Find Maximum ****

/*let scores = [45, 92, 67, 88, 23, 99, 54];

let highestScore = scores.reduce((max, current) => {
  return current > max ? current : max;
});
let LowestScore = scores.reduce((max, current) => {
  return current < max ? current : max;
});
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${LowestScore}`);*/

// **** Modified Array method Problem 11 - map() + filter() Chain ****
// Step 1: Using map() → multiply each number by 3
// Step 2: Using filter() on result → keep only values > 15
// Step 3: Print final result
// Step 4: Do it in ONE chained line like:
//         numbers.map(...).filter(...)

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mapFilterChain = numbers
  .map((element) => {
    return element * 3;
  })
  .filter((element) => {
    return element > 15;
  });

console.log(mapFilterChain);*/

// **** Modified Array method Problem 12 - map() + filter() + reduce() Full Chain ****

/*let orders = [
  { product: "Laptop", price: 45000, delivered: true },
  { product: "Phone", price: 15000, delivered: false },
  { product: "Tablet", price: 25000, delivered: true },
  { product: "Earbuds", price: 2000, delivered: false },
  { product: "Charger", price: 1500, delivered: true },
];

//map + Filter + Reduce Chain

let deliveredOrders = orders.filter((element) => {
  return element.delivered === true;
});

let totalRevenue = deliveredOrders
  .map((element) => {
    return element.price;
  })
  .reduce((accumulator, current) => {
    return (accumulator += current);
  });

console.log(`Delivered Orders count: ${deliveredOrders.length}`);
console.log(`Total Revenue: ${totalRevenue}`);*/
