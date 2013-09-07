/*
	Constructor for Box
*/
var Box = function(x, y, x_size, y_size){
	
	//Compute position
	this.x = x; 
	this.y = y; 

	//Compute Size
	this.x_size = x_size; 
	this.y_size = y_size;  
};

/*
	Render a box
*/
Box.prototype.render = function() {
	return Box.prototype.renderWith.call(this, Box); //default grid size
};

/*
	Render a box
*/
Box.prototype.renderWith = function(grid) {
	return $("<div>")
	.css({
		"top": this.y*grid.YSize()+grid.YOrigin(),
		"left": this.x*grid.XSize()+grid.XOrigin(),
		"width": this.x_size*grid.XSize(),
		"height": this.y_size*grid.YSize()
	})
	.addClass("box")
	.appendTo("body");
};

//General Grid dimensions
Box.XSize = function(){
	//return stats.getBestXSize(gui.currentFloor, $(window).width()-200); 
	return 4; 
};  
Box.YSize = function(){
	//return stats.getBestYSize(gui.currentFloor, $(window).height()-200); 
	return 4; 
};

//Origin
Box.XOrigin = function(){return $(window).width() / 2;};  
Box.YOrigin = function(){return $(window).height() / 2;}; 

Box.lastRendering = []; 

/*
	Clear all rendered boxes
*/
Box.clearRendering = function(){
	$("div.box").remove(); 
	$("div.cor").remove(); 
}

/*
	Render a list of boxes. 
*/
Box.makeRendering = function(renderArray){
	for(var i=0;i<renderArray.length;i++){
		(function(){
			var spec = renderArray[i]; 
			var box = new Box(spec[0], spec[1], spec[2], spec[3]); 
			var tile = 
			box.render()
			.text(spec[4])
			.attr("id", spec[5])
			.addClass(spec[6]); 
		})(); 
	}

	Box.lastRendering = renderArray; 
}

Box.refreshRendering = function(){
	Box.clearRendering(); 
	Box.makeRendering(Box.lastRendering); 
}