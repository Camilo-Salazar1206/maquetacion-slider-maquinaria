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

// Toggle Desktop/Mobile Preview
const viewToggle = document.getElementById('viewToggle');
const viewTitle = document.getElementById('viewTitle');

if (viewToggle && viewTitle) {
    viewToggle.addEventListener('click', () => {
        document.body.classList.toggle('view-mobile');
        const isMobile = document.body.classList.contains('view-mobile');
        viewToggle.textContent = isMobile ? 'Ver Desktop' : 'Ver Mobile';
        viewTitle.textContent = isMobile ? '📱 Versión Mobile' : '🖥️ Versión Desktop';
    });
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

