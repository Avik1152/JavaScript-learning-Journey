// 💰 Number Real-Life Problem 1 — EMI Calculator

// A person takes a loan of ₹50,000
// Interest rate is 10% per year
// Loan duration is 2 years
/*let userLoanTotalAmmaunt = 65000;
let interestRatePerYear = 10;
let durationOfLoanYear = 2;
// Calculate:
// 1) Total interest amount
let totalAmmountOfInterest =
  (userLoanTotalAmmaunt * interestRatePerYear * durationOfLoanYear) / 100;
// 2) Total amount to pay (loan + interest)
let totalPaybleLoanAmmount = userLoanTotalAmmaunt + totalAmmountOfInterest;
// 3) Monthly EMI (total amount / 24 months)
let totalMonthlyEMI = totalPaybleLoanAmmount / 24;

// Print:
// "Loan Amount: ₹50000"
console.log(`Total Loan Amount: ₹${userLoanTotalAmmaunt}`);
// "Total Interest: ₹[amount]"
console.log(`Total Ammount Of Interset ₹${totalAmmountOfInterest}`);
// "Total Payable: ₹[amount]"
console.log(`Total Payble Loan Ammount ₹${totalPaybleLoanAmmount}`);
// "Monthly EMI: ₹[amount]"
console.log(`Total Monthly EMI: ₹${totalMonthlyEMI}`);*/

// 🌡️ Number Real-Life Problem 2 — Temperature Converter

// Ask user to enter temperature in Celsius using prompt()
let userPlaceTemperature = parseInt(prompt("Enter Tempereture in Celcious"));
// Convert it to Fahrenheit
// Formula: (celsius * 9/5) + 32
let toFarenheit = (userPlaceTemperature * 9) / 5 + 32;
// Print:
// "Temperature in Celsius: [value]°C"
console.log(`Temperature in Celsius: ${userPlaceTemperature}°C`);
// "Temperature in Fahrenheit: [value]°F"
console.log(`Temperature in Farenheit: ${toFarenheit}°F`);

// Test with: 0°C → 32°F, 100°C → 212°F
