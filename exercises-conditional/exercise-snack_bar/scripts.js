const prompt = require('prompt-sync')()

let code = parseFloat(prompt('Codigo do produto comprado:'))
let price
let fullPrice
let quantityPurchased

if (code == 1) {
    price = parseFloat(5.00)    
} else if (code == 2) {
    price = parseFloat(3.50)
} else if (code == 3) {
    price = parseFloat(4.80)
} else if (code == 4) {
    price = parseFloat(8.90)
} else if (code == 5) {
    price = parseFloat(7.32)
}

quantityPurchased = parseFloat(prompt('Quantidade comprada:'))
fullPrice = price * quantityPurchased
console.log(`Valor a pagar: R$ ${fullPrice.toFixed(2)}`)