function scrollToNextSection() {
    window.scrollTo({
        top: document.querySelector('.hero-section').nextElementSibling.offsetTop,
        behavior: 'smooth' // Zorgt voor een vloeiende scrollbeweging
    });
}
