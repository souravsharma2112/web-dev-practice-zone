let a = [1,"sourav" , "kumar"]
let c = a.map((element)=>{
    console.log(element.replace("sourav","somya"));
    
    return (element.charAt(0).toUpperCase() + element.slice(1))
})
console.log(c.join(' '))