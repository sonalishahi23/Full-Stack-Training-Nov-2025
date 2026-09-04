import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".blogSwiper", {
    modules: [Navigation, Pagination],

    slidesPerView: 3.2,
    spaceBetween: 24,
    speed: 700,

    navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
    },

    pagination: {
        el: ".blog-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3.2,
            spaceBetween: 24,
        },
    },
    on: {
        init(swiper) {
            updateBlogButtons(swiper);
        },
        slideChange(swiper) {
            updateBlogButtons(swiper);
        },
    },
});

function updateBlogButtons(swiper) {
    const prev = document.querySelector(".blog-prev");
    const next = document.querySelector(".blog-next");

    prev.classList.remove("disabled-btn");
    next.classList.remove("disabled-btn");

    if (swiper.isBeginning) {
        prev.classList.add("disabled-btn");
    }

    if (swiper.isEnd) {
        next.classList.add("disabled-btn");
    }
}