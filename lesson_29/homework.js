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

displayGroceries(groceriesList);

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