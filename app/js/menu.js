const menuItem = document.getElementById('nav-icon3');
const menu = document.querySelector('.menu');

export const runMenuBurger = () => {
	menuItem.addEventListener('click', () => {
		menuItem.classList.toggle('open');
		menu.classList.toggle('open');
	});
};
//menu links
export const runMenuLinks = () => {
	const menuLinks = document.querySelectorAll('.menu__item');
	menuLinks.forEach((link) => {
		link.addEventListener('click', () => {
			menu.classList.remove('open');
			menuItem.classList.remove('open');
		});
	});
};
