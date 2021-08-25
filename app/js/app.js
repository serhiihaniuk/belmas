

document.addEventListener('DOMContentLoaded', () => {

    const menuItem = document.getElementById("nav-icon3")
    menuItem.addEventListener("click", () => {
        menuItem.classList.toggle("open")
    })
    const portfolioSlide1 = document.getElementById('slide1')
    const portfolioSlide2 = document.getElementById('slide2')
    const portfolioSlide3 = document.getElementById('slide3')

    const btnToSlide2 = document.getElementById('toSlide2')
    const btnToSlide1 = document.getElementById('toSlide1')

    console.log(btnToSlide2, btnToSlide2)

    btnToSlide1.addEventListener('click',() => {
        console.log(123)
        portfolioSlide1.scrollIntoView()
    })
    btnToSlide2.addEventListener('click',() => {
        portfolioSlide2.scrollIntoView()
    })
})
