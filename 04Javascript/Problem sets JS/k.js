const prompt = require("prompt-sync")({ sigint: true });

while (true) {
    console.log("\nPress any key to start the Game.");
    console.log("Press Q to Quit the Game.\n");

    let loginValue = prompt("Press the Key: ").toUpperCase();
    if (loginValue === "Q") {
        console.log("Goodbye! Thanks for playing.");
        break;
    } else {
        console.log("\nComputer is choosing a number between 1 and 10... 💭");
        let computerNo = Math.floor(Math.random() * 10) + 1;
        console.log("Game has started! Guess the number.\n");
        
        let attemptsLeft = 3;

        for (let attempt = 1; attempt <= 3; attempt++) {
            let userInput = parseInt(prompt("Guess the Number (1-10): "), 10);

            if (isNaN(userInput) || userInput < 1 || userInput > 10) {
                console.log("Invalid input! Please enter a number between 1 and 10.\n");
                attempt--; // Don't count invalid input as an attempt
                continue;
            }

            if (userInput === computerNo) {
                console.log(`🎉 Hurry‼ You won the game!`);
                console.log(`Computer chose ${computerNo}, and you guessed ${userInput}.`);
                console.log(`You completed the game in ${attempt} attempt(s).\n`);
                break;
            } else {
                attemptsLeft--;
                console.log(`❌ Wrong guess! Attempts left: ${attemptsLeft}\n`);
            }

            if (attemptsLeft === 0) {
                console.log(`You lost the game! The correct number was ${computerNo}.\n`);
            }
        }
    }
}
