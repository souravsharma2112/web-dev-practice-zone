let outbox = document.getElementById("outBox")
let nameBox = document.getElementById("name")
let age = document.getElementById("age")
let address = document.getElementById("address")
let nameE = document.getElementById("nameE")
let ageE = document.getElementById("ageE")
let addressE = document.getElementById("addressE")
let nameInput = false
let ageInput = false
let addressInput = false

function formValidation(){
    if(nameBox.value.length == 0){
        nameInput = false
        nameE.innerText = "Name is Required"
    }
    if(age.value.length == 0){
        ageInput = false
        ageE.innerText = "Age is Required"
    }
    console.log(address.innerText.length)
    if(address.value.length == 0){
        addressInput = false
        addressE.innerText = "Address is Required"
    }
    if(nameBox.value.length > 0){
        nameInput = true
        nameE.innerText = ""
    }
    else if(ageBox.value.length > 0){
        ageInput = true
        ageE.innerText = ""
    }
    else if(address.value.length > 0){
        addressInput = true
        addressE.innerText = ""
    }
}

function displayOutput() {
    formValidation()
    if(nameInput && addressInput && ageInput){
     outbox.innerText = `Hello! My name is ${nameBox.value} and I'm ${age.value} years old. I'm From ${address.value}`
    }
}