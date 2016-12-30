
	// Global variables  	
var playing = ["Hannes", "Sandra", "Malin", "Markus", "Gustav", "Rangvi"];
var play = [];
	// This is the DOM-Ready
$(function(){

	console.log(playing[1])
	for(var i = 0; i < playing.length; i++){
		
		play[i] = new Players(playing[i]);
	
	};
	console.log(play);
	$('#start').click(function(){
		$('#battle-background').show();
  		$('#battle').show();
	});
	$('#end').click(function(){
		$(this).parent().hide();
	  	$('#my-popup-background').css('display','none');
	});
});


// Creating player object
function Players(name){
	this.name = name;
	/*this.castle = castle;
	this.wins = wins;
	this.lastWin = lastWin;
	this.currentTeam = currentTeam;*/
}

