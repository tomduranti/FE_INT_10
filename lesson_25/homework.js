// 1. Create three variables for numeric, string, and boolean data, convert each of them to two other types (number -> string and boolean, string -> number and boolean, boolean -> number and string)
let numVar = 2;
let strVar = "Hello, world";
let boolVar = true;

// num -> str, bool
console.log(String(numVar), typeof(String(numVar)), Boolean(numVar), typeof(Boolean(numVar)));

// str -> num, bool
console.log(Number(strVar), typeof(Number(strVar)), Boolean(strVar), typeof(Boolean(strVar)));

// bool -> str, num
console.log(String(boolVar), typeof(String(boolVar)), Number(boolVar), typeof(Number(boolVar)));

// 2. Below is a code that asks the user for two numbers and shows their sum.
// It does not work correctly. The code in the example outputs 12 (for the default field values).
// What is the error? Fix it. The result should be 3.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(Number(a) + Number(b)); // 3

// 3. What would be the result of the expressions below?
"" + 1 + 0 // 1 -> "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2 
"2" * "3" // 6
4 + 5 + "px" // 45px -> "9px"
"$" + 4 + 5 // error -> "$45"
"4" - 2 // 2
"4px" - 2 // 2px -> NaN
"  -9  " + 5 // -4 -> '  -9  5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // 1 -> NaN