const prompt = require('prompt-sync')()

let numbers = prompt('Quantos valores vai ter cada vetor? ')
let arrayA = []
let arrayB = []
let arrayC = []

console.log('Digite os valores do vetor A:')
for (let i = 0; i < numbers; i++) {
    arrayA[i] = parseFloat(prompt())
}

console.log('Digite os valores do vetor B:')
for (let i = 0; i < numbers; i++) {
    arrayB[i] = parseFloat(prompt())
}

for (let i = 0; i < arrayA.length; i++) {
    arrayC[i] = parseFloat(arrayA[i] + arrayB[i]);
}

console.log('VETOR RESULTANTE:')
for (let i = 0; i < arrayC.length; i++) {
    console.log(arrayC[i])
}