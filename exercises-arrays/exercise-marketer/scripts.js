const prompt = require('prompt-sync')();


const quantityOfProducts = Number(prompt('Serão digitados dados de quantos produtos?'))
let products = {
    nome: '',
    profitBelow10Percent: Number(0),
    profitBetween10And20Percent: Number(0),
    profitAbove20Percent: Number(0)
}

let purchasePrice
let salePrice
let profit
let totalPurchase = 0
let totalPrice = 0
let totalProfit

for (let i = 1; i <= quantityOfProducts; i++) {
    products.nome = prompt('Nome:')
    purchasePrice = Number(prompt('Preço de compra:'))
    salePrice = Number(prompt('Preço de venda:'))

    profit = ((salePrice - purchasePrice) / purchasePrice) * 100
    totalPurchase += purchasePrice 
    totalPrice += salePrice
    

    console.log(profit.toFixed(2))
    console.log(totalPrice)
    console.log(totalPurchase)


    if (profit < 10) {
        products.profitBelow10Percent++
    } else if (profit < 20) {
        products.profitBetween10And20Percent++
    } else if (profit > 20) {
        products.profitAbove20Percent++
    }
    
    profit = 0
}
totalProfit = totalPrice - totalPurchase

console.log(`RELATÓRIO: 
            Lucro abaixo de 10%: ${products.profitBelow10Percent}
            Lucro entre 10% e 20%: ${products.profitBetween10And20Percent}
            Lucro acima de 20%: ${products.profitAbove20Percent}
            Valor total de compra: ${totalPurchase.toFixed(2)}
            Valor total de venda: ${totalPrice.toFixed(2)}
            Lucro total: ${totalProfit.toFixed(2)}`)

console.log(typeof totalPurchase)
console.log(typeof totalProfit)
console.log(typeof totalPrice)