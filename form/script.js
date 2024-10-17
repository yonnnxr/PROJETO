
function LimparForm() {
    document.querySelector('input[name= "nome"]').value = ''
    document.querySelector('input[name= "descricao"]').value = ''
    document.querySelector('input[name= "preco"]').value = ''
}

function salvarRelatorio() {
    const nome = document.querySelector('input[name= "nome"]').value
    const descricao = document.querySelector('input[name= "descricao"]').value
    const preco = document.querySelector('input[name= "preco"]').value
    const newproduct = `<p>Nome: ${nome} <p> <p> Descrição: ${descricao} <p> <p> Preço: ${preco} <p>`
    const elementList = document.querySelector('#produto')
    elementList.innerHTML= `${elementList.innerHTML} <li> ${newproduct} <li>`
}

