const prompt = require('prompt-sync')()

let alcoholCount = 0
let gasolineCount = 0
let dieselCount = 0

let code = prompt('Informe um codigo (1, 2, 3) ou 4 para parar: ')

while (code != 4) {
    code = prompt('Informe um codigo (1, 2, 3) ou 4 para parar: ')
    if (code == 1) {
        alcoholCount++
    }
    if (code == 2) {
        gasolineCount++
    }
    if (code == 3) {
        dieselCount++
    }
}

console.log(`MUITO OBRIGADO
Alcool: ${alcoholCount}
Gasolina: ${gasolineCount}
Diesel: ${dieselCount}`)