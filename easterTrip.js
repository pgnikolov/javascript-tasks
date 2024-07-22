function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let nights = parseInt(input[2]);
    let nightPrice = 0

    switch (destination) {
        case "France":
            if (dates == "21-23") {
                nightPrice = 30
            }else if (dates == "24-27") {
                nightPrice = 35
            }else if (dates == "28-31") {
                nightPrice = 40
            }
            break;
        case "Italy":
            if (dates == "21-23") {
                nightPrice = 28
            }else if (dates == "24-27") {
                nightPrice = 32
            }else if (dates == "28-31") {
                nightPrice = 39
            }
            break;
        case "Germany":
            if (dates == "21-23") {
                nightPrice = 32
            }else if (dates == "24-27") {
                nightPrice = 37
            }else if (dates == "28-31") {
                nightPrice = 43
            }
            break
    }

    let totalCost = nightPrice * nights

    console.log(`Easter trip to ${destination} : ${(totalCost).toFixed(2)} leva.`);
}

easterTrip(["Germany", "24-27", "5"]);
