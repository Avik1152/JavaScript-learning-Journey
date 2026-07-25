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
  console.log(prices[index] * 2);
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

// **** Modified Array Problems 5 — forEach Practice ****

/*let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

let index = colors
// colors.forEach();*/
