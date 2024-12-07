const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNo1 = document.getElementById("phoneNo1");
const phoneNo2 = document.getElementById("phoneNo2");
const formMsg = document.getElementById("formMsg");
const paraTxt = document.getElementsByClassName("paraTxt");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSubmit = (event)=> {
    event.preventDefault()
    let isValid = true;
    (firstName.value.length < 3) ?( paraTxt[0].innerText = "At least 3 letter are required.", isValid = false) :paraTxt[0].innerText = "";
    (lastName.value.length < 3) ? (paraTxt[1].innerText = "At least 3 letter required", isValid = false) :paraTxt[1].innerText = "";
    (!emailPattern.test(email.value))?(paraTxt[2].innerText = "Please enter a valid email address.", isValid = false) :paraTxt[2].innerText = "";
    (phoneNo1.value.length < 10) ? (paraTxt[3].innerText = "Phone number must be exactly 10 digits.", isValid = false) :paraTxt[3].innerText = "";
    (phoneNo2.value.length < 10) ? (paraTxt[4].innerText = "Phone number must be exactly 10 digits.", isValid = false) :paraTxt[4].innerText = "";
    (formMsg.value.length < 5) ? (paraTxt[5].innerText = "Message must be more than 5 letters.", isValid = false) :paraTxt[5].innerText = "";
    if(isValid){
        event.target.submit()
    }   
}