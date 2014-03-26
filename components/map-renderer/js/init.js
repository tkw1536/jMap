$(function(){

	//set the resize handler
	$(window).resize(function(){
		$("#floors").find("li.disabled > a").eq(0).click(); //Render the floor again
	});

	window.navbar.add($("#nbardata").children()); 
	$("#nbardata").remove(); 

	window.parent.bridge(function(b){
		gui.renderData = b.getMapData(); //store the render data
		gui.setRenderState(); //start rendering
	}); 
})
