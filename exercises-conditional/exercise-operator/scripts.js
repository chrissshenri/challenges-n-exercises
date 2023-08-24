const prompt = require('prompt-sync')()

let minutes = parseFloat(prompt('Digite a quantidade de minutos: '))
let amount = parseFloat(50.00)
let exceededValue = 0 

if (minutes > 100) {
    exceededValue = minutes - 100
    amount += 2.00 * exceededValue
    console.log(`Valor a pagar: R$ ${amount.toFixed(2)}`)
} else {
    console.log(`Valor a pagar: R$ ${amount.toFixed(2)}`)
}