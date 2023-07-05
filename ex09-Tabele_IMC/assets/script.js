//PARA O ENVIO DO FORMULÁRIO PARA O SISTEMA WEB

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    console.log('evento previnido!');

    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;

    const imc = Number(peso) / Number(altura * altura);
    const resultado = document.querySelector('#resultadofinal')

    if (imc < 18.5){
        resultado.innerHTML = ` Seu IMC é equivalente a: ${imc.toFixed(4)} <br/>`;
        resultado.innerHTML += "Você está abaixo do peso." ;

    }else if (imc >= 18.5 && imc <= 24.5){
        resultado.innerHTML = `Seu IMC é equivalente a: ${imc.toFixed(4)} <br/>`;
        resultado.innerHTML += "Você está com o peso normal.";

    }else if (imc >=25 && imc <=30){
        resultado.innerHTML = `Seu IMC é equivalente a ${imc.toFixed(4)} <br/>`;
        resultado.innerHTML += "Sobrepeso.";

    }else if (imc >= 31 && imc <= 34.9){
        resultado.innerHTML = `Seu IMC é equivalente a ${imc.toFixed(4)} <br/>`;
        resultado.innerHTML += "Obesidade grau 1 ";

    }else if (imc >=35 && imc <= 39.9){
        resultado.innerHTML = `Seu IMC é equivalente a ${imc.toFixed(4)} <br/>`;
        resultado.innerHTML += "Obesidade grau 2 ";

    }else{
        resultado.innerHTML = `Seu IMC é equivalente a ${imc.toFixed(4)} <br/>`;
        resultado.innerHTML += "Obesidade grau 3 ";
    }

    
});