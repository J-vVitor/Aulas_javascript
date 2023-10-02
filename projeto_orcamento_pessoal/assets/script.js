let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let profissao = document.getElementById('profissao')



class Despesas {
    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem('id')
        if (id === null) {
            id = localStorage.setItem('id', 0)
        }
    }

    proximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        let id = this.proximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {

        let despesas = Array()

        let id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
            let despesa = JSON.parse(localStorage.getItem(i))
            //console.log(despesa)

            if (despesa === null) {
                continue
            }
            despesa.id = i
            despesas.push(despesa)
        }

        return despesas

    }
}

function cadastrarDespesas() {
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let profissao = document.getElementById('profissao').value

    let despesas = new Despesas(nome, idade, profissao)

    //console.log(despesas)

    bd.gravar(despesas)
}

function carregarTodasDespesas() {

    let despesa = bd.recuperarTodosRegistros()

    let tbodys = document.getElementById('tbodys')

    despesa.forEach(function (d) {
        //console.log(d)

        let linha = tbodys.insertRow()

        linha.insertCell(0).innerHTML = d.nome
        linha.insertCell(1).innerHTML = d.idade
        linha.insertCell(2).innerHTML = d.profissao
    })}

let bd = new Bd()

function EnvioBtn() {
    cadastrarDespesas()
    this.nome.value = ''
    this.idade.value = ''
    this.profissao.value = ''
    window.location.reload()

}

carregarTodasDespesas()