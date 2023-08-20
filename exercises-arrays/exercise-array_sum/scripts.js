const prompt = require('prompt-sync')()

const numbers = Number(prompt('Quantos numeros voce vai digitar?'))
let array = []
let sum = 0

for (let i = 0; i < numbers; i++) {
    array[i] = prompt('Digite um numero:')
    sum += parseFloat(array[i])
}

const average = sum / numbers
console.log(`VALORES = ${array.join(' ')}
            SOMA = ${sum.toFixed(2)}
            MEDIA = ${average.toFixed(2)}`)