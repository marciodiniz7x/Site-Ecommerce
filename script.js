// Leva da página index à home imediatamente
function aoInicio() {
    window.location = "pages/home.html";
}

// Seleciona elementos
const principal = document.querySelector('.principal');

// Cria o container de produtos na tela inicial
const ofertasIniciais = document.createElement('div');
ofertasIniciais.classList.add('ofertas-iniciais');
principal.appendChild(ofertasIniciais);

// Cria os produtos na tela inicial
const produto1 = document.createElement('div');
produto1.classList.add('produto1');
produto1.innerHTML = 'Produto 01';
ofertasIniciais.appendChild(produto1);

const produto2 = document.createElement('div');
produto2.classList.add('produto2');
produto2.innerHTML = 'Produto 02';
ofertasIniciais.appendChild(produto2);

const produto3 = document.createElement('div');
produto3.classList.add('produto3');
produto3.innerHTML = 'Produto 03';
ofertasIniciais.appendChild(produto3);