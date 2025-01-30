// let numArr = ["02" , "2"];
// let numArr1 = [02 , 2];    // this through an error
// let b = numArr[0]
// let d = numArr[1]
// console.log(b , d);
// console.log(b == d); // false


// console.log(numArr[0]);
// console.log(numArr[1]);
// console.log(numArr[0] === numArr[1]);


// let arr = [1,2,3,4,5,6]

// console.log(typeof arr);
// console.log(Object.keys(arr));
// console.log(Object.values(arr));

// console.log(arr.length);   // 6 count starts from 1

const arrayLike = {
    0: "a",
    1: "b",
    length: 2,
  };
  console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
  


