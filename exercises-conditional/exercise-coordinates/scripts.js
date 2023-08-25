const prompt = require('prompt-sync')()

let xCoordinate = parseFloat(prompt('Valor de X:'))
let YCoordinate = parseFloat(prompt('Valor de Y:'))
let quadrant

if (xCoordinate > 0.0 && YCoordinate < 0.0) {
    quadrant = 'Q4'
} else if (xCoordinate > 0.0 && YCoordinate > 0.0) {
    quadrant = 'Q1'
} else if (xCoordinate == 0 && YCoordinate == 0.0) {
    quadrant = 'Origem'
} else if (xCoordinate > 0.0 && YCoordinate == 0.0) {
    quadrant = 'Eixo X'
}
else if (xCoordinate == 0.0 && YCoordinate > 0.0) {
    quadrant = 'Eixo Y'
}

console.log(quadrant)