function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

let players = []; //due to variable scope stuff with callback functions
                  //i need a global variable to store player data
let headers = [];
let currentRows = 0; //current number of rows in table, used to delete correct number of rows
                     //when re-generating the table

function manageData(data) {
    //console.log(data);

    //create array of headers for table
    for(let i = 1; i < data[0].length; i++){
        headers.push(data[0][i]);
    }
    headers[0] = "Name"; //change from "Player"

    //create array of player objects
    for (i = 1; i < data.length; i++){
        //console.log(data[i][1]);
        let p = new Player(data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6],
                           data[i][7],data[i][8],data[i][9],data[i][10],data[i][11],data[i][12],
                           data[i][13],data[i][14],data[i][15],data[i][16],data[i][17],data[i][18],
                           data[i][19],data[i][20],data[i][21],data[i][22],data[i][23],data[i][24],
                           data[i][25],data[i][26],data[i][27],data[i][28],data[i][29]);
        players.push(p);
    }

    //makeHeader(headers);
    //makeTable(players.length);
    //console.log(headers);
}

function makeHeader(header){
    var table = document.getElementById("table");
    //Create header row for table 
    var headerRow = table.insertRow(0);
    for(let i = 0; i < header.length; i++){
        let cell = headerRow.insertCell(i);
        cell.innerHTML = header[i];
        cell.style.fontWeight = 'bold';
    }
}

function makeTable(numRows){
    var table = document.getElementById("table");
    for(let j = 0; j < numRows; j++){
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

function getStatChoice(){
    selectElement = document.querySelector('#stats');
    sortBy = selectElement.options[selectElement.selectedIndex].value;
    //console.log(sortBy);
    selectElement = document.querySelector('#number');
    show = selectElement.options[selectElement.selectedIndex].value;
    if (show == "all"){
        show = players.length-1;
    }
    //console.log(show);
    deleteTableRows();
    currentRows = show; //update currentRows
    findSortFunction(sortBy, show);
}

function deleteTableRows(){
    var table = document.getElementById("table");
    if (currentRows != 0) {
        for (i = currentRows; i > -1; i--){
            table.deleteRow(i);
        }
    }
    makeHeader(headers);
}

function findSortFunction(sortBy, show){
    switch(sortBy){
        case "name":
            sortByName(show);
            break;
        case "ageA":
            sortByAgeAscending(show);
            break;   
        case "ageD":
            sortByAgeDescending(show);
            break;
        case "team":
            sortByTeam(show);
            break;
        case "gamesPlayed":
            sortByGamesPlayed(show);
            break;
        case "gamesStarted":
            sortByGamesStarted(show);
            break;  
        case "fg":
            sortByFG(show);
            break;
        case "fga":
            sortByFGA(show);
            break;
        case "fgp":
            sortByFGP(show);
            break
        case "3p":
            sortBy3P(show);
            break;
        case "3pa":
            sortBy3PA(show);
            break;
        case "3pp":
            sortBy3PP(show);
            break;
        case "2p":
            sortBy2P(show);
            break;
        case "2pa":
            sortBy2PA(show);
            break;
        case "2pp":
            sortBy2PP(show);
            break;
        case "efg":
            sortByEFG(show);
            break;
        case "oreb":
            sortByOREB(show);
            break;
        case "dreb":
            sortByDREB(show);
            break;
        case "treb":
            sortByTREB(show);
            break;
        case "ast":
            sortByAssists(show);
            break;
        case "stl":
            sortBySteals(show);
            break;
        case "blk":
            sortByBlocks(show);
            break;
        case "tov":
            sortByTurnovers(show);
            break;
        case "pf":
            sortByFouls(show);
            break;
        case "pts":
            sortByPoints(show);
            break;
        default:
            alert("Not Sortable!");
            break;
    }
}

function sortByName(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].name > players[j+1].name){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByAgeAscending(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].age > players[j+1].age){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByAgeDescending(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].age < players[j+1].age){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByTeam(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].team > players[j+1].team){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByGamesPlayed(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].gamesPlayed > players[j+1].gamesPlayed){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByGamesStarted(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].gamesStarted > players[j+1].gamesStarted){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByFG(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].fieldGoals < players[j+1].fieldGoals){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByFGA(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].fieldGoalsAttempted < players[j+1].fieldGoalsAttempted){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByFGP(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].fieldGoalPercent < players[j+1].fieldGoalPercent){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortBy3P(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].threePointers < players[j+1].threePointers){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortBy3PA(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].threePointersAttempted < players[j+1].threePointersAttempted){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortBy3PP(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].threePointPercent < players[j+1].threePointPercent){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortBy2P(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].twoPointers < players[j+1].twoPointers){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortBy2PA(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].twoPointersAttempted < players[j+1].twoPointersAttempted){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortBy2PP(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].twoPointPercent < players[j+1].twoPointPercent){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByEFG(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].effectiveFieldGoalPercent < players[j+1].effectiveFieldGoalPercent){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByOREB(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].offensiveReboundsPerGame < players[j+1].offensiveReboundsPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByDREB(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].defensiveReboundsPerGame < players[j+1].defensiveReboundsPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByTREB(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].reboundsPerGame < players[j+1].reboundsPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByAssists(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].assistsPerGame < players[j+1].assistsPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortBySteals(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].stealsPerGame < players[j+1].stealsPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByBlocks(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].blocksPerGame < players[j+1].blocksPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByTurnovers(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].turnoversPerGame < players[j+1].turnoversPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByFouls(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].foulsPerGame < players[j+1].foulsPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

function sortByPoints(show){
    for(var i = 0; i < players.length; i++){
        for(var j = 0; j < players.length; j++){
            if (j+1 < players.length){
                if(players[j].pointsPerGame < players[j+1].pointsPerGame){
                    var temp = players[j];
                    players[j] = players[j+1];
                    players[j+1] = temp;
                }
            }
        }
    }
    makeTable(show);
}

//Functions for player stat search
function filter(){
    selectElement = document.querySelector('#statsOpt');
    statsOpt = selectElement.options[selectElement.selectedIndex].value;
    selectElement = document.querySelector('#symbol');
    symbol = selectElement.options[selectElement.selectedIndex].value;
    let inputField = document.getElementById("value"); 
    value = inputField.value;
    //console.log(statsOpt);
    //console.log(symbol);
    //console.log(value);
}

function findPlayers(statsOpt, symbol, value){
    //switch statement with cases from statsOpt
    //if statements inside for different symbols
    //value will be used when comparing to a player's stat
    //EX: if (symbol = greaterthan){
    //      value = 35
    //      if (player.age > value){
    //          qualifyingPlayers.push(player)
    //      }
    //    }
}

parseData("data/2023-2024 NBA Player Stats - Regular.csv", manageData); 
//console.log(playerData) 
