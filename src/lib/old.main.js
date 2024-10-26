;(function () {
	
	'use strict';

	var owlCarousel = function(){

        new WOW().init();
	};

    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }

	$(function(){
		owlCarousel();
	});
}());