const prompt = require('prompt-sync')()
let passWord

passWord = prompt('Digite a senha: ')

while (passWord != 2002) {
    passWord = prompt('Senha Invalida! Tente novamente: ')
}

console.log('Acesso permitido!')