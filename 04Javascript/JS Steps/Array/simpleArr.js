const arr = [0, 2, 1, 3, 5]

const stud = ["adrija", "aastha", "muskan", "sonal", "saumya", "somya", "surabhi", "vishalakshi", "SOurav", "RAJ", "SHIvam", "sumit", "sOurav", "sonu"]
let low =  /^[A-Z]/

// stud.forEach((element) => {
//     let newData = (element.charCodeAt(0) < 95) ? (element.charAt(0).toLowerCase() + element.slice(1)) : (element.charAt(0).toUpperCase() + element.slice(1))
//     console.log(newData);
// })
stud.forEach((element) => {
    let newData = low.test((element.charCodeAt(0))) ? (element.charAt(0).toLowerCase() + element.slice(1)) : (element.charAt(0).toUpperCase() + element.slice(1))
    console.log(newData);
})
