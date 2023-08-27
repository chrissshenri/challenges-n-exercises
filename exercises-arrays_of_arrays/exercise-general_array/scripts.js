const prompt = require('prompt-sync')()

const orderOfArray = parseInt(prompt('Qual a ordem da matriz?'))
let array = []
let diagonal = []

for (let i = 0; i < orderOfArray; i++) {
    let rowArray = []
    for (let j = 0; j < orderOfArray; j++) {
        let element = parseFloat(prompt(`Elemento [${i},${j}]:`))
        rowArray.push(element)
    }
    array.push(rowArray)
}

let sum = array.flat().filter(element => element > 0).reduce((accumulator, element) => accumulator + element, 0)
console.log(`SOMA DOS POSITIVOS: ${sum.toFixed(1)}`)

const chosenRow = parseInt(prompt('Escolha uma linha:'))
if (chosenRow >= 0 && chosenRow < orderOfArray) {
    let rowElements = array[chosenRow].join(' ')
    console.log(`LINHA ESCOLHIDA: ${rowElements}`)
}
const chosenColumn = parseInt(prompt('Escolha uma coluna:'))
if (chosenColumn >= 0 && chosenColumn < orderOfArray) {
    let columnElements = []
    for (let i = 0; i < orderOfArray; i++) {
        columnElements.push(array[i][chosenColumn])
    }
    console.log(`COLUNA ESCOLHIDA: ${columnElements.join(' ')}`)
}

for (let i = 0; i < orderOfArray; i++) {
    diagonal.push(array[i][i])
}
console.log(`DIAGONAL PRINCIPAL: ${diagonal.join(' ')}`)

for (let i = 0; i < orderOfArray; i++) {
    for (let j = 0; j < orderOfArray; j++) {
        if (array[i][j] < 0) {
            array[i][j] = Math.pow(array[i][j], 2)
        }
    }
}
console.log('MATRIZ ALTERADA:')
for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].join(' ')}`)
}