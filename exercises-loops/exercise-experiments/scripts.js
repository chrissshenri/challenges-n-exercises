const prompt = require('prompt-sync')()

let cases = parseFloat(prompt('Quantos casos de teste serao digitados? '))
let coelho = parseFloat(0)
let rato = parseFloat(0)
let sapo = parseFloat(0)
let type
let guineaPigs
let coelhoPercent
let ratoPercent
let sapoPercent

for (let i = 0; i < cases; i++) {
    guineaPigs = parseFloat(prompt('Quantidade de cobaias:'))
    type = prompt('Tipo de cobaia:')
    if (type == 'C' || type == 'c') {
        coelho += guineaPigs
    }
    if (type == 'R' || type == 'r') {
        rato += guineaPigs
    }
    if (type == 'S' || type == 's') {
        sapo += guineaPigs
    }
    guineaPigs = 0
}

const total = coelho + rato + sapo
coelhoPercent = (coelho / total) * 100
ratoPercent = (rato / total) * 100
sapoPercent = (sapo / total) * 100

console.log(`RELATIORIO FINAL:
Total: ${total} cobaias
Total de coelhos: ${coelho}
Total de ratos: ${rato}
Total de sapos: ${sapo}
Percentual de coelhos: ${coelhoPercent.toFixed(2)} 
Percentual de ratos: ${ratoPercent.toFixed(2)}
Percentual de sapos: ${sapoPercent.toFixed(2)}`)