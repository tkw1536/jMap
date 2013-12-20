var Buildings = []; 
Buildings.idMap = {}; 

var finishedLoads = []; 
var loading = false; 

var buildingLoadReady = false; 

$.holdReady(true);

window.loadBuilding = function(JS_FILE_NAME, BUILDING_NAME, VARIABLE_NAME, MACHINE_NAME){
	buildingLoadReady = false; 

	//load the building
	if(loading){
		return finishedLoads.push(arguments); 
	} else {
		loading = true; 

		util.loadJS("../../data/"+JS_FILE_NAME, function(){
			Buildings.push([BUILDING_NAME, window[VARIABLE_NAME]]); 
			Buildings.idMap[MACHINE_NAME.toLowerCase()] = Buildings.length - 1; 

			loading = false; 
			if(finishedLoads.length > 0){
				window.loadBuilding.apply(window, finishedLoads.pop())
			} else {
				buildingLoadReady = true; 
			}
		});

	}
}

window.endBuildingLoad = function(){
	$.holdReady(false);
}

var Data = {};

Data.findRoomById = function(id){
	//if found, returns [room, Building_id, floor_id]
	//otherwise returns false. 
	return Data.iterateRooms(function(Room, i, j){
		var RoomIds = Room[5];
		if(typeof RoomIds != "undefined"){
			for(var l=0;l<RoomIds.length;l++){
				if(RoomIds[l] === id){
					return [Room, i, j, RoomIds]
				}
			}
		}
	}, false); 
}

Data.iterateRooms = function(filter, def){
	// filter = function(RoomObject, Building, Floor)
	// return true from filter to abort loop. 
	for(var i=0;i<Buildings.length;i++){
		var Floors = Buildings[i][1]; 
		for(var j=0;j<Floors.length;j++){
			var Rooms = Floors[j][1]; 
			for(var k=0;k<Rooms.length;k++){
				var res = filter(Rooms[k], i, j)
				if(res){
					return res; 
				}
			}
		}
	}
	return def; 
}

Data.searchSingle = function(query, callback){
	//Search single map
	if(query.length < 3){
		return callback(false);
	}

	var results = []; 

	//match a string
	var matches = function(q, str){
		if(typeof str == "string"){
			return (str.toLowerCase().indexOf(q.toLowerCase()) !== -1); 
		} else if(typeof str !== "undefined"){
			try{
				for(var i=0;i<str.length;i++){
					if(matches(q, str[i])){
						return true; 
					}
				}
			} catch(e){}
			return false; 
		} else {
			return false; 
		}
	}

	var matchesW = function(q, str){
		var res = (matches(q, str) || matches(q.split(" ").join("-"), str)); 
		return res; 
	}

	var data = Data.iterateRooms(function(room, i, j){
		//do stuff here
		//search for query somehow
		if(room[6] !== "student" && room[7] !== true){
			//include only student rooms or rooms with forced attribute in search
			return; 
		}
		if(matchesW(query, room[4]) || matchesW(query, room[5]) || matchesW(query, room[6]) || matchesW(query, Buildings[i][0])){
			results.push(
			{
				"id": (typeof room[5] !== "undefined")?room[5][0]:undefined, 
				"name": room[4], 
				"building": Buildings[i][0], 
				"floor": Buildings[i][1][j][0]
			})
		}
	}); 

	callback(results); 
}