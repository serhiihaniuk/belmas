let throttlePause;

const throttle = (callback, time) => {
    if (throttlePause) return;

    throttlePause = true;
    setTimeout(() => {
        callback();
        throttlePause = false;
    }, time);
};

document.addEventListener('DOMContentLoaded', () => {

    const menuItem = document.getElementById("nav-icon3")
    menuItem.addEventListener("click", () => {
        menuItem.classList.toggle("open")
    })

    const portfolioSlider = document.querySelector(".portfolio-page__slider");
    function updateSort(el) {
        portfolioSlider.style.touchAction = ""

        const scrollWidth = el.scrollWidth;
        const scrollLeft = el.scrollLeft;
        const width = el.offsetWidth;
        const items = el.children;
        if (scrollLeft <= width) {
            el.prepend(items[items.length - 1]);
            el.scrollLeft = scrollLeft + width;
        }
        if (scrollWidth - scrollLeft <= width) {
            el.append(items[0]);
            el.scrollLeft = scrollLeft - width;
        }
    }

    let lastscroll;

    portfolioSlider.addEventListener("scroll", ()=>{
        throttle(function() {
            portfolioSlider.style.touchAction = "none"
            if (lastscroll) {
                clearTimeout(lastscroll);
            }
            lastscroll = setTimeout(function() {
                updateSort(portfolioSlider);
            }, 300);
        }, 300)
    })
    updateSort(portfolioSlider)
})
