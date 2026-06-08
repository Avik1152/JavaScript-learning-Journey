// 💰 Number Real-Life Problem 1 — EMI Calculator

// A person takes a loan of ₹50,000
// Interest rate is 10% per year
// Loan duration is 2 years
let userLoanTotalAmmaunt = 65000;
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
console.log(`Total Monthly EMI: ₹${totalMonthlyEMI}`);
