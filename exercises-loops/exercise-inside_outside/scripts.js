const prompt = require('prompt-sync')()

const quantity = prompt('Quantos numeros voce vai digitar?')
let number
let inside = 0
let outside = 0

for (let i = 1; i <= quantity; i++) {
    number = parseFloat(prompt('Digite um numero: '))
    if (number >= 10 && number <= 20) {
        inside++
    } else if (number < 10 || number > 20) {
        outside++
    }
}

console.log(`${inside} DENTRO
${outside} FORA`)