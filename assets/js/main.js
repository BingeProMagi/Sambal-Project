// Global variables  	
var playing = ["Hannes", "Sandra", "Malin", "Markus", "Gustav", "Rangvi"];
var houses = ["Baratheon", "Greyjoy", "Lannister", "Martell", "Stark", "Tyrell",];
var clickIndex;
var play = [];
var counter = 0;
	// This is the DOM-Ready
$(function(){

	var myIndex = [];

	console.log(playing[1])
	for(var i = 0; i < playing.length; i++){
		
		play[i] = new Players(playing[i]);
	
	};
	
	// click-function to start the battle
	$('#start').click(function(){
		$('#battle-background').show();
  		$('#battle').show();
  		$('.knupp').css('display','block');

  		play.forEach(function(players){
	      players.renderAll();
	   	});
  		// Render Houses
	   	play.asd();
	});


	// click-function to end the battle
	$('#end').click(function(){
		$(this).parent().hide();
	  	$('#battle-background').css('display','none');
	  	$('#battle').css('display','none');
	  	$('.dingdong').html(" ");
	  	$('.dinghouse').html(" ");
	});
	
	
		
	
	// alla variablar ska tas upp härifån!!!!!!!!!!!
}); 
	// Kan du hålla i en vigsel lördagen den 11/3
	// magnus
	// Kronovalls vinslott
	
	/*function renderHouse(){
		
	};*/