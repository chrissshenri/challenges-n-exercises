const prompt = require('prompt-sync')()

let value = parseFloat(prompt('Digite o valor do raio do circulo:'))
const area = Math.PI * Math.pow(value, 2)

console.log(`AREA = ${area.toFixed(3)}`)