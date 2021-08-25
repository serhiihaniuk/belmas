

document.addEventListener('DOMContentLoaded', () => {

    const menuItem = document.getElementById("nav-icon3")
    menuItem.addEventListener("click", () => {
        menuItem.classList.toggle("open")
    })

    const portfolioSlider = document.querySelector(".portfolio-page__slider");
    function updateSort(el) {
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
    portfolioSlider.addEventListener("scroll", function() {
        const el = this;

        if (lastscroll) {
            clearTimeout(lastscroll);
        }
        lastscroll = setTimeout(function() {
            updateSort(el);
        }, 50);
    });
    updateSort(portfolioSlider)
})
