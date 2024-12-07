// without recursion

function factorialWithutRecursion(num){
    let a = 1
    for (let i = num; i > 0; i--) {
        a = a * num
        num--
    }
    return a
}
// with recursion

function factorialWithRecursion(num) { 
    return num === 0 ? 1 : num * factorialFunction(num - 1); 
} 
console.log(factorialWithutRecursion(5));
console.log(factorialWithRecursion(5));
