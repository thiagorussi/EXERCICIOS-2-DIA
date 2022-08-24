// 09 - Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

function executaMenu(){

    let primeiroNumero = Number (window.prompt(`Digite o primeiro Número:`))
    primeiroNumero = primeiroNumero + 1


    let segundoNumero = Number (window.prompt(`Digite o segundo Número:`))
    let arrayNum = []
    

    for (i = primeiroNumero; i < segundoNumero; i++) {

        arrayNum.push(i)

    }

    alert(arrayNum)
    console.log(arrayNum);
    
}

executaMenu ()