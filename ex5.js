/*5 - Faça um programa que imprima na tela os números de 1 a 20 um ao lado do outro separado por "-" */

function executaMenu(){

    let tamanho = [Number (window.prompt(`Digite até qual número contar: `))]
    let arrayNum = []

    for (i = 1; i <= tamanho; i++) {
        
        arrayNum.push(i)

    }

    let arrayString = arrayNum.toString()
    let arrayStringSeparado = arrayString.replaceAll (',',' - ')
    alert(`${arrayStringSeparado}`)
    
}

executaMenu ()


// let array = [1, 2, 3, "hello world", 4.12, true];
// //string.split(separador, limite);

// //Primeiramente, vamos converter o array para string usando a função toString():
// let myString = array.toString();

// let result = myString.replaceAll (',', '-')
// console.log(result);
