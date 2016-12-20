(function ($){
	var $mobileNavToggleBtn = $('.mobile-nav-toggle');
	
	function onBtnClick(e) {
		var $this = $(this),
			$selectors = $('.mobile-nav');

		
		$this.toggleClass('is-open');
		$selectors.toggleClass('is-open');
	}

	$(document).ready(function (){
		$mobileNavToggleBtn.on('click', onBtnClick);	
	});

})(jQuery);