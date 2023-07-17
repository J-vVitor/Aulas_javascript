
const produto = function(nome,preco,quantidade){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
}

produto.prototype.valor = function(){
    return this.preco * this.quantidade
}

// DENTRO DO ESCOPO DOS PRODUTOS VEM A FUNÇÃO VALOR

const p1 = new produto ('computador', 3000 ,5)
const p2 = new produto('celular', 900 , 10)
