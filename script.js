// Desktop Slider
let desktopCurrentSlide = 0;
const desktopSlides = document.querySelectorAll('#desktop-slider .slide');
const desktopTotalSlides = desktopSlides.length;
const desktopSliderWrapper = document.getElementById('desktopSliderWrapper');
const desktopDotsContainer = document.getElementById('desktopDotsContainer');
const desktopContainer = document.getElementById('desktop-slider');

for (let i = 0; i < desktopTotalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToDesktopSlide(i);
    desktopDotsContainer.appendChild(dot);
}

const desktopDots = document.querySelectorAll('#desktopDotsContainer .dot');

function updateDesktopSlider() {
    desktopSliderWrapper.style.transform = `translateX(-${desktopCurrentSlide * 100}%)`;
    desktopDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === desktopCurrentSlide);
    });
}

function moveDesktopSlide(direction) {
    desktopCurrentSlide += direction;
    
    if (desktopCurrentSlide < 0) {
        desktopCurrentSlide = desktopTotalSlides - 1;
    }
    
    if (desktopCurrentSlide >= desktopTotalSlides) {
        desktopCurrentSlide = 0;
    }
    
    updateDesktopSlider();
}

function goToDesktopSlide(index) {
    desktopCurrentSlide = index;
    updateDesktopSlider();
}

// Desktop Drag
let desktopIsDragging = false;
let desktopStartPos = 0;
let desktopCurrentTranslate = 0;
let desktopPrevTranslate = 0;

desktopContainer.addEventListener('mousedown', (e) => {
    desktopStartPos = e.clientX;
    desktopIsDragging = true;
    desktopContainer.style.cursor = 'grabbing';
});

desktopContainer.addEventListener('mousemove', (e) => {
    if (!desktopIsDragging) return;
    desktopCurrentTranslate = desktopPrevTranslate + e.clientX - desktopStartPos;
});

desktopContainer.addEventListener('mouseup', (e) => {
    if (!desktopIsDragging) return;
    desktopIsDragging = false;
    const movedBy = desktopCurrentTranslate - desktopPrevTranslate;
    
    if (movedBy < -100) {
        moveDesktopSlide(1);
    } else if (movedBy > 100) {
        moveDesktopSlide(-1);
    } else {
        updateDesktopSlider();
    }
    
    desktopPrevTranslate = -desktopCurrentSlide * desktopContainer.offsetWidth;
    desktopCurrentTranslate = desktopPrevTranslate;
    desktopContainer.style.cursor = 'grab';
});

desktopContainer.addEventListener('mouseleave', () => {
    if (desktopIsDragging) {
        desktopIsDragging = false;
        desktopContainer.style.cursor = 'grab';
    }
});

desktopContainer.style.cursor = 'grab';

// Mobile Slider
let mobileCurrentSlide = 0;
const mobileSlides = document.querySelectorAll('#mobile-slider .slide');
const mobileTotalSlides = mobileSlides.length;
const mobileSliderWrapper = document.getElementById('mobileSliderWrapper');
const mobileDotsContainer = document.getElementById('mobileDotsContainer');
const mobileContainer = document.getElementById('mobile-slider');

for (let i = 0; i < mobileTotalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToMobileSlide(i);
    mobileDotsContainer.appendChild(dot);
}

const mobileDots = document.querySelectorAll('#mobileDotsContainer .dot');

function updateMobileSlider() {
    mobileSliderWrapper.style.transform = `translateX(-${mobileCurrentSlide * 100}%)`;
    mobileDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === mobileCurrentSlide);
    });
}

function moveMobileSlide(direction) {
    mobileCurrentSlide += direction;
    
    if (mobileCurrentSlide < 0) {
        mobileCurrentSlide = mobileTotalSlides - 1;
    }
    
    if (mobileCurrentSlide >= mobileTotalSlides) {
        mobileCurrentSlide = 0;
    }
    
    updateMobileSlider();
}

function goToMobileSlide(index) {
    mobileCurrentSlide = index;
    updateMobileSlider();
}

// Mobile Drag
let mobileIsDragging = false;
let mobileStartPos = 0;
let mobileCurrentTranslate = 0;
let mobilePrevTranslate = 0;

mobileContainer.addEventListener('mousedown', (e) => {
    mobileStartPos = e.clientX;
    mobileIsDragging = true;
    mobileContainer.style.cursor = 'grabbing';
});

mobileContainer.addEventListener('touchstart', (e) => {
    mobileStartPos = e.touches[0].clientX;
    mobileIsDragging = true;
});

mobileContainer.addEventListener('mousemove', (e) => {
    if (!mobileIsDragging) return;
    mobileCurrentTranslate = mobilePrevTranslate + e.clientX - mobileStartPos;
});

mobileContainer.addEventListener('touchmove', (e) => {
    if (!mobileIsDragging) return;
    mobileCurrentTranslate = mobilePrevTranslate + e.touches[0].clientX - mobileStartPos;
});

mobileContainer.addEventListener('mouseup', (e) => {
    if (!mobileIsDragging) return;
    mobileIsDragging = false;
    const movedBy = mobileCurrentTranslate - mobilePrevTranslate;
    
    if (movedBy < -50) {
        moveMobileSlide(1);
    } else if (movedBy > 50) {
        moveMobileSlide(-1);
    } else {
        updateMobileSlider();
    }
    
    mobilePrevTranslate = -mobileCurrentSlide * mobileContainer.offsetWidth;
    mobileCurrentTranslate = mobilePrevTranslate;
    mobileContainer.style.cursor = 'grab';
});

mobileContainer.addEventListener('touchend', (e) => {
    if (!mobileIsDragging) return;
    mobileIsDragging = false;
    const movedBy = mobileCurrentTranslate - mobilePrevTranslate;
    
    if (movedBy < -50) {
        moveMobileSlide(1);
    } else if (movedBy > 50) {
        moveMobileSlide(-1);
    } else {
        updateMobileSlider();
    }
    
    mobilePrevTranslate = -mobileCurrentSlide * mobileContainer.offsetWidth;
    mobileCurrentTranslate = mobilePrevTranslate;
});

mobileContainer.addEventListener('mouseleave', () => {
    if (mobileIsDragging) {
        mobileIsDragging = false;
        mobileContainer.style.cursor = 'grab';
    }
});

mobileContainer.style.cursor = 'grab';
