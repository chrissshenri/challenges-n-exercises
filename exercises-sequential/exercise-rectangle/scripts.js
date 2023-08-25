const prompt = require('prompt-sync')()

let rectangleBase = parseFloat(prompt('Base do retangulo:'))
let rectangleHeight = parseFloat(prompt('Altura do retangulo:'))
let area = rectangleBase * rectangleHeight
let perimeter = (rectangleBase + rectangleHeight) * 2
let diagonal = Math.sqrt(Math.pow(rectangleBase, 2) + Math.pow(rectangleHeight, 2))

console.log(`AREA = ${area.toFixed(4)}
PERIMETRO = ${perimeter.toFixed(4)}
DIAGONAL = ${diagonal.toFixed(4)}`)