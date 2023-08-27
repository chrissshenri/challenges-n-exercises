const prompt = require('prompt-sync')()

const rectangleBase = parseFloat(prompt('Digite o valor da base do retangulo:'))
const rectangleHeight = parseFloat(prompt('Digite o valor da altura do retangulo:'))

function diagonal(base, height) {
    let diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2)) 
    return console.log(`Diagonal = ${diagonal.toFixed(2)}`)
}
function area(base, height) {
    let area = base * height
    return console.log(`Area = ${area.toFixed(2)}`)
}
function perimeter(base, height) {
    let perimeter = 2 * (base + height)
    return console.log(`Perimetro = ${perimeter.toFixed(2)}`)
}

diagonal(rectangleBase, rectangleHeight)
area(rectangleBase, rectangleHeight)
perimeter(rectangleBase, rectangleHeight)