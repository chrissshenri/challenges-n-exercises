const prompt = require('prompt-sync')()

let firstValue = parseFloat(prompt('Primeiro valor: '))
let secondValue = parseFloat(prompt('Segundo valor: '))
let thirdValue = parseFloat(prompt('Terceiro valor: '))
let smallest

firstValue <= secondValue && firstValue <= thirdValue ? smallest = firstValue :
secondValue < thirdValue ? smallest = secondValue :
smallest = thirdValue

console.log(`MENOR = ${smallest}`)