document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
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
});

function loadComponent(id, path, callback) {
    // Log para ajudar a debugar no console do navegador (F12)
    console.log("Tentando carregar componente:", path);

    fetch(path)
    .then(response => {
        if (!response.ok) throw new Error("Não encontrou o arquivo: " + path);
        return response.text();
    })
    .then(data => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = data;
            
            // Reinicializa os eventos do menu após o HTML ser inserido
            setupMenuEvents(); 
        }
        if (callback) callback();
    })
    .catch(err => console.error("Erro no loadComponent:", err));
}

// Transformei a lógica de menu em uma função separada para organizar
function setupMenuEvents() {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
    const logo = document.getElementById('main-logo');

    if (btn && menu) {
        btn.onclick = function(e) {
            e.stopPropagation();
            const isNowOpen = menu.classList.toggle('show');
            if (logo) {
                if (isNowOpen) logo.classList.add('hide-logo');
                else logo.classList.remove('hide-logo');
            }
        };

        menu.querySelectorAll('a').forEach(link => {
            link.onclick = () => {
                menu.classList.remove('show');
                if (logo) logo.classList.remove('hide-logo');
            };
        });

        document.addEventListener('click', (e) => {
            if (menu.classList.contains('show') && !menu.contains(e.target) && e.target !== btn) {
                menu.classList.remove('show');
                if (logo) logo.classList.remove('hide-logo');
            }
        });
    }
}

loadComponent('header-placeholder', '/components/header.html');