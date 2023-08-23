const prompt = require('prompt-sync')()

console.log(`Digite o valor de X: `)
let value = parseFloat(prompt())

for (let i = 1; i < value; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
