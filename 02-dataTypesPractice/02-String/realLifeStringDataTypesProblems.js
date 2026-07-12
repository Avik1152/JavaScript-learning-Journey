//🪪 String Real-Life Problem 1 — Username Generator

// Ask user:
// 1) First name
// 2) Birth year

// Generate username like this:
// firstName (lowercase) + "_" + birthYear
// Example: "avik_2000"

// Then print:
// "Your Username: avik_2000"
// "Username Length: [length]"
// "First Character: [char]"

/*let userFirstName = prompt("Enter Your First Name(small letter)");
let userBirthYear = prompt("Enter Birth Year Only");

// let firstUserName = `${userFirstName}_${userBirthYear}`;
let firstUserName = userFirstName + "_" + userBirthYear;

console.log(`Your Username: ${firstUserName}`);
console.log(`Your Username Length: ${firstUserName.length}`);
console.log(`First Character is: ${firstUserName.at(0)}`);*/

// 📱 String Real-Life Problem 2 — Phone Number Formatter

let phoneNumber = "9876543210"; // 10 digit string

// Extract and print:
// 1) Country code added: "+91-9876543210"
// 2) First 5 digits (using slice)
// 3) Last 5 digits (using slice)
// 4) Total length of original number
// 5) Does it start with "98"? (use .startsWith())

/*let countryCode = "+91";
let countryCodeAddPhoneNumber = `${countryCode}-${phoneNumber}`;

console.log(`Country Code added: \"${countryCodeAddPhoneNumber}\"`);
console.log(countryCodeAddPhoneNumber.slice(0, 5));
console.log(countryCodeAddPhoneNumber.slice(9, 15));
console.log(phoneNumber.length);
console.log(phoneNumber.startsWith("98"));*/

// 📧 String Real-Life Problem 3 — Email Validator (Basic)

// Ask user to enter their email using prompt()
// Then check:
// 1) Does it include "@"?
// 2) Does it include "."?
// 3) What is total length of email?
// 4) Print email in lowercase

// Print result like:
// "Email: [email]"
// "Has @: true/false"
// "Has dot: true/false"
// "Length: [length]"

/*let userEmail = prompt("Enter Your Email");

let emailInAt = `${userEmail.includes("@")}`;
let emailInDot = `${userEmail.includes(".")}`;

let validateEmail = `${userEmail.includes("@")}`;

if (validateEmail === "true") {
  console.log("Email is valid");
} else {
  console.log("Invalid EmailID!");
}
console.log(`Your Email Id is: ${userEmail}`);
console.log(`In the Email has @: ${emailInAt}`);
console.log(`In the Email has .: ${emailInDot}`);
console.log(`Total Length of Email is: ${userEmail.length}`);*/

// 🏷️ String Real-Life Problem 4 — Product Label Cleaner

// Imagine user typed product name with extra spaces and wrong case
let rawInput = "   lAPtoP gAMinG   ";

// Clean it up:
// 1) Trim the spaces
// 2) Convert to proper format → "LAPTOP GAMING" (uppercase)
// 3) Check if it includes "GAMING" after cleaning
// 4) Replace "GAMING" with "PRO GAMING"
// 5) Print final cleaned label

// Print:
// "Raw Input: '   lAPtoP gAMinG   '"
// "Cleaned: 'LAPTOP PRO GAMING'"

// let trimRowInput = rawInput.trim();
let convertProperCleanFormat = rawInput
  .trim()
  .toUpperCase()
  .replace("GAMING", "PRO GAMING");

console.log(convertProperCleanFormat.includes("GAMING"));
console.log(convertProperCleanFormat);

console.log(`Raw Input Before Cleaning the Product name: ${rawInput}`);
console.log(`After Cleaning the Product name: ${convertProperCleanFormat}`);
