// Real-Life Problem 1 — Shop Bill Calculator
// A customer buys 3 items:
// Item 1: Rice → ₹120
// Item 2: Oil → ₹95
// Item 3: Sugar → ₹60

// Store each price in a variable
let Rice_Price = 120;
let Oil_Price = 95;
let Sugar_Price = 60;
// Calculate total bill
let total_Price_Of_All_Items = Rice_Price + Oil_Price + Sugar_Price;
// Apply 10% discount on total
let discount_On_Total_Price = (total_Price_Of_All_Items * 10) / 100;

let ammount_pay_after_Discount =
  total_Price_Of_All_Items - discount_On_Total_Price;
// Print final amount to pay

// Expected output:
// "Total Bill: ₹275"
// "Discount: ₹27.5"
// "Amount to Pay: ₹247.5"
console.log(`Total Bill: ₹${total_Price_Of_All_Items}`);
console.log(`Discount: ₹${discount_On_Total_Price}`);
console.log(`Amount to Pay: ₹${ammount_pay_after_Discount}`);
