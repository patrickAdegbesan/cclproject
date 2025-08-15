// Testimonials slider rotation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');
function nextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}
setInterval(nextTestimonial, 7000);

// Case studies before/after slider
const sliders = document.querySelectorAll('.before-after-slider');
sliders.forEach(slider => {
    const beforeImg = slider.querySelector('.ba-image.before');
    const handle = slider.querySelector('.ba-handle');
    let isDragging = false;

    const startDrag = (e) => {
        isDragging = true;
        slider.classList.add('dragging');
    };
    const stopDrag = () => {
        isDragging = false;
        slider.classList.remove('dragging');
    };
    const onDrag = (e) => {
        if (!isDragging) return;
        const rect = slider.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        offsetX = Math.max(0, Math.min(offsetX, rect.width));
        const percent = (offsetX / rect.width) * 100;
        beforeImg.style.width = percent + '%';
        handle.style.left = percent + '%';
    };

    // Initialize
    beforeImg.style.width = '50%';
    handle.style.left = '50%';

    // Events
    handle.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', onDrag);
    // Touch events
    handle.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('touchmove', (e) => { if (isDragging) onDrag(e.touches[0]); });
});

// Scroll reveal for sections
const revealSections = document.querySelectorAll('.section');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealSections.forEach(section => {
        const revealTop = section.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();