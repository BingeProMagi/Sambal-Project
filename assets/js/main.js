/// Global variables
// Till timer http://flipclockjs.com/	 	
var playing = ["Hannes", "Sandra", "Malin", "Markus", "Gustav", "Rangvi"];
var houses = ["Baratheon", "Greyjoy", "Lannister", "Martell", "Stark", "Tyrell"];
var racerHouses = ["Baratheon", "Greyjoy", "Lannister", "Martell", "Stark", "Tyrell"];
var clickIndex;
var play = [];
var counter = 0;

// This is the DOM-Ready
$(function(){

	// Creating Players
	for(var i = 0; i < playing.length; i++){
		
		play[i] = new Players(playing[i]);
	};
	// Render LastWinner, MostWins and CastleLeague
	play.forEach(function(players){
		players.renderLastWinner();
		players.renderMostWins();
	});

	// Click-function that gets you to the battle 
	$('#start').click(function(){
		$('#battle-background').show();
  		$('#battle').show();
  		$('.knupp').css('display','block');
  		$('#rand').css('display','block');
	  	$('#startMatch').css('display','block');
	  	$('#mostWins').css('display','block');
	  	$('#last').css('display','block');
  		$('#startMatch').css('display', 'block');

  		// Render Houses
  		play.forEach(function(players){
	      players.renderAll();
	      players.renderHouse();
	   	});
	});
	   	
	// Click-function that decides house
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
	
	// Adding castles to players
	$('.scoredong').on("click", ".plus", function(){

		if($(this).parent().hasClass('playaHannes')){
	      	plusCastle(play, "Hannes");
		}
		else if($(this).parent().hasClass('playaSandra')){
	      	plusCastle(play, "Sandra");
		}	
		else if($(this).parent().hasClass('playaMalin')){
	      	plusCastle(play, "Malin");
		}
		else if($(this).parent().hasClass('playaMarkus')){
	      	plusCastle(play, "Markus");
		}
		else if($(this).parent().hasClass('playaGustav')){
	      	plusCastle(play, "Gustav");
		}
		else if($(this).parent().hasClass('playaRangvi')){
	      	plusCastle(play, "Rangvi");
		}else{ return "Hejdå"}
	});
	// Removing castles from players
	$('.scoredong').on("click", ".minus", function(){				

		if($(this).parent().hasClass('playaHannes')){
		    minusCastle(play, "Hannes");
		}
		else if($(this).parent().hasClass('playaSandra')){
	      	minusCastle(play, "Sandra");
		}	
		else if($(this).parent().hasClass('playaMalin')){
	      	minusCastle(play, "Malin");
		}
		else if($(this).parent().hasClass('playaMarkus')){
	      	minusCastle(play, "Markus");
		}
		else if($(this).parent().hasClass('playaGustav')){
	      	minusCastle(play, "Gustav");
		}
		else if($(this).parent().hasClass('playaRangvi')){
	      	minusCastle(play, "Rangvi");
		}else{ return "Hejdå"}
		
		play.sort(function(a, b) {
    			return parseFloat(b.castle) - parseFloat(a.castle);
		});
		play.forEach(function(players){
 				players.renderScoreBoard();
  		});
	});	
		
	

	// Randomizing houses 
	$('#rand').click(function(){
	
		$('.dinghouse').html(" ");	
		play.forEach(function(players){
	      
	      players.randomTeam();
	      players.renderHouse();
	   	});
	   	racerHouses = ["Baratheon", "Greyjoy", "Lannister", "Martell", "Stark", "Tyrell"];
	});
	
	// starting the battle
	$("#startMatch").click(function(){
		$('.dingdong').html(" ");
	  	$('.dinghouse').html(" ");	  	
	  	$('#rand').css('display','none');
	  	$('#startMatch').css('display','none');
	  	$('#mostWins').css('display','none');
	  	$('#last').css('display','none');
	  	$('#endMatch').css('display','block');

	  	play.forEach(function(players){
	      players.renderScoreBoard();
	   	});
	  	
	});
	
	// click-function to end the battle
	$('#endMatch').click(function(){
		// Hideing Buttons and Lists
		$(this).parent().hide();
	  	$('#battle-background').css('display','none');
	  	$('#battle').css('display','none');
	  	$('#endMatch').css('display','none');
	  	$('.scoredong').html(" ");
	  	$('.dingdong').html(" ");
	  	$('.dinghouse').html(" ");
	  	$('.lastWinner').html(" ");
	  	// 
	  	play.forEach(function(players){
	  		counter++
	  		players.lastWinner(counter);
	  		
	  	});
	  	play.forEach(function(players){
	  		
	  		players.renderLastWinner();
	  	});
	  	// "saving" winners statistics
	  	play[0].howManyWins();

	});
});
