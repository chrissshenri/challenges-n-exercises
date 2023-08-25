const prompt = require('prompt-sync')()

let widthOfTheLand = parseFloat(prompt('Digite a largura do terreno:'))
let lengthOfTheLand = parseFloat(prompt('Digite o comprimento do terreno:'))
let pricePerSquareMeter = parseFloat(prompt('Digite o valor do metro quadrado: '))
let landArea = widthOfTheLand * lengthOfTheLand
let landPrice = pricePerSquareMeter * landArea

console.log(`Area do terreno = ${landArea.toFixed(2)}
Preco do terreno = ${landPrice.toFixed(2)}`)