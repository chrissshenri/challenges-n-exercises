const prompt = require('prompt-sync')()

const orderOfArray = prompt('Qual a ordem da matriz?')
let array = []
let mainDiagonal = []
let negatives = 0

for (let i = 0; i <= orderOfArray - 1; i++) {
    array[i] = []
    for (let j = 0; j <= orderOfArray - 1; j++) {
        array[i][j] = parseInt(prompt(`Elemento [${i},${j}]:`))
        if (array[i][j] < 0) {
            negatives++
        }
    }
}

console.log('DIAGONAL PRINCIPAL:')
for (let i = 0; i <= orderOfArray - 1; i++) {
    process.stdout.write(`${array[i][i]} `);
}
console.log(`
QUANTIDADE DE NEGATIVOS = ${negatives}`)