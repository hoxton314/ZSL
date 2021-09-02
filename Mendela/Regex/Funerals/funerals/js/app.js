$(document).ready(function () {
	$('.navbar-inverse .navbar-form input').focus(function() {
		$('.navbar-inverse .navbar-form').animate({width:'225px'}, 500);
	});
	$('.navbar-inverse .navbar-form input').blur(function() {
		$('.navbar-inverse .navbar-form').animate({width:'150px'}, 500);
	});
	
	if($(window).width() >= 768) {
		$('.navbar li.dropdown').hover(
	        function() { $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300); },
	        function() { $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200); }
	        );
	    $('.navbar li.dropdown > a').click(function(){ if(this.href) location.href = this.href; });
	    $('.navbar li.dropdown-submenu > a').click(function(){ if(this.href) location.href = this.href; });
	}
	
    jQuery('.renovation-box .change-image-before-btn').click(function() {
    	if(jQuery(this).hasClass('active')) return;
    	
        jQuery(this).addClass('active');
        jQuery(this).parent().children('.change-image-after-btn').removeClass('active');
        
        var id = jQuery(this).attr('data-id');

        jQuery('#image-after-' + id).fadeToggle(200, 'swing', function() {
            jQuery('#image-before-' + id).fadeToggle(200);
        });
    });
	
    jQuery('.renovation-box .change-image-after-btn').click(function() {
    	if(jQuery(this).hasClass('active')) return;
        
        jQuery(this).addClass('active');
        jQuery(this).parent().children('.change-image-before-btn').removeClass('active');
    		
        var id = jQuery(this).attr('data-id');

        jQuery('#image-before-' + id).fadeToggle(200, 'swing', function() {
            jQuery('#image-after-' + id).fadeToggle(200);
        });
    });
});
