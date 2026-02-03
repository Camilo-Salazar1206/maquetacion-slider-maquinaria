let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderWrapper = document.getElementById('sliderWrapper');
const dotsContainer = document.getElementById('dotsContainer');

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Auto-play (optional)
let autoplayInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

// Pause autoplay on hover
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveSlide(-1);
    if (e.key === 'ArrowRight') moveSlide(1);
});
