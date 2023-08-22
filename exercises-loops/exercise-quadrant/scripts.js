const prompt = require('prompt-sync')()
console.log('Digite os valores das coordenadas X e Y')
let xCoordinate = prompt()
let yCoordinate  = prompt()

while (xCoordinate != 0 && yCoordinate != 0) {
    if (xCoordinate > 0 && yCoordinate > 0) {
        console.log('QUADRANTE Q1')
    } else if (xCoordinate < 0 && yCoordinate < 0) {
        console.log('QUADRANTE Q3')
    }  
    if (xCoordinate < 0 && yCoordinate > 0) {
        console.log('QUADRANTE Q2')
    } else if(xCoordinate > 0 && yCoordinate < 0) {
        console.log('QUADRANTE Q4')
    }
    console.log('Digite os valores das coordenadas X e Y')
    xCoordinate = prompt()
    yCoordinate = prompt()
}