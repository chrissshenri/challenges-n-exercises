const prompt = require('prompt-sync')()

const fahrenheit = prompt('Digite a temperatura em Fahrenheit:')

function fahrenheitToCelsius(f) {
    let celsius = 5/9 * (f - 32)
    return console.log(`Temperatura em Celsius = ${celsius.toFixed(2)}`)
}
fahrenheitToCelsius(fahrenheit)