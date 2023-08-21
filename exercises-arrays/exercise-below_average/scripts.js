const prompt = require('prompt-sync')()

const numbers = prompt('Quantos elementos vai ter o array ?')
let array = []

for (let i = 0; i < numbers; i++) {
    array[i] = parseFloat(prompt('Digite um numero: '));
}

let sum = array.reduce((accumulator, value) => accumulator + value, 0);

const arrayAverage = sum / numbers
console.log(`MEDIA DO ARRAY = ${arrayAverage.toFixed(3)}
ELEMENTOS ABAIXO DA MEDIA:`)

for (let i = 0; i <= array.length; i++) {
    if (array[i] < arrayAverage) {
        console.log(array[i].toFixed(1))
    }
}