$(document).ready(function() {
	$('.socials .icon-tw').hover(function(){
		$(this).toggleClass('icon-tw-hv');
	});
	$('.socials .icon-fb').hover(function(){
		$(this).toggleClass('icon-fb-hv');
	});
	$('.socials .icon-pinterest').hover(function(){
		$(this).toggleClass('icon-pinterest-hv');
	});
	$('.socials .icon-google').hover(function(){
		$(this).toggleClass('icon-google-hv');
	});


	$('.mob-btn').click(function() {
		$('#mob-menu').slideToggle();
	});

});	
