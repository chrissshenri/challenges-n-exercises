const prompt = require('prompt-sync')()

console.log(`Digite dois numeros: `)
let firstNumber = parseFloat(prompt())
let secondeNumber = parseFloat(prompt())
let result = 0

if (firstNumber < secondeNumber) {
    for (let i = firstNumber + 1; i < secondeNumber; i++) {
        if (i % 2 !== 0) {
            result += i
        }
    }
} 
else {
    for (let i = secondeNumber + 1; i < firstNumber; i++) {
        if (i % 2 !== 0) {
            result += i
        }
    }
}

console.log(`SOMA DOS IMPARES = ${result}`)