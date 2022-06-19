


// This is to display the menu options icon and use navigation
$(".buttonsResponsive").hide();

$(document).ready(function(){
	
	$(".menuIcon").click(function(){		
		
		$(".buttonsResponsive").fadeToggle();	
			
	});
	
	$(".buttonResponsive").click(function(){		
		
		$(".buttonsResponsive").fadeOut();	
			
	});

});


// This is to show and hide different areas of the menu
$(".menuContainerLunch").hide();
$(".menuContainerDinner").hide();
$(".menuContainerDessert").hide();

$(document).ready(function(){
	
	$(".MenubuttonBreakfast").click(function(){		
		
		$(".menuContainerBreakfast").fadeIn();
		
		$(".menuContainerLunch").hide();
		$(".menuContainerDinner").hide();
		$(".menuContainerDessert").hide();
			
	});
	
	$(".MenubuttonLunch").click(function(){		
		
		$(".menuContainerLunch").fadeIn();
		
		$(".menuContainerBreakfast").hide();
		$(".menuContainerDinner").hide();
		$(".menuContainerDessert").hide();
			
	});
	
	$(".MenubuttonDinner").click(function(){		
		
		$(".menuContainerDinner").fadeIn();
		
		$(".menuContainerBreakfast").hide();
		$(".menuContainerLunch").hide();
		$(".menuContainerDessert").hide();
			
	});
	
	$(".MenubuttonDessert").click(function(){		
		
		$(".menuContainerDessert").fadeIn();
		
		$(".menuContainerBreakfast").hide();
		$(".menuContainerLunch").hide();
		$(".menuContainerDinner").hide();
			
	});

});




