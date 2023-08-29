const prompt = require('prompt-sync')()

const people  = prompt('Qual a quantidade de pessoas?')
let name = []
let firstNote = []
let secondNote = []
let averageNote = []

for (let i = 0; i < people; i++) {
    name[i] = prompt('Nome:')
    
    firstNote[i] = parseFloat(prompt('Nota etapa 1:'))
    if (firstNote[i] < 0) {
        firstNote.splice(i, 1)
        firstNote[i] = parseFloat(prompt('Nota inválida, por favor digite novamente:'))
    }
    
    secondNote[i] = parseFloat(prompt('Nota etapa 2:'))
    if (secondNote[i] < 0) {
        secondNote.splice(i, 1)
        secondNote[i] = parseFloat(prompt('Nota inválida, por favor digite novamente:'))
    }

    averageNote[i] = parseFloat((firstNote[i] + secondNote[i]) / 2)
}

console.log(`TABELA:`)
for (let i = 0; i < people; i++) {
    console.log(`${name[i]}, ${firstNote[i].toFixed(1)}, ${secondNote[i].toFixed(1)}, MEDIA = ${averageNote[i].toFixed(2)}`)
}
const approvedPersons = name.filter((_, index) => {
    return averageNote[index] >= 70.0
})
console.log(`PESSOAS APROVADAS:`)
if (approvedPersons != null) {
    approvedPersons.forEach(name => console.log(name))
}
const approvalPercentage = parseFloat((approvedPersons.length / people) * 100)
const personHighestAverage = name[averageNote.indexOf(averageNote.reduce((prev, current) => Math.max(prev, current)))]
let averageOfTheGradesOfThoseApproved = averageNote.filter((number, _) => {
    return number >= 70.0
})
console.log(`Porcentagem de aprovação: ${approvalPercentage.toFixed(1)}%
Maior média: ${personHighestAverage}`)
averageOfTheGradesOfThoseApproved = parseFloat(averageOfTheGradesOfThoseApproved.reduce((acumulator, element) => acumulator + element, 0))
averageOfTheGradesOfThoseApproved /= approvedPersons.length
if (isNaN(averageOfTheGradesOfThoseApproved)) {
    console.log(`Não há candidatos aprovados`)
} else {
    console.log(`Nota média dos aprovados: ${averageOfTheGradesOfThoseApproved.toFixed(2)}`)
}