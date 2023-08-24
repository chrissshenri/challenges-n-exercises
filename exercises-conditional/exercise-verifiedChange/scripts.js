const prompt = require('prompt-sync')()

let unitPrice = parseFloat(prompt('Preço unitário do produto:'))
let quantity = parseFloat(prompt('Quantidade comprada:'))
const fullPrice = unitPrice * quantity
let money = parseFloat(prompt('Dinheiro recebido:'))
let change
let insufficientMoney 

if (money > fullPrice) {
    change = money - fullPrice
    console.log(`TROCO = ${change.toFixed(2)}`)
} else {
    insufficientMoney = fullPrice - money
    console.log(`DINHEIRO INSUFICIENTE. FALTAM ${insufficientMoney.toFixed(2)} REAIS`)
}