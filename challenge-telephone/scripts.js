const prompt = require('prompt-sync')()

const clients  = prompt('Informe a quantidade de clientes:')
let name = []
let phone = []
let type = []
let minutes = []
let accountValue = []
let priceList = []
let timeExceededMinutes = []

for (let i = 0; i < clients; i++) {
    console.log(`Dados do ${i + 1}o. cliente:`)
    name[i] = prompt('Nome:');
    phone[i] = prompt('Telefone:')
    type[i] = prompt('Tipo:')
    if (type[i] != 0 && type[i] != 1 && type[i] != 2) {
        firstNote.splice(i, 1)
        type[i] = parseFloat(prompt('Tipo inválido, por favor digite novamente o tipoe de 0 até 2:'))
    }
    minutes[i] = parseFloat(prompt('Minutos:'))
    timeExceededMinutes[i] = []
    if (minutes[i] - 90 > 0) {
        timeExceededMinutes[i] = minutes[i] - 90
    }
}

console.log('Informe o preço básico e excedente de cada tipo de conta:')
for (let i = 0; i < 3; i++) {
    console.log(`Tipo ${i}:`)
    priceList[i] = []
    for (let j = 0; j < 2; j++) {
            priceList[i][j] = parseFloat(prompt())
        }
}

const type0 = type.filter((number, _)=> {
    return number == 0;
})
const type1 = type.filter((number, _)=> {
    return number == 1;
}) 
const type2 = type.filter((number, _)=> {
    return number == 2;
})
for (let i = 0; i < clients; i++) {
    if (type[i] == type0[0]) {
        accountValue[i] = (timeExceededMinutes[i] * priceList[0][1]) + priceList[0][0] 
    }
    if (type[i] == type1[0]) {
        accountValue[i] = (timeExceededMinutes[i] * priceList[1][1]) + priceList[1][0] 
    }
    if (type[i] == type2[0]) {
        accountValue[i] = (timeExceededMinutes[i] * priceList[2][1]) + priceList[2][0] 
    }
    
}

console.log(`RELATÓRIO DE CLIENTES:
`)

for (let i = 0; i < clients; i++) {
    console.log(name[i] + ', ' + phone[i] + ', Tipo ' + type[i] +
    ', Minutos: ' + minutes[i] + ', Conta = R$ ' + accountValue[i].toFixed(2))
}
