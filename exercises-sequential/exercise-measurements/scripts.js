const prompt = require('prompt-sync')()

let distanceTraveled = parseFloat(prompt('Distancia percorrida:'))
let fuel = parseFloat(prompt('Combustível gasto:'))
const averageConsumption = distanceTraveled / fuel

console.log(`Comsumo médio = ${averageConsumption.toFixed(3)}`)