const prompt = require('prompt-sync')()

let number
const value = prompt('Quantos numeros voce vai digitar? ')
for (let i = 0; i < value; i++) {
    number = parseFloat(prompt('Digite um numero: '))
    number == 0 ? console.log('NULO') :
    number % 2 !== 0 && number < 0 ? console.log('IMPAR NEGATIVO') :
    number % 2 == 0 && number > 0 ? console.log('PAR POSITIVO') :
    number % 2 == 0 && number < 0 ? console.log('PAR NEGATIVO') :
    console.log('IMPAR POSITIVO')
}