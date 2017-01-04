
	// Global variables  	
var playing = ["Hannes", "Sandra", "Malin", "Markus", "Gustav", "Rangvi"];
var houses = ["Baratheon", "Greyjoy", "Lannister", "Martell", "Stark", "Tyrell",];

var play = [];
	// This is the DOM-Ready
$(function(){

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
	   	for(var i = 0; i < houses.length; i++){
	   		var creator = $('<li class="list-group-item house'+ houses[i] +'">'+ houses[i] +'</li>');
	   		$('.dinghouse').append(creator);
	   	};
	});

	$('#battle').on('click', '.houseMartell', function() {

    	if( $(this).hasClass('martellBg') ){
    		$(this).removeClass('martellBg');
    	}
    	else{
			// only make "martells" orange
    		$(this).addClass('martellBg');
	    		
	    	$('#battle').on('click', '.players', function() {
	    		
	    		// combinde players with houses 
	    		$(this).addClass('martellBg');
	  		});
    	}
  	});

	// click-function to end the battle
	$('#end').click(function(){
		$(this).parent().hide();
	  	$('#battle-background').css('display','none');
	  	$('#battle').css('display','none');
	  	$('.dingdong').html(" ");
	  	$('.dinghouse').html(" ");
	});
});
	
