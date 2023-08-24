const prompt = require('prompt-sync')()

let salary = parseFloat(prompt('Digite o salário da pessoa:'))
let newSalary
let increase
let percentage

if (salary <= 1000.00) {
    newSalary = (salary * 0.20) + salary
    increase = salary * 0.20 
    percentage = 20
} else if (salary <= 3000.00) {
    newSalary = (salary * 0.15) + salary
    increase = salary * 0.15
    percentage = 15
} else if (salary < 8001.00) {
    newSalary = (salary * 0.10) + salary
    increase = salary * 0.10
    percentage = 10
} else {
    newSalary = (salary * 0.05) + salary
    increase = salary * 0.05
    percentage = 5
}

console.log(`Novo salario = R$ ${newSalary.toFixed(2)}
Aumento = R$ ${increase.toFixed(2)}
Porcentagem = ${percentage}%`)