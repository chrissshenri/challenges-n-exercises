const prompt = require('prompt-sync')()

const valueGuclose = parseFloat(prompt('Digite o valor da giclose:'))

function  mostrarGlicose(measure) {
    let classification
    if (measure <= 100) {
        classification = 'Normal'
    } else if (measure <= 140 && measure > 100) {
        classification = 'Elevado'
    } else if(measure > 140) {
        classification = 'Diabetes'
    }    
    return console.log(`Classificação = ${classification}`)
}
mostrarGlicose(valueGuclose)
