class pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome; 
    }
    nomeCompleto (){
        return this.nome + " " + this.sobrenome
    }
}

const p1 = new pessoa ('joao','vitor')
const p2 = new pessoa ('Pereira','lima')
