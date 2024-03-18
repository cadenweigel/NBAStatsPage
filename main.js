function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

let playerData = [];

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
        console.log(data[i][1]);
        let p = new Player(data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6],
                           data[i][7],data[i][8],data[i][9],data[i][10],data[i][11],data[i][12],
                           data[i][13],data[i][14],data[i][15],data[i][16],data[i][17],data[i][18],
                           data[i][19],data[i][20],data[i][21],data[i][22],data[i][23],data[i][24],
                           data[i][25],data[i][26],data[i][27],data[i][28],data[i][29]);
        players.push(p);
        playerData.push(p);
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
    for(let i = 0; i < header.length; i++){
        let cell = headerRow.insertCell(i);
        cell.innerHTML = header[i];
    }

    for(let j = 0; j < players.length; j++){
        fillRow(j+1, players[j], table);
    }

}

function fillRow(rowNum, player, table, row){
    var row = table.insertRow(rowNum);

    //The following code is very repetitive, since I assigned each data point to its own 
    //attribute in player rather than just having an array and keeping track
    //of where each stat was in the array
    let col0 = row.insertCell(0);
    col0.innerHTML = player.name;
    let col1 = row.insertCell(1);
    col1.innerHTML = player.position;
    let col2 = row.insertCell(2);
    col2.innerHTML = player.age;
    let col3 = row.insertCell(3);
    col3.innerHTML = player.team;
    let col4 = row.insertCell(4);
    col4.innerHTML = player.gamesPlayed;
    let col5 = row.insertCell(5);
    col5.innerHTML = player.gamesStarted;
    let col6 = row.insertCell(6);
    col6.innerHTML = player.minutesPerGame;
    let col7 = row.insertCell(7);
    col7.innerHTML = player.fieldGoals;
    let col8 = row.insertCell(8);
    col8.innerHTML = player.fieldGoalsAttempted;
    let col9 = row.insertCell(9);
    col9.innerHTML = player.fieldGoalPercent;
    let col10 = row.insertCell(10);
    col10.innerHTML = player.threePointers;
    let col11 = row.insertCell(11);
    col11.innerHTML = player.threePointersAttempted;
    let col12 = row.insertCell(12);
    col12.innerHTML = player.threePointPercent;
    let col13 = row.insertCell(13);
    col13.innerHTML = player.twoPointers;
    let col14 = row.insertCell(14);
    col14.innerHTML = player.twoPointersAttempted;
    let col15 = row.insertCell(15);
    col15.innerHTML = player.twoPointPercent;
    let col16 = row.insertCell(16);
    col16.innerHTML = player.effectiveFieldGoalPercent;
    let col17 = row.insertCell(17);
    col17.innerHTML = player.freeThrows;
    let col18 = row.insertCell(18);
    col18.innerHTML = player.freeThrowsAttempted;
    let col19 = row.insertCell(19);
    col19.innerHTML = player.freeThrowPercent;
    let col20 = row.insertCell(20);
    col20.innerHTML = player.offensiveReboundsPerGame;
    let col21 = row.insertCell(21);
    col21.innerHTML = player.defensiveReboundsPerGame;
    let col22 = row.insertCell(22);
    col22.innerHTML = player.reboundsPerGame;
    let col23 = row.insertCell(23);
    col23.innerHTML = player.assistsPerGame;
    let col24 = row.insertCell(24);
    col24.innerHTML = player.stealsPerGame;
    let col25 = row.insertCell(25);
    col25.innerHTML = player.blocksPerGame;
    let col26 = row.insertCell(26);
    col26.innerHTML = player.turnoversPerGame;
    let col27 = row.insertCell(27);
    col27.innerHTML = player.foulsPerGame;
    let col28 = row.insertCell(28);
    col28.innerHTML = player.pointsPerGame;

}

function Player(name, position, age, team, gamesPlayed, gamesStarted, minutesPerGame,
                fieldGoals, fieldGoalsAttempted, fieldGoalPercent,
                threePointers, threePointersAttempted, threePointPercent,
                twoPointers, twoPointersAttempted, twoPointPercent, effectiveFieldGoalPercent,
                freeThrows, freeThrowsAttempted, freeThrowPercent,
                offensiveReboundsPerGame, defensiveReboundsPerGame, reboundsPerGame,
                assistsPerGame, stealsPerGame, blocksPerGame, turnoversPerGame, foulsPerGame, pointsPerGame){
    this.name = name;
    this.position = position;
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