let myname = "Sourav"

// startsWith()
console.log(myname.startsWith("s"));


// endsWith() ✅
console.log(myname.endsWith("v"));


// includes()
console.log(myname.includes("v"));

// match()
console.log(myname.match("S"));


let phoneNumber = "+1-202-555-0198";
let email = 'sourav121@gmail.com'
// let emailRegex = /^[^/s@]^[^/s]^./^[^/s]/
let phoneRegex = /\+(\d{1,2})-(\d{3})-(\d{3})-(\d{4})/;
let match = phoneRegex.exec(phoneNumber);
if (match) {
  console.log(`Country Code: ${match[1]}, Area Code: ${match[2]}, Phone: ${match[3]}-${match[4]}`);
}