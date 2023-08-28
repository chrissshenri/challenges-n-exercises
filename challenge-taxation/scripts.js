const prompt = require('prompt-sync')()

let annualIncomeSalary = parseFloat(prompt('Renda anual com salário:'))
let annualIncomeServiceProvision = parseFloat(prompt('Renda anual com prestação de serviço:'))
let annualIncomeCapitalGain = parseFloat(prompt('Renda anual com ganho de capital:'))
let medicalExpenses = parseFloat(prompt('Gastos médicos: ')) 
let educationalExpenditures = parseFloat(prompt('Gastos educacionais:'))

let payrollTax
if (annualIncomeSalary < 30000) {
    payrollTax = parseInt('Isento de imposto')
    console.log(`
RELATÓRIO DE IMPOSTO DE RENDA

OCNSOLIDADO DE RENDA:
Imposto sobre salário: ${payrollTax}`)
} else if (annualIncomeSalary >= 30000 && annualIncomeSalary < 50000){
    payrollTax = parseFloat(annualIncomeSalary * 0.1)
    console.log(`
RELATÓRIO DE IMPOSTO DE RENDA

OCNSOLIDADO DE RENDA:
Imposto sobre salário: ${payrollTax.toFixed(2)}`)
} else if (annualIncomeSalary >= 50000) {
    payrollTax = parseFloat(annualIncomeSalary * 0.2)
    console.log(`
RELATÓRIO DE IMPOSTO DE RENDA

OCNSOLIDADO DE RENDA:
Imposto sobre salário: ${payrollTax.toFixed(2)}`)
}

let serviceTax
annualIncomeServiceProvision > 0 ? serviceTax = parseFloat(annualIncomeServiceProvision) * 0.15 :
serviceTax = parseFloat(0)

let capitalGainTax
annualIncomeCapitalGain > 0 ? capitalGainTax = parseFloat(annualIncomeCapitalGain) * 0.2 :
capitalGainTax = parseFloat(0)

let totalGrossTax = payrollTax + serviceTax + capitalGainTax
let maximumDeductible = totalGrossTax * 0.3
let deductibleExpenses = medicalExpenses + educationalExpenditures
let abatement

if (maximumDeductible < deductibleExpenses) {
    abatement = maximumDeductible
} else {
    abatement = deductibleExpenses
}
let taxDue = totalGrossTax - abatement

console.log(`Imposto sobre serviços: ${serviceTax.toFixed(2)}
Imposto sobre ganho de capital: ${capitalGainTax.toFixed(2)}

DEDUÇÕES:
Máximo dedutível: ${maximumDeductible.toFixed(2)}
Gastos dedutíveis: ${deductibleExpenses.toFixed(2)}

RESUMO:
Imposto bruto total: ${totalGrossTax.toFixed(2)}
Abatimento: ${abatement.toFixed(2)}
Imposto devido: ${taxDue.toFixed(2)}`)