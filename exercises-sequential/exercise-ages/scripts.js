const prompt = require('prompt-sync')()

console.log('Dados da primeira pessoa:')
let firstName = prompt('Nome:')
let firstAge = parseFloat(prompt('Idade:'))
console.log('Dados da segunda pessoa:')
let secondeName = prompt('Nome:')
let secondAge = parseFloat(prompt('Idade:'))

let ageAverage = (firstAge + secondAge) / 2
console.log(`A idade média de ${firstName} e ${secondeName} é de ${ageAverage.toFixed(1)} anos`)