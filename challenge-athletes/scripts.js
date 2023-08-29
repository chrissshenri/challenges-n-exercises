const prompt = require('prompt-sync')()

const athletes = prompt('Qual a quantidade de atletas?')
let subArrayName = [] 
let subArrayGender = []
let subArrayHeight = []
let subArrayWeight = []
let totalWeight = parseFloat(0)
let femaleTotal = parseFloat(0)
let femaleHeights = parseFloat(0)

for (let i = 0; i < athletes ; i++) {
    console.log(`Digite os dados do atleta numero ${i + 1}:`)
    subArrayName[i] = prompt('Nome:')
    
    subArrayGender[i] = prompt('Sexo:')
        if (subArrayGender[i] != 'M' && subArrayGender[i] != 'm' && subArrayGender[i] != 'F' && subArrayGender[i] != 'f') {
            do {
                subArrayGender.splice(i, 1);
                subArrayGender[i] = prompt('Valor invalido! Favor digitar F ou M:')
            } while (subArrayGender[i] != 'M' && subArrayGender[i] != 'm' && subArrayGender[i] != 'F' && subArrayGender[i] != 'f')
        }
        if (subArrayGender[i] == 'F' || subArrayGender[i] == 'f') {
            femaleTotal ++
        }

    subArrayHeight[i] = parseFloat(prompt('Altura:'))
        if (subArrayHeight[i] <= 0) {
            do {
                subArrayHeight.splice(i, 1);
                subArrayHeight[i] = parseFloat(prompt('Valor invalido! Favor digitar um valor positivo:'))
            } while (subArrayHeight[i] <= 0)
        }
        if (subArrayGender[i] == 'F' || subArrayGender[i] == 'f') {
            femaleHeights += subArrayHeight[i]
        }
        

    subArrayWeight[i] = parseFloat(prompt('Peso:'))    
        if (subArrayWeight[i] <= 0) {
            do {
                subArrayWeight.splice(i, 1);
                subArrayWeight[i] = parseFloat(prompt('Valor invalido! Favor digitar um valor positivo:'))
            } while (subArrayWeight[i] <= 0);
        }
        totalWeight += subArrayWeight[i]
}

const middleWeight = totalWeight / athletes 
const indexOfMaxHeight = subArrayHeight.findIndex(height => height === Math.max(...subArrayHeight))
const highestAthlete = subArrayName[indexOfMaxHeight]
const totalMens = subArrayName.filter((_, index) => subArrayGender[index].toLowerCase() === 'm')
const percentageOfMen = (totalMens.length / athletes) * 100
const averageFemaleHeight = femaleHeights / femaleTotal

console.log(`RELATÓRIO:
Peso médio dos atletas: ${middleWeight.toFixed(2)}
Atleta mais alto: ${highestAthlete}
Porcentagem de homens: ${percentageOfMen.toFixed(1)}%`)

if (averageFemaleHeight > 0) {
    console.log(`Altura média das mulheres: ${averageFemaleHeight.toFixed(2)}`)
} else {
    console.log(`Não há mulheres cadastradas`)
}