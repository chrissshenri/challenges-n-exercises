const prompt = require('prompt-sync')()

let firstGrade = parseFloat(prompt('Digite a primeira nota: '))
while (firstGrade < 0 || firstGrade > 10.0) {
    firstGrade = parseFloat(prompt('Valor invalido! Tente novamente: '))
}

let secondGrade = parseFloat(prompt('Digite a segunda nota: '))
while (secondGrade < 0 || secondGrade > 10.0) {
    secondGrade = parseFloat(prompt('Valor invalido! Tente novamente: '))
}

const sum = firstGrade + secondGrade
const average = sum / 2
console.log(`MEDIA = ${average.toFixed(2)}`)