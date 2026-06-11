// ****Numbers****
let n = 123;
n = 12.345;

console.log(n + 4);
console.log(n - 4);
console.log(n * 4);
console.log(n / 4);

// alert(1 / 0); //Infinity
// alert(Infinity); //Infinity

// alert("number" / 2); //NaN

// Comprehensive Number Conversion Examples

// --- 1. The Main Method: Number() ---
console.log("--- 1. Number() Method ---");
let num1 = Number("123"); // 123
let num2 = Number("  45  "); // 45 (Trims whitespace)
let num3 = Number(""); // 0  (Empty string)
let num4 = Number(true); // 1
let num5 = Number(false); // 0

console.log(num1, num2, num3, num4, num5);

// --- 2. The Special Case: NaN (Not a Number) ---
console.log("\n--- 2. NaN Cases ---");
let badNum1 = Number("123abc"); // NaN (Contains letters)
let badNum2 = Number(undefined); // NaN

console.log(badNum1, badNum2);

// --- 3. Quick Alternatives (+, parseInt, parseFloat) ---
console.log("\n--- 3. Alternative Methods ---");
let fastNum = +"99"; // 99 (Unary plus shortcut)
let pixelValue = parseInt("100px"); // 100 (Stops at 'p')
let price = parseFloat("12.50$"); // 12.5 (Stops at '$')

console.log(fastNum, pixelValue, price);

// --- 4. Automatic Conversion (Implicit Math) ---
console.log("\n--- 4. Automatic Conversion ---");
let division = "6" / "2"; // 3 (Strings automatically converted to numbers for division)
let subtraction = "5" - 1; // 4 (String automatically converted for subtraction)

console.log(division, subtraction);
