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

	for(var i=0;i<Buildings.length;i++){
		var Floors = Buildings[i][1]; 
		for(var j=0;j<Floors.length;j++){
			var Rooms = Floors[j][1]; 
			for(var k=0;k<Rooms.length;k++){
				var Room = Rooms[k];
				var RoomIds = Room[5];
				if(typeof RoomIds != "undefined"){
					for(var l=0;l<RoomIds.length;l++){
						if(RoomIds[l] === id){
							var res = [Room, i, j, RoomIds];
							return res; 
						}
					}
				}
			}
		}
	}

	return false;
}