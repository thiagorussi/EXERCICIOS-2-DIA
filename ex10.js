// 10 - Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
// -->  Altere o programa anterior para mostrar no final a soma dos números.

function executaMenu(){

    let primeiroNumero = Number (window.prompt(`Digite o primeiro Número:`))
    primeiroNumero = primeiroNumero + 1


    let segundoNumero = Number (window.prompt(`Digite o segundo Número:`))
    let arrayNum = []
    let somaNum = 0
    let j = 0
    for (i = primeiroNumero; i < segundoNumero; i++) {

        arrayNum.push(i)
        somaNum = somaNum + arrayNum[j]
        j++

    }

    alert(`A soma dos numeros compreendido entre ${primeiroNumero - 1} e ${segundoNumero} é : ${somaNum}`)
    console.log(arrayNum);
    
}

executaMenu ()