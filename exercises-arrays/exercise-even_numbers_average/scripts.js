const prompt = require('prompt-sync')()

const numbers = prompt('Quantos elementos vai ter o array? ')
let array = []
let evenNumbers = []
let sumEvenNumbers = 0

for (let i = 0; i < numbers; i++) {
    array[i] = parseFloat(prompt('Digite um numero: '));
}

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenNumbers[i] = array[i]
        sumEvenNumbers++
    }
}

let sumEven = evenNumbers.reduce((accumulator, value) => accumulator + value, 0);

const evenNumbersAverage = parseFloat(sumEven / sumEvenNumbers)

switch (sumEvenNumbers) {
    case 0:
        console.log(`NENHUM NUMERO PAR`);
        break;
    default:
        console.log(`MEDIA DOS PARES = ${(evenNumbersAverage.toFixed(1))}`);
    break;
} 