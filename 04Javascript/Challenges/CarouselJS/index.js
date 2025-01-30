const container = document.querySelector('.carousel-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0; // Track current slide
const totalSlides = document.querySelectorAll('.slide').length;

// Function to Update Slide Position
function updateCarousel(index) {
    container.style.transform = `translateX(-${index * 100}%)`;

    // Update active indicator
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Event Listener: Next Button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to start
    updateCarousel(currentIndex);
});

// Event Listener: Previous Button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to end
    updateCarousel(currentIndex);
});

// Event Listener: Indicators
indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateCarousel(currentIndex);
    });
});

// Auto Slide (Optional)
let autoSlide = setInterval(() => {
    nextBtn.click();
}, 5000);

// Pause Auto Slide on Interaction
[prevBtn, nextBtn, ...indicators].forEach((btn) => {
    btn.addEventListener('mouseenter', () => clearInterval(autoSlide));
    btn.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            nextBtn.click();
        }, 5000);
    });
});

// Initialize
updateCarousel(currentIndex);
