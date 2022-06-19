

// Get width of screen
//$( window ).resize(function() {
	//$( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
//});

function handler(){
	
	// Set the transition time
	var time = 2500;
	
	// When window width is greater than 1500 
	// Show all 
	if ($(window).width() > 1500){
	
		var topProductsSection = 1;
		var reasonsSection = 1;
		var photosSection = 1;
		var chefsSection = 1;
	
	// If window width is greater or equal to 734
	}else if ($(window).width() >= 734){
		
		var topProductsSection = 80;
		var reasonsSection = 1520;
		var photosSection = 2120;
		var chefsSection = 2900;
	
	// If window width is less than 734
	}else if ($(window).width() < 734){
	
		var topProductsSection = 180;
		var reasonsSection = 2450;
		var photosSection = 3525;
		var chefsSection = 5260;
	
	// Show all
	}else{
	
		var topProductsSection = 1;
		var reasonsSection = 1;
		var photosSection = 1;
		var chefsSection = 1;
	
	}
			
	// Hide and fade In banner
	if ($(this).scrollTop()>175)
	{
		$('.banner').hide();
	}
	else
	{
		$('.banner').fadeIn(1500);
	}
				
	// Fade in and hide top products
	if ($(this).scrollTop()>topProductsSection)
	{
		$('.topProductContainer').fadeIn(time);
	}
	else
	{
		$('.topProductContainer').hide();
	}
				
	// Fade in and hide reasons
	if ($(this).scrollTop()>reasonsSection)
	{
		$('.chooseUsContainer').fadeIn(time);
	}
	else
	{
		$('.chooseUsContainer').hide();
	}
				
	// Slide in and hide photos
	if ($(this).scrollTop()>photosSection)
	{
		$('.ourPhotosContainer').show(time);
	}
	else
	{
		$('.ourPhotosContainer').hide();
	}
				
	// Fade in and hide chefs
	if ($(this).scrollTop()>chefsSection)
	{
		$('.ourChefsContainer').fadeIn(time);
	}
	else
	{
		$('.ourChefsContainer').hide();
	}
		
}

// Pass handler function into resize and scroll function
$(window).resize(handler);
$(window).scroll(handler);


