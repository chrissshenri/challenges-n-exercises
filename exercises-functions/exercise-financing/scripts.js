const prompt = require('prompt-sync')()

const totalValue = prompt('Valor total do imovel:')
const amountPaid = prompt('Valor pago na entrada:')
const monthsFunded = prompt('Sera financiado em quantos meses?')

function installment(total, downPayment, months) {
    let eachInstalment = (total - downPayment) / months
    return console.log(`Valor de cada prestação: ${eachInstalment.toFixed(2)}`)
}
installment(totalValue, amountPaid, monthsFunded)