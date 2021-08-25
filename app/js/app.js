document.addEventListener('DOMContentLoaded', () => {

    const menuItem = document.getElementById("nav-icon3")
    const menu = document.querySelector(".menu")
    menuItem.addEventListener("click", () => {
        menuItem.classList.toggle("open")
        menu.classList.toggle("open")
    })

    const portfolioSlider = document.querySelector(".portfolio-page__slider")
    const portfolioSlide = document.querySelectorAll('.portfolio-page__slide')
    const portfolioSlideWidth = portfolioSlide[0].offsetWidth
    const prevSlideBtn = document.querySelector('#slider__prev')
    const nextSlideBtn = document.querySelector('#slider__next')
    let currentOffset = 0

    prevSlideBtn.addEventListener('click', () => {
        portfolioSlider.scrollTo({left: currentOffset - portfolioSlideWidth, behavior: 'smooth'})
    })
    nextSlideBtn.addEventListener('click', () => {
        portfolioSlider.scrollTo({left: currentOffset + portfolioSlideWidth, behavior: 'smooth'})
    })


    const watchSlides = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentOffset = entry.target.offsetLeft
                entry.target.classList.add('active-slide')
                if(entry.target.offsetLeft === 0) {
                    prevSlideBtn.style.opacity = "0"
                    return
                }
                if(entry.target === portfolioSlide[portfolioSlide.length -1] ){
                    nextSlideBtn.style.opacity = "0"
                    return
                }
                nextSlideBtn.style.opacity = "1"
                prevSlideBtn.style.opacity = "1"
            } else {
                entry.target.classList.remove('active-slide')
            }

        })
    };
    const sliderObserver = new IntersectionObserver(watchSlides, {
        root: null,
        rootMargin: '0px',
        threshold: .6
    });
    portfolioSlide.forEach((slide) => {
        sliderObserver.observe(slide)
    })
})