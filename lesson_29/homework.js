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
    { name: "Parsley", amount: 7, bought: true },
    { name: "Potato", amount: 5, bought: false },
    { name: "Cucumber", amount: 12, bought: true },
    { name: "Orange", amount: 9, bought: false },
    { name: "Broccoli", amount: 3, bought: false },
    { name: "Carrot", amount: 1, bought: true },
    { name: "Tomato", amount: 14, bought: false },
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
    { name: "Trousers", amount: 1, pricePerItem: 79.99 },
    { name: "Tea box", amount: 15, pricePerItem: 3.59 },
    { name: "Shampoo", amount: 3, pricePerItem: 12.50 },
    { name: "Steak", amount: 2, pricePerItem: 45 },
    { name: "Shoes", amount: 1, pricePerItem: 129.30 },
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

// Part 3: CSS Styling Fun (Optional Challenge)

// Create the Array:
// Name it cssStyles.
// Each item is an object with:
// styleName (e.g., "color", "fontSize")
// styleValue (e.g., "blue", "16px")

const cssStyles = [
    { styleName: "color", styleValue: "red" },
    { styleName: "fontWeight", styleValue: "bold" },
    { styleName: "fontSize", styleValue: "32px" },
    { styleName: "textDecorationLine", styleValue: "line-through" },
];

// applyStyles(text, stylesArray):
// Takes a string of text and the cssStyles array.
// Creates a <p> element with the text and the styles applied.
// Uses document.write() to add it to the page.

const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function applyStyles(text, stylesArray) {
    let p = document.createElement("p");
    p.textContent = text;
    stylesArray.map(el => p.style[el.styleName] = el.styleValue)
    return document.write(p.outerHTML);
}

// Part 4: Classroom Management (Advanced Challenge)

// Create the Array:
// Name it classrooms.
// Each object has:
// name (string)
// seats (number, 10-20)
// faculty (string)
const classrooms = [
    { name: "Lab C", seats: 15, faculty: "Chemistry" },
    { name: "Seminar Room 2", seats: 20, faculty: "Mathematics" },
    { name: "Lab B", seats: 12, faculty: "Engineering" },
    { name: "Seminar Room 5", seats: 50, faculty: "Engineering" },
    { name: "Seminar Room 4", seats: 125, faculty: "Psychology" },
    { name: "Lab A", seats: 7, faculty: "Physics" },
    { name: "Seminar Room 3", seats: 75, faculty: "Linguistics" },
    { name: "Seminar Room 1", seats: 28, faculty: "Philosophy" },
];

function displayClassrooms() {
    for (const item of classrooms) { return console.log(`Room: ${item.name}, Seats: ${item.seats}, Faculty: ${item.faculty}`); }
}

function displayClassroomsByFaculty(facultyName) {
    const elSearch = classrooms.filter((el) => el.faculty.toLowerCase().includes(facultyName.toLowerCase()));
    return elSearch.map(el => el.name);
}

// findSuitableClassrooms(group):
// Takes a group object (with name, students, faculty).
// Returns classrooms that can fit the group and are for the right faculty.

// input must be like {name: "room", students: 12, faculty: "eng"}
function findSuitableClassrooms(group) {
    const elSearch = classrooms.filter((el) => el.name.toLowerCase().includes(group.name.toLowerCase())
        && el.seats >= group.students
        && el.faculty.toLowerCase().includes(group.faculty.toLowerCase())
    );
    return elSearch.map(el => el.name);
}

// sortBySeats(), sortByName(): Sort the classrooms array accordingly.
function sortBySeats() { classrooms.sort((a, b) => a.seats - b.seats); return console.log(classrooms); }
function sortByName() { classrooms.sort((a, b) => a.name.localeCompare(b.name)); return console.log(classrooms); }