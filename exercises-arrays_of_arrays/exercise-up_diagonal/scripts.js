const prompt = require('prompt-sync')()

const orderOfArray = prompt('Qual a ordem da matriz?')
let array = []
let diagonal = []

for (let i = 0; i <= orderOfArray - 1; i++) {
    for (let j = 0; j <= orderOfArray - 1; j++) {
        let element = parseInt(prompt(`Elemento [${i},${j}]:`))
        array.push(element)
        if (j > i) {
            diagonal.push(element)
        }
    }
}

let sumUpDiagonal = diagonal.reduce((accumulator, element) => accumulator + element, 0);
console.log(`SOMA DOS ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL = ${sumUpDiagonal}`)