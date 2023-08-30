const prompt = require('prompt-sync')()

let annualIncomeSalary = parseFloat(prompt('Renda anual com salário:'))
let annualIncomeServiceProvision = parseFloat(prompt('Renda anual com prestação de serviço:'))
let annualIncomeCapitalGain = parseFloat(prompt('Renda anual com ganho de capital:'))
let medicalExpenses = parseFloat(prompt('Gastos médicos: ')) 
let educationalExpenditures = parseFloat(prompt('Gastos educacionais:'))

function impostoSobreSalario(quantia) {  
    let payrollTax
    if (quantia < 30000) {
        payrollTax = parseInt('Isento de imposto')
    } else if (quantia >= 30000 && quantia < 50000){
        payrollTax = parseFloat(quantia * 0.1)
    } else if (quantia >= 50000) {
        payrollTax = parseFloat(quantia * 0.2)
    }
    return payrollTax.toFixed(2)
}
const impostoSalario = impostoSobreSalario(annualIncomeSalary)

function impostoSobreServicos(quantia) {
    let serviceTax
    quantia > 0 ? serviceTax = parseFloat(quantia) * 0.15 :
    serviceTax = parseFloat(0)
    return serviceTax.toFixed(2)
}
const impostoServicos = impostoSobreServicos(annualIncomeServiceProvision)

function impostoSobreGC(quantia) {
    let capitalGainTax
    quantia > 0 ? capitalGainTax = parseFloat(quantia) * 0.2 :
    capitalGainTax = parseFloat(0)
    return capitalGainTax.toFixed(2)
}
const impostoGC = impostoSobreGC(annualIncomeCapitalGain) 

function impostoBrutoTotal(salario, servicos, gc) {
    let totalGrossTax = parseFloat(salario) + parseFloat(servicos) + parseFloat(gc)
    return totalGrossTax.toFixed(2)
}
const totalImpostoBruto = impostoBrutoTotal(impostoSalario, impostoServicos, impostoGC)

function abatimento(salario, servicos, gc, gastosMedicos, gastosEducacionais) {
    const totalBruto = impostoBrutoTotal(salario, servicos, gc)
    const maximumDeductible = parseFloat(totalBruto) * parseFloat(0.3)
    const deductibleExpenses = parseFloat(gastosMedicos) + parseFloat(gastosEducacionais)
    const abatement = Math.min(maximumDeductible, deductibleExpenses); 
    return abatement 
}
const abatimentoFinal = abatimento(impostoSalario, impostoServicos, impostoGC, medicalExpenses, educationalExpenditures)

function impostoDevido(totalImpostoBruto, abatimentoFinal) {
    let taxDue = parseFloat(totalImpostoBruto) - parseFloat(abatimentoFinal)
    return taxDue
}
const totalImpostoDevido = impostoDevido(totalImpostoBruto, abatimentoFinal)

console.log('RELATÓRIO:')
console.log(`Imposto sobre salário: ${impostoSalario}
Imposto sobre serviços: ${impostoServicos}
Imposto sobre ganho de capital: ${impostoGC}
Imposto bruto total: ${totalImpostoBruto}
Abatimento: ${abatimentoFinal.toFixed(2)}
Imposto devido: ${totalImpostoDevido.toFixed(2)}`)