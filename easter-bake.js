function easterBake(input) {
    let quantity = parseInt(input[0]);
    let sugarTotal = 0;
    let sugarMax = 0;
    let flourTotal = 0;
    let flourMax = 0;
    let index = 1;

    for (let i = 0; i < quantity; i +=1) {
        let sugar = parseInt(input[index]);
        sugarTotal += sugar;
        if (sugar > sugarMax) {
            sugarMax = sugar;
        }

        index++
        let flour = parseInt(input[index])
        flourTotal += flour;
        if (flour > flourMax) {
            flourMax = flour;
        }

        index++
    }
    
    console.log(`Sugar: ${Math.ceil(sugarTotal / 950)}`);
    console.log(`Flour: ${Math.ceil(flourTotal / 750)}`);
    console.log(`Max used flour is ${flourMax} grams, max used sugar is ${sugarMax} grams.`);
}

easterBake(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"])