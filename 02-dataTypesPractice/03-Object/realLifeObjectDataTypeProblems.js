// *****Real-life object data type problems 1 — Patient Record System******
// Create an object called "patient" with:
// "full name", age, bloodGroup, disease, isAdmitted(boolean)

// Then:
// 1) Print full patient details using for...in loop like:
//    "full name : Avik Mondal"
//    "age : 25"
// 2) Check if "bloodGroup" exists using "in" operator
// 3) Add new property: ward = "ICU"
// 4) Print total properties after adding
// 5) Print all keys using Object.keys()

/*let patient = {
  "full name": "John Doe",
  age: 45,
  bloodGroup: "A+",
  disease: "Hypertension",
  isAdmitted: true,
};
for (let key in patient) {
  console.log(`"${key} : ${patient[key]}"`);
}
console.log("bloodGroup" in patient); // true

patient.ward = "ICU";
console.log(Object.keys(patient).length); // 6
console.log(`Keys: ${Object.keys(patient).join(", ")}`); // full name, age, bloodGroup, disease, isAdmitted, ward*/

// *****Real-life object data type problems 2 — Shopping Cart******
// Create object called "cart" with 4 items and their prices:
// rice: 120, oil: 95, sugar: 60, biscuit: 40

// Then:
// 1) Calculate total bill using for...in loop
// 2) Apply 5% discount on total
// 3) Print:
//    "Items in Cart: rice, oil, sugar, biscuit"  (use .join())
//    "Total Bill: ₹[amount]"
//    "Discount: ₹[amount]"
//    "Final Amount: ₹[amount]"

/*let cart = {
  rice: 120,
  oil: 95,
  sugar: 60,
  biscuit: 40,
};
let totalBill = 0;
for (let key in cart) {
  totalBill += cart[key];
}

let dicountAmount = (totalBill * 5) / 100; // as 5% discount
let finalAmount = totalBill - dicountAmount;

console.log(`"Items in Cart: ${Object.keys(cart).join(", ")}"`);
console.log(`"Total Bill: ₹${totalBill}"`);
console.log(`"Discount: ₹${dicountAmount}"`);
console.log(`"Final Amount: ₹${finalAmount}"`);*/

// **** Real-life object data type problems 3  — School Report Generator ****

/*let report = {
  "student Name": "Ravi Chatterjee",
  rollNo: 13,
  Math: 85,
  Science: 95,
  English: 75,
  Computer: 80,
};
let totalmarks = 0;
let subjectCount = 0;
for (let key in report) {
  if (typeof report[key] === "number" && key !== "rollNo") {
    totalmarks += report[key];
    subjectCount++;
  }
}
let calculateAverage = totalmarks / subjectCount;

console.log(`"Student: ${report["student Name"]} | Roll: ${report.rollNo}`);
console.log(`"Total: ${totalmarks} / 400"`);
console.log(`"Average: ${calculateAverage}"`);

if (calculateAverage >= 40) {
  console.log(`Result: Pass`);
} else {
  console.log(`Result: Fail`);
}*/

// **** Real-life object data type problems 4 — Product Stock Manager ****

/*let stock = {
  apple: 50,
  banana: 0,
  mango: 30,
  grape: 0,
  orange: 15,
};
let outOfStock = 0;
let availableItems = 0;
for (let key in stock) {
  let quantity = stock[key];
  if (quantity === 0) {
    console.log(`${key}: OUT OF STOCK`);
    outOfStock++;
  }
  if (quantity > 0) {
    console.log(`${key}: AVAILABLE`);
    availableItems++;
  }
}
console.log(`Out of Stock Items Count: ${outOfStock}`);
console.log(`Available Items Count: ${availableItems}`);*/

// **** Real-life object data type problems 5 — User Profile Updater ****
/*let newEmail = prompt("Enter Your New Email Id", "newemail@gmail.com");
let user = {
  username: "avik_dev",
  email: "avik_dev@gmail.com",
  age: 26,
  isPremium: false,
  points: 0,
};
user.isPremium = true;
user.points = 500;
user.email = newEmail;
for (let key in user) {
  console.log(`"${key}: ${user[key]}"`);
}
if (user.isPremium === true) {
  console.log(`"Yes, You are a premium user"`);
} else {
  console.log(`"No, You are not a premium user"`);
}*/

// **** Real-life object data type problems 6 —  Bank Account System ****
let newDeposit = parseInt(prompt("Enter deposit amount"));
let newWithdrawal = parseInt(prompt("Enter withdrawal amount"));
let account = {
  holderName: "Akshay Tribedi",
  accountNo: 123443211234,
  balance: 10000,
  isActive: true,
};
account.balance += newDeposit;
if (newWithdrawal > account.balance) {
  console.log(
    `current Ballance in your account is ${account.balance} and you put withdrawal ammount ${newWithdrawal} ⚠️ Insufficient Balance`,
  );
} else {
  account.balance -= newWithdrawal;
  console.log(
    `current Ballance in your account is ${account.balance} and you put withdrawal ammount ${newWithdrawal} ✔ subtract from balance`,
  );
}

console.log(`"Account Holder: ${account.holderName}"`);
console.log(`"Account No: ${account.accountNo}"`);
console.log(`"Final Balance: ₹${account.balance}"`);
if (account.isActive === true) {
  console.log(`"Account Status: Active"`);
} else {
  console.log(`"Account Status: Inactive"`);
}
