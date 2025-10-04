// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let autoSlideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetAutoSlide();
}

function goToSlide(n) {
    showSlide(n);
    resetAutoSlide();
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000); // Cambia cada 5 segundos
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Iniciar carrusel automático
startAutoSlide();

// Pausar al pasar el mouse
const carousel = document.querySelector('.carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}