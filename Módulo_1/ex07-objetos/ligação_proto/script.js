const produto = function (nome,valor){
    this.nome = nome
    this.valor = valor
}

produto.prototype.valorr = function(){
    return this.valor + 10;
}

const p1 = new produto ('camisa',20);

const p2 = {
    nome:'casaco',
    valor:100
}
Object.setPrototypeOf(p2,produto.prototype);

/* 

NESSE CASO A *Object.setPrototypeOf(p2,produto.prototype);* ESTA LIGANDO O P2
AO PROTOTYPE DO PRODUTO , AGORA OS DOIS PRODUTOS ESTÃO LIGADOS DIRETAMENTE
AO PRODUTO.


*/