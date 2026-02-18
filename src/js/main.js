import "../css/header.css";
import "../css/style.css";
import { renderHeader, setupMenu } from "./header.js";
import '@fortawesome/fontawesome-free/css/all.min.css';

document.addEventListener("DOMContentLoaded", () => {
  // Renderiza o header
  const placeholder = document.getElementById("header-placeholder");

  if (placeholder) {
    placeholder.innerHTML = renderHeader();
    setupMenu();
  }

  // Inicializa animações
  initAOS();

  // Inicializa swiper
  initSwiper();
});

/* ================= AOS ================= */
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }
}

/* ================= SWIPER ================= */
function initSwiper() {
  const swiperElement = document.querySelector(".mySwiper");

  if (swiperElement && typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }
}
