function easterDecoration(input) {
    let index = 0;
    let numberOfClients = parseInt(input[index]);
    index++;

    const priceBasket = 1.50;
    const priceWreath = 3.80;
    const priceChocoBunny = 7.00;

    let itemCounter = 0;
    let currentTotal = 0;
    let grandTotal = 0;

    for (let i = 0; i < numberOfClients; i++) {
        let currentItem = input[index];
        index++;

        while (currentItem !== "Finish") {

            if (currentItem === "basket") {
                currentTotal += priceBasket;
                itemCounter++;
            } else if (currentItem === "wreath") {
                currentTotal += priceWreath;
                itemCounter++;
            } else if (currentItem === "chocolate bunny") {
                currentTotal += priceChocoBunny;
                itemCounter++;
            }

            currentItem = input[index];
            index++;
        }

        if (itemCounter % 2 === 0) {
            currentTotal = currentTotal * 0.8;
        }

        grandTotal += currentTotal;
        console.log(`You purchased ${itemCounter} items for ${currentTotal.toFixed(2)} leva.`);

        currentTotal = 0;
        itemCounter = 0;
    }

    if (numberOfClients > 1) {
        grandTotal = grandTotal / numberOfClients;
    }

    console.log(`Average bill per client is: ${grandTotal.toFixed(2)} leva.`);
}

easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"]);
