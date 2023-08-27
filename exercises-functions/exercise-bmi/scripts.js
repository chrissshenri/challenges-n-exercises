const prompt = require('prompt-sync')()

const weight = prompt('Digite o peso:')
const height = prompt('Digite a altura:')

function bmi(weight, height) {
    let imc = weight / Math.pow(height, 2)
    return console.log(`IMC = ${imc.toFixed(2)}`)
}
bmi(weight, height)