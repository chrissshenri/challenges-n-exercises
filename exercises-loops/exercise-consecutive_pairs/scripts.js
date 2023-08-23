const prompt = require('prompt-sync')()

let sum 
let value = parseFloat(prompt('Digite um numero inteiro: '))

while (value != 0) {
    if (value % 2 != 0) {
        value = value + 1
    }

    sum = (5 * value) + 20

    console.log(`SOMA = ${sum}`)
    value = prompt('Digite um numero inteiro: ')
}