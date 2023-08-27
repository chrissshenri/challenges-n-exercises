const prompt = require('prompt-sync')()

const weight = prompt('Digite o peso:')
const height = prompt('Digite a altura:')

function rateBmi(weight, height) {
    let imc = weight / Math.pow(height, 2)
    let rate
    if (imc < 20.0) {
        rate = 'abaixo do peso'
    } else if (imc >= 20.0 && imc <= 25.0) {
        rate = 'peso normal'
    } else if (imc > 25.0 && imc <= 30.0 ) {
        rate = 'sobre peso'
    } else if (imc > 30.0) {
        rate = 'obeso'
    }
    return console.log(`Resultado do IMC: ${rate}`)
}
rateBmi(weight, height)