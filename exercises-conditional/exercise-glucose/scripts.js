const prompt = require('prompt-sync')()

let glucoseMeasurement = parseFloat(prompt('Digite a medida da glicose: '))

if (glucoseMeasurement <= 100.0) {
    console.log('Classificação: normal')
} else if (glucoseMeasurement >= 140.0) {
    console.log('Classificação: diabetes')
} else {
    console.log('Classificação: elevado')
}