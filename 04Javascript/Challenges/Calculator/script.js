// const numKey = document.querySelectorAll(".btn")
// const arr = []
// let e = 0
// numKey.forEach((element, i) => {
//    numKey[i].addEventListener("click", () => {
//       let keyClass = [...numKey[i].classList]
//       if (keyClass.includes("btn-num-key")) {
//          console.log(numKey[i].innerHTML);
//          e = +(e + (numKey[i].innerHTML))
//       }
//       else if (keyClass.includes("operator")) { 
//          arr.push(e)
//          e = 0
//          if (arr[arr.length-1] == 0) {
//             arr.pop()
//          }
//          if (isNaN(arr[arr.length-1])) {
//             arr[arr.length - 1] = numKey[i].innerHTML
//          }else{
//             arr.push(numKey[i].innerHTML)
//          }
//       }
//       else if(keyClass.includes("outputValue")){
//          arr.push(e)
//          console.log(arr);
         
//         let newRes =  calculation(arr)
//         console.log("Hello i am ",  newRes);
//         console.log(arr);
//         e = 0
//         newRes = 0
//       }
//    })

// })

// let operatorss = ["/", "*" , "+" , "-" , 1]

// // let c = operatorss.filter(num => num === 1)
// // console.log(c);

// i=0
// function calculation(arr){
//    if (arr.indexOf(operatorss[i]) != -1 ) {
//       let operatorIndex = arr.indexOf(operatorss[i])
//       let perty = solve(arr[operatorIndex-1] , arr[operatorIndex], arr[operatorIndex+1])
//       arr.splice(arr[operatorIndex-1], arr[operatorIndex+1], perty )      
//       arr.splice(operatorIndex-1,3)
//       console.log(arr);
//       return perty
//    }
// }

// function solve(num1 , op , num2){
//    let result = 0
//    switch (op) {
//       case "+":
//          result = num1 + num2
//          break;
//       case "-":
//          result = num1 - num2
//          break;
//       case "/":
//          result = num1 / num2
//          break;
//       case "*":
//          result = num1 * num2
//          break;
   
//       default:
//          break;
//    }
//    return result

// }


document.addEventListener("DOMContentLoaded", () => {
   const calcOperationDisplay = document.getElementById("calcOperationDisplay");
   const calcAnsDisplay = document.getElementById("calcAnsDisplay");
 
   let operation = ""; // Holds the current operation as a string
 
   // Handle button clicks
   document.querySelectorAll(".btn-key").forEach((button) => {
     button.addEventListener("click", (e) => {
       const value = e.target.textContent;
 
       if (value === "C") {
         // Clear operation
         operation = "";
         calcAnsDisplay.textContent = "";
         calcOperationDisplay.textContent = "";
       } else if (value === "=") {
         // Calculate the result using eval
         try {
           const result = evaluateExpression(operation);
           calcAnsDisplay.textContent = result;
         } catch (error) {
           calcAnsDisplay.textContent = "Error";
         }
       } else {
         // Append the clicked value to the operation
         operation += value;
         calcOperationDisplay.textContent = operation;
       }
     });
   });
 
   // Function to evaluate the expression considering BODMAS
   function evaluateExpression(expr) {
     // Replace invalid characters for safety
     const sanitizedExpr = expr.replace(/[^0-9+\-*/().]/g, "");
 
     // Use JavaScript's built-in eval() to calculate
     // Note: Ensure the input is sanitized to avoid security issues
     return new Function(`return ${sanitizedExpr}`)();
   }
 });
 