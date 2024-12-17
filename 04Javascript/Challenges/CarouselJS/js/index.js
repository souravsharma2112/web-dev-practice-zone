const btn = document.querySelectorAll(".c-btn")
const carousel = document.getElementById("carousel")
let max = 0
btn[0].addEventListener("click",()=>{
    if(max==0){
        max=300
    }
    max = max - 100
    carousel.style.transform = `translateX(-${max}vw)`
    
    console.log("btn click");
    document.getElementById("show").innerHTML = max
})
btn[1].addEventListener("click",()=>{
   
    max = max+100
    // console.log(trab);
    
    if(max==300){
        max=0
    }
    carousel.style.transform = `translateX(-${max}vw)`
    document.getElementById("show").innerHTML = max
    const computedStyle = window.getComputedStyle(carousel);
    const transformMatrix = computedStyle.getPropertyValue("transform");
    if (transformMatrix && transformMatrix !== "none") {
        const values = transformMatrix.match(/matrix\(([^)]+)\)/)[1].split(', ');
        const scaleX = parseFloat(values[0]);
        const skewY = parseFloat(values[1]);
        const skewX = parseFloat(values[2]);
        const scaleY = parseFloat(values[3]);
        const translateX = parseFloat(values[4]);
        const translateY = parseFloat(values[5]);
      
        console.log("ScaleX:", scaleX);
        console.log("ScaleY:", scaleY);
        console.log("TranslateX:", translateX);
        console.log("TranslateY:", translateY);
      }
})