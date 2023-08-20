const prompt = require('prompt-sync')()

const numbers = prompt('Quantos números voce vai digitar?')
let array = []
let arrayNegatives = []

for (let i = 0; i <= numbers - 1; i++) {
    array[i] = prompt('Digite um numero: ')
}

for (let i = 0; i <= array.length; i++) {
    if (array[i] < 0) {
        arrayNegatives.push(array[i])
    }
}

console.log(`NÚMEROS NEGATIVOS: 
            ${arrayNegatives.join(' ')}`)            