const prompt = require('prompt-sync')()

let measurementA = parseFloat(prompt('Digite a medida A:'))
let measurementB = parseFloat(prompt('Digite a medida B:'))
let measurementC = parseFloat(prompt('Digite a medida C:'))
const squareArea = Math.pow(measurementA,2)
const triangleArea = (measurementA * measurementB) / 2
const trapezoidArea = ((measurementA + measurementB) * measurementC) / 2

console.log(`AREA DO QUADRADO = ${squareArea.toFixed(4)}
AREA DO TRIANGULO = ${triangleArea.toFixed(4)}
AREA DO TRAPEZIO = ${trapezoidArea.toFixed(4)}`)