// takingorder              timetaken : orderDecide
// preparingeorder          timetaken : userdecide
// packagingorder           timetaken : userdecide
// dispatchtocounter        timetaken : userdecide
// billing                  timetaken : userdecide
// delivered                timetaken : userdecide

const preparingTime = {
    eggRoll: 15000,       // 15 seconds
    cornPizza: 15000,     // 15 seconds
    vegBurger: 12000,     // 12 seconds
    paneerWrap: 18000,    // 18 seconds
    cheesePasta: 20000,   // 20 seconds
    masalaDosa: 25000,    // 25 seconds
    frenchFries: 10000,   // 10 seconds
    chocolateShake: 12000,// 12 seconds
    paneerTikka: 22000,   // 22 seconds
    momos: 14000,         // 14 seconds
    springRoll: 16000,    // 16 seconds
    garlicBread: 13000,   // 13 seconds
    brownieWithIceCream: 18000 // 18 seconds
};

const menu = Object.keys(preparingTime);

function customerEnter(name) {
    console.log(`Welcome ${name} to Food Plaza!`);
}

async function takingOrder(foodDetails) {
    console.log("Order receiving...");
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("You ordered: " + foodDetails);
            console.log(`Your order will be prepared in ${preparingTime[foodDetails] / 1000} seconds.`);
            resolve(foodDetails);
        }, 5000); // Simulating order taking time
    });
}

async function preparingOrder(foodDetails) {
    console.log("\nPreparing food...");
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(foodDetails + " is ready!");
            resolve();
        }, preparingTime[foodDetails]); // Use correct preparation time
    });
}

async function processOrder(name, foodItem) {
    customerEnter(name);
    const order = await takingOrder(foodItem); // Wait until order is taken
    await preparingOrder(order); // Wait until order is prepared
    console.log("Thank you for ordering from Food Plaza!\n");
}

// Call the function properly
processOrder("Sourav", menu[1]); // Example: Ordering "cornPizza"
