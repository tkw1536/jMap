$(function(){

	//set the resize handler
	$(window).resize(function(){
		Box.refreshRendering(); 
	});

	//init the GUI
	initializeGUI();
})
