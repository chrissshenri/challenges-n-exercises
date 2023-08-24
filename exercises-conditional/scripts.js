const prompt = require ('prompt-sync')()

let firstGrade = parseFloat(prompt('Digite a primeira nota: '))
let secondGrade = parseFloat(prompt('Digite a segunda nota: '))
let result = firstGrade + secondGrade
console.log(`NOTA FINAL = ${result}`)

if (result < 60.0) {
    console.log('REPROVADO')
}