window.loadRemote("renderer");

$(function(){

	//set the resize handler
	$(window).resize(function(){
		window.Box.refreshRendering(); 
	});

	//init the GUI
	gui.buildMenu(); //build the floor menu for the gui
})
