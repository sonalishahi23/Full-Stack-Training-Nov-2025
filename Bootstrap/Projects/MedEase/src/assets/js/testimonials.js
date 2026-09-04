import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".testimonialSwiper", {
    modules: [Navigation, Pagination],

    slidesPerView: 1.3,
    spaceBetween: 24,

    navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
    },

    pagination: {
        el: ".testimonial-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 1.35,
            spaceBetween: 8,
        },
        992: {
            slidesPerView: 1.55,
            spaceBetween: 6,
        },
    },
    on: {
        init() {
            updateButtons(this);
        },
        slideChange() {
            updateButtons(this);
        },
    },
});

function updateButtons(swiper) {
    const prev = document.querySelector(".testimonial-prev");
    const next = document.querySelector(".testimonial-next");

    if (swiper.isBeginning) {
        prev.classList.add("disabled-btn");
        next.classList.remove("disabled-btn");
    } else if (swiper.isEnd) {
        next.classList.add("disabled-btn");
        prev.classList.remove("disabled-btn");
    } else {
        prev.classList.remove("disabled-btn");
        next.classList.remove("disabled-btn");
    }
}