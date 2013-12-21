$(function(){

	//set the resize handler
	$(window).resize(function(){
		window.gui.renderer.render(); //refresh the rendering
	});

	//init the GUI
	gui.buildMenu(); //build the floor menu for the gui

	window.navbar.add($("#nbardata").children()); 
	$("#nbardata").remove(); 
})
