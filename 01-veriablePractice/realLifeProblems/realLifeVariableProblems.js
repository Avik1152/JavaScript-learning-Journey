// Real-Life Problem 1 — Shop Bill Calculator
// A customer buys 3 items:
// Item 1: Rice → ₹120
// Item 2: Oil → ₹95
// Item 3: Sugar → ₹60

// Store each price in a variable
/*let Rice_Price = 120;
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
console.log(`Amount to Pay: ₹${ammount_pay_after_Discount}`);*/

// Real-Life Problem 2 — Student Report Card

// Ask user 3 subject marks using prompt()
// Subject 1: Math
// Subject 2: Science
// Subject 3: English
let mathObtainedMarks = parseInt(prompt("Write the Obtained marks of Math"));
let scienceObtainedMarks = parseInt(
  prompt("Write the Obtained marks of Science"),
);
let englishObtainedMarks = parseInt(
  prompt("Write the Obtained marks of English"),
);
// Calculate total and average
let totalObtainedMarksOfAllSubject =
  mathObtainedMarks + scienceObtainedMarks + englishObtainedMarks;
let averageOfTotalObtainedMarks = totalObtainedMarksOfAllSubject / 3;
// Print:
// "Total Marks: [total] / 300"
console.log(`Total Obtained Marks: ${totalObtainedMarksOfAllSubject} / 300`);
// "Average: [average]"
console.log(`Average of total obtained marks: ${averageOfTotalObtainedMarks}`);
// "Result: Pass" (if average >= 40) or "Result: Fail"
if (averageOfTotalObtainedMarks >= 40) {
  let resultPass = "Pass";
  console.log(`Result: ${resultPass}`);
} else {
  let resultFail = "Fail";
  console.log(`Result: ${resultFail}`);
}
