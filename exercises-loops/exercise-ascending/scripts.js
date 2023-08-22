const prompt = require('prompt-sync')()

let firstNumber
let secondNumber

console.log('Digite dois numeros: ')
firstNumber = prompt()
secondNumber = prompt()
firstNumber > secondNumber ? console.log('DECRESCENTE!') : console.log('CRESCENTE!')

do {
    console.log('Digite outros dois numeros')
    firstNumber = prompt()
    secondNumber = prompt()
    switch (firstNumber) {
        case secondNumber:
            break;
    }
    firstNumber == secondNumber ? console.log(' ') :
    firstNumber > secondNumber ? console.log('DECRESCENTE!') : console.log('CRESCENTE!')
}
while((firstNumber !== secondNumber))