/*4 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma 
taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma 
taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários 
para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de 
crescimento.
Altere o programa anterior permitindo ao usuário informar as populações e as taxas de 
crescimento iniciais. Valide a entrada e permita repetir a operação. */


function executaMenu(){

    let popA = Number (window.prompt(`Digite a quantidade de habitates do primeiro país:`))
    
    let cresA = Number (window.prompt(`Digite a taxa de crescimento por ano do primeiro país:`))
    
    let popB = Number (window.prompt(`Digite a quantidade de habitates do segundo país:`))
    
    let cresB = Number (window.prompt(`Digite a taxa de crescimento por ano: do segundo país`))
    
    let anos = 0

    while (popA <= popB) {
        popA = popA + (popA * (cresA/100))
        popB = popB + (popB * (cresB/100))
        anos++
    }

    alert(`Após ${anos} anos, o país A ultrapassou o país B em números de habitantes \nPaís A ficou com ${popA.toFixed(2)} e País B ficou com ${popB.toFixed(2)}`)
}

executaMenu()


