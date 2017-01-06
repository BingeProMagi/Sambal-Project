
// Players class

function Players(name){
	this.name = name;
	this.castle = " ";
	this.wins = " ";
	this.lastWin = " ";
	this.currentTeam = " ";
}

Players.prototype.renderAll = function(){
	var creator = $('<li class="list-group-item players playa'+ this.name +'">'+ this.name +'</li>')
	$('.dingdong').append(creator);
}

Players.prototype.currentTeam = function(input){
	// 
	this.currentTeam = input;
	
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