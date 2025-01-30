// Falsee Calculator it will work some time correctly some time not
console.log("For Addition Press 1")
console.log("For Subtraction Press 2")
console.log("For Multiplication Press 3")
console.log("For Division Press 4 \n")

console.log("Assume")
console.log("num1 is 12")
console.log("num2 is 20\n")

function addTwoNum(num1 , num2){
    console.log(`Addition of ${num1} and ${num2} is ${(num1 + num2)}`)
}
function subTwoNum(num1 , num2){
    console.log(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`)
}
function multiplyTwoNum(num1 , num2){
    console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`)
}
function divideTwoNum(num1 , num2){
     console.log(`Division of ${num1} and ${num2} is ${num2 / num1}`)
}
let x = 1
for (let i = 0; i < 10; i++) {
    let randomNum = Math.round((Math.random(1)*100)/10)
    console.log("Randome is" + randomNum);
    
   if(randomNum == 3){
    switch (x) {
        case x=2:
            addTwoNum(12,20)
            break;
        case x=1:
            subTwoNum(20,12)
            break;
        case x=4:
            multiplyTwoNum(12,20)
            break;
        case x=3:
            divideTwoNum(20,2)
            break;
       
        default:
            break;
       }
       break;
   }
   else{
    switch (x) {
        case x=1:
            addTwoNum(12,20)
            break;
        case x=2:
            subTwoNum(20,12)
            break;
        case x=3:
            multiplyTwoNum(12,20)
            break;
        case x=4:
            divideTwoNum(20,2)
            break;
       
        default:
            break;
       }
       break;
   }
}