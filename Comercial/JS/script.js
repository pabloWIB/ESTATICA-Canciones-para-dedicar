let cardSlider = new Swiper('.card-slider', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 2,
    spaceBetween: 70,
    breakpoints: {
        767: {
            slidesPerView: 4
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});