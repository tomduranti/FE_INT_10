// 1. Add 0.1 and 0.2 to get a mathematically correct answer.
let var1 = 0.1;
let var2 = 0.2;
console.log((var1 + var2).toFixed(1));

// 2. Add the string “1” and the digit 2 (both operands must be in variables), and get a mathematically correct answer.
let varString = "1";
let varNumber = 2;
console.log(varNumber + parseInt(varString));

// 3. Ask the user for a three-digit number and print it backwards. To solve the problem, you will need the % operator (remainder of division).
let userInput = +prompt("Enter 3 digits");
let lastDigit = userInput % 10;
let firstDigit = Math.floor(userInput / 100);
let middleDigit = Math.floor((userInput - (firstDigit * 100) - lastDigit) / 10);
console.log(lastDigit, middleDigit, firstDigit);