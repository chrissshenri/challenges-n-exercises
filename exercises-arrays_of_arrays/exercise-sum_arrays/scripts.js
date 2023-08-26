const prompt = require('prompt-sync')()
let array = []
let subArrayA = []
let subArrayB = []
let sumArray
const rows = parseFloat(prompt('Qual a quantidade de linhas da do array?'))
const columns = parseFloat(prompt('Qual a quantidade de colunas da do array?'))

console.log('Digite os valores do array A:')
for (let i = 0; i <= rows - 1; i++) {
    for (let j = 0; j <= columns - 1; j++) {
        let element = parseInt(prompt(`Elemento [${i},${j}]:`))
        if (i <= 1 && j <= 2) {
            subArrayA.push(element)
        }
    }
}
console.log('Digite os valores do array B:')
for (let i = 0; i <= rows - 1; i++) {
    for (let j = 0; j <= columns - 1; j++) {
        let element = parseInt(prompt(`Elemento [${i},${j}]:`))
        if (i <= 1 && j <= 2) {
            subArrayB.push(element)
        }
    }
}
array.push(subArrayA, subArrayB)
console.log(`MATRIZ SOMA:`)
sumArray = subArrayA.map((element, index) => element + subArrayB[index])
for (let i = 0; i < sumArray.length; i += 3) {
    console.log(sumArray.slice(i, i + 3).join(" "));
}