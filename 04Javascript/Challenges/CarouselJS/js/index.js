const slideCbtn = document.querySelectorAll(".c-btn");
const carousel = document.getElementById("carousel")
const totalSlides = document.querySelectorAll('.slide').length;
const indicators = document.querySelectorAll('.indicator');
console.log(slideCbtn);
let index = 0

function updateCarousel(index){
    carousel.style.transform = `translateX(-${index * 100}%)`
    indicators.forEach((indicator, i)=>{
        indicator.classList.toggle("active", i === index)
    })
}

slideCbtn[0].addEventListener("click",()=>{
    index = (index - 1 + totalSlides)%totalSlides
    updateCarousel(index)
})
slideCbtn[1].addEventListener("click",()=>{
    index = (index + 1)%totalSlides
    updateCarousel(index)
})
indicators.forEach((indicator)=>{
    indicator.addEventListener('click', (e) => {
        index = parseInt(e.target.getAttribute('data-index'));
        updateCarousel(index)
    });
})
setInterval(()=>{
    slideCbtn[1].click()
},5000)

// let autoSlide = setInterval(() => {
//     nextBtn.click();
// }, 5000);

// // Pause Auto Slide on Interaction
// [prevBtn, nextBtn, ...indicators].forEach((btn) => {
//     btn.addEventListener('mouseenter', () => clearInterval(autoSlide));
//     btn.addEventListener('mouseleave', () => {
//         autoSlide = setInterval(() => {
//             nextBtn.click();
//         }, 5000);
//     });
// });

// // Initialize
// updateCarousel(currentIndex);