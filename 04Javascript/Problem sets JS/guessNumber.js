// Guess the number chosen by the computer! The computer will randomly pick a number between 1 and 10. You have only 3 chances to guess the correct number.
const prompt = require("prompt-sync")({ sigint: true });
while (true) {
    console.log("Press any Key to start the Game.");
    console.log("Press Q to Quit the Game.\n\n");
    let loginValue = prompt("Press the Key : ").toUpperCase()
    if (loginValue == "Q") {
        break;
    }
    else {
        console.log("Computer started Choosing the Number💭..........");
        let computerNo = Math.round((Math.random(1)*100)/10)
        console.log("Game is Started now.....");
        console.log("Done👍");
        console.log("----------------------");
        
        let attempt = 3;        
        for (let i = 1; i <= 3; i++) {
            let userInput = prompt("Guess the Number : ")
            console.log("");
            if (attempt>=i) {                
                if (userInput == computerNo) {
                    console.log("Hurry‼ You Won the game.");
                    console.log(`Computer Chooses ${computerNo} and you Enter ${userInput}`);
                    attempt--
                    console.log("You Completed in "+ i +" Attempt.\n")
                    break;
                }
                else {
                    attempt--
                    console.log("You Guess the wrong number");
                    console.log("No of Attempt Left " + attempt +"\n");
                }
            }
            else{
                console.log("You Loss the Game❌\n");
                break;
            }
        }
    }
}