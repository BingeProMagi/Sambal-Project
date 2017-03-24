// Players class
// glyphicon glyphicon-chevron-up
// glyphicon glyphicon-chevron-down
function Players(name){
	this.name = name;
	this.castle = 0;
	this.totCastle = 0;
	this.wins = 0;
	this.lastWin= 0;
	this.currentTeam = false;
};
	

Players.prototype.renderLastWinner = function() {

	var creator = $('<li class="list-group-item players playa'+ this.name +'">'+ this.name +'</li>');
	$('.lastWinner').append(creator);
};

Players.prototype.renderMostWins = function() {

	var creator = $('<li class="list-group-item players playa'+ this.name +'">'+ this.name +'<span class="badge">'+ this.wins +'</span></li>');
	$('.mostWins').append(creator);
};


Players.prototype.renderCastleLeague = function() {

	var creator = $('<li class="list-group-item players playa'+ this.name +'">'+ this.name +'<span class="badge">'+ this.totCastle +'</span></li>');
	$('.castleLeague').append(creator);
};

Players.prototype.renderAll = function(){
	var creator = $('<li class="list-group-item players playa'+ this.name +'">'+ this.name +'</li>');
	$('.dingdong').append(creator);
};

Players.prototype.renderScoreBoard = function(){
	var creator = $('<li class="list-group-item scoreplayers playa'+ this.name +'">'+ this.name +'<button type="button" class="btn btn-default pull-left plus" aria-label="Right Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button><button type="button" class="btn btn-default pull-left minus" aria-label="Right Align"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button><span class="badge">'+ this.castle +'</span></li>');
	$('.scoredong').append(creator);
};

Players.prototype.changeTeam = function(input){
	this.currentTeam = input;
};

Players.prototype.randomTeam = function() {

	var randomNumber = Math.floor(Math.random()*racerHouses.length);
	var randomHouse = racerHouses[randomNumber];
	racerHouses.splice(randomNumber,1);
	this.currentTeam = randomHouse;
};

Players.prototype.renderHouse = function(){
		
	if(!this.currentTeam){
		var creator = $('<div class="dropdown"><button class="btn btn-default dropdown-toggle house" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Houses  <span class="caret"></span></button><ul class="dropdown-menu drop'+ this.name +'" aria-labelledby="dropdownMenu1"><li class="list'+houses[0]+'">'+houses[0]+'</li><li class="list'+houses[1]+'">'+houses[1]+'</li><li class="list'+houses[2]+'">'+houses[2]+'</li><li class="list'+houses[3]+'">'+houses[3]+'</li><li class="list'+houses[4]+'">'+houses[4]+'</li><li class="list'+houses[5]+'">'+houses[5]+'</li></ul></div>');
		$('.dinghouse').append(creator);
	}else{
		var creator = $('<div class="dropdown"><button class="btn btn-default dropdown-toggle house" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+ this.currentTeam +'<span class="caret"></span></button><ul class="dropdown-menu drop'+ this.name +'" aria-labelledby="dropdownMenu1"><li class="list'+houses[0]+'">'+houses[0]+'</li><li class="list'+houses[1]+'">'+houses[1]+'</li><li class="list'+houses[2]+'">'+houses[2]+'</li><li class="list'+houses[3]+'">'+houses[3]+'</li><li class="list'+houses[4]+'">'+houses[4]+'</li><li class="list'+houses[5]+'">'+houses[5]+'</li></ul></div>');
		$('.dinghouse').append(creator);
	}
};

function plusCastle(obj, name){
	//
	obj.forEach(function(players){
	    if(players.name == name){
  			// Adding a castle to the right player
  			players.castle++;
  			// Removes the scoreboard
  			$('.scoredong').html(" ");
  			// Sorting array
  			obj.sort(function(a, b) {
    			return parseFloat(b.castle) - parseFloat(a.castle);
			});
  			// Rendering the scoreboard
  			obj.forEach(function(players){
 				players.renderScoreBoard();
  			});
  		}
  		else{return "no";}
	});
};

function minusCastle(obj, name){
	//
	obj.forEach(function(players){
	    if(players.name == name){
  			// Minus a castle to the right player
  			players.castle = players.castle - 1;
  			console.log("Minus mannen", players.castle);
  			// Removes the scoreboard
  			$('.scoredong').html(" ");	
  		}
  		else{return "No, this ain't working";}
	});
};

Players.prototype.resetCastle = function(){

	this.totCastle = this.totCastle + this.castle;
	this.castle = 0;
};

Players.prototype.lastWinner = function(input){
	// 
	this.lastWin = input;
	
};

Players.prototype.howManyWins = function(){
	// 
	this.wins++;
	
};


Players.prototype.currentTeam = function(input){
	// 
	this.currentTeam = input;
	
};