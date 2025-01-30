const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNo1 = document.getElementById("phoneNo1").value;
const phoneNo2 = document.getElementById("phoneNo2").value;
const formMsg = document.getElementById("formMsg");
const paraTxt = document.getElementsByClassName("paraTxt");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formSubmitMsg = {
    name : "At least 3 letter are required.",
    email : "Please enter a valid email address.",
    phone : "Phone number must be exactly 10 digits.",
    msg : "Message must be more than 5 letters.",
}

const arr = [9,8,7,6]
const formSubmit = (event)=> {
    // event.preventDefault().
    // console.log(phoneNo1[0].split("").includes(arr))
    let isValid = true;
    (firstName.value.length < 3) ?( paraTxt[0].innerText = formSubmitMsg.name , isValid = false) :paraTxt[0].innerText = "";
    (lastName.value.length < 3) ? (paraTxt[1].innerText = formSubmitMsg.name , isValid = false) :paraTxt[1].innerText = "";
    (!emailPattern.test(email.value))?(paraTxt[2].innerText = formSubmitMsg.email , isValid = false) :paraTxt[2].innerText = "";
    if(phoneNo1.value.length < 10){
        paraTxt[3].innerText = formSubmitMsg.phone 
        isValid = false
    }
    else{
        paraTxt[3].innerText = "";
    }
    if(phoneNo2.value.length < 10){
        paraTxt[4].innerText = formSubmitMsg.phone
        isValid = false
    }
    else{
        paraTxt[4].innerText = "";
    }
    (formMsg.value.length < 5) ? (paraTxt[5].innerText = formSubmitMsg.msg , isValid = false) :paraTxt[5].innerText = "";
    if(isValid) event.target.submit() 

    // console.log(typeof phoneNo1.value);
    
}