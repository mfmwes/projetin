const nao = document.getElementById('nao');
const sim = document.getElementById('sim');

const naoAppend = '<a> Não </a>';

nao.addEventListener('mouseenter', remove);
nao.addEventListener('ontouch', remove); // mobile


function remove() {
    document.getElementById('nao').remove()
}