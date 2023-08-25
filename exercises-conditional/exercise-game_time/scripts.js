const prompt = require('prompt-sync')()

let startTime = parseFloat(prompt('Hora inicial:'))
let endTime = parseFloat(prompt('Hora final:'))

let duration

if (startTime < endTime) {
    duration = endTime - startTime
} else {
    duration = (startTime - endTime) - 24
    duration = Math.abs(duration)
}

console.log(`O JOGO DUROU ${duration} HORA(S)`)