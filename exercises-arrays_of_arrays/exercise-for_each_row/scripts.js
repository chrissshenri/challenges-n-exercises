const prompt = require('prompt-sync')()

let array = []
const order = parseFloat(prompt('Qual a ordem do array?'))

for (let i = 0; i <= order - 1; i++) {
    array[i] = []
    for (let j = 0; j <= order - 1; j++) {
        array[i][j] = parseInt(prompt(`Elemento [${i},${j}]:`))
    }
}

console.log(`MAIOR ELEMENTO DE CADA LINHA:`)
let largestElementOfRachRow = array.map(array => {
    return array.reduce((larger, element) => Math.max(larger, element), -Infinity)
})

largestElementOfRachRow.forEach(element => {
    console.log(element)
})