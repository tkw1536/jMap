/*
	General Building data
*/
var Buildings = [
	//[NAME, Floors]
	["Nordmetall", NM],
	["Test", Test]
]; 

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

Data.findRoom = function(query){
	var rooms = []; 

	if(query.indexOf("room:")==0){ //we want to search for the following ids only
		
		id = query.substring(5); //search for id only
		Data.iterateRooms(function(Room, i, j){
			//Lets check if it matches
			
		})
	} else {
		Data.iterateRooms(function(Room, i, j){
			//Lets check if it matches

		})
	}

	

	return rooms; 
}