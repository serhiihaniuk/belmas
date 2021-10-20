import { insertPortfolioImages } from './lazyLoad/lazyPortfolio';
import { runPortfolioSlider } from './slider';
import { runMenuLinks, runMenuBurger } from './menu';
import { scrollResizeHandler } from './price';

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
	const pageWrapppers = document.body.querySelectorAll('.swiper-slide');
	const pageWrapper = document.body.querySelector('.page-wrapper');
	const setSectionHeight = () => {
		pageWrapppers.forEach((page) => {
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

	//lazyLoad
	setTimeout(() => {
		runPortfolioSlider();
		insertPortfolioImages();
		runBookButtons();
		runMenuLinks();
		runNextSectionScroll();
	}, 300);

	window.addEventListener('resize', () => {
		requestAnimationFrame(() => {
			setSectionHeight();
			scrollResizeHandler();
		});
	});
});


