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

	var size = grid.Size(); 

	return $("<div>")
	.css({
		"top": this.y*size+grid.YOrigin(),
		"left": this.x*size+grid.XOrigin(),
		"width": this.x_size*size,
		"height": this.y_size*size
	})
	.addClass("box")
	.appendTo("body");
};

//General Grid dimensions
Box.Size = function(){
	//return stats.getBestXSize(gui.currentFloor, $(window).width()-200); 
	//return 4; 
	return stats.findScale(20, 70, Box.lastRendering);
};

//Origin
Box.XOrigin = function(){
	return stats.findOrigin(20, 70, Box.lastRendering)[0];
};  
Box.YOrigin = function(){
	return stats.findOrigin(20, 70, Box.lastRendering)[1];
}; 

Box.lastRendering = []; 
Box.lastClick = undefined; 

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
Box.makeRendering = function(renderArray, onClick){
	Box.lastRendering = renderArray.slice(0); 
	Box.lastClick = onClick; 

	var onClick = (typeof onClick == "function")?onClick:function(){};
	for(var i=0;i<renderArray.length;i++){
		(function(){
			var spec = renderArray[i]; 
			var box = new Box(spec[0], spec[1], spec[2], spec[3]); 
			var sub = $("<div>").text(spec[4]).css("font-size", "1em"); 

			var tile = 
			box.render()
			.append(sub)
			.addClass("activatable "+spec[6])
			.click(function(){
				onClick(spec[5], spec); 
			});

			if(typeof spec[5] != "undefined"){
				for(var j=0;j<spec[5].length;j++){
					tile.addClass("id-"+spec[5][j]);
				}
			}

			//update font size 
			//from: http://www.metaltoad.com/blog/resizing-text-fit-container
		    var fontstep = 2;
			while (sub.height()>tile.height() || sub.width()>tile.width()){
		    	sub.css('font-size',((sub.css('font-size').substr(0,2)-fontstep)) + 'px').css('line-height',((sub.css('font-size').substr(0,2))) + 'px');
		    }
			
		})(); 
	}

	gui.flushRenderState(); 
}

Box.refreshRendering = function(){
	Box.clearRendering(); 
	Box.makeRendering(Box.lastRendering, Box.lastClick); 
};