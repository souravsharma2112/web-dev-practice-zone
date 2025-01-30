console.log("hello");
let count = 0 
setTimeout(()=>{
    console.log("hello i am time");
    
},0)
for (let index = 0; index < 1000000000; index++) {
    if (1000%index == 0) {
        count++
        console.log("count" + count );
    }
}

for (let index = 0; index < 1000; index++) {
    if (1000%index == 0) {
        count++
        console.log("count hoon m" + count );
    }
}