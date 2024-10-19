let fname = document.getElementById("fname")
let age = document.getElementById("age")
let address = document.getElementById("address")
let outBox = document.getElementById("outBox")
let nameE = document.getElementById("nameE")
let ageE = document.getElementById("ageE")
let addressE = document.getElementById("addressE")

function formValidation(){
    if(fname.value.length == 0){
        nameE.innerText = "This Feild is Required"
    }
    else if(age.value.length == 0){
        ageE.innerText = "This Feild is Required"
    }
    else if(address.value.length == 0){
        addressE.innerText = "This Feild is Required"
    }
    else{
        nameE.innerText = ""
        ageE.innerText = ""
        addressE.innerText = ""
    }
    
}
function functionValidation2(){
    if(fname.value.length > 0){
        nameE.innerText = ""
    }
    else if(age.value.length > 0){
        ageE.innerText = ""
    }
    else if(address.value.length > 0){
        addressE.innerText = ""
    }
}

function displayOutput(){
    formValidation()
    let showData = `My Name is ${fname.value} and my age is ${age.value}. I'm from ${address.value}`
    outBox.innerText = showData
}