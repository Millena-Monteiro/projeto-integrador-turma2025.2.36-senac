function loadHeader(){
    fetch('/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;

        // Lógica do Clique
        const btn = document.getElementById('hamburger');
        const menu = document.getElementById('nav-menu');

        if (btn && menu) {
            btn.onclick = function() {
                menu.classList.toggle('show');
            };
        }
    })
    .catch(error => console.log("Erro ao carregar menu"));
}

document.addEventListener('DOMContentLoaded', loadHeader);