const prompt = require('prompt-sync')()
let count = 1

console.log('Digite as idades:')
let firstAge = parseFloat(prompt())
let sum = firstAge

if (firstAge < 0) {
    console.log('IMPOSSIVEL CALCULAR')
} else {
    while (firstAge > 0) {
        firstAge = parseFloat(prompt())
        if (firstAge >= 0) {
            sum += firstAge
            count++
        }
    }
}

const average = sum / count 

if (average > 0) {
    console.log(`MEDIA = ${average.toFixed(2)}`)
}