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
        name: "Carrot",
        amount: 7,
        bought: false,
    },
    {
        name: "Cucumber",
        amount: 5,
        bought: false,
    },
    {
        name: "Potato",
        amount: 12,
        bought: false,
    },
    {
        name: "Tomato",
        amount: 9,
        bought: false,
    },
    {
        name: "Broccoli",
        amount: 3,
        bought: false,
    },
    {
        name: "Parsley",
        amount: 1,
        bought: false,
    },
    {
        name: "Orange",
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

    const boughtItem = [];
    const unboughtItem = [];
    groceriesList.forEach((grocery) => { grocery.bought ? boughtItem.push(grocery.name) : unboughtItem.push(grocery.name) });
    boughtItem.sort();
    unboughtItem.sort();

    return console.log(boughtItem.concat(unboughtItem));
}

function addItem(name, amount) {
    let obj = {};
    let objIndex = groceriesList.findIndex(grocery => grocery.name == name);
    objIndex != -1
        ? groceriesList[objIndex].amount += amount
        : (obj.name = name, obj.amount = amount, obj.bought = false, groceriesList.push(obj));
    return groceriesList;
}

function purchaseItem(name) {
    let objIndex = groceriesList.findIndex(grocery => grocery.name == name);
    if (objIndex != 1) { groceriesList[objIndex].bought = true };
    return groceriesList;
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
// printReceipt():
// Nicely formats and prints the receipt to the console.
// calculateTotal():
// Returns the total cost of the purchase.
// findMostExpensiveItem():
// Returns the object representing the most expensive item.
// calculateAveragePrice():
// Returns the average price per item on the receipt.

function calculateTotal() {
    let totalCost = shoppingReceipt.reduce((acc, item) => { return acc + item.pricePerItem * item.amount }, 0);

    return Number(totalCost); // rounds the number to two decimal values to print currency value -> $390.64 
}

function findMostExpensiveItem() {
    let highestPrice = 0;
    let nameOfHighestPrice;
    shoppingReceipt.forEach((item) => {
        if (item.pricePerItem > highestPrice) {
            highestPrice = item.pricePerItem;
            nameOfHighestPrice = item.name;
        }
    });

    return nameOfHighestPrice;
}

function calculateAveragePrice() {
    let totalItems = 0;
    shoppingReceipt.forEach((item) => { totalItems += item.amount });
    let averagePrice = (calculateTotal() / totalItems).toFixed(2);

    return Number(averagePrice);
}

function printReceipt() {

    console.log(`---------------------- RECEIPT ----------------------`);

    for (item of shoppingReceipt) {
        let cost = (item.pricePerItem * item.amount).toFixed(2);
        console.log(`${item.name.padStart(25)} x ${item.amount} = $${cost.padEnd(20)}`);
    }

    console.log(`------------------- Total: $${calculateTotal().toFixed(2)} -------------------`);
}