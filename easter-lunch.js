function easterLunch(input){
    const easterBreadPrice = 3.20;
    const eggsPrice = 4.35;
    const cookiesPrice = 5.40;
    const eggPaint = 0.15;

    let easterBreadCount = parseInt(input[0]);
    let eggDozens = parseInt(input[1]);
    let cookeisWeight = parseInt(input[2]);

    let totalCost = easterBreadCount * easterBreadPrice + eggDozens * eggsPrice + eggDozens * 12 * eggPaint + cookeisWeight * cookiesPrice;
    console.log(`${totalCost.toFixed(2)}`);
}
