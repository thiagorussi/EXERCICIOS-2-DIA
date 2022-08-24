/*6 - Faça um programa que leia 5 números e informe o maior número. */

function executaMenu(){

    let arrayNum = []
    let maiorNum = 0
    let j = 0
    
    for (i = 1; i <= 5; i++) {

        arrayNum[j] = [Number (window.prompt(`Digite o ${i}° número: `))]
        
        if (arrayNum[j] > maiorNum) {
            maiorNum = arrayNum[j]
        }
        j++
    }

    
    alert(`O maior número é ${maiorNum}`)
    
}

executaMenu ()