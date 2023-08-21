const prompt = require('prompt-sync')()

const numbers = prompt('Quantos numeros voce vai digitar?')
let arrayNumbers = []

for (let i = 0; i < numbers; i++) {
    arrayNumbers[i] = parseFloat(prompt('Digite um numero: '));
}

const maxValue = Math.max(...arrayNumbers)
const maxIndex = arrayNumbers.indexOf(maxValue)

console.log(`MAIOR VALOR = ${maxValue}
            POSICAO DO MAIOR VALOR = ${maxIndex}`)