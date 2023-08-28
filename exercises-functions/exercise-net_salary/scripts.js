const prompt = require('prompt-sync')()

let total

function tax(amount) {
    if (amount > 4000.00) {
        return amount * 0.25
    } else {
        return amount * 0.20
    }
}    
function socialSecurity(amount) {
    if (amount > 1500.00) {
        return amount * 0.15
    } else {
        return amount * 0.10
    }
}
function netSalary(amount) {
    return amount - tax(amount) - socialSecurity(amount)
}

let grossSalary = parseFloat(prompt('Digite o valor do salario bruto:'))
total = netSalary(grossSalary)
console.log(`Salario liquido = R$ ${total.toFixed(2)}`)