const prompt = require('prompt-sync')()

let name = prompt('Nome:')
let hourlyWage = parseFloat(prompt('Valor por hora:'))
let workedHours = parseFloat(prompt('Horas trabalhadas:'))
const payment = hourlyWage * workedHours

console.log(`O pagamento para ${name} deve ser ${payment.toFixed(2)}`)