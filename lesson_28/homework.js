// 1. Write all possible variants of creating functions.
// function declaration
function print(statement) {
    let print = console.log(statement);
    return print;
};

// function expression
const printSomething = (function (statement) {
    let print = console.log(statement);
    return print;
});

// array function
const printStatement = (statement) => { return console.log(statement) };

// 2. Create a function that will print the number of arguments passed to it.
const printNum = (num, ...Args) => { return console.log(num, Args) };

// 3. Write a function that takes 2 numbers and returns:
// a) -1, if the first number is less than the second; 
// b) 1 - if the first number is greater than the second; 
// c) 0 - if the numbers are equal.
const printInteger = (a, b) => { return a < b ? -1 : (a > b ? 1 : 0) }

// 4. Write a function that takes three separate digits and converts them into one number. For example: the digits 1, 4, 9 will be converted to the number 149.
function convInteger(a, b, c) {
    result = a.toString() + b.toString() + c.toString();
    return console.log(parseInt(result));
}

// 5. Write a function that takes the length and width of a rectangle and calculates its area. If you pass 1 parameter to the function, it calculates the area of the square
const calcArea = function (length, width = length) {
    result = length * width;
    return result;
};

calcArea(2);