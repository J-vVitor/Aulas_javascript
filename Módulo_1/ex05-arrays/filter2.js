const pessoas = [
        {nome:'luiz', idade: 34},
       {nome:'vitor', idade: 19},
       {nome:'alexsandra', idade: 18},
        {nome:'julia', idade: 10}
]
 //Retorna pessoas com nome maior ou igual a 5 letras!
const nomeGrande = pessoas.filter(valor => valor.nome.length >= 5)
console.log(nomeGrande)

console.log('----------------')

//RETORNA PESSOAS COM IGUAL MAIOR OU IGUAL A 18!
const maiorIdade = pessoas.filter(valor => valor.idade >=18)
console.log(maiorIdade)

console.log('----------------')

//RETORNA PESSOAS COM "A" SENDO A ÚLTIMA LETRAS!

const terminaComA = pessoas.filter(valor => valor.nome.endsWith('a'))
console.log(terminaComA)