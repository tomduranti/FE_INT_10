let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");

// TODO: If the user enters a non-numeric value for either number, display an error message indicating “Invalid input. Please enter numbers only.”
let convNum1 = Number(num1);
let convNum2 = Number(num2);

let quit = true;

while (quit) {

    let userPrompt = prompt("Choose operation: sum, difference, multiplication, division, or quit (q)?");

    switch (userPrompt) {
        case "sum":
            console.log(convNum1 + convNum2);
            break
        case "difference":
            console.log(convNum1 - convNum2);
            break
        case "multiplication":
            console.log(convNum1 * convNum2);
            break
        case "division":
            if (convNum2 == 0) {
                console.log("You can't divide by 0!");
                break
            }
            else {
                console.log(convNum1 / convNum2);
                break
            }
        default:
            quit = false;
    }

}