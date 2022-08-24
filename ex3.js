/*
3 - Faça um programa que leia e valide as seguintes informações:
 - Nome: maior que 3 caracteres;
 - Idade: entre 0 e 150;
 - Salário: maior que zero;
 - Sexo: 'f' ou 'm';
 - Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length 
*/

function executaMenu(){
    let respostaNome = window.prompt(`Digite seu nome`)

    if(respostaNome.length <= 3){  
        alert('Nome tem que ser maior que 3')
        executaMenu()
    }

    let respostaIdade = Number (window.prompt(`Digite sua idade`))

    if(respostaIdade < 0 || respostaIdade > 150){
        alert('Idade tem que ser entre 0 e 150')
        executaMenu()
    }

    let respostaSalario = Number (window.prompt(`Digite seu salario`))
    
    if(respostaSalario <= 0){   
        alert('Salário tem que ser maior que 0')
        executaMenu()
    }

    let respostaSexo = window.prompt(`Digite seu sexo 'f' ou 'm'`)

    if(respostaSexo != 'f' && respostaSexo != 'm'){   
        alert('Digite o seu sexo corretamente')
        executaMenu()
    }

    let respostaEstado = window.prompt(`Digite seu Estado Civil: 's', 'c', 'v', 'd'`)

    if(respostaEstado != 's' && respostaEstado != 'c' && respostaEstado != 'v' && respostaEstado && 'd'){   
        alert('Digite o seu estado civil corretamente')
        executaMenu() 
    }

}

executaMenu()