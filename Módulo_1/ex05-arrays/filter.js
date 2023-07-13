const numeros = [12,4,665,776,54,34,2,1,3,5,6,7,8,19]

const retornaNumeros = numeros.filter(function(valor){
    return valor > 10;
})

console.log(retornaNumeros);