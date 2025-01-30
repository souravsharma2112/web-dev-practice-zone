let myname = "😊Saumya"

// 01 charAt

// The charAt() method in JavaScript takes one parameter, which is the index (a number) of the character you want to retrieve from the string.

console.log(myname.charAt(0));


// 02 charCodeAt()

// the charcodeat method in javascript takes one parameter, which is the index of string and return ascii code of that letter 

console.log(myname.charCodeAt(0));

// 03 codePointAt()  
// similar too codePointAt but with some key difference example charCodeAt return the value in 16-bit architecture instead of charpointat return 32-bit architecture

console.log(myname.codePointAt(0))