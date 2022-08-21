const nao = document.getElementById('nao');
const sim = document.getElementById('sim');

nao.addEventListener('mouseenter', estilos);
nao.addEventListener('ontouchstart', estilos); // mobile

nao.addEventListener('mouseleave', ()=> nao.style.display='inline-block');


function estilos () {
    nao.style.display='none';  
}