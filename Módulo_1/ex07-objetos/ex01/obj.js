function pessoa (nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new pessoa ('Joao','vitor')
const pessoa2 = new pessoa ('pedro','luis')

console.dir(pessoa1)
console.dir(pessoa2)

// THIS REMETE AO PRÓPRIO OBJETO SEM A NECESIDADE DO 'RETURN'