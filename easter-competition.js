function easterCompetition(input) {
    let index = 0;
    let easterBread = parseInt(input[index]);
    index++;

    let totalPoints = 0;
    let maxVote = 0;
    let topChef = "";

    for (let i = 0; i < easterBread; i += 1) {
        let baker = input[index];
        index++;

        let command = input[index];
        index++;

        while (command !== "Stop") {
            let vote = parseInt(command);
            totalPoints += vote;
            command = input[index];
            index++;
        }

        console.log(`${baker} has ${totalPoints} points.`);

        if(totalPoints > maxVote) {
            maxVote = totalPoints;
            topChef = baker;
            console.log(`${topChef} is the new number 1!`);
        }

        totalPoints = 0;
    }

    console.log(`${topChef} won competition with ${maxVote} points!`);
}
