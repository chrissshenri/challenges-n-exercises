const prompt = require('prompt-sync')()

const number = parseFloat(prompt('Voce quer a tabuada de qual numero?'))

function  displayMultiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        let productOfMultiplication = 0
        productOfMultiplication = number * i
        console.log(`${number} x ${i} = ${productOfMultiplication}`)
    }
}
displayMultiplicationTable(number)