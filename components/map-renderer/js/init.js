$(function(){

	//set the resize handler
	$(window).resize(function(){
		window.gui.renderer.render(); //refresh the rendering
	});

	window.navbar.add($("#nbardata").children()); 
	$("#nbardata").remove(); 

	window.parent.bridge(function(b){
		gui.renderData = b.getMapData(); //store the render data
		gui.setRenderState(); //start rendering
	}); 
})
