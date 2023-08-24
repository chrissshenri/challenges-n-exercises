const prompt = require('prompt-sync')()

console.log('Digite dois numeros inteiros: ')
let firstNumber = parseFloat(prompt())
let secondNumber= parseFloat(prompt())

if (firstNumber % secondNumber == 0 || secondNumber % firstNumber == 0) {
    console.log('São multiplos')
} else if (firstNumber % secondNumber !== 0 || secondNumber % firstNumber !== 0) {
    console.log('Não são multiplos')
}