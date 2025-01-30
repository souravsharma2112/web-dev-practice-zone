const playBtn = document.getElementById("playBtn")
const diceValue = [1, 2, 3, 4, 5, 6]
let diceRoll = 0
const redPlayerEntryID = 1
let redPlayer1PathID = redPlayerEntryID
const yellowPlayerEntryID = 27

const redPlayer1 = `<div class="stop-star-box ludo-piece red-box">
                        <img src="./assets/image/clogo.png" alt="">
                   </div>`
const yellowPlayer1 = `<div class="stop-star-box ludo-piece yellow-box">
                        <img src="./assets/image/clogo.png" alt="">
                   </div>`
const bluePlayer1 = `<div class="stop-star-box ludo-piece blue-box">
                        <img src="./assets/image/clogo.png" alt="">
                   </div>`
const greenPlayer1 = `<div class="stop-star-box ludo-piece green-box">
                        <img src="./assets/image/clogo.png" alt="">
                   </div>`
const redPlayer4 = document.getElementById("redPlayer4")
redPlayer4.style.display = "none"
let isRedPlayer1InBox = true
let isYellowPlayer1InBox = true

const gridPathSteps = document.querySelectorAll(".grid-path-steps")

let prevBoxDetails

// player entry to Start a game details from begining

const playerEnterInGame = (isPlayerInBox,playerID, playerTokenPiece) => {
    gridPathSteps.forEach((element , i)=> {
        if (isPlayerInBox && (element.getAttribute("index") == `${playerID}`)) {
            prevBoxDetails = element
          element.innerHTML = playerTokenPiece;
          console.log(isPlayerInBox , playerID , playerTokenPiece);     
          isPlayerInBox = false
        }
    })
}
const removeFromPrevPosition = (playerID) =>{

}


const play = () => {
    const min = 1;
    const max = 6;
    diceRoll = Math.floor((Math.random() * (max)) + min);
    console.log("You rolled: " + diceRoll);
}

let isPlayerActive = false
playBtn.addEventListener("click", () => {
    play()
    if (isPlayerActive) {
        let prevTokenID = prevBoxDetails.children
        prevTokenID[0].remove()
        redPlayer1PathID = (redPlayer1PathID) + diceRoll
        playerEnterInGame(isRedPlayer1InBox , `point${redPlayer1PathID}` , redPlayer1 )

    }
    if (diceRoll == 6) {
        isPlayerActive = true
        playerEnterInGame(isRedPlayer1InBox , `point${redPlayerEntryID}` , redPlayer1 )
        
        // playerEnterInGame(isYellowPlayer1InBox , yellowPlayerEntryID , yellowPlayer1 )
    }
    
})