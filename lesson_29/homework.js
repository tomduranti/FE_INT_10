//🛒 Grocery List & Shopping Cart App

// Part 1: The Grocery List

// Create the Array:
// Start with an array named groceriesList.
// Each item is an object with properties:
// name (string)
// amount (number)
// bought (boolean, false initially)
// Add a few sample items to your list.

let groceriesList = [
    {
        name: "Parsley",
        amount: 7,
        bought: true,
    },
    {
        name: "Potato",
        amount: 5,
        bought: false,
    },
    {
        name: "Cucumber",
        amount: 12,
        bought: true,
    },
    {
        name: "Orange",
        amount: 9,
        bought: false,
    },
    {
        name: "Broccoli",
        amount: 3,
        bought: false,
    },
    {
        name: "Carrot",
        amount: 1,
        bought: true,
    },
    {
        name: "Tomato",
        amount: 14,
        bought: false,
    }
];

// Functions:
// displayGroceries(): Prints the list to the console.
// Challenge: Sort so unbought items appear first.
// addItem(name, amount): Adds a new item or increases the quantity if it already exists.
// purchaseItem(name): Marks an item as bought.

function displayGroceries(arr1) {
    let sortedArray = groceriesList.sort((a, b) => a.name.localeCompare(b.name));
    return console.log(sortedArray.sort((a, b) => a.bought - b.bought));
}

function addItem(name, amount) {

    const itemName = groceriesList.find(item => item.name.toLowerCase() === name.toLowerCase());

    if (itemName) {
        itemName.amount += amount;
    } else {
        groceriesList.push(
            {
                name,
                amount,
                bought: false
            }
        );
    }
    return groceriesList;
}

function purchaseItem(name) {
    const itemName = groceriesList.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (itemName) {
        itemName.bought = true;
        return groceriesList;
    } else {
        console.log("That item is not on the list!");
    }
}

// Part 2: The Shopping Receipt

// Create the Array:
// Name it shoppingReceipt.
// Each item is an object with:
// name (string)
// amount (number)
// pricePerItem (number)

let shoppingReceipt = [
    {
        name: "Trousers",
        amount: 1,
        pricePerItem: 79.99,
    },
    {
        name: "Tea box",
        amount: 15,
        pricePerItem: 3.59,
    },
    {
        name: "Shampoo",
        amount: 3,
        pricePerItem: 12.50,
    },
    {
        name: "Steak",
        amount: 2,
        pricePerItem: 45,
    },
    {
        name: "Shoes",
        amount: 1,
        pricePerItem: 129.30,
    },
];

// Functions:
// calculateTotal():
// Returns the total cost of the purchase.
// findMostExpensiveItem():
// Returns the object representing the most expensive item.
// calculateAveragePrice():
// Returns the average price per item on the receipt.
// printReceipt():
// Nicely formats and prints the receipt to the console.

function calculateTotal() {
    const totalCost = shoppingReceipt.reduce((acc, item) => { return acc + item.pricePerItem * item.amount }, 0);
    return Number(totalCost); // rounds the number to two decimal values to print currency value -> $390.64 
}

function findMostExpensiveItem() {
    const sortedArr = shoppingReceipt.sort((a, b) => b.pricePerItem - a.pricePerItem);
    return sortedArr[0].name;
}

function calculateAveragePrice() {
    const totalItems = shoppingReceipt.reduce((acc, item) => acc += item.amount, 0);
    return Number((calculateTotal() / totalItems).toFixed(2));
}

function printReceipt() {
    console.log(`---------------------- RECEIPT ----------------------`);
    for (item of shoppingReceipt) {
        const cost = (item.pricePerItem * item.amount).toFixed(2);
        console.log(`${item.name.padStart(25)} x ${item.amount} = $${cost.padEnd(20)}`);
    }
    console.log(`------------------- Total: $${calculateTotal().toFixed(2)} -------------------`);
}