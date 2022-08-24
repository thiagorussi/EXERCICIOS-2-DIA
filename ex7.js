/*7 - Faça um programa que leia 5 números e informe a soma e a média dos números. */

function executaMenu(){

    let tamanho = [Number (window.prompt(`Digite a quantidade de números que deseja`))]
    let somaNum = 0
    let mediaNum = 0
    let arrayNum = []
    let j = 0

    for (i = 1; i <= tamanho; i++) {

        arrayNum[j] = [Number (window.prompt(`Digite o ${i}° número: `))] 
        
        somaNum += parseFloat(arrayNum[j]) //mesmo dizendo que é um numero acima, tive que converter novamente dessa forma. pq ?
        j++

    }

    mediaNum = somaNum / arrayNum.length
    alert(`A soma dos números é ${somaNum} e a média é de ${mediaNum}`)
    
}

executaMenu ()