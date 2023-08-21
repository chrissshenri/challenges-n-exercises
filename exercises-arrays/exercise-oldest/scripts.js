const prompt = require('prompt-sync')()

let numbers = prompt('Quantas pessoas voce vai digitar? ')
let arrayName = []
let arrayAge = []
let oldest

for (let i = 0; i < numbers; i++) {
    console.log(`Dados da ${i + 1}a pessoa`);
    arrayName[i] = prompt('Nome: ')
    arrayAge[i] = prompt('Idade: ')
}

for (let i = 0; i < arrayAge.length; i++) {
    if (arrayAge[i] > arrayAge[i + 1]) {
        oldest = arrayName[i]
    }
}

console.log(`PESSOA MAIS VELHA: ${oldest}`)