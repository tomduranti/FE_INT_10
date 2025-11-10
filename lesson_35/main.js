const item = {
    pizza: { name: "pizza", time: 4000, price: 15 },
    burger: { name: "burger", time: 2500, price: 8 },
    sushi: { name: "sushi", time: 1500, price: 19 },
    salad: { name: "salad", time: 800, price: 5.5 },
    pasta: { name: "pasta", time: 1800, price: 7.5 },
    taco: { name: "taco", time: 1200, price: 9 },
    sandwich: { name: "sandwich", time: 1000, price: 7.5 },
    iceCream: { name: "iceCream", time: 500, price: 3 },
    soup: { name: "soup", time: 900, price: 5 },
    coffee: { name: "espresso", time: 300, price: 2.5 }
};

let totalPrice = 0;

async function placeOrder(itemName) {
    console.log("Choose your food items");
    totalPrice += item[itemName].price;

    return await new Promise((resolve) => {
        setTimeout(() => { resolve(itemName); console.log(`We placed your order for ${itemName}`) }, 4000);
    })
}

async function cookItem(itemName) {
    console.log(`Preparing your ${item[itemName].name}...`);

    return await new Promise((resolve) => {
        setTimeout(() => { resolve(itemName); console.log(`Your ${itemName} has been plated.`) }, item[itemName].time);
    })
}

async function serveItem(itemName) {
    console.log(`Serving your ${itemName}...`);

    return await new Promise((resolve) => {
        setTimeout(() => { resolve(itemName); console.log(`${itemName} delivered!`) }, 3000);
    })
}

async function proposeCoffee(itemName, digestive) {
    const coffee = item[digestive]
    console.log(`Did you enjoy your ${itemName}? Take a coffee to digest!`);
    totalPrice += item[digestive].price;

    return await new Promise((resolve) => {
        setTimeout(() => { resolve(digestive); console.log(`...and here is your ${digestive}!`) }, coffee.time);
    })
}

async function payBill() {
    return await new Promise((resolve) => {
        console.log(`Here is your final bill: ${totalPrice}`);
        resolve();
    }, 2000)
}


async function letsEat(food1, food2) {
    await placeOrder(food1);
    await serveItem(food1);
    await proposeCoffee(food1, food2);
    await payBill();
}

// letsEat("pizza", "coffee");