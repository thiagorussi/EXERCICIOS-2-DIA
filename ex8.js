// 8 - Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

let numeros = []
for (var i = 0; i <=50; i++) {
    numeros.push(i)
}

function numerosImpares (numeros) {
    let numerosImpares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 != 0 ) {
            numerosImpares.push(numeros[i])
        }
    }

    alert (`Programa que imprime na tela os números ímpares entre 1 e 50. \n${numerosImpares}`)
}

numerosImpares(numeros)

