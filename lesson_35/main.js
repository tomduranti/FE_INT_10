const item = {
    pizza: { name: "pizza", time: 4000, price: 15},
    burger: { name: "burger", time: 2500, price: 8},
    sushi: { name: "sushi", time: 1500, price: 19},
    salad: { name: "salad", time: 800, price: 5.5},
    pasta: { name: "pasta", time: 1800, price: 7.5},
    taco: { name: "taco", time: 1200, price: 9},
    sandwich: { name: "sandwich", time: 1000, price: 7.5},
    iceCream: { name: "iceCream", time: 500, price: 3},
    soup: { name: "soup", time: 900, price: 5},
    coffee: { name: "espresso", time: 300, price: 2.5}
};

let totalPrice = 0;

function placeOrder(itemName1) {
    return new Promise((resolve) => {
        console.log("Choose your food items");
        totalPrice += item[itemName1].price; // add price of item
        setTimeout(() => resolve(itemName1), 4000)
    })
}

function cookItem(itemName) {
    return new Promise((resolve) => {
        console.log(`Preparing your ${item[itemName].name}...`);
        setTimeout(() => resolve(itemName), item[itemName].time);
    })
}

function serveItem(itemName) {
    return new Promise((resolve) => {
        console.log(`Serving your ${itemName}...`);
        setTimeout(() => resolve(itemName), 3000);
    })
}

function proposeCoffee(itemName, digestive) {
    const coffee = item[digestive]
    return new Promise((resolve) => {
        console.log(`Did you enjoy your ${itemName}? Take a coffee to digest!`);
        totalPrice += item[digestive].price; // add price of item
        setTimeout(() => resolve(coffee.name), coffee.time)
    })
}

function payBill(priceOfItem) {
    return new Promise((resolve) => {
        console.log(`Here is your final bill: ${priceOfItem}`)
    })
}

placeOrder("pizza") // change this value
    .then((foodItem) => {
        console.log(`We placed your order for ${foodItem}`);
        return cookItem(foodItem);
    })
    .then(foodItem => {
        console.log(`Your ${foodItem} has been plated.`);
        return serveItem(foodItem);
    })
    .then(foodItem => {
        console.log(`${foodItem} delivered!`);
        return proposeCoffee(foodItem, "coffee");
    })
    .then(coffeeName => {
        console.log(`...and here is your ${coffeeName}!`);
        return payBill(totalPrice);
    })