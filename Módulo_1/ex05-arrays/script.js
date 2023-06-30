function escopo(){
    const form = document.querySelector('.form');
    const texto = document.querySelector('#texto');

    const pessoas = [];

    function receberform (evento){
        evento.preventDefault();

        const nome = form.querySelector('#nome')
        const sobrenome = form.querySelector('#Sobrenome')
        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura')

        const valores = [
            {nome:nome.value},
            {sobrenome:sobrenome.value},
            {peso:peso.value},
            {altura:altura.value}  // "NOMEAR"  OS VALORES;
        ]

        const array = [nome.value  + sobrenome.value + altura.value + peso.value] // array pra string

        texto.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>`; //texto com valores na tela 

        console.log(valores); // valor do array
    }

    form.addEventListener('submit',receberform);

}
escopo();
   