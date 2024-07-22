function easterShop(input) {
    let currentEggs = parseInt(input[0]);
    let action = input[1];
    let index = 2;
    let soldEggs = 0;

    while (true) {
        if (action == "Close"){
            console.log(`Store is closed!`);
            console.log(`${soldEggs} eggs sold.`);
            break
        }
        let quantity = parseInt(input[index]);

        if (action == "Fill") {
            currentEggs  += quantity
        }else if (action == "Buy") {
            if (quantity > currentEggs) {
                console.log(`Not enough eggs in store!`)
                console.log(`You can buy only ${currentEggs}.`)
                break
            }else{
                currentEggs -= quantity;
                soldEggs += quantity;
            }   
        }
        index ++;
        action = input[index];
        index ++;
    }
}

easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"])
