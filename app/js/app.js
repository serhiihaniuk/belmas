import { insertPortfolioImages } from './lazyLoad/lazyPortfolio';
import { runPortfolioSlider } from './slider';
import { runMenuLinks, runMenuBurger } from './menu';
import { scrollResizeHandler } from './price';
import { trottle } from "./utils";

let currentHeight = document.body.offsetHeight;
document.addEventListener('DOMContentLoaded', () => {
    // book popup
    const runBookButtons = () => {
        const popupWrapper = document.querySelector('.book');
        const bookButtons = document.querySelectorAll('.open-popup');
        bookButtons.forEach((bookButton) => {
            bookButton.addEventListener('click', () => {
                popupWrapper.classList.add('open');
            });
        });

        popupWrapper.addEventListener('click', (e) => {
            if (e.target === popupWrapper) {
                popupWrapper.classList.remove('open');
            }
        });
    };
    const pageWrappers = document.body.querySelectorAll('.swiper-slide');
    const pageWrapper = document.body.querySelector('.page-wrapper');
    const setSectionHeight = () => {
        pageWrappers.forEach((page) => {
            page.style.height = `${document.body.offsetHeight}px`;
        });
    };
    const runNextSectionScroll = () => {
        const nextSectionButtons = document.querySelectorAll('.next-section');
        nextSectionButtons.forEach((button) => {
            button.addEventListener('click', () => {
                pageWrapper.scrollTo({
                    top: pageWrapper.scrollTop + document.body.offsetHeight,
                    behavior: 'smooth'
                });
            });
        });
    };
    //load
    setSectionHeight();
    scrollResizeHandler();
    runMenuBurger();

    
   const changeSizeHandler =  () => {
        setSectionHeight();
        scrollResizeHandler();
        throttleCheckSize();
    }
    //lazyLoad
    setTimeout(() => {
        runPortfolioSlider();
        insertPortfolioImages();
        runBookButtons();
        runMenuLinks();
        runNextSectionScroll();
    }, 300);

    window.addEventListener('resize', () => {
        currentHeight = document.body.offsetHeight;
        requestAnimationFrame(changeSizeHandler);
    });
    window.addEventListener('orientationchange', () => {
        currentHeight = document.body.offsetHeight;
        requestAnimationFrame(changeSizeHandler);

    });

    function checkSize() {
        if (currentHeight !== document.body.offsetHeight) {
            currentHeight = document.body.offsetHeight;
            requestAnimationFrame(() => {
                setSectionHeight();
                scrollResizeHandler();
            });
        }

    }
    
    const checkSizeInterval = setInterval(checkSize, 500);

    const throttleCheckSize = trottle(checkSize, 777);
});



