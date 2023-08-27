const prompt = require('prompt-sync')()

const fahrenheit = prompt('Digite a temperatura em Fahrenheit:')

function fahrenheitToCelsius(fahrenheit) {
    let celsius = 5/9 * (fahrenheit - 32)
    return console.log(`Temperatura em Celsius = ${celsius.toFixed(2)}`)
}
fahrenheitToCelsius(fahrenheit)