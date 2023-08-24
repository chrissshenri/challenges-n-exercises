const prompt = require('prompt-sync')()

const number = parseFloat(prompt('Digite o valor de N: '))
let result = 1

for (let i = result; i <= number; i++) {
    result = result * i
    if (result == 0) {
        result = 1
    }
}
console.log(`FATORIAL = ${result}`)