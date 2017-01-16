// Global variables  	
var playing = ["Hannes", "Sandra", "Malin", "Markus", "Gustav", "Rangvi"];
var houses = ["Baratheon", "Greyjoy", "Lannister", "Martell", "Stark", "Tyrell",];
var clickIndex;
var play = [];
var counter = 0;
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
	   		var creator = $('<div class="dropdown"><button class="btn btn-default dropdown-toggle house'+ i +'" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">House <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li class="list'+houses[0]+'">'+houses[0]+'</li><li class="list'+houses[1]+'">'+houses[1]+'</li><li class="list'+houses[2]+'">'+houses[2]+'</li><li class="list'+houses[3]+'">'+houses[3]+'</li><li class="list'+houses[4]+'">'+houses[4]+'</li><li class="list'+houses[5]+'">'+houses[5]+'</li></ul></div>');
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
	
	$('.dinghouse').on('click','button' , function() {
		var myIndex = $(this).parent(0).index();
		var theClass = $(this).first();  
		console.log(theClass);
	
		renderHouse(theClass, myIndex);
	});
	// alla variablar ska tas upp härifån!!!!!!!!!!!
	$('.dinghouse').on('click', 'button .dropdown-menu li', function() {
		var text = $(this).text();
		var myIndex = $(this).parent(0).index();               
		var theClass = $(this).first();
		//var myIndex = $(this);
		//console.log( myIndex );
		
		
		console.log("Denna clickfinction körs!!");
		/*var parenten = $(this).parents('.caret');
		clickIndex = $(this).index();
		console.log(clickIndex);
		console.log(parenten);*/

    });

	
	function renderHouse(input, index){
		
		//console.log(index);
		//$('.dinghouse').html(" ");

		if(index == 0 && input.hasClass('house0') ){
			counter++;
			console.log( $('.house0').text(), counter );
		}		
				
			
		else if(index == 1 && input.hasClass('house1') ){
			counter++;
			console.log( $('.house1').text(), counter );
		}

		else if(index == 2 && input.hasClass('house2')){
			counter++;
			console.log( $('.house2').text(), counter );
		}

		else if(index == 3 && input.hasClass('house3')){
			counter++;
			console.log( $('.house3').text(), counter );
		}

		else if(index == 4 && input.hasClass('house4')){
			counter++;
			console.log( $('.house4').text(), counter );
		}

		else if(index == 5 && input.hasClass('house5')){
			counter++;
			console.log( $('.house5').text(), counter );
		}
	};
				
				
			

   					
		/*for(var i = 0; i < houses.length; i++){
   			if(index == i){
   			var creator = $('<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+ input +'<span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li class="list'+houses[0]+'">'+houses[0]+'</li><li class="list'+houses[1]+'">'+houses[1]+'</li><li class="list'+houses[2]+'">'+houses[2]+'</li><li class="list'+houses[3]+'">'+houses[3]+'</li><li class="list'+houses[4]+'">'+houses[4]+'</li><li class="list'+houses[5]+'">'+houses[5]+'</li></ul></div>');
   			$('.dinghouse').append(creator);
   			}else{
   			var creator = $('<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">House  <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li class="list'+houses[0]+'">'+houses[0]+'</li><li class="list'+houses[1]+'">'+houses[1]+'</li><li class="list'+houses[2]+'">'+houses[2]+'</li><li class="list'+houses[3]+'">'+houses[3]+'</li><li class="list'+houses[4]+'">'+houses[4]+'</li><li class="list'+houses[5]+'">'+houses[5]+'</li></ul></div>');
   			$('.dinghouse').append(creator);
   			}
	    };*/
	   


}); 