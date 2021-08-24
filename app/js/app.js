import Swiper from 'swiper/bundle';


document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.page-wrapper', {
        // Optional parameters
        direction: 'vertical',
        loop: false,
        cssMode: true,
        simulateTouch: true,
    });

    const menuItem = document.getElementById("nav-icon3")
    menuItem.addEventListener("click", () => {
        menuItem.classList.toggle("open")
    })
})
