const prompt = require('prompt-sync')()

const numbers = prompt('Quantos alunos serao digitados? ')
let arrayName = []
let arrayFirstGrade = []
let arraySecondGrade = []
let averageGrade = []

for (let i = 0; i < numbers; i++) {
    console.log(`Digite nome, primeira e segunda nota do ${i + 1}o aluno`)
    arrayName[i] = prompt();
    arrayFirstGrade[i] = parseFloat(prompt());
    arraySecondGrade[i] = parseFloat(prompt());
}

for (let i = 0; i < numbers; i++) {
    averageGrade[i] = (arrayFirstGrade[i] + arraySecondGrade[i]) / 2;
}

console.log('Alunos aproveados:')

for (let i = 0; i < arrayName.length; i++) {
    if (averageGrade[i] >= 6) {
        console.log(arrayName[i])
    };
}