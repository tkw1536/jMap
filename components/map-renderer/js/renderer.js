/* 
	Render Class 
	Renders a given floor
*/
var Renderer = function(render_data){
	this.setRenderData(render_data || []); 

	this.setSizeGetter(function(d){
		return stats.findScale(10, 10, 50, 20, d); 
	});

	this.setOriginGetter(
		function(d){
			return stats.findOrigin(10, 10, 50, 20, d)[0];
		}, 
		function(d){
			return stats.findOrigin(10, 10, 50, 20, d)[1];
		}
	); 

	this.setClickHandler(function(){});
}; 


/* Setters / Getters */
Renderer.prototype.setRenderData = function(data){
	this.render_data = data; 
	return this; 
}

Renderer.prototype.getRenderData = function(){
	return this.render_data; 
}

Renderer.prototype.setSizeGetter = function(getter){
	this.size = getter; 
	return this; 
}

Renderer.prototype.setOriginGetter = function(getter_x, getter_y){
	this.origin_x = getter_x; 
	this.origin_y = getter_y; 
	return this; 
}

Renderer.prototype.getSize = function(){
	return this.size(this.getRenderData()); 
}

Renderer.prototype.getOriginX = function(){
	return this.origin_x(this.getRenderData()); 
}

Renderer.prototype.getOriginY = function(){
	return this.origin_y(this.getRenderData()); 
}

Renderer.prototype.setClickHandler = function(click){
	this.click = click; 
	return this; 	
}

/* Render core functions */
Renderer.prototype.render = function(){
	//Render stuff

	this.unRender(); //remove previous renderings

	var render_data = this.getRenderData(); 
	var x_org = this.getOriginX(); 
	var y_org = this.getOriginY();
	var size = this.getSize(); 

	for(var i=0;i<render_data.length;i++){
		this.renderRoom(render_data[i], x_org, y_org, size); 
	}
	return this; 
}

Renderer.prototype.renderRoom = function(room, x_org, y_org, size){
	//Render a single room

	var me = this; 

	var box = {
		"x": room[0], 
		"y": room[1],
		"x_size": room[2], 
		"y_size": room[3]
	};

	var box_div = $("<div>")
	.css({
		"top": box.y*size+y_org,
		"left": box.x*size+x_org,
		"width": box.x_size*size,
		"height": box.y_size*size,
		"font-size": "1em"
	})
	.addClass("box")
	.appendTo("body")
	.text(room[4])
	.addClass("activatable "+room[6])
	.click(function(){
		me.click(room[5], room, box_div); 
	});

	var sub = $("<div>").appendTo(box_div); 

	if(typeof room[5] != "undefined"){
		for(var j=0;j<room[5].length;j++){
			box_div.addClass("id-"+room[5][j]);
		}
	}

   	var fontstep = 2;
   	var count = 10; //at most 10 steps to be sure
    while (sub.height()>box_div.height() || sub.width()>box_div.width()){
    	var s = parseInt(sub.css('font-size').substr(0,2)); 
        sub.css('font-size',((s-fontstep)) + 'px').css('line-height',((s)) + 'px');

        if(count-- <= 0){
        	break; 
        }
    }

    return this; 
}

Renderer.prototype.unRender = function(){
	//unrender everything
	$("div.box").remove(); 
	$("div.cor").remove(); 
	return this; 
}