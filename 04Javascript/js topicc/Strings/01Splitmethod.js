
// program 1

let a = "vabbaaacaaaaacaaadcccaab"
// split method takes two parameter first specified separator and second parameter is limit 

function countChar(str , char){
    console.log(str.split(char).length-1);
}

countChar(a , "a")

// program2

let url = "name=Sourav&age=22&city=Delhi";
// Output: [["name", "Sourav"], ["age", "22"], ["city", "Delhi"]]
console.log((url.split("&")).map((element)=> {
    return (element.split("="))
}));


// program3

let hello = "hello"
console.log(hello.split("e" , 1));

let messy = "  Hello   World  JavaScript  ";

console.log(messy.trim().split(/\s+/).join(" "));

let reverse = "sourav"
console.log(reverse.split("").reverse().join(""));
