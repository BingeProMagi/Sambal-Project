// Global variables  	
var playing = ["Hannes", "Sandra", "Malin", "Markus", "Gustav", "Rangvi"];
var houses = ["Baratheon", "Greyjoy", "Lannister", "Martell", "Stark", "Tyrell",];
var clickIndex;
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
	   		var creator = $('<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">House  <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li class="list'+houses[0]+'">'+houses[0]+'</li><li class="list'+houses[1]+'">'+houses[1]+'</li><li class="list'+houses[2]+'">'+houses[2]+'</li><li class="list'+houses[3]+'">'+houses[3]+'</li><li class="list'+houses[4]+'">'+houses[4]+'</li><li class="list'+houses[5]+'">'+houses[5]+'</li></ul></div>');
	   		$('.dinghouse').append(creator);
	   		//<li class="list-group-item house'+ houses[i] +'">House</li>
	   	};
	});


	// click-function to end the battle
	$('#end').click(function(){
		$(this).parent().hide();
	  	$('#battle-background').css('display','none');
	  	$('#battle').css('display','none');
	  	$('.dingdong').html(" ");
	  	$('.dinghouse').html(" ");
	});
	
	$('.dinghouse').on('click','li' , function() {
		var text = $(this).text();
		/*var parenten = $(this).parents('.caret');
		clickIndex = $(this).index();
		console.log(clickIndex);
		console.log(parenten);*/

   });

	function renderHouse(){

		
		for(var i = 0; i < houses.length; i++){
   		var creator = $('<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">House  <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li class="list'+houses[0]+'">'+houses[0]+'</li><li class="list'+houses[1]+'">'+houses[1]+'</li><li class="list'+houses[2]+'">'+houses[2]+'</li><li class="list'+houses[3]+'">'+houses[3]+'</li><li class="list'+houses[4]+'">'+houses[4]+'</li><li class="list'+houses[5]+'">'+houses[5]+'</li></ul></div>');
   		$('.dinghouse').append(creator);
   		
   		//<li class="list-group-item house'+ houses[i] +'">House</li>
	   
	   };

	}

}); 