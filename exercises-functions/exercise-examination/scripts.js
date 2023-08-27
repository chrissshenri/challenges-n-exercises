const prompt = require('prompt-sync')()

function showGlucose(measure) {
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
function showTriglycerides(measure) {
    let classification
    if (measure <= 200) {
        classification = 'Desejável'
    } else {
        classification = 'Aumentado'
    }
    return console.log(`Classificação = ${classification}`)
}
function showCholesterol(measure) {
    let classification
    if (measure <= 200) {
        classification = 'Desejável'
    } else if (measure <= 240 && measure > 200) {
        classification = 'Limiar'
    } else if(measure > 240) {
        classification = 'Elevado'
    }    
    return console.log(`Classificação = ${classification}`)
}

const valueGuclose = parseFloat(prompt('Medida de glicose:'))
showGlucose(valueGuclose)
const valueTriglycerides = parseFloat(prompt('Medida de triglicerídeos:'))
showTriglycerides(valueTriglycerides)
const valueCholesterol = parseFloat(prompt('Medida de colesterol:'))
showCholesterol(valueCholesterol)