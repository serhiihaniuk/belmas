import { portfolioPage } from './lazyHtml';

document.addEventListener('DOMContentLoaded', () => {
	const bodyHeight = document.body.offsetHeight;
	const pageWrapppers = document.body.querySelectorAll('.swiper-slide');
	pageWrapppers.forEach((page)=>{
		page.style.height = `${bodyHeight}px`
	})
	//utils
	const trottle = (callback) => {
		let wait = false;
		return (e) => {
			if (wait) return;
			wait = true;
			callback(e);
			setTimeout(() => (wait = false), 8);
		};
	};
	//utils

	//main
	const menuItem = document.getElementById('nav-icon3');
	const menu = document.querySelector('.menu');
	menuItem.addEventListener('click', () => {
		menuItem.classList.toggle('open');
		menu.classList.toggle('open');
	});

	//menu links
	const menuLinks = document.querySelectorAll('.menu__item');
	menuLinks.forEach((link) => {
		link.addEventListener('click', () => {
			menu.classList.remove('open');
			menuItem.classList.remove('open');
		});
	});
	// book popup
	const popupWrapper = document.querySelector('.book');
	const runBookButtons = () => {
		const bookButtons = document.querySelectorAll('.open-popup');
		bookButtons.forEach((bookButton) => {
			bookButton.addEventListener('click', () => {
				popupWrapper.classList.add('open');
			});
		});
	};

	popupWrapper.addEventListener('click', (e) => {
		if (e.target === popupWrapper) {
			popupWrapper.classList.remove('open');
		}
	});

	//slider
	const runPortfolioSlider = () => {
		const portfolioSlider = document.querySelector('.portfolio-page__slider');
		const portfolioSlide = document.querySelectorAll('.portfolio-page__slide');
		const portfolioSlideWidth = portfolioSlide[0].offsetWidth;
		const prevSlideBtn = document.querySelector('#slider__prev');
		const nextSlideBtn = document.querySelector('#slider__next');
		let currentOffset = 0;

		prevSlideBtn.addEventListener('click', () => {
			portfolioSlider.scrollTo({ left: currentOffset - portfolioSlideWidth, behavior: 'smooth' });
		});
		nextSlideBtn.addEventListener('click', () => {
			portfolioSlider.scrollTo({ left: currentOffset + portfolioSlideWidth, behavior: 'smooth' });
		});

		const watchSlides = function (entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					currentOffset = entry.target.offsetLeft;
					entry.target.classList.add('active-slide');
					if (entry.target.offsetLeft === 0) {
						prevSlideBtn.style.opacity = '0';
						return;
					}
					if (entry.target === portfolioSlide[portfolioSlide.length - 1]) {
						nextSlideBtn.style.opacity = '0';
						return;
					}
					nextSlideBtn.style.opacity = '1';
					prevSlideBtn.style.opacity = '1';
				} else {
					entry.target.classList.remove('active-slide');
				}
			});
		};
		const sliderObserver = new IntersectionObserver(watchSlides, {
			root: null,
			rootMargin: '0px',
			threshold: 0.6
		});
		portfolioSlide.forEach((slide) => {
			sliderObserver.observe(slide);
		});
	};

	//price component
	const priceElement = document.querySelector('.price');
	const priceScrollbar = document.querySelector('.price__scrollbar');
	const priceScrollbarThumb = document.querySelector('.price__thumb');
	let scrollHeight;

	const scrollResizeHandler = () => {
		priceScrollbar.style.height = priceElement.clientHeight + 'px';
		scrollHeight = priceElement.scrollHeight - priceElement.clientHeight;
	};
	scrollResizeHandler();
	window.addEventListener('resize', scrollResizeHandler);

	priceElement.addEventListener(
		'scroll',
		trottle((e) => {
			const scrollTop = e.target.scrollTop;
			const scrollPercent = parseInt((scrollTop / scrollHeight) * 100);
			priceScrollbarThumb.style.top = scrollPercent + '%';
			priceScrollbarThumb.style.transform = `translateY(-${scrollPercent}%)`;
		})
	);

	//lazyLoad
	setTimeout(() => {
		const portfolioSectionDiv = document.body.querySelector('.portfolio-page__wrapper');
		portfolioSectionDiv.insertAdjacentHTML('afterbegin', portfolioPage);
		runPortfolioSlider();
		insertPortfolioImages();
		runBookButtons();
	}, 1000);

	const insertPortfolioImages = () => {
		setTimeout(() => {
			const portfolioImages = document.body.querySelectorAll('.portfolio-page__img--big');
			portfolioImages.forEach((img) => {
				img.src = img.dataset.href;
			});
		}, 100);
	};
});
