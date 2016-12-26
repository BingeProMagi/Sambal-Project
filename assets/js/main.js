
	// Global variables  	
var playing = [hannes, sandra, malin, markus, gustav, rangvi];

	// This is the DOM-Ready
$(function(){

	for(var i = 0; i > playing.length; i++){
		playing.push(new Players( ( i )));
		
	};
	console.log(playing);


});


// Creating player object
function Players(name, castle, wins, lastWin, currentTeam){
	this.name = name;
	this.castle = castle;
	this.wins = wins;
	this.lastWin = lastWin;
	this.currentTeam = currentTeam;
}

