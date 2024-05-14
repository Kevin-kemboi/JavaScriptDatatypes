function calculateTotalCost(cart) {
    let totalCost = 0;

    for (let item of cart) {
        if (item.hasOwnProperty('price')) {
            totalCost += item.price;
        } else {
            console.error("Error: Item does not have a price property.");
        }
    }

    return totalCost.toFixed(2); 
}


const cart = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
console.log("Total cost:", calculateTotalCost(cart));
