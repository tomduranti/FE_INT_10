// 1.Ask the user for their age and determine whether they are a child (0-11), teenager (12-17), adult (18_59), or pensioner (60...), and allow for the possibility of entering incorrect data.    
// let userInput = +prompt("What's your age?");

// //number type check    
// while ((Number.isNaN(userInput)) || userInput == "" || userInput < 0 || userInput > 150) {
//     userInput = +prompt("Input a valid number");
// };

// switch (true) {
//     case (userInput >= 0 && userInput <= 11):
//         console.log("You're a child!");
//         break;
//     case (userInput >= 12 && userInput <= 17):
//         console.log("You're a teenager!");
//         break;
//     case (userInput >= 18 && userInput <= 59):
//         console.log("You're an adult!");
//         break;
//     case (userInput >= 60):
//         console.log("You're a pensioner!");
//         break;
// };

// 2. Ask the user for a number from 0 to 9 and display the special character that is located on this key (1 !, 2 @, 3 #, etc.).
// let userInput = +prompt("Give me a number from 0 to 9");
// let special_char = [")", "!", `"`, "£", "$", "%", "^", "&", "*", "("];

// while (!(Number.isInteger(userInput)) || userInput < 0 || userInput > 9) {
//     userInput = +prompt("Please, input a number from 0 to 9");
// };

// console.log(special_char[userInput]);

// 3. Game “Guess the number”. Ask the user to guess a number from 0 to 100 and guess it in the following way: each iteration of the loop, divide the range of numbers in half, write the result in N and ask the user “Is your number > N, <N or == N?”.
// Depending on what the user says, reduce the range. The initial range is from 0 to 100, divide it in half and get 50. If the user has indicated that their number is > 50, then change the range to 50 to 100.
// And so on until the user selects == N (it will be useful to read about the algorithm: “binary search”).
let targetNumber = +prompt("Guess a number from 0 to 100");
let arrayGuess = [];
for (i = 0; i < 102; i++) { arrayGuess.push(i) }; // [0, 1, 2, 3, 4, ..., 99]
let midElement = Math.floor((arrayGuess.length -1) / 2);

let counter = 0;

while (counter < 4) {

    if (targetNumber === arrayGuess[midElement]) {
        console.log(`Your number is ${arrayGuess[midElement]}`)
    } else if (targetNumber < arrayGuess[midElement]) {
        arrayGuess = arrayGuess.slice(0, midElement);
        midElement = Math.floor((arrayGuess.length -1) / 2);
    } else if (targetNumber > arrayGuess[midElement]) {
        arrayGuess = arrayGuess.slice(midElement, -1);
        midElement = Math.floor((arrayGuess.length -1) / 2);
    }
    counter++
    console.log(midElement)
    console.log(arrayGuess)
}


