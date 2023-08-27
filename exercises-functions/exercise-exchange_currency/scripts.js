const prompt = require('prompt-sync')()

const amount = prompt('Digite a cotacao do dolar:')
const quote = prompt('Digite a quantia em reais:')

function realToDollar(amount, exchangeRate) {
    let dollarValue = exchangeRate / amount
    return console.log(`Voce pode comprar ${dollarValue.toFixed(2)} dolares com esta quantia `)
}
realToDollar(amount, quote)