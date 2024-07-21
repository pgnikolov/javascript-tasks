function eastern(input) {
    const easterBreadPrice = 4.00;
    const eggPrice = 0.45;

    let guests = parseInt(input[0]);
    let budget = parseInt(input[1]); 

    let easterBreadNeeded = Math.ceil(guests / 3);
    let eggsNeeded = guests * 2;

    let totalCost = (easterBreadNeeded * easterBreadPrice) + (eggsNeeded * eggPrice);

    if (budget >= totalCost) {
        console.log(`Lyubo bought ${easterBreadNeeded} Easter bread and ${eggsNeeded} eggs.`);
        console.log(`He has ${(budget - totalCost).toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(totalCost - budget).toFixed(2)} lv. more.`);
    }
}
