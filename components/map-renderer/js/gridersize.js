/**
 * gridersize, version 1.0
 * (c) Tom Wiesing 2014
 * Licensed under MIT
**/


/**
 * @constructor
 * @param {jQuery} canvas A jQuery element to use as canvas, preferably a div. 
 * @return 
 */
var gridersize = function(canvas){

	//content
	this.content = []; 

	//zoom
	this.minZoom = 0.001; 
	this.maxZoom = 100;
	this.zoom = 1;

	//canvas
	this.canvas = $(canvas).css("overflow", "hidden"); 

	//center
	this.center = {
		"x": 0, 
		"y": 0
	}; 

	//there is nothing to draw.  
	this._elementsDrawn = true;

};

/**
 * Adds elements to be rendered. 
 * @param {array} elements Elements to render. An element shoudl be of the form [x, y, x_size, y_size, id, properties]
 * @param {boolean} keep Should existing elements be kept on the canvas?
 * @return ThisExpression
 */
gridersize.prototype.render = function(elements, keep){
	//set the elements to render

	var keep = (typeof keep === "boolean")?keep:true; 

	if(!keep){
		this.content = [];
	}

	//iterate over and add all the elements
	for(var i=0;i<elements.length;i++){
		(function(element){
			this.content.push(element); 
		}).call(this, elements[i]); 
	}


	//elements are not currently drawn onto the canvas
	this._elementsDrawn = false;

	return this; 
}

/**
 * Makes a simple draw. Updates only positions of divs. 
 * @return ThisExpression
 */
gridersize.prototype.draw = function(){

	var me = this; 

	//are the elements on the canvas yet?
	if(this._elementsDrawn !== true){
		this._drawElements(); 
	}

	//start updating positions

	//canvas properties
	var width = this.canvas.width(); 
	var height = this.canvas.height(); 

	var center = this.center; 

	var dimX = width / 2; 
	var dimY = height / 2; 

	var zoom = this.zoom; 

	//iterate over the children of the canvas
	this.canvas.children().eq(0)
	.css({
		"top": height / 2, 
		"left": width / 2
	}).children().each(function(){
		var box = $(this);

		var element = box.data("gridersize.position"); 

		//compute properties of elements to render
		var renderDimensions = {
			//dimensions x
			"minX": (element[0] - center.x)*zoom, 
			"maxX": (element[0] - center.x)*zoom+element[2]*zoom, 
			"sizeX": element[2]*zoom,

			//dimensions y
			"minY": (element[1] - center.y)*zoom, 
			"maxY": (element[1] - center.y)*zoom+element[3]*zoom, 
			"sizeY": element[3]*zoom
		}; 
		
		box.css({
			"position": "absolute", 
			"top": renderDimensions.minY, 
			"left": renderDimensions.minX, 
			"width": renderDimensions.sizeX, 
			"height": renderDimensions.sizeY
		}); 

		//optimize the font size

		//find the sub span and reset the font size
		var sub = box.find("span").css("font-size", "1em");  

		//max number of adjustment steps
	   	var fontstep = 2;
	   	var count = 10;

		while (sub.height()>box.height() || sub.width()>box.width()){
			var s = parseInt(sub.css('font-size').substr(0,2)); 
			sub.css('font-size',((s-fontstep)) + 'px').css('line-height',((s)) + 'px');

			if(count-- <= 0){
				break; 
			}
		}
		
	}); 

	me.canvas.trigger("gridersize.move"); 

	return this; 
}

/**
 * Draws all elements to the canvas  
 * @private
 * @return ThisExpression
 */
gridersize.prototype._drawElements = function(){

	var me = this; 

	me.canvas.trigger("gridersize.clear"); 
	this.canvas.empty() //clear the canvas

	var origin = $("<div>").css({
		"position": "relative", 
	}).appendTo(this.canvas); 

	//now iterate over the boxes
	for(var i=0;i<this.content.length;i++){
		(function(element){

			//load properties
			var properties = element[5] || {}; 
			var id = jQuery.isArray(element[4])?element[4]:[element[4]]; 

			//create the div
			var box = $("<div>")
			.data("gridersize.id", id)
			.data("gridersize.position", [element[0], element[1], element[2], element[3]])
			.data("gridersize.clicked", false)
			.data("gridersize.original", element)
			.appendTo(origin); 


			/*
				Activation / Deactivation logic
			*/
			box.hover(function(){
				if(!box.data("gridersize.clicked")){
					box
					.trigger("gridersize.activate"); 
				}
			}, function(){
				if(!box.data("gridersize.clicked")){
					box
					.trigger("gridersize.deactivate"); 
				}
			})
			.on("click", function(){

				//trigger a click event and a toggle event
				me.canvas.trigger("gridersize.click", [box, id]);

				box.trigger("gridersize.toggle"); 
			})
			.on("gridersize.toggle", function(){
				//toggle this box	

				me.canvas.trigger("gridersize.toggle", [box, id]);

				if(box.data("gridersize.clicked") === true){
					box
					.data("gridersize.clicked", false)
					.trigger("gridersize.deactivate"); 
				} else {
					me.canvas.trigger("gridersize.focus", [box, id]); 

					box.parent().find("div").each(function(){
						if($(this).data("gridersize.active") === true){
							$(this)
							.data("gridersize.clicked", false)
							.trigger("gridersize.deactivate"); 
						}
					}); 

					box
					.data("gridersize.clicked", true)
					.trigger("gridersize.activate"); 
				}
			})
			.on("gridersize.activate", function(){
				box.data("gridersize.active", true);
				me.canvas.trigger("gridersize.focus", [box, id]); 
			})
			.on("gridersize.deactivate", function(){
				box.data("gridersize.active", false);
				me.canvas.trigger("gridersize.unfocus", [box, id]); 
			})
			.data("gridersize.active", false);


			/*
				Box border

				Determines which borders of the box are rendered. 

				border: boolean | [top, right, bottom, left] || true; 
				border-style: cssString || "1px solid black", 
				border-hover-style: cssString || "1px solid black"
			*/

			var borderStyle = properties["border-style"] || "1px solid black"; 
			var borderHoverStyle = properties["border-hover-style"] || "1px solid black";

			if(!properties.hasOwnProperty("border")){
				properties.border = true; 
			}

			if(typeof properties.border == "boolean"){
				properties.border = [properties.border, properties.border, properties.border, properties.border]; 
			}

			if(properties.border[0]){
				box.css({
					"border-top": borderStyle
				}).on("gridersize.activate", function(){
					box.css("border-top", borderHoverStyle); 
				}).on("gridersize.deactivate", function(){
					box.css("border-top", borderStyle); 
				}); 
			}
			if(properties.border[1]){
				box.css({
					"border-right": borderStyle
				}).on("gridersize.activate", function(){
					box.css("border-right", borderHoverStyle); 
				}).on("gridersize.deactivate", function(){
					box.css("border-right", borderStyle); 
				});
			}
			if(properties.border[2]){
				box.css({
					"border-bottom": borderStyle
				}).on("gridersize.activate", function(){
					box.css("border-bottom", borderHoverStyle); 
				}).on("gridersize.deactivate", function(){
					box.css("border-bottom", borderStyle); 
				});
			}
			if(properties.border[3]){
				box.css({
					"border-left": borderStyle
				}).on("gridersize.activate", function(){
					box.css("border-left", borderHoverStyle); 
				}).on("gridersize.deactivate", function(){
					box.css("border-left", borderStyle); 
				});
			}

			/*
				Box css class
				Also handles activation

				class: cssClassString || "box"
				active-class: cssClassString || "active"
			*/

			var cssClass = properties["class"] || "box"; 
			var activeClass = properties["active-class"] || "active"; 

			box.addClass(cssClass)
			.on("gridersize.activate", function(){
				box.addClass(activeClass); 
			})
			.on("gridersize.deactivate", function(){
				box.removeClass(activeClass); 
			}); 

			/*
				Set the content
			*/

			var text = properties["label"] || false; 

			if(typeof text == "string"){
				box.append($("<span>").text(text)); 
			}

		}).call(this, this.content[i]); 
	}

	//elements are now drawn onto the canvas
	this._elementsDrawn = true;

	me.canvas.trigger("gridersize.draw"); //elements have been re-drawn

	return this; 
}

/**
 * Sets the zoom level. 
 * @param {number} level Factor to set the zoom to. 
 * @return ThisExpression
 */
gridersize.prototype.setZoom = function(level){
	//set the zoom level

	if(typeof level == "undefined"){
		this.showAll(); 
	}

	this.zoom = level; 

	if(this.zoom > this.maxZoom){
		this.zoom = this.maxZoom; 
	}

	if(this.zoom < this.minZoom){
		this.zoom = this.minZoom; 
	}

	return this; 
}

/**
 * Description
 * @param {number} x X-coordinate of the center. 
 * @param {number} y Y-coordinate of the center. 
 * @param {boolean} relative If set to true, set coordinates relatively. 
 * @return ThisExpression
 */
gridersize.prototype.setCenter = function(x, y, relative){
	//set the center

	var relative = (relative === true); 

	if(relative){
		this.center.x += x; 
		this.center.y += y; 
	} else {
		this.center.x = x; 
		this.center.y = y; 
	}

	return this; 
}

/**
 * Shows a specific Region. 
 * @param {number} minX Minimal X Coordinate to show. 
 * @param {number} maxX Maximal X Coordinate to show. 
 * @param {number} minY Minimal Y Coordinate to show 
 * @param {number} maxY Maximal Y Coordinate to show 
 * @param {number} [margin=5] Margin to use. Defaults to 5. 
 * @return ThisExpression
 */
gridersize.prototype.showRegion = function(minX, maxX, minY, maxY, margin){
	if(typeof margin !== "number"){
		var margin = 5; 
	}

	//center in the middle of the region

	var centerX = minX+((maxX - minX)/ 2);
	var centerY = minY+((maxY - minY)/ 2); 

	//compute zoom and have a margin of 5 units
	var width = this.canvas.width(); 
	var height = this.canvas.height(); 

	var zoomX = width/(maxX - minX + margin); 
	var zoomY = height/(maxY - minY + margin); 

	this
	.setCenter(centerX, centerY)
	.setZoom(Math.min(zoomX, zoomY))
	.draw(); 

	return this; 
}

/**
 * Shows everything that is currently on the screen. 
 * Changes zoom and center. 
 * @param {number} [margin=5] Margin to use. 
 * @return ThisExpression
 */
gridersize.prototype.showAll = function(margin){
	var minX = Infinity; 
	var maxX = -Infinity; 

	var minY = Infinity; 
	var maxY = -Infinity;

	//get max and mins correctly
	for(var i=0;i<this.content.length;i++){
		(function(element){
			minX = Math.min(element[0], minX); 
			maxX = Math.max(element[0]+element[2], maxX);

			minY = Math.min(element[1], minY); 
			maxY = Math.max(element[1]+element[3], maxY);
		}).call(this, this.content[i]); 
	}

	this.showRegion(minX, maxX, minY, maxY, margin); 

	return this; 
}

/**
 * Adds keyboard shotcuts
 * @return ThisExpression
 */
gridersize.prototype.keys = function(){

	var me = this; 

	var deltaZoom = 2; 
	var deltaCenter = 10; 

	//Listen to key events
	$("body").on("keydown", function(evt){
		var key = evt.keyCode; 
		if(key == 107 || key == 187){
			//plus
			me
			.setZoom(me.zoom+0.1*deltaZoom)
			.draw();
		} else if(key == 109 || key == 189){
			//minus

			me.setZoom(me.zoom-0.1*deltaZoom).draw();
		} else if(key == 38){
			//top

			me.setCenter(0, deltaCenter/me.zoom, true).draw(); 
		} else if(key == 39){
			//left

			me.setCenter(-deltaCenter/me.zoom, 0, true).draw(); 
		} else if(key == 40){
			//down

			me.setCenter(0, -deltaCenter/me.zoom, true).draw(); 
		} else if(key == 37){
			//right
			
			me.setCenter(deltaCenter/me.zoom, 0, true).draw();
		}
	})

	return this; 
}

/**
 * Enables mouse shortcuts 
 * (drag and drop)
 * @return ThisExpression
 */
gridersize.prototype.mouse = function(){

	//mouse dragging
	var dragStart = false; 
	var dragOrigin = false; 

	var zoom = this.zoom; 
	
	var me = this; 


	var mouseMove = function(event){
		zoom = me.zoom; 

		if(dragStart){
			me
			.setCenter(
				dragStart[0] + ((dragOrigin[0] - event.pageX) / zoom), 
				dragStart[1] + ((dragOrigin[1] - event.pageY) / zoom)
			)
			.draw(); 
		}

		me.canvas.trigger("dragmove"); 
	}; 

	var mouseDown = function(event){
		mouseEnd(); 
		if(event.which == 1){
			//only trigger on the left mouse click
			dragStart = [me.center.x, me.center.y];
			dragOrigin = [event.pageX, event.pageY]; 
		}

		me.canvas.trigger("dragstart"); 

		//set moveable cursor
		$('html,body').css('cursor','move');
	}; 

	var mouseEnd = function(){
		dragStart = undefined; 
		dragOrigin = undefined; 

		me.canvas.trigger("dragstop"); 

		//set normal cursor
		$('html,body').css('cursor','initial');
	}; 

	this.canvas
	.on("mousemove", mouseMove)
	.on("mousemove", "*", mouseMove)
	.on("mousedown", mouseDown)
	.on("mousedown", "*", mouseDown)
	.on("mouseleave mouseup", mouseEnd)
	.on("mouseup", "*", mouseEnd); 


	//mouse wheel
	this.canvas.on("mousewheel", function(e){

		//add 0.1*the delta Y
		me
		.setZoom(me.zoom+0.1*e.deltaY)
		.draw(); 
	})

	return this; 
}

/**
 * Finds an element given its Id. 
 * @param {string} id Id to find. 
 * @return jQuery
 */
gridersize.prototype.findElementById = function(id){
	var allElements = this.canvas.find("div");

	return allElements.filter(function(){
		try{
			return $(this).data("gridersize.id").indexOf(id) !== -1; 
		}catch(e){
			return false; 
		}
	}); 
}

/**
 * Finds an element given its Id and activates it. 
 * @param {string} id Id to find. 
 * @return jQuery
 */
gridersize.prototype.activateElementById = function(id){
	var element = this.findElementById(id); 

	if(!element.data("gridersize.clicked")){
		element.trigger("gridersize.toggle"); 
	}

	return element; 
}

/**
 * Deactivates all currently active elements. 
 * @return ThisExpression
 */
gridersize.prototype.deactivateAll = function(){
	
	this.canvas.find("div").each(function(i, e){
		var element = $(this); 
		if(element.data("gridersize.clicked")){
			element.trigger("gridersize.toggle"); 
		}
	}); 

	return this; 
	
}

/**
 * @static Version number
*/
gridersize.version = "1.0"; 


gridersize.prototype.doTheThing = function(){
	alert("I'm just doing my thing. Move along. "); 
}