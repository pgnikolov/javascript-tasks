function easterParty(input) {
    let guests = parseInt(input[0]);
    let guestPrice = parseFloat(input[1]);
    let budget = parseFloat(input[2]);

    let firstCost = guests * guestPrice;

    if (guests > 20) {
        firstCost *= 0.75;
    }else if (guests > 15) {
        firstCost *= 0.80;
    }else if (guests >= 10) {
        firstCost *= 0.85;
    }

    let cakePrice = budget * 0.10;
    let totalCost = firstCost + cakePrice;

    if (budget >= totalCost) {
        console.log(`It is party time! ${(budget - totalCost).toFixed(2)} leva left.`);
    }else{
        console.log(`No party! ${(totalCost - budget).toFixed(2)} leva needed.`);
    }
}

easterParty(["8", "25", "340"]);
