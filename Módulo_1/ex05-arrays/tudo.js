const numero = [1,2,3,4,5,6,7,8,9];

const pares = numero.filter(valor => valor % 2 ===0)
.map(valor => valor * 2)

.reduce((total , valor) => total + valor )

console.log(pares)


/* 
    A FUNÇÃO RETORNA VALORES PARES, MULTIPLICA OS NÚMEROS POR 2, E POR FINAL
    RETORNA A SOMA DE TODOS OS NÚMEROS JUNTOS.
*/