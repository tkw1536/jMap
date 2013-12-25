$(function(){

	//set the resize handler
	$(window).resize(function(){
		gui.renderer.render(); //refresh the rendering
		gui.flashRoom(); 
	});

	window.navbar.add($("#nbardata").children()); 
	$("#nbardata").remove(); 

	window.parent.bridge(function(b){
		gui.renderData = b.getMapData(); //store the render data
		gui.setRenderState(); //start rendering
	}); 
})
