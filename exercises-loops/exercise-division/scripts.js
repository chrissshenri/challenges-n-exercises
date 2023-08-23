const prompt = require('prompt-sync')()

const cases = parseFloat(prompt('Quantos casos voce vai digitar? '))
let numerator
let denominator
let result

for (let i = 0; i < cases; i++) {
    numerator = parseFloat(prompt('Entre com o numerador:'))
    denominator = parseFloat(prompt('Entre com o denominador:'))
    result = numerator / denominator
    if (numerator < 0) {
        console.log('DIVISAO IMPOSSIVEL')
    } else {
        console.log(`DIVISAO = ${result.toFixed(2)}`)
    }
}