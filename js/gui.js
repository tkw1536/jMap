var initializeGUI = function(){
	var ul = $('<ul>').appendTo("#floors");
	for (var i = 0; i<Floors.length; i++)
	{
		(function(){
			var Floor = Floors[i];
			ul.append(
				$('<li role="presentation">').
				append(
					$('<a role="menuitem" tabindex="-1" href="#">').text(Floor[0])
					.click(function(){

						//mark the current thing
						ul.find(".disabled").removeClass("disabled"); //remove the active class from all active elements
						$(this).parent().addClass("disabled"); //make this menu item active

						Box.clearRendering();
						Box.makeRendering(Floor[1]);

						return false; //prevent the native browser handler from triggering
					})
				)
				
			);
		})();
	}

	ul.find("a").eq(0).click(); //Find the first link in the <ul> and click it

	$("#floors").dropdown(); //Initialise the dropdown menu
};