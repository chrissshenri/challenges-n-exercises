const prompt = require('prompt-sync')()

console.log('Digite as tres distancias:')
let firstDart = parseFloat(prompt())
let secondDart = parseFloat(prompt())
let thirdDart = parseFloat(prompt())

firstDart >= secondDart && firstDart >= thirdDart ? console.log(`MAIOR DISTANCIA = ${firstDart.toFixed(2)}`) :
secondDart >= thirdDart ? console.log(`MAIOR DISTANCIA = ${secondDart.toFixed(2)}`) :
console.log(`MAIOR DISTANCIA = ${thirdDart.toFixed(2)}`)