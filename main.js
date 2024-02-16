import Papa from 'papaparse';

//set up csv
function manageData(data) {
    //Data is usable here
    //console.log(data);
    console.log(data[196][1]);
}

function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
            return results.data;
        }
    });
}

//convert object from csv to new object array

function Player(name, age, team, gamesPlayed, gamesStarted, minutesPerGame,
                fieldGoals, fieldGoalsAttempted, fieldGoalPercent,
                threePointers, threePointersAttempted, threePointPercent,
                twoPointers, twoPointersAttempted, twoPointPercent, effectiveFieldGoalPercent,
                freeThrows, freeThrowsAttempted, freeThrowPercent,
                offensiveReboundsPerGame, defensiveReboundsPerGame, reboundsPerGame,
                assistsPerGame, stealsPerGame, blocksPerGame, turnoversPerGame, foulsPerGame, pointsPerGame){
    this.name = name;
    this.age = age;
    this.team = team;
    this.gamesPlayed = gamesPlayed;
    this.gamesStarted = gamesStarted;
    this.minutesPerGame = minutesPerGame;
    this.fieldGoals = fieldGoals;
    this.fieldGoalsAttempted = fieldGoalsAttempted;
    this.fieldGoalPercent = fieldGoalPercent;
    this.threePointers = threePointers;
    this.threePointersAttempted = threePointersAttempted;
    this.threePointPercent = threePointPercent;
    this.twoPointers = twoPointers;
    this.twoPointersAttempted = twoPointersAttempted;
    this.twoPointPercent = twoPointPercent;
    this.effectiveFieldGoalPercent = effectiveFieldGoalPercent;
    this.freeThrows = freeThrows;
    this.freeThrowsAttempted = freeThrowsAttempted;
    this.freeThrowPercent = freeThrowPercent;
    this.offensiveReboundsPerGame = offensiveReboundsPerGame;
    this.defensiveReboundsPerGame = defensiveReboundsPerGame;
    this.reboundsPerGame = reboundsPerGame;
    this.assistsPerGame = assistsPerGame;
    this.stealsPerGame = stealsPerGame;
    this.blocksPerGame = blocksPerGame;
    this.turnoversPerGame = turnoversPerGame;
    this.foulsPerGame = foulsPerGame;
    this.pointsPerGame = pointsPerGame;
}

let data = parseData("data/player_stats_2324.csv", manageData);
console.log(data[197][1]);