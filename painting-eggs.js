function paintEggs(input) {
    let size = input[0];
    let color = input[1];
    let quantity = parseInt(input[2]);
    let price = 0;

    if (color == "Red") {
        if (size == "Large") {
            price = 16;
        }else if (size == "Medium") {
            price = 13;
        }else if (size == "Small") {
            price = 9;
        }
    }else if (color == "Green") {
        if (size == "Large") {
            price = 12;
        }else if (size == "Medium") {
            price = 9;
        }else if (size == "Small") {
            price = 8;
        }
    }else if (color == "Yellow") {
        if (size == "Large") {
            price = 9;
        }else if (size == "Medium") {
            price = 7;
        }else if (size == "Small") {
            price = 5;
        }
    }

    let totalCost = (price * quantity) * 0.65;

    console.log(`${(totalCost).toFixed(2)} leva.`);
}

paintEggs(["Large", "Red", "7"])
