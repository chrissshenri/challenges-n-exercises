const prompt = require('prompt-sync')()

let cases = parseFloat(prompt('Quantos casos voce vai digitar? '))
let sum = 0
let grade

for (let i = 0; i < cases; i++) {
    sum = 0
    console.log('Digite tres numeros:')
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            grade = parseFloat(prompt())
            sum += grade * 2
        } else if (i == 1) {
            grade = parseFloat(prompt())
            sum += grade * 3
        } else if (i == 2) {
            grade = parseFloat(prompt())
            sum += grade * 5
        }
    }
    const average = sum / 10
    console.log(`MEDIA = ${average.toFixed(1)}`)
}
