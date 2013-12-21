var gui = {}; 

gui.renderer = new Renderer(); //The renderer

//state variables
gui.currentBuilding = -1;
gui.currentFloor = -1; 
gui.currentFlash = undefined; 


gui.buildMenu = function(){
	//builds the floor menu
	window.parent.bridge(function(b){
		var Buildings = b.getMapData(); 

		var ul = $('<ul class="dropdown-menu" role="menu">')
		.appendTo("#buildings");
		for (var i = 0; i<Buildings.length; i++)
		{
			(function(){
				var j = i; 
				var Building = Buildings[i];
				ul.append(
					$('<li role="presentation">').
					append(
						$('<a role="menuitem" tabindex="-1" href="#">').text(Building[0])
						.click(function(){

							gui.currentBuilding = j; 

							//mark the current thing
							ul.find(".disabled").removeClass("disabled"); //remove the active class from all active elements
							$(this).parent().addClass("disabled"); //make this menu item active

							gui.refreshFloorMenu();

							$("#buildingstitle").text(Building[0]);
						})
					)
					
				);
			})();
		}

		ul.find("a").eq(0).click(); //Find the first link in the <ul> and click it
	})

	
}

/*
	Builds the floor menu
*/
gui.refreshFloorMenu = function(){
	window.parent.bridge(function(b){
		var Buildings = b.getMapData();
	
		var Floors = Buildings[gui.currentBuilding][1];
		$("#floors").find("ul").remove(); 

		var ul = $('<ul class="dropdown-menu" role="menu">').appendTo("#floors");
		for (var i = 0; i<Floors.length; i++)
		{
			(function(){
				var j = i; 
				var Floor = Floors[i];
				ul.append(
					$('<li role="presentation">').
					append(
						$('<a role="menuitem" tabindex="-1" href="#">').text(Floor[0])
						.click(function(){

							gui.currentFloor = j; 

							//mark the current thing
							ul.find(".disabled").removeClass("disabled"); //remove the active class from all active elements
							$(this).parent().addClass("disabled"); //make this menu item active

							gui.renderer
							.setRenderData(Floor[1])
							.setClickHandler(function(id, room){
								if(room[6] !== "student" && room[6] !== "common" && room[6] !== "kitchen" && room[7] !== true){
									//only handle click event for these room types
									return; 
								}
								if(typeof id == "string" || typeof id == "undefined"){
									window.parent.bridge(function(b){
										b.setSearchString(id); 
										gui.flashRoom(id); 
									})
								} else {

									window.parent.bridge(function(b){
										b.setSearchString(id.join("; ")); 
										gui.flashRoom(id[0]); 
									});
								}
							})
							.render(); 

							gui.flushRenderState();

							$("#floorstitle").text(Floor[0]).val(Floor[0]);
							
						})
					)
					
				);
			})();
		}

		ul.find("a").eq(0).click(); //Find the first link in the <ul> and click it
	}); 
};

gui.renderFloor = function(BuildingId, FloorId){
	//renders a floor of the specefied building. 
	$("#buildings").find("ul").find("a").eq(BuildingId).click();
	$("#floors").find("ul").find("a").eq(FloorId).click();
};

gui.flashRoom = function(id){
	//flashes a room if it is currently being rendered
	$(".activatable").removeClass("active"); 
	$(document.getElementsByClassName("id-"+id)).addClass("active").dblclick(function(){
		gui.unFlash(); 
	});
	gui.currentFlash = id; 

	gui.flushRenderState(); //store the stuff
}

gui.unFlash = function(){
	$(".activatable").off("dblclick").removeClass("active"); 
	gui.currentFlash = undefined; 
	gui.flushRenderState(); 
}

gui.renderRoomById = function(id, flash, switchFloor, callback){
	window.parent.bridge(function(b){
		var switchFloor = (typeof switchFloor == "boolean")?switchFloor:true;

		var Room = b.findRoomById(id);

		if(!Room){
			return callback(false);
		}

		var Building = Room[1];
		var Floor = Room[2];

		if(!(Building == gui.currentBuilding && Floor == gui.currentFloor) && !switchFloor){
			return callback(false); //No Switching
		}

		gui.renderFloor(Building, Floor);

		if(flash){
			gui.flashRoom(id); 
		}

		return callback(true);
	}); 
	
}

gui.showNotFoundMsg = function(){
	$(".activatable").removeClass("active"); 
	$(".notfound").remove(); 
	$("<div>")
	.hide()
	.appendTo("body")
	.addClass("notfound")
	.text("That room does not exist on the map. ")
	.fadeIn(500, function(){
		$(this).fadeOut(2000, function(){
			$(this).remove(); 
		})
	});

	gui.unFlash(); //unflash stuff
}

gui.showPerson = function(person){
	var state = gui.getRenderState(); 
	window.loadRemote("people-renderer", function(win){
		win.render.prevRenderState = state; 
		win.render.renderPerson(person); 
	}); 
}

gui.flushRenderState = function(){
	//gets the current render state

	var state = {
		"build": gui.currentBuilding, 
		"floor": gui.currentFloor, 
		"flash": gui.currentFlash
	}; 

	window.parent.bridge(function(b){
		b.setMapRenderState(state); 
	})
}

gui.setRenderState = function(state){
	var state  = (typeof state == "undefined")?{"build": 0, "floor": 0}:state; //sets the current render state
	gui.renderFloor(state.build, state.floor); 
	if(typeof state.flash !== "undefined"){
		gui.flashRoom(state.flash); 
	}
}