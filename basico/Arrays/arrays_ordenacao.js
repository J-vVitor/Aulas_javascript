var lista_de_frutas = ['uva','melancia', 'banana' , 'morango']

console.log(lista_de_frutas.sort()) // ORDENA POR ORDEM ALFABÉTICA

/* O SORT NÃO 'FUNCIONA COM NÚMEROS' POIS ELE SEMPRE CONTA COM O PRIMERO ÍNDICE, POR EXEMPLO:

    var lista_de_frutas = []

    lista_de_frutas[0] = [1] 
    lista_de_frutas[1] = [32]
    lista_de_frutas[2] = [7]
    lista_de_frutas[3] = [12]   

    A ORDEM FICARIA: 1 , 12, 32 ,7;

    ENTÃO SEMPRE TEM QUE ATRIBUIR UM FUNÇÃO AO METÓDO SORT QUANDO ULTILIZADA COM NÚMEROS;

*/

var listaNumero = [1,22,32,7]

console.log(listaNumero.sort(ordenarNumeros))

function ordenarNumeros(x,y){
    return x - y
}