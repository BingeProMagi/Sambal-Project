// Global variables  	
var playing = ["Hannes", "Sandra", "Malin", "Markus", "Gustav", "Rangvi"];
var houses = ["Baratheon", "Greyjoy", "Lannister", "Martell", "Stark", "Tyrell",];
var clickIndex;
var play = [];
var counter = 0;
	// This is the DOM-Ready
$(function(){

	

	
	for(var i = 0; i < playing.length; i++){
		
		play[i] = new Players(playing[i]);
	
	};

	
	// click-function to start the battle
	$('#start').click(function(){
		$('#battle-background').show();
  		$('#battle').show();
  		$('.knupp').css('display','block');

  		
  		// Render Houses
  		play.forEach(function(players){
	      players.renderAll();
	      players.renderHouse();
	   	});
	   	
	});

	$('.dinghouse').on("click", "li", function(){

		var house = $(this).text();

		if( $(this).parent().hasClass('dropHannes') ){
			play.forEach(function(players){
	      		if(players.name == "Hannes"){
	      			players.changeTeam(house);
	      		}else{return "no";}
	   		});
		}else if( $(this).parent().hasClass('dropSandra') ){
			play.forEach(function(players){
	      		if(players.name == "Sandra"){
	      			
	      			players.changeTeam(house);
	      		}else{return "no";}
	   		});
		}else if($(this).parent().hasClass('dropMalin')){
			play.forEach(function(players){
	      		if(players.name == "Malin"){
	      			players.changeTeam(house);
	      		}else{return "no";}
	   		});
		}else if($(this).parent().hasClass('dropMarkus')){
			play.forEach(function(players){
	      		if(players.name == "Markus"){
	      			
	      			players.changeTeam(house);
	      		}else{return "no";}
	   		});
		}else if($(this).parent().hasClass('dropGustav')){
			play.forEach(function(players){
	      		if(players.name == "Gustav"){
	      			
	      			players.changeTeam(house);
	      		}else{return "no";}
	   		});
		}else if($(this).parent().hasClass('dropRangvi')){
			play.forEach(function(players){
	      		if(players.name == "Rangvi"){
	      			
	      			players.changeTeam(house);
	      		}else{return "no";}
	   		});
		}else{ return "Hejdå"}
			
		$('.dinghouse').html(" ");
		play.forEach(function(players){
	      
	      players.renderHouse();
	   	});
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
	
	
	/*function renderHouse(){
		
	};*/