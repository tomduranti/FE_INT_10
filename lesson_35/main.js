const item = {
    pizza: { name: "pizza", time: 4000 },
    burger: { name: "burger", time: 2500 },
    sushi: { name: "sushi", time: 1500 },
    salad: { name: "salad", time: 800 },
    pasta: { name: "pasta", time: 1800 },
    taco: { name: "taco", time: 1200 },
    sandwich: { name: "sandwich", time: 1000 },
    iceCream: { name: "iceCream", time: 500 },
    soup: { name: "soup", time: 900 },
    coffee: { name: "coffee", time: 300 }
};

function cookItem(itemName) {
    const foodItem = item[itemName];
    return new Promise((resolve) => {
        console.log(`Preparing your ${foodItem.name}...`);
        setTimeout(() => resolve(console.log(`Your ${foodItem.name} is ready`)), foodItem.time);
    })
}

cookItem("pizza");