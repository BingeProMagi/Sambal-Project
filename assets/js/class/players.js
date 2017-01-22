
// Players class

function Players(name){
	this.name = name;
	this.castle = " ";
	this.wins = " ";
	this.lastWin = " ";
	this.currentTeam = " ";
};

Players.prototype.renderAll = function(){
	var creator = $('<li class="list-group-item players playa'+ this.name +'">'+ this.name +'</li>')
	$('.dingdong').append(creator);
};

Players.prototype.currentTeam = function(input){
	// 
	this.currentTeam = input;
	
};

Players.prototype.renderHouses = function(){
	// Render Houses
	for(var i = 0; i < houses.length; i++){
   		var creator = $('<div class="dropdown"><button class="btn btn-default dropdown-toggle house'+ i +'" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">House <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li class="list'+houses[0]+'">'+houses[0]+'</li><li class="list'+houses[1]+'">'+houses[1]+'</li><li class="list'+houses[2]+'">'+houses[2]+'</li><li class="list'+houses[3]+'">'+houses[3]+'</li><li class="list'+houses[4]+'">'+houses[4]+'</li><li class="list'+houses[5]+'">'+houses[5]+'</li></ul></div>');
   		$('.dinghouse').append(creator);
   	};
};

Players.prototype.castle = function(input){
	// 
	this.castle = input;
	
};

Players.prototype.wins = function(input){
	// 
	this.wins = input;
	
};

Players.prototype.lastWin = function(input){
	// 
	this.lastWin = input;
	
};

Players.prototype.currentTeam = function(input){
	// 
	this.currentTeam = input;
	
};