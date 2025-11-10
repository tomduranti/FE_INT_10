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

async function placeOrder(itemName1) {
    return new Promise((resolve) => {
        console.log("Choose your food items");
        totalPrice += item[itemName1].price; // add price of item
        setTimeout(() => resolve(itemName1), 4000)
    })
}

async function cookItem(itemName) {
    return new Promise((resolve) => {
        console.log(`Preparing your ${item[itemName].name}...`);
        setTimeout(() => resolve(itemName), item[itemName].time);
    })
}

async function serveItem(itemName) {
    return new Promise((resolve) => {
        console.log(`Serving your ${itemName}...`);
        setTimeout(() => resolve(itemName), 3000);
    })
}

async function proposeCoffee(itemName, digestive) {
    const coffee = item[digestive]
    return new Promise((resolve) => {
        console.log(`Did you enjoy your ${itemName}? Take a coffee to digest!`);
        totalPrice += item[digestive].price; // add price of item
        setTimeout(() => resolve(coffee.name), coffee.time)
    })
}

async function payBill(priceOfItem) {
    return new Promise((resolve) => {
        console.log(`Here is your final bill: ${priceOfItem}`)
    })
}

await placeOrder("pizza");
await cookItem("pizza");
await serveItem("pizza");
await proposeCoffee("pizza", "coffee");
await payBill(totalPrice);