function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

function manageData(data) {
    //console.log(data);

    //create array of headers for table
    let headers = [];
    for(let i = 1; i < data[0].length - 1; i++){
        headers.push(data[0][i]);
    } 

    //create array of player objects
    let players = [];
    for (i = 1; i < data.length; i++){
        //console.log(data[i][1]);
        let p = new Player(data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6],
                           data[i][7],data[i][8],data[i][9],data[i][10],data[i][11],data[i][12],
                           data[i][13],data[i][14],data[i][15],data[i][16],data[i][17],data[i][18],
                           data[i][19],data[i][20],data[i][21],data[i][22],data[i][23],data[i][24],
                           data[i][25],data[i][26],data[i][27],data[i][28],data[i][29]);
        players.push(p);
    }

    makeTable(headers, players);
}

function makeTable(header, players){
    var table = document.getElementById("table");
    
    /*
    EXAMPLE CODE: BUILD OFF THIS FOR REAL TABLE!!!!!
    var row = table.insertRow(0);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";  */

    //Create header row for table 
    var headerRow = table.insertRow(0);
    for(let i = 0; i < header.length, i++){
        let cell = headerRow.insertCell(i);
        cell.innerHTML = header[i];
    }

}

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

parseData("data/player_stats_2324.csv", manageData);
//console.log(data);