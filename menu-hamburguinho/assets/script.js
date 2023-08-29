var clique = document.querySelector('#clique')
var list = document.querySelector('#list')


document.write ("<h1>Menu Hamburguinho</h1>")

function cliquelist(){
    if(list.style.display == 'none'){
        list.style.display = 'block'
    }
    else{
        list.style.display = 'none'
    }
}
