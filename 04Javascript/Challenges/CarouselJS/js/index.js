const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.getElementById("carousel")
const totalSlides = document.querySelectorAll('.slide').length;
const indicators = document.querySelectorAll('.indicator');
console.log(...indicators);
let index = 0

function updateCarousel(index){
    carousel.style.transform = `translateX(-${index * 100}%)`
    indicators.forEach((indicator, i)=>{
        indicator.classList.toggle("active", i === index)
    })
}

prevBtn.addEventListener("click",()=>{
    index = (index - 1 + totalSlides)%totalSlides
    updateCarousel(index)
})
nextBtn.addEventListener("click",()=>{
    index = (index + 1)%totalSlides
    updateCarousel(index)
})
indicators.forEach((indicator)=>{
    indicator.addEventListener('click', (e) => {
        index = parseInt(e.target.getAttribute('data-index'));
        updateCarousel(index)
    });
})
let autoSlide = setInterval(()=>{
    nextBtn.click()
},5000)


// [slideCbtn[0], slideCbtn[1], ...indicators].forEach((btn)=>{
    
// })

// let autoSlide = setInterval(() => {
//     nextBtn.click();
// }, 5000);

// // Pause Auto Slide on Interaction
[prevBtn, nextBtn].forEach((btn) => {
    btn.addEventListener('mouseenter', () => clearInterval(autoSlide));
    btn.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            nextBtn.click();
        }, 5000);
    });
});

// // Initialize
// updateCarousel(currentIndex);