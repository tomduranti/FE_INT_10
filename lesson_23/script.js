// 1. Request a three-digit number from a user and check whether it has identical digits.

let userRequest = prompt("Write 3 digits"); // 347
let lastDigit = userRequest % 10; // 7
let firstDigit = parseInt(userRequest / 100); // 3
let secondDigit = parseInt(userRequest / 10) - (firstDigit * 10); // 34 - 30   

if ((firstDigit == secondDigit) || (firstDigit == lastDigit) || (secondDigit == lastDigit)) {

    if (firstDigit == secondDigit) {
        console.log(`The first digit (${firstDigit}) is identical to the second digit (${secondDigit})`)
    }

    else if (firstDigit == lastDigit) {
        console.log(`The first digit (${firstDigit}) is identical to the last digit (${lastDigit})`)
    }

    else if (secondDigit == lastDigit) {
        console.log(`The second digit (${secondDigit}) is identical to the last digit (${lastDigit})`)
    }

} else { console.log("There are no repeating digits") }

// 2. Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD, etc.) and gets the result.

let currencyInput = prompt("Tell me the amount of USD to convert");
let chooseCurrency = prompt("Which currency to convert to? EUR, SEK, AUD, or TRY");

const USDEUR = 0.85; // Euros
const USDSEK = 9.43; // Swedish crown
const USDAUD = 1.52; // Australian dollar
const USDTRY= 41.57; // Turkish lira

if (chooseCurrency == "EUR") {
    convEur = currencyInput * USDEUR;
    console.log(`${currencyInput} USD -> ${convEur} EUR`);
} 

else if (chooseCurrency == "SEK") {
    convSek = currencyInput * USDSEK;
    console.log(`${currencyInput} USD -> ${convSek} SEK`);
}

else if (chooseCurrency == "AUD") {
    convAud = currencyInput * USDAUD;
    console.log(`${currencyInput} USD -> ${convAud} AUD`);
}  

else if (chooseCurrency == "TRY") {
    convTry = currencyInput * USDTRY;
    console.log(`${currencyInput} USD -> ${convTry} EUR`);
}

// 3. Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, a new year, and also leap years.
let dayInput = prompt("Input a day");
let monthInput = prompt("Input a month");
let yearInput = prompt("Input a year");

dayInput = parseInt(dayInput);
monthInput = parseInt(monthInput);
yearInput = parseInt(yearInput);

// month 31 days

if (monthInput == 2) {

    if (yearInput % 4 == 0) { // centuries like 1900 fail!

        if (monthInput == 2 && dayInput >= 29) {
            dayInput = 1;
            monthInput += 1;
        } else {dayInput += 1;}

    } else if (monthInput == 2 && dayInput >= 28) {
            dayInput = 1;
            monthInput += 1;
        } else {dayInput += 1;}
        
    } else if (
    monthInput == 4 ||
    monthInput == 6 ||
    monthInput == 9 ||
    monthInput == 11) {

    if (dayInput >= 30) {
        dayInput = 1;
        monthInput += 1;
    } else {
        dayInput += 1;
    }

} else {

    if (dayInput >= 31 && monthInput == 12) {
        dayInput = 1;
        monthInput = 1;
        yearInput += 1;
    }

    else if (dayInput >= 31) {
        dayInput = 1;
        monthInput += 1;
    }

    else {
        dayInput += 1;
    }

}

console.log(`The next day is ${dayInput}/${monthInput}/${yearInput}`);