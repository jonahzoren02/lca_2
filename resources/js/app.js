import "./bootstrap";

var swiperSimpleProducts = new Swiper(".carousel-simple-products", {
    loop: true,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".carousel-simple-products .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".carousel-simple-products .swiper-button-next",
        prevEl: ".carousel-simple-products .swiper-button-prev",
    },
});

var swiperMultipleCategories = new Swiper(".carousel-multiple-categories", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 2,
    autoplay: {
        delay: 2300,
    },
    navigation: {
        nextEl: ".carousel-multiple-categories .swiper-button-next",
        prevEl: ".carousel-multiple-categories .swiper-button-prev",
    },
});

var swiperMultipleOffers = new Swiper(".carousel-multiple-offers", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 7,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".carousel-multiple-offers .swiper-button-next",
        prevEl: ".carousel-multiple-offers .swiper-button-prev",
    },
});
