//set up csv

function manageData(data) {
    //Data is usable here
    //console.log(data);
    console.log(data[0]);
}

function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

parseData("data/player_stats_2324.csv", manageData);

//convert object from csv to new object array

function Player(name){
    this.name = name;
}

