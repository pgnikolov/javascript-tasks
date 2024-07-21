function easterBakery(input){
    let flourPrice = parseFloat(input[0])
    let flourWeight = parseFloat(input[1])
    let sugarWeight = parseFloat(input[2])
    let eggDozens = parseInt(input[3])
    let yeastCount = parseInt(input[4])

    let sugarPrice = flourPrice * 0.75
    let eggPrice = flourPrice * 1.1
    let yeastPrice = sugarPrice * 0.2

    let totalCost = flourPrice * flourWeight + sugarPrice * sugarWeight + eggPrice * eggDozens + yeastCount * yeastPrice

    console.log(`${totalCost.toFixed(2)}`)
}
