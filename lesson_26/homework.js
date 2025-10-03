let num1 = prompt("Enter the first number");

while ((isNaN(num1))) { num1 = prompt("Invalid input. Please enter numbers only as a frist number"); }

let num2 = prompt("Enter the second number");

while ((isNaN(num2))) { num2 = prompt("Invalid input. Please enter numbers only as a second number"); }

// convert inputs to number type
let convNum1 = Number(num1);
let convNum2 = Number(num2);

let quit = true;

while (quit) {

    let userPrompt = prompt("Choose operation: sum, difference, multiplication, division, or quit (q)?");
    let result;

    switch (userPrompt) {
        case "sum":
            result = convNum1 + convNum2;
            console.log(`The result is: ${result}`);
            break
        case "difference":
            result = convNum1 - convNum2;
            console.log(`The result is: ${result}`);
            break
        case "multiplication":
            result = convNum1 * convNum2;
            console.log(`The result is: ${result}`);
            break
        case "division":
            if (convNum2 == 0) {
                console.log("You can't divide by 0!");
                break
            }
            else {
                result = convNum1 / convNum2;
                console.log(`The result is: ${result}`);
                break
            }
        default:
            quit = false;
    }

}