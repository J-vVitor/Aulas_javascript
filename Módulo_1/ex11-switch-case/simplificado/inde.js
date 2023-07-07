const titulo = document.querySelector('#titulo')
const data = new Date();
titulo.innerHTML = data.toLocaleDateString('pt-BR',{dateStyle: 'full'});
