//PARA O ENVIO DO FORMULÁRIO PARA O SISTEMA WEB

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    console.log('evento previnido!');
});