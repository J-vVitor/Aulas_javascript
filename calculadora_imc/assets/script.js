var altura = document.querySelector('#altura');
var peso = document.querySelector('#peso');
var divResultados = document.querySelector('#resultados');


altura.addEventListener('keypress', () =>{
    let alturalength = altura.value.length

    if(alturalength === 1){
        altura.value += '.'
    }
})
peso.addEventListener('keypress', () =>{
    let pesolength = peso.value.length

    if(pesolength === 2){
        peso.value += '.'
    }
})


function envio(){
    var conversao = altura.value / 100;
    var imc = (peso.value) / (altura.value * altura.value)

    
    if(imc < 18.5){
        divResultados.innerHTML = `Você possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ABAIXO DO PESO`//abaixo do normal
       }else if(imc >= 18.5 && imc <= 24.9){
        divResultados.innerHTML = `Você possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: Peso ideal` //normal
       }else if(imc >= 25 && imc <= 29.9){
        divResultados.innerHTML = `Você possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: SOBREPESO`//sobrepeso
       }else if(imc >=30 && imc <=34.9 ){
        divResultados.innerHTML = `Você possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: OBESIDADE GRAU 1 `//obg 1 
       }else if(imc >=35 && imc <=39.9 ){
        divResultados.innerHTML = `Você possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: OBESIDADE GRAU 2 ` //obg 2 
       }else if(imc >=40 ){
        divResultados.innerHTML = `Você possui índice de massa corporal igual a ${imc.toFixed(2) }, sendo classificado como: OBESIDADE GRAU 3 `//ob3
       }else{
        alert('Digite algum número para o IMC ser calculado!')
       }
    }