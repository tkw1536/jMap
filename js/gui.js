var gui = {}; 

gui.currentFloor = -1; 

/*
	Builds the menu
*/
gui.buildMenu = function(){
	var ul = $('<ul class="dropdown-menu" role="menu">').appendTo("#floors");
	for (var i = 0; i<Floors.length; i++)
	{
		(function(){
			var j = i; 
			var Floor = Floors[i];
			ul.append(
				$('<li role="presentation">').
				append(
					$('<a role="menuitem" tabindex="-1" href="#">').text(Floor[0])
					.click(function(){

						gui.currentFloor = j; 

						//mark the current thing
						ul.find(".disabled").removeClass("disabled"); //remove the active class from all active elements
						$(this).parent().addClass("disabled"); //make this menu item active

						Box.clearRendering();
						Box.makeRendering(Floor[1]);

						ul.prev().text(Floor[0]).append('<span class="caret"></span>'); 
					})
				)
				
			);
		})();
	}

	ul.find("a").eq(0).click(); //Find the first link in the <ul> and click it
};

gui.buildSearchBox = function(){
	//TBD
}; 