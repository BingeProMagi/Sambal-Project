
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
  		// Render Players
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
	
	$('.dinghouse').on('click', 'li', function(event) {
		
		event.preventDefault();
		
		var text = $(this).text();
		var parents = $(this).parents();

		console.log( text, "och dess parent class", parents[3] );

	});



	// click-function to end the battle
	$('#end').click(function(){
		$(this).parent().hide();
	  	$('#battle-background').css('display','none');
	  	$('#battle').css('display','none');
	  	$('.dingdong').html(" ");
	  	$('.dinghouse').html(" ");
	});
	
		$('#battle').on('click', '.houseBaratheon', function() {
		// only make "martells" orange
		if( $(this).hasClass('baratheonBg') ){
    		$(this).removeClass('baratheonBg');
    	}
    	else{
    		$(this).addClass('baratheonBg');
	    }		
	    // combinde players with houses 
		
    });

	$('#battle').on('click', '.houseGreyjoy', function() {
		// only make "martells" orange
		if( $(this).hasClass('greyjoyBg') ){
    		$(this).removeClass('greyjoyBg');
    	}
    	else{
    		$(this).addClass('greyjoyBg');
	    }		
	    // combinde players with houses 
		$('#battle').on('click', '.players', function() {
    		if( $('.dingdong').find('.greyjoyBg').length != 0 && $(this).hasClass('greyjoyBg') ){
				$('.players').removeClass('greyjoyBg');
			}
			else{
    			$(this).addClass('greyjoyBg');
			}
  		});
    });
	
	





























	$('#battle').on('click', '.houseLannister', function() {
		// only make "martells" orange                 
		if( $(this).hasClass('lannisterBg') ){
    		$(this).removeClass('lannisterBg');
    	}
    	else{
    		$(this).addClass('lannisterBg');
	    }
	    console.log($('.houseLannister').hasClass('lannisterBg'));		
    });
	
		    // combinde players with houses 
		$('#battle').on('click', '.players', function() {
			if( ($('.houseLannister').hasClass('lannisterBg') ) == true ){
				if( $('.dingdong').find('.lannisterBg').length != 0 && $(this).hasClass('lannisterBg') ){
					$('.players').removeClass('lannisterBg');
				}
				else{
					$(this).addClass('lannisterBg');
				}
		}else{console.log("hej mamma")}	
  		});

	$('#battle').on('click', '.houseMartell', function() {
		// only make "martells" orange
		if( $(this).hasClass('martellBg') ){
    		$(this).removeClass('martellBg');
    	}
    	else{
    		$(this).addClass('martellBg');
	    }		
	    // combinde players with houses 
		
    });
		$('#battle').on('click', '.players', function() {
    		if( ($('.dingdong').find('.martellBg').length != 0) && ( $(this).hasClass('martellBg') ) ){
				$('.players').removeClass('martellBg');
			}
			else if ( ($('.houseMartell').hasClass('martellBg')) ){
    			$(this).addClass('martellBg');
			}
  		});


    $('#battle').on('click', '.houseStark', function() {
		// only make "martells" orange
		if( $(this).hasClass('starkBg') ){
    		$(this).removeClass('starkBg');
    	}
    	else{
    		$(this).addClass('starkBg');
	    }		
	    // combinde players with houses 
		$('#battle').on('click', '.players', function() {
    		if( $('.dingdong').find('.starkBg').length != 0 && $(this).hasClass('starkBg') ){
				$('.players').removeClass('starkBg');
			}
			else{
    			$(this).addClass('starkBg');
			}
  		});
    });

	$('#battle').on('click', '.houseTyrell', function() {
		// only make "martells" orange
		if( $(this).hasClass('tyrellBg') ){
    		$(this).removeClass('tyrellBg');
    	}
    	else{
    		$(this).addClass('tyrellBg');
	    }		
	    // combinde players with houses 
		if( $('houseTyrell').hasClass('tyrellBg')){
			$('#battle').on('click', '.players', function() {
	    		
	    		if( $('.dingdong').find('.tyrellBg').length != 0 && $(this).hasClass('tyrellBg') ){
					
					$('.players').removeClass('tyrellBg');
				}
				else{
	    			$(this).addClass('tyrellBg');
				}
	  		});
    	}
    });

}); 
	
