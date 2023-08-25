const prompt = require('prompt-sync')()

let unitPrice = parseFloat(prompt('Preço unitário do produto:'))
let quantityPurchased = parseFloat(prompt('Quantidade comprada:'))
let receivedMoney = parseFloat(prompt('Dinheiro recebido:'))
let change = receivedMoney - (unitPrice * quantityPurchased)

console.log(`TROCO = ${change.toFixed(2)}`)