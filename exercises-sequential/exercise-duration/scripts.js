const prompt = require('prompt-sync')()

let durationInSeconds = parseFloat(prompt('Digite a duração em segundos:'))
const hour = durationInSeconds / 3600 
const remainder = durationInSeconds % 3600
const minutes = remainder / 60
const seconds = remainder % 60

console.log(`${hour.toFixed(0)}:${minutes.toFixed(0)}:${seconds.toFixed(0)}`)