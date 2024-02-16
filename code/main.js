//set up csv
function parseCSV(){
    Papa.parse(/data/player_stats_2324.csv, {
        complete: function(results) {
            console.log("Finished:", results.data);
        }
    });
}

parseCSV();

//convert csv to object


//convert object from csv to new object array

function Player(name){
    this.name = name;
}

