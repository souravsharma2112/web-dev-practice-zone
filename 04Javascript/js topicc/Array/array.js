
// ### **1. Mutator Methods (Modify Original Array)**
const arr = [1,2,3,4,5,6,7,8]

// 1. **push()** – Adds elements to the end of an array  
arr.push("sourav")
console.log(arr.push()); // this will also return the count of element in array
// 2. **pop()** – Removes the last element from an array  
console.log(arr.pop()) // it will returns the pop element 
console.log(arr);
// 3. **shift()** – Removes the first element from an array  
console.log(arr.shift()); // removes the first element and returns the value 
// 4. **unshift()** – Adds elements to the beginning of an array  
console.log(arr.unshift("sourav") );
console.log(arr.unshift());  //this will return count of element in arr
console.log(arr);



// 5. **splice()** – Adds/removes elements from a specific index  
console.log(arr.splice(0 , arr.length));
console.log(arr);


// 6. **sort()** – Sorts the elements of an array  

let newArr = [2 , 45 , 84 , 57 , 45 , 25 , 655 ]
console.log(newArr.sort((a,b)=> a%b == 0 ));


// 7. **reverse()** – Reverses the elements of an array  

console.log(newArr.reverse());
console.log(newArr);

// 8. **fill()** – Fills elements with a static value  
console.log(newArr.fill(1,2,"sd"));

// 9. **copyWithin()** – Copies part of an array to another location  ❌
// copyWithin(targetindex , startindex , stopindex)
let a = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
console.log(a.copyWithin(2 , 0 , 2));
for(let [key , value] of a.entries()){
    console.log(key , value);
    
}








// REDUCE
 
// let newArr = arr.reduce((accumulator , currentValue , index , arr)=>{
//     console.log("i am num 1", accumulator);
//     console.log("i am num 2", currentValue);
//     console.log("i am num 3", index);
//     console.log("i am num 4", arr);
//     return accumulator * currentValue
// },78)
// console.log(newArr);
