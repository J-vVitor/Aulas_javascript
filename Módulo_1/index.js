const nome = " joão Vitor";
const sobrenome = "Pereira";
const idade = 20;
const peso = 62;
const altura = 1.70;

let imc = peso / (altura*altura);
let anoNascimento = 2023 - idade;

console.log(`Seu nome é ${nome} , seu sobrenome é ${sobrenome}
você tem ${idade} anos, nasceu em ${anoNascimento}, tem ${altura} de altura e seu
IMC é ${imc}`)
