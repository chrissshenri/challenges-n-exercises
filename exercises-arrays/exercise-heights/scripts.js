const prompt = require('prompt-sync')()

const numbers = prompt('Quantas pessoas serão digitadas?')
let arrayName = []
let arrayAge = []

let arrayHeight = []
let sumHeight = 0

let peopleUnder16YearsOld = 0
let arrayPeopleUnder16YearsOld = []

for (let i = 1; i <= numbers; i++) {
    console.log(`Dados da ${i}a pessoa:`);
    arrayName[i] = prompt('Nome:')
    arrayAge[i] = prompt('Idade:')
    arrayHeight[i] = prompt('Altura:')
    
    sumHeight += parseFloat(arrayHeight[i])
    
}

for (i = 1; i <= numbers; i++) {
    if (arrayAge[i] < 16) {
        peopleUnder16YearsOld++
        arrayPeopleUnder16YearsOld[i] = (arrayName[i]) 
    }
}

const percentageOfPeopleUnder16YearsOld = (peopleUnder16YearsOld / numbers) * 100

const averageHeight = sumHeight / numbers

console.log(`Altura média: ${averageHeight.toFixed(2)}
            Pessoas com menos de 16 anos: ${percentageOfPeopleUnder16YearsOld}.0%
            ${arrayPeopleUnder16YearsOld.join(' ')}`)