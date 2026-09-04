import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".expertiseSwiper", {
    modules: [Navigation, Pagination],

    slidesPerView: 3.3,
    spaceBetween: 24,

    navigation: {
        nextEl: ".expertise-next",
        prevEl: ".expertise-prev",
    },

    pagination: {
        el: ".expertise-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 3.3,
        },
    },
    on: {
        init(swiper) {
            updateButtons(swiper);
        },
        slideChange(swiper) {
            updateButtons(swiper);
        }
    }
});

function updateButtons(swiper) {
    const prev = document.querySelector(".expertise-prev");
    const next = document.querySelector(".expertise-next");

    prev.classList.toggle("disabled", swiper.isBeginning);
    next.classList.toggle("disabled", swiper.isEnd);
}

