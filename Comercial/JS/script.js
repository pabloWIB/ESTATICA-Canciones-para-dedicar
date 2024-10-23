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

let cardSlider2 = new Swiper('.card-slider2', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
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

$(function() {
    const items = [
        { trigger: '.touch-add-info-one', target: '.add-info-one' },
        { trigger: '.touch-add-info-two', target: '.add-info-two' },
        { trigger: '.touch-add-info-three', target: '.add-info-three' },
        { trigger: '.touch-add-info-four', target: '.add-info-four' }
    ];

    function handleClick(triggerSelector, targetSelector) {
        $(triggerSelector).on('click', function(e) {
            e.preventDefault();
            const $target = $(targetSelector);
            const $svg = $(this).find('img.toggle-svg');
            
            $target.toggleClass('add-info-get');
            $svg.attr('src', $target.hasClass('add-info-get') ? 'IMG/minus.svg' : 'IMG/plus.svg');
        });
    }

    items.forEach(item => handleClick(item.trigger, item.target));
});