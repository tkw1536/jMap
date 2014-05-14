$(function(){

	gui.renderer = new gridersize(".canvas"); 

	//register shortcuts
	gui.renderer.keys().mouse(); 


	//set the resize handler
	$(window).resize(function(){
		gui.renderer.canvas.css({
			"width": $("body").width(), 
			"height": $("body").height() - 50
		}); 

		gui.renderer.draw(); 
	}).resize(); 

	window.navbar.add($("#nbardata").children()); 
	$("#nbardata").remove(); 

	window.parent.bridge(function(b){
		gui.renderData = b.getMapData(); //store the render data
		gui.setRenderState(); //start rendering
	}); 
})
