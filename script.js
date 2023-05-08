// Leva da página index à home imediatamente
function aoInicio() {
    window.location = "pages/home.html";
}

// Seleciona elementos
const principal = document.querySelector('principal');

// Cria o container de produtos na tela inicial
const ofertasIniciais = document.createElement('div');
ofertasIniciais.classList.add('ofertas-iniciais');
principal.appendChild(ofertasIniciais);

// Cria os produtos na tela inicial
