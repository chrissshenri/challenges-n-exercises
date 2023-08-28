const prompt = require('prompt-sync')()

let gender = prompt('Sexo:')
let numberOfBeers = parseFloat(prompt('Quantidade de cervejas:'))
let numberOfSoftDrinks = parseFloat(prompt('Quantidade de refrigerantes:')) 
let numberOfSkewers = parseFloat(prompt('Quantidade de espetinhos:'))
let ticket
let couvert
const beersValue = 5 * numberOfBeers
const softDrinksValue = 3 * numberOfSoftDrinks 
const skewersValue = 7 * numberOfSkewers 

if (gender == 'm' || gender == 'M') {
    ticket = 10
} else if (gender == 'f' || gender == 'F'){
    ticket = 8
}

const consumption = beersValue + softDrinksValue + skewersValue
if (consumption > 30) {
    couvert = 'Isento de Couvert'
} else {
    couvert = 'Couvert = R$ 4.00'
}
console.log()
console.log(`RELATÓRIO:
Consumo = R$ ${consumption.toFixed(2)}
${couvert}
Ingresso = R$ ${ticket.toFixed(2)}
`)

if (couvert == 'Isento de Couvert') {
    couvert = parseFloat(0)
} else {
    couvert = parseFloat(4)
}
let total = consumption + ticket + couvert
console.log(`Valor a pagar = R$ ${total.toFixed(2)}`)