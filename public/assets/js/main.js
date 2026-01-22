const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    },
    observer: true,
    observeParents: true,
});

function loadComponent(id, path, callback) {
    fetch(path)
    .then(response => {
        if (!response.ok) throw new Error("Não encontrou o arquivo no caminho: " + path);
        return response.text();
    })
        .then(data => {
            const container = document.getElementById(id);
        if (container) container.innerHTML = data;
            
            if (typeof initHeaderScroll === "function") {
                initHeaderScroll();
            }

            if (typeof initMobileMenu === "function") {
                initMobileMenu();
            }

            const btn = document.getElementById('hamburger');
            const menu = document.getElementById('nav-menu');
            const logo = document.getElementById('main-logo');

            if (btn && menu) {
                // Função para abrir/fechar
                menu.classList.remove('show');

                btn.onclick = function(e) {
                    e.stopPropagation();
                    const isNowOpen = menu.classList.toggle('show');
                    
                    // Se abriu, esconde a logo
                    if (logo) {
                        if (isNowOpen) logo.classList.add('hide-logo');
                        else logo.classList.remove('hide-logo');
                    }
                };

                // Fecha quando clica nos links
                menu.querySelectorAll('a').forEach(link => {
                    link.onclick = () => {
                        menu.classList.remove('show');
                        if (logo) logo.classList.remove('hide-logo');
                    };
                });

                // Fecha quando clicar fora !!OBS
                document.addEventListener('click', (e) => {
                    if (menu.classList.contains('show') && !menu.contains(e.target) && e.target !== btn) {
                        menu.classList.remove('show');
                        if (logo) logo.classList.remove('hide-logo');
                    }
                });
            }
            if (callback) callback();
        });
}
loadComponent('header-placeholder', 'components/header.html');