const arr = [1,12,2,3,5,56,887]



// REDUCE
 
let newArr = arr.reduce((accumulator , currentValue , index , arr)=>{
    console.log("i am num 1", accumulator);
    console.log("i am num 2", currentValue);
    console.log("i am num 3", index);
    console.log("i am num 4", arr);
    return accumulator * currentValue
},78)
console.log(newArr);
