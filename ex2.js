function executaMenu(){
    let respostaNome = window.prompt(`
    Digite seu nome
    `)
    let respostaSenha = window.prompt(`
    Digite seu senha
    `)

    if(respostaNome == respostaSenha){  
        alert('Senha não pode ser igual seu nome')
        executaMenu()
    }
}

let resposta = executaMenu()