export const insertPortfolioImages = () => {
	setTimeout(() => {
		const portfolioImages = document.body.querySelectorAll('.portfolio-page__img--big');
		portfolioImages.forEach((img) => {
			img.src = img.dataset.href;
		});
	}, 100);
};

