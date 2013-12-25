/*
	Map Search / Map Renderer Bridge things
*/


//state: mapRenderState

var mapRenderState; 

bridge.getMapRenderState = function(){
	return mapRenderState; 
}

bridge.setMapRenderState = function(state){	
	mapRenderState = state;
}



//check the external String
var externalState = undefined; 
bridge.checkIfExternal = function(callback){
	if(typeof externalState == "undefined"){
		jpeople.search("", function(res){
			externalState = (res !== false); 
			callback(externalState); 
		});
	} else {
		callback(externalState); 
	}
}

//render a map level
bridge.renderMap = function(state){
	if(typeof state !== "undefined"){
		bridge.setMapRenderState(state);
	}

	var state = bridge.getMapRenderState(); 

	bridge.setRenderer("map-renderer", function(win){
		win.gui.setRenderState(state); 
	})
}


//Get Map Data
bridge.getMapData = function(){return RenderData; }

//Search Map Data
bridge.searchMapData = function(queries, callback){
	var res = RenderData.searchRoom(queries); 

	callback((res.length == 0)?false:res); 
}

//Find a room by id
bridge.findRoomById = function(id){
	return RenderData.findRoomById(id); 
}; 

//render a room by id
bridge.renderRoomById = function(id){
	bridge.setRenderer("map-renderer", function(w){
		w.gui.renderRoomById(id); 
	}); 
}
bridge.renderMapObj = function(mapObj){
	if(mapObj instanceof Room){
		//render the room
		bridge.renderRoomById(mapObj.id[0]); 
		return true; 
	} else {
		var floor = MapData.selectClosestFloor(mapObj); 
		if(typeof floor == "undefined"){
			return false; 
		}
		var block = floor.getBlock(); 
		var build = block.getBuilding(); 
		bridge.renderMap({
			"building": build.getIndex(), 
			"block": block.getIndex(), 
			"floor": floor.getIndex()
		}); 
		return true; 
	}
}