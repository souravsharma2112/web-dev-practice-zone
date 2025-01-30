function takingInput(num1 , num2){
    let newNum1 = 100 / num1
    let newNum2 = 100 / num2
    if(num1 > 100 && num2 > 100){
        return (newNum1>newNum2) ? ( num1 + ' is nearest to 100') : ( num2  + ' is nearest to 100')
    }
    else{
        if(100-num1 < 0 || 100-num2 < 0){
            return (newNum1>newNum2) ? ( num1 + ' is nearest to 100') : ( num2  + ' is nearest to 100')
        }
        else{
            return (newNum1>newNum2) ? ( num2 + ' is nearest to 100') : ( num1  + ' is nearest to 100')
        }
    }
}

console.log(takingInput(111,8));
