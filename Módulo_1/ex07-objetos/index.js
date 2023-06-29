function criarPessoa(nome,sobrenome,idade){
    return {nome,sobrenome,idade};
}

const pessoa1 = criarPessoa('vitor','joão',19);

console.log(pessoa1.nome)