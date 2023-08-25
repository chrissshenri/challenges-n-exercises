const prompt = require('prompt-sync')()

let xValue = parseFloat(prompt('Digite o valor de X:'))
let yValue = parseFloat(prompt('Digite o valor de Y:'))
let result = xValue + yValue

console.log(`SOMA = ${result}`)