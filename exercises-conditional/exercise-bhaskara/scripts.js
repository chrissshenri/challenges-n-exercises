const prompt = require('prompt-sync')()

let coefficientA = prompt('Coeficiente a:')
let coefficientB = prompt('Coeficiente b:')
let coefficientC = prompt('Coeficiente c:')
let discriminant = Math.pow(coefficientB, 2) - 4 * coefficientA * coefficientC
let rootX1 = parseFloat(((-coefficientB) + Math.sqrt(discriminant)) / (2 * coefficientA))
let rootX2 = parseFloat(((-coefficientB) - Math.sqrt(discriminant)) / (2 * coefficientA))

if (coefficientA = 0 || discriminant < 0) {
    console.log('Esta equação não possui raizes reais')
} else {
    console.log(`X1 = ${rootX1.toFixed(4)}
X2 = ${rootX2.toFixed(4)}`)
}