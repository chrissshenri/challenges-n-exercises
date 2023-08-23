const prompt = require('prompt-sync')()

const value = parseFloat(prompt('Deseja a tabuada para qual valor? '))
let result

for (let i = 1; i <= 10; i++) {
    result = value * i
    console.log(`${value} x ${i} = ${result}`)
}