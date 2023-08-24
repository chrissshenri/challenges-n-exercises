const prompt = require('prompt-sync')()

let temperatureScale = prompt('Voce vai digitar a temperatura em qual escala (C/F)?')
let fahrenheit
let celsius
let convertedTemperature

if (temperatureScale == 'c' || temperatureScale == 'C') {
    celsius = parseFloat(prompt('Digite a temperatura em Celsius: '))
    convertedTemperature = (celsius * (9 / 5)) + 32
    console.log(`Temeperatura equivalente em Fahrenheit: ${convertedTemperature.toFixed(2)}`)
} else if (temperatureScale == 'f' || temperatureScale == 'F') {
    fahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: '))
    convertedTemperature = (5 / 9) * (fahrenheit - 32)
    console.log(`Temeperatura equivalente em Fahrenheit: ${convertedTemperature.toFixed(2)}`)
}