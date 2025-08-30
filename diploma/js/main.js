(function () {

    // Burger

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 800) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Slider

    const swiper = new Swiper('.slider__inner', {

        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        allowTouchMove: false,

        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },

        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },

        autoplay: {
            delay: 10000,
        }
    });

})()