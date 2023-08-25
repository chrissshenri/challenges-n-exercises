const prompt = require('prompt-sync')()

let array = []
const rows = parseFloat(prompt('Qual a quantidade de linhas da do array?'))
const columns = parseFloat(prompt('Qual a quantidade de colunas da do array?'))

for (let i = 0; i <= rows - 1; i++) {
    array[i] = []
    for (let j = 0; j <= columns - 1; j++) {
        array[i][j] = parseInt(prompt(`Elemento [${i},${j}]:`))
    }
}

console.log(`VALORES NEGATIVOS:`)

let negativesElements = array.flatMap(subArrays => {
    return subArrays.filter(element => element < 0)
})

negativesElements.forEach(element => {
    console.log(element)
})
