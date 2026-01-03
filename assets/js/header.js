function loadHeader(){
    fetch('/components/header.html')
    .then(response => {
        if (!response.ok){
        throw new Error('Erro ao carregar o cabeçalho');
    }
    return response.text();
    })
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => {
            console.error('Erro:', error);
        });
    
}

document.addEventListener('DOMContentLoaded', loadHeader);