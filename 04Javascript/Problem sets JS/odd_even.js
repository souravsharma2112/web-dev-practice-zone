function checkOddEven(num){
    let output = (num%2)?`${num} is Odd Number`:`${num} is Even Number`
    return output
}
console.log(checkOddEven(101))