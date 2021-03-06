export const insertPortfolioImages = () => {
	setTimeout(() => {
		const portfolioImages = document.body.querySelectorAll('.portfolio-page__img--big');
		portfolioImages.forEach((img) => {
			img.src = img.dataset.href;
		});
	}, 100);
};

export const portfolioPage = `

<div class="portfolio-page__slider">
        <div class="portfolio-page__slide 1">
            <div class="portfolio-page__gallery">
                <div class="portfolio-page__img-wrapper--big">
                    <img src="#" data-href="images/dist/port2.webp" alt="portfolio image" class="portfolio-page__img--big">
                </div>
            </div>

            <div class="portfolio-page__description portfolio-page__description--main">
                <h2 class="portfolio-page__title">Naszę portfolio</h2>
                <div class="portfolio-page__text">
                    <div>Kobiecość przejawia się w szczegółach, a jednym z nich jest manicure</div>
                    <div class="portfolio-page__map">
                        <img src="images/dist/map.svg" alt="map ico belmas"
                             class="social__img ico-ring-animation">

                        Wrocław
                        <br/>
                        Pomorska 32<br/>
                        Blisko centrum<br/>
                        Free parking<br/>
                    </div>
                </div>

            </div>
        </div>
        <div class="portfolio-page__slide 2">
            <div class="portfolio-page__gallery">
                <div class="portfolio-page__img-wrapper--big">
                    <img src="#" data-href="images/dist/port2.webp" alt="portfolio image" class="portfolio-page__img--big">
                </div>
            </div>

            <div class="portfolio-page__description">
                <h2 class="portfolio-page__title">2 portfolio</h2>
                <p class="portfolio-page__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem
                    Ipsum has been the industry's standard dummy text </p>
            </div>

        </div>
        <div class="portfolio-page__slide 3">
            <div class="portfolio-page__gallery">
                <div class="portfolio-page__img-wrapper--big">
                    <img src="#" data-href="images/dist/port2.webp" alt="portfolio image" class="portfolio-page__img--big">
                </div>
            </div>

            <div class="portfolio-page__description">
                <h2 class="portfolio-page__title">3 portfolio</h2>
                <p class="portfolio-page__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem
                    Ipsum has been the industry's standard dummy text </p>


            </div>

        </div>
        <div class="portfolio-page__slide 4">
            <div class="portfolio-page__gallery">
                <div class="portfolio-page__img-wrapper--big">
                    <img src="#" data-href="images/dist/port2.webp" alt="portfolio image" class="portfolio-page__img--big">
                </div>
            </div>

            <div class="portfolio-page__description">
                <h2 class="portfolio-page__title">4 portfolio</h2>
                <p class="portfolio-page__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem
                    Ipsum has been the industry's standard dummy text </p>


            </div>

        </div>
        <div class="portfolio-page__slide 5">
            <div class="portfolio-page__gallery">
                <div class="portfolio-page__img-wrapper--big">
                    <img src="#" data-href="images/dist/port2.webp" alt="portfolio image" class="portfolio-page__img--big">
                </div>
            </div>

            <div class="portfolio-page__description">
                <h2 class="portfolio-page__title">5 portfolio</h2>
                <p class="portfolio-page__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem
                    Ipsum has been the industry's standard dummy text </p>
            </div>

        </div>
    </div>
    <img src="images/dist/bg-item-pink.svg" class="portfolio-page__bg portfolio-page__bg--top bg-move-animation"
         alt="bg">
    <img src="images/dist/bg-item-pink.svg" class="portfolio-page__bg portfolio-page__bg--bot bg-move-animation"
         alt="bg">

    <div class="portfolio-page__controls">
        <button class="btn-arrow" id="slider__prev">
            <img src="images/dist/goNext.svg" alt="next slide" class="brn-arrow__img brn-arrow__img--left">
        </button>
        <button class="btn-arrow " id="slider__next">
            <img src="images/dist/goNext.svg" alt="next slide" class="brn-arrow__img brn-arrow__img--right">
        </button>
    </div>
    <div class="portfolio-page__next-page">
        <button class="btn-main portfolio-page__order-btn open-popup">Zarezerwuj wizytę</button>
        <button class="btn-arrow fadeIn next-section">
            <img src="images/dist/goNext.svg" alt="next slide" class="btn-arrow__img">
        </button>
    </div>


`;
