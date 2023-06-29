const numero = Number(prompt('Digite um número: '));
const numero_digitado = document.getElementById('numero_digitado');

const caixa_de_texto = document.getElementById('caixa');

numero_digitado.innerHTML = numero;

caixa_de_texto.innerHTML = `<p>A raiz quadrada do seu número é <strong>${numero ** 0.5}</strong></p> 
<p><strong>Arredondado</strong> para baixa:<strong> ${Math.floor(numero)}</strong></p>
<p><strong>Arredondado</strong> pra cima: <strong>${Math.ceil(numero)}</strong></p>
Seu número com <strong>duas casas décimais</strong>: <strong>${numero.toFixed(2)}</strong> `;
