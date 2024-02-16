//set up csv
/*function parseCSV(){
    Papa.parse(/data/player_stats_2324.csv, {
        complete: function(results) {
            console.log("Finished:", results.data);
        }
    });
}*/
function doStuff(data) {
    //Data is usable here
    console.log(data);
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

parseData("data/player_stats_2324.csv", doStuff);

parseCSV();

//convert object from csv to new object array

function Player(name){
    this.name = name;
}

