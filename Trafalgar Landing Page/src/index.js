const testimonialContainer = document.getElementById('testimonial');
const customers = document.querySelectorAll('.customer');
const pages = document.querySelectorAll('.page');

const customerWidth = customers[0].clientWidth; // Assuming all customers have the same width
const testimonialInterval = setInterval(showNextCustomer, 1000);
let currentIndex = 0;

function slideTo(index) {
    const newPosition = -index * customerWidth;
    testimonialContainer.style.transform = `translateX(${newPosition}px)`;
    pages[currentIndex].classList.add("focus");
    if (currentIndex - 1 < 0) {
        pages[3].classList.remove("focus");
    } else {
        pages[currentIndex - 1].classList.remove("focus");
    }
}

function showNextCustomer() {
    currentIndex = (currentIndex + 1) % customers.length;
    slideTo(currentIndex);
}

document.addEventListener("DOMContentLoaded", function() {
    testimonialInterval
});