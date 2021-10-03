import { trottle } from './utils';

const priceElement = document.querySelector('.price');
const priceScrollbar = document.querySelector('.price__scrollbar');
const priceScrollbarThumb = document.querySelector('.price__thumb');
const updateThumbPosition = () => {
	const scrollPercent = parseInt((priceElement.scrollTop / scrollHeight) * 100);
	priceScrollbarThumb.style.top = scrollPercent + '%';
	priceScrollbarThumb.style.transform = `translateY(-${scrollPercent}%)`;
};

let scrollHeight;

priceElement.addEventListener('scroll', trottle(updateThumbPosition, 8));

export const scrollResizeHandler = () => {
	setTimeout(() => {
		priceScrollbar.style.height = priceElement.clientHeight + 'px';
		scrollHeight = priceElement.scrollHeight - priceElement.clientHeight;
        updateThumbPosition()
	}, 200);
};
