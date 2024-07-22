function easterEggs(input) {
    let n = parseInt(input[0]);
    let index = 1;
    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;

    for (let i = 0; i < n; i += 1) {
        let color = input[index];
        if (color == "red") {
            redCount++
        }else if (color == "orange") {
            orangeCount++
        }else if (color == 'green') {
            greenCount++
        }else if (color == 'blue') {
            blueCount++
        }
        index++
    }

    let maxEggsCounts = redCount;
    let maxCollor = "red";

        if (orangeCount > maxEggsCounts){
            maxEggsCounts = orangeCount;
            maxCollor = "orange";
        }
        if (blueCount > maxEggsCounts){
            maxEggsCounts =blueCount;
            maxCollor= "blue";
        }
        if (greenCount > maxEggsCounts){
            maxEggsCounts = greenCount;
            maxCollor= "green";
        }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${maxEggsCounts} -> ${maxCollor}`);
}

easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"])
