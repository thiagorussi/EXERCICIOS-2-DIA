function executaMenu(){
    let resposta = Number (window.prompt(`Digite uma nota de 0 à 10`))

    if (resposta >= 0 && resposta <= 10) {
    
    } else {
        alert("digite uma nota válida")
        executaMenu()
    }
    
    return resposta

}

let resposta = executaMenu()

