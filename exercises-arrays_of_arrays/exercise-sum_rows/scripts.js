const prompt = require('prompt-sync')()

let array = []
const rows = parseFloat(prompt('Qual a quantidade de linhas da do array?'))
const columns = parseFloat(prompt('Qual a quantidade de colunas da do array?'))
let sum = []

for (let i = 0; i <= rows - 1; i++) {
    console.log(`Digite os elementos da ${i + 1}a. linha`)
    array[i] = []
    for (let j = 0; j <= columns - 1; j++) {
        array[i][j] = parseInt(prompt())
    }
}

console.log(`VETOR GERADO`)

array.forEach(array => {
    let sumArray = array.reduce((accumulator, element) => accumulator + element, 0);
    sum.push(sumArray);
});

sum.forEach(value => {
    console.log(value.toFixed(1));
});
// for (let i = 0; i < rows; i++) {
//     sum[i] = []
//     for (let j = 0; j < columns; j++) {
//         sum[i] = array[i].reduce((accumulator, element) => accumulator + element, 0);
//     }
//     console.log(sum[i])
// }