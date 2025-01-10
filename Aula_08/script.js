function selecao() {

    let itens = document.getElementsByClassName("item")
    let selecionados = document.getElementById("selecionados")

    for (let i = 0; i <= itens.length;i++){
        if (itens[i].checked) {
            selecionados.innerHTML += (itens[i].value + '<br>')
        }
    }
}

