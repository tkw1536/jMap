$(function(){

	//set the resize handler
	$(window).resize(function(){
		Box.refreshRendering(); 
	});

	//init the GUI
	gui.buildMenu(); //build the menu for the gui
	gui.buildSearchBox(); //build the search Box
})
