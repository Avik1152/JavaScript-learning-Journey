// Easy (Problems 1–6) — Basic Array Operations

// **** Real Life Array Problem 1 - Classroom Roll Call ****

/*let student = ["Asutosh", "Rahul", "Rabi", "Sourav", "Priya", "Kritika"];

console.log(student.length);
console.log(
  `First student: ${student.at(1)} and Last student: ${student.at(-1)}`,
);

student.push("Akshay", "Vikash");
student.shift();

console.log(student);

student.forEach((element, index) => {
  console.log(`Roll ${index + 1} - ${element}`);
});*/

// **** Real Life Array Problem 2 - Movie Watchlist Manager ****

/*let movieList = ["RRR", "KGF", "OMG", "Bahubali"];

movieList.push("Bahubali 2", "KGF 2");
movieList.unshift("Mission Imposible");

movieList.forEach((element, index) => {
  console.log(`"${index + 1}. ${element}"`);
});

let lastMovie = movieList.pop();
console.log(`Removed: ${lastMovie}`);

console.log(
  `Finally Tolal movies in the list is: ${movieList} and count of the movie is ${movieList.length}.`,
);*/

// **** Real Life Array Problem 3 - Grocery List Splitter ****

/*let grocery = [
  "Rice",
  "Oil",
  "Sugar",
  "Salt",
  "Face Wash",
  "Soap",
  "Shampoo",
  "Toothpaste",
];

let foodItems = grocery.slice(0, 4);
let nonFoodItems = grocery.slice(-4, grocery.length);

console.log(`Food Items: ${foodItems} and Non Food items ${nonFoodItems}`);
console.log(grocery);
console.log(
  `Total items in Food Items: ${foodItems.length} Total items in Non Food Items: ${nonFoodItems.length}`,
);*/

// **** Real Life Array Problem 4 - Class Merger ****

/*let studentGr1 = ["Avik", "Rahul", "Priya"];
let studentGr2 = ["Sourav", "Sneha", "Rohan"];
let studentGr3 = ["Tina", "Mehul", "Alice"];

let fullBatch = studentGr1.concat(studentGr2, studentGr3);

console.log(fullBatch);
console.log(`Total Student is: ${fullBatch.length}`);

console.log(
  `First Student: ${fullBatch.at(1)} and last student: ${fullBatch.at(-1)}`,
);
console.log(fullBatch.includes("Avik"));*/

// **** Real Life Array Problem 5 - Temperature Log ****

/*let weekTemps = [28, 32, 30, 35, 29, 33, 31];

weekTemps.forEach((element, index) => {
  console.log(`"Day ${index + 1}: ${element}°C"`);
});

let heatAboveThirty = weekTemps.filter((element) => {
  return element > 30;
});

console.log(`"Hot days this week: ${heatAboveThirty.length}"`);*/

// **** Real Life Array Problem 6 - Schedule Inserter ****

/*let schedule = ["9AM - Math", "11AM - Science", "3PM - Sports"];

schedule.splice(1, 0, "10AM - English");
schedule.splice(3, 0, "2PM - Computer");

console.log(schedule);

schedule.splice(-1, 1);
console.log(schedule);
*/

// **** Real Life Array Problem 7 - Salary Processor ****

/*let salaries = [25000, 32000, 45000, 28000, 52000, 38000];

let afterAddBonus = salaries.map((element) => {
  return element + (element * 10) / 100;
});

let afterDeductTax = afterAddBonus.map((element) => {
  return element - (element * 5) / 100;
});

let heigerSalary = afterDeductTax.filter((element) => {
  return element > 35000;
});

let totalFinalSlary = afterDeductTax.reduce((accumulator, current) => {
  return (accumulator += current);
});

console.log(afterAddBonus);
console.log(afterDeductTax);
console.log(heigerSalary);
console.log(totalFinalSlary);*/

// **** Real Life Array Problem 8 - Student Grade Calculator ****
/*let students = [
  { name: "Avik", marks: 92 },
  { name: "Rahul", marks: 45 },
  { name: "Priya", marks: 78 },
  { name: "Sourav", marks: 33 },
  { name: "Sneha", marks: 88 },
  { name: "Rohan", marks: 60 },
];

let gradeAdd = students.map((element) => {
  let grade;
  if (element.marks >= 80) {
    grade = "A";
  } else if (element.marks >= 60) {
    grade = "B";
  } else if (element.marks >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }
  return { ...element, grade };
});

let passingStudent = gradeAdd.filter((element) => {
  return element.marks >= 40;
});

let gradeA = gradeAdd.filter((element) => {
  return element.grade === "A";
});

let totalMarks = gradeAdd.reduce((accumulator, student) => {
  return accumulator + student.marks;
}, 0);

console.log(gradeAdd);
console.log(passingStudent);
console.log(gradeA);
console.log(totalMarks);*/

// **** Real Life Array Problem 9 - Product Price Filter ****

/*let products = [
  { name: "Laptop", price: 45000, category: "Electronics" },
  { name: "Shirt", price: 799, category: "Clothing" },
  { name: "Phone", price: 15000, category: "Electronics" },
  { name: "Jeans", price: 1299, category: "Clothing" },
  { name: "Tablet", price: 25000, category: "Electronics" },
  { name: "Shoes", price: 2499, category: "Clothing" },
];

let electronicsProducts = products.filter((element) => {
  return element.category === "Electronics";
});

let itemsUnder5000 = products.filter((elements) => {
  return elements.price > 5000;
});

let discount = products.map((element) => {
  return element.price - (element.price * 10) / 100;
});

let productsTotalValue = discount.reduce((accumulator, current) => {
  // return (accumulator += current); // I also write this give perfect output
  return accumulator + current; // but I try this
}, 0);
console.log(electronicsProducts);
console.log(itemsUnder5000);
console.log(discount);
console.log(productsTotalValue);*/

// **** Real Life Array Problem 10 - Temperature Analyzer ****

/*let monthlyTemps = [22, 28, 35, 38, 40, 37, 32, 30, 27, 24, 20, 18];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let convertToFahrenheit = monthlyTemps.map((elements) => {
  return (elements * 5) / 9 + 32;
});

let aboveTempMonths = months.filter((element, index) => {
  return monthlyTemps[index] > 35;
});

console.log(aboveTempMonths);

let totalTemp = monthlyTemps.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(totalTemp / monthlyTemps.length);

monthlyTemps.forEach((element, index) => {
  console.log(`"${months[index]}: ${element}°C"`);
});*/

// **** Real Life Array Problem 11 - Shopping Cart System ****

/*let cart = [
  { item: "Rice", price: 120, qty: 2 },
  { item: "Oil", price: 95, qty: 1 },
  { item: "Biscuit", price: 40, qty: 5 },
  { item: "Soap", price: 35, qty: 3 },
  { item: "Shampoo", price: 180, qty: 1 },
];

let totalCostParItem = cart.map((element) => {
  return element.price * element.qty;
});

let findItemsAbove100 = totalCostParItem.filter((element) => {
  return element > 100;
});

let totalCartValue = totalCostParItem.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

let DiscountAmount = (totalCartValue * 8) / 100;
let finalCartValue = totalCartValue - DiscountAmount;

console.log(`Item wise cost: ${totalCostParItem}`);
console.log(`Items above 100: ${findItemsAbove100}`);
console.log(`Grand Total before Discount Value: ${totalCartValue}`);
console.log(`Discount Amount: ${DiscountAmount}`);
console.log(`Final Cart Value: ${finalCartValue}`);*/

// **** Real Life Array Problem 12 — Attendance System ****

/*let attendance = [
  { name: "Avik", present: true },
  { name: "Rahul", present: false },
  { name: "Priya", present: true },
  { name: "Sourav", present: false },
  { name: "Sneha", present: true },
  { name: "Rohan", present: true },
];

let presentStudents = attendance.filter((element) => {
  return element.present === true;
});

let absentStudents = attendance.filter((element) => {
  return element.present === false;
});

let presentStudentsName = presentStudents.map((element) => {
  return element.name;
});

attendance.forEach((element) => {
  if (element.present === true) {
    console.log(`"${element.name}: Present ✅"`);
  } else {
    console.log(`"${element.name}: Absent ❌"`);
  }
});

console.log(
  `Counts of Present Students is ${presentStudents.length} and Absent Students is ${absentStudents.length}`,
);*/

// **** Real Life Array Problem 13 — 2D Marks Table ****

/*let marksTable = [
  [85, 90, 78, 92], // Avik
  [72, 68, 80, 75], // Rahul
  [95, 88, 91, 87], // Priya
  [45, 52, 48, 60], // Sourav
];
let studentNames = ["Avik", "Rahul", "Priya", "Sourav"];

studentNames.forEach((element, index) => {
  console.log(`${element}: ${marksTable[index].join(" | ")}`);
});

marksTable.forEach((element, index) => {
  let totalMarks = element.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
  let Average = totalMarks / element.length;
  console.log(
    `${studentNames[index]}: Total Marks: ${totalMarks} Average Marks: ${Average}`,
  );
});*/

// **** Real Life Array Problem 14 — Word Analyzer ****
/*let sentence = "I love JavaScript and I love building real projects";
let words = sentence.split(" ");

console.log(words.length); // 9

let findWords = words.filter((element) => {
  return element.length > 4;
});
console.log(findWords);
let Upper = words.map((element) => {
  return element.toUpperCase();
});
console.log(Upper);
let longestWord = words.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
});
console.log(longestWord);
let loveCount = words.filter((element) => {
  return element === "love";
}).length;

console.log(loveCount);*/

// **** Real Life Array Problem 15 — Inventory Manager ****

/*let inventory = [
  { product: "Apple", stock: 50, price: 10 },
  { product: "Banana", stock: 0, price: 5 },
  { product: "Mango", stock: 30, price: 20 },
  { product: "Grape", stock: 0, price: 15 },
  { product: "Orange", stock: 20, price: 12 },
];

let outOfStock = inventory.filter((element) => {
  return element.stock === 0;
});
console.log(outOfStock);
console.log(outOfStock.length);
let availableStocks = inventory.filter((element) => {
  return element.stock !== 0;
});
console.log(availableStocks);
console.log(availableStocks.length);

let incresePrice = inventory.map((element) => {
  return { ...element, price: element.price + (element.price * 10) / 100 };
});
console.log(incresePrice);
console.log(incresePrice.length);

let totalStockPriceValue = incresePrice.reduce((accumulator, current) => {
  return accumulator + current.price * current.stock;
}, 0);
console.log(totalStockPriceValue);*/

// **** Real Life Array Problem 16 — Employee Bonus System ****

/*let employees = [
  { name: "Alice", salary: 25000, performance: "Excellent", years: 5 },
  { name: "Bob", salary: 45000, performance: "Good", years: 2 },
  { name: "Carol", salary: 32000, performance: "Excellent", years: 8 },
  { name: "David", salary: 28000, performance: "Average", years: 1 },
  { name: "Eve", salary: 52000, performance: "Good", years: 6 },
];

let excellentPerformar = employees.filter((element) => {
  return element.performance === "Excellent";
});
console.log(excellentPerformar);

let employeesAddBonus = employees.map((element) => {
  if (element.performance === "Excellent") {
    return { ...element, salary: element.salary + (element.salary * 20) / 100 };
  } else if (element.performance === "Good") {
    return { ...element, salary: element.salary + (element.salary * 10) / 100 };
  } else if (element.performance === "Average") {
    return { ...element, salary: element.salary + (element.salary * 5) / 100 };
  }
});
console.log(employeesAddBonus);

let totalBonusAmount = employeesAddBonus.reduce((accumulator, current) => {
  return accumulator + current.salary;
}, 0);
console.log(`Total Bonus amount company pays ${totalBonusAmount}`);

let getNamesOfEmployees = employeesAddBonus
  .filter((element) => {
    return element.salary > 30000;
  })
  .map((element) => {
    return element.name;
  });

console.log(
  `Get names of employees with salary above 30000 = ${getNamesOfEmployees.join(", ")}`,
);*/

// **** Real Life Array Problem 17 — Student Leaderboard ****

/*let results = [
  { name: "Avik", math: 92, science: 88, english: 85 },
  { name: "Rahul", math: 75, science: 80, english: 70 },
  { name: "Priya", math: 95, science: 92, english: 90 },
  { name: "Sourav", math: 60, science: 65, english: 72 },
  { name: "Sneha", math: 88, science: 85, english: 91 },
];

let totalAndAverage = results.map((element) => {
  return {
    ...element,
    total: element.math + element.science + element.english,
    average: Math.round((element.math + element.science + element.english) / 3),
  };
});

console.log(totalAndAverage);

let findStudent = totalAndAverage.filter((element) => {
  return element.average >= 80;
});

console.log(findStudent);

let findToper = totalAndAverage.reduce((top, current) => {
  return current.total > top.total ? current : top;
});
console.log(findToper);

// [...totalAndAverage].sort(...)     // Returns the sorted array
[...totalAndAverage]
  .sort((elementA, elementB) => {
    return elementB.total - elementA.total;
  })
  .forEach((element, index) => {
    if (true) {
      console.log(
        `${index + 1}. ${element.name} - Total: ${element.total} Avg: ${element.average} `,
      );
    }
  });*/

// **** Real Life Array Problem 18 — E-commerce Order System ****

/*let orders = [
  {
    id: 1,
    customer: "Avik",
    items: ["Laptop", "Mouse"],
    total: 46000,
    status: "delivered",
  },
  {
    id: 2,
    customer: "Rahul",
    items: ["Phone"],
    total: 15000,
    status: "pending",
  },
  {
    id: 3,
    customer: "Priya",
    items: ["Tablet", "Charger"],
    total: 26500,
    status: "delivered",
  },
  {
    id: 4,
    customer: "Sourav",
    items: ["Earbuds"],
    total: 2000,
    status: "cancelled",
  },
  {
    id: 5,
    customer: "Sneha",
    items: ["Laptop"],
    total: 45000,
    status: "delivered",
  },
];

let deliveredOrder = orders.filter((element) => {
  return element.status === "delivered";
});
console.log(deliveredOrder);

let customarName = deliveredOrder.map((element) => {
  return element.customer;
});
console.log(customarName);

let totalRevenue = deliveredOrder.reduce((accumulator, current) => {
  return accumulator + current.total;
}, 0);
console.log(totalRevenue);

let orderAbove20000 = orders.filter((element) => {
  return element.total > 20000;
});
console.log(orderAbove20000);

let summary = deliveredOrder.map((element) => {
  return {
    customer: element.customer,
    itemsCount: element.items.length,
    total: element.total,
  };
});
console.log(summary);*/

// **** Real Life Array Problem 19 — Bank Transaction Analyzer ****

/*let transactions = [
  { type: "credit", amount: 5000, date: "Jan" },
  { type: "debit", amount: 1200, date: "Jan" },
  { type: "credit", amount: 8000, date: "Feb" },
  { type: "debit", amount: 3000, date: "Feb" },
  { type: "credit", amount: 2000, date: "Mar" },
  { type: "debit", amount: 500, date: "Mar" },
];

let credits = transactions.filter((element) => {
  return element.type === "credit";
});
let debits = transactions.filter((element) => {
  return element.type === "debit";
});

let totalDebited = debits.reduce((accumulator, current) => {
  return accumulator + current.amount;
}, 0);

let totalCredit = credits.reduce((accumulator, current) => {
  return accumulator + current.amount;
}, 0);

let finalBal = totalCredit - totalDebited;
// console.log(finalBal);

let transactionSummury = transactions.map((element) => {
  // if (element.type === "credit") {
  //   return `${element.date}: +₹${element.amount}`;
  // } else if (element.type === "debit") {
  //   return `${element.date}: -₹${element.amount}`;
  // }

  // above code - is perfectly work but I want try it in one line.
  return `${element.date}: ${element.type === "credit" ? "+" : "-"}₹${element.amount}`;
});
console.log(transactionSummury);*/

// **** Real Life Array Problem 20 — Seating Chart Manager (2D) ****

/*let cinema = [
  ["A1", "A2", "A3", "A4", "A5"],
  ["B1", "B2", "B3", "B4", "B5"],
  ["C1", "C2", "C3", "C4", "C5"],
];

let seatingChart = cinema.map((element, index) => {
  return element.join(" | ");
});
console.log(seatingChart);

let bookedSeats = cinema.map((element) => {
  return element.map((element) => {
    if (element === "B3" || element === "A5") {
      return "Booked";
    } else {
      return element;
    }
  });
});
console.log(bookedSeats);

let bookedSeatsCount = 0;
bookedSeats.flat().forEach((element) => {
  if (element === "Booked") {
    bookedSeatsCount++;
  }
});
console.log(`Booked Seat count: ${bookedSeatsCount}`);

let availableSeats = bookedSeats.flat().filter((element) => {
  return element !== "Booked";
}).length;
console.log(`Available Seat count: ${availableSeats}`);

console.log(`Total Seats count: ${cinema.flat().length}`);*/

// **** Real Life Array Problem 21 — Marks Statistics (Full Chain) ****

/*let classMarks = [92, 45, 78, 33, 88, 60, 72, 55, 95, 40, 28, 85];

let passingStudentMarks = classMarks.filter((element) => {
  return element >= 40;
});

let highestMark = passingStudentMarks.reduce((accumulator, current) => {
  return current > accumulator ? current : accumulator;
});
let lowestMark = passingStudentMarks.reduce((accumulator, current) => {
  return current < accumulator ? current : accumulator;
});

// console.log(highestMark);
// console.log(lowestMark);

let totalpassingMark = passingStudentMarks.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

let avg = totalpassingMark / passingStudentMarks.length;
// console.log(totalpassingMark);
// console.log(avg);

let grade = classMarks.map((element) => {
  if (element >= 80) {
    return (element = "A");
  } else if (element >= 60) {
    return (element = "B");
  } else if (element >= 40) {
    return (element = "C");
  } else {
    return (element = "F");
  }
});
// console.log(grade);

let failCount = grade.filter((element) => {
  return element === "F";
}).length;

// console.log(failCount);*/

// **** Real Life Array Problem 22 — Social Media Feed ****

/*let posts = [
  { user: "Avik", likes: 245, comments: 18, topic: "Tech" },
  { user: "Rahul", likes: 89, comments: 5, topic: "Sports" },
  { user: "Priya", likes: 512, comments: 43, topic: "Tech" },
  { user: "Sourav", likes: 34, comments: 2, topic: "Food" },
  { user: "Sneha", likes: 678, comments: 67, topic: "Tech" },
  { user: "Rohan", likes: 123, comments: 9, topic: "Sports" },
];

let techPost = posts.filter((element) => {
  return element.topic === "Tech";
});
console.log(techPost);

let engagementScore = posts.map((element) => {
  return { ...element, engagement: element.likes + element.comments * 2 };
});

console.log(engagementScore);

let mostEngagingPost = engagementScore.reduce(
  (accumulator, current, index) => {
    return current.engagement > accumulator.engagement ? current : accumulator;
  },
  { engagement: 0 },
);
console.log(mostEngagingPost);

let likesAbove200 = engagementScore.filter((element) => {
  return element.likes > 200;
});
console.log(likesAbove200);

let totalLikesSport = engagementScore
  .map((element) => {
    return { ...element, isSport: element.topic === "Sports" };
  })
  .filter((element) => {
    return element.isSport === true;
  })
  .reduce((accumulator, current, element) => {
    return accumulator + current.likes;
  }, 0);
console.log(`Total likes of Sports category ${totalLikesSport}`);*/

// **** Real Life Array Problem 23 — Delivery Route Planner (2D) ****

let deliveryMap = [
  ["Start", "Street1", "Street2"],
  ["Street3", "Warehouse", "Street4"],
  ["Street5", "Street6", "End"],
];

deliveryMap.forEach((element) => {
  console.log(element.join(" → "));
});

let warehousePos = deliveryMap.forEach((element, index, row, col) => {
  if (element[index] === "Warehouse") {
    console.log(
      `Warehouse found at Row: ${index + 1} and Col: ${element.indexOf("Warehouse") + 1}`,
    );
  }
});

let change = deliveryMap.map((element) => {
  return element.map((element) => {
    if (
      element === "Street1" ||
      element === "Street2" ||
      element === "Street3" ||
      element === "Warehouse"
    ) {
      return "DELIVERED";
    } else if (element === "Street4") {
      return "New Stop";
    }
    return element;
  });
});
console.log(change);

let totalLocations = deliveryMap.reduce((accumulator, current) => {
  return (
    accumulator +
    current
      .map((element) => {
        if (element !== "Start" && element !== "End") {
          // console.log(element);
          return true;
        }
        // console.log(element);
        return false;
      })
      .reduce((acc, val) => {
        // console.log(val);
        return acc + val; // val = 2 -> 3 -> 2
      }, 0)
  );
}, 0);
console.log(`Total Locations: ${totalLocations}`);
