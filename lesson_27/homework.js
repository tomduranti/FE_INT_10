// // 1.Ask the user for their age and determine whether they are a child (0-11), teenager (12-17), adult (18_59), or pensioner (60...), and allow for the possibility of entering incorrect data.    
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

// // 2. Ask the user for a number from 0 to 9 and display the special character that is located on this key (1 !, 2 @, 3 #, etc.).
// let userPrompt = +prompt("Give me a number from 0 to 9");
// let special_char = [")", "!", `"`, "£", "$", "%", "^", "&", "*", "("];

// while (!(Number.isInteger(userPrompt)) || userPrompt < 0 || userPrompt > 9) {
//     userPrompt = +prompt("Please, input a number from 0 to 9");
// };

// console.log(special_char[userPrompt]);

// 3. Game “Guess the number”. Ask the user to guess a number from 0 to 100 and guess it in the following way: each iteration of the loop, divide the range of numbers in half, write the result in N and ask the user “Is your number > N, <N or == N?”.
// Depending on what the user says, reduce the range. The initial range is from 0 to 100, divide it in half and get 50. If the user has indicated that their number is > 50, then change the range to 50 to 100.
// And so on until the user selects == N (it will be useful to read about the algorithm: “binary search”).
let end = 100;
let start = 0;
let mid = Math.floor((end + start) / 2);

while (end > start) {

    console.log(`Here is n: ${mid}`);
    let userPrompt = prompt("Is your number > n, < n or == n?");

    // right chunk
    if (userPrompt == ">") {
        start = mid;
        mid = Math.floor((end + start) / 2); //75
        console.log(start, end); //50, 100
        // left chunk
    } else if (userPrompt == "<") {
        end = mid;
        mid = Math.floor((end + start) / 2);
        console.log(start, end);
    }
    else {
        console.log(`Your number is ${mid}!`);
        break;
    }
};