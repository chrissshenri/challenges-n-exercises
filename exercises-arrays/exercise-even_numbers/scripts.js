const prompt = require('prompt-sync')()

let numbers = prompt('Quantos numeros voce vai digitar?')
let arrayNumbers = []
let evenNumbers = []
let amountEvenNumbers = 0

for (let i = 0; i <= numbers - 1; i++) {
    arrayNumbers[i] = prompt('Digite um numero:')    
    if (arrayNumbers[i] % 2 === 0) {
        evenNumbers[i] = arrayNumbers[i]
        amountEvenNumbers++
    }
}

console.log(`NUMEROS PARES:
            ${evenNumbers.join(' ')}
            QUANTIDADE DE PARES = ${amountEvenNumbers}`)
