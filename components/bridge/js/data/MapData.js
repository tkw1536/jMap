/*
	Manages Map Data, an array of buildings
*/

var MapData = function(){
	this.buildings = []; 
};

//updates
MapData.prototype.refreshIds = function(){
	for(var i=0;i<this.buildings.length;i++){
		this.buildings[i].id = i; 
	}
	return this; 
}


//modifiers
MapData.prototype.addBuilding = function(building){
	this.buildings.push((building instanceof Building)?building:new Building(building, this)); 
	this.refreshIds(); 
	return this; 
}

MapData.prototype.removeBuilding = function(buildingIndex){
	this.buildings.splice(buildingIndex, 1); 
	this.refreshIds(); 
	return this; 
}

//iterators
MapData.prototype.iterateBuildings = function(iterator){
	for(var i=0;i<this.buildings.length;i++){
		var res = iterator.call(this.buildings[i], this.buildings[i], this);
		if(typeof res !== "undefined"){
			return res; 
		}
	}

	return this; 
}

MapData.prototype.iterateBlocks = function(iterator){
	return this.iterateBuildings(function(building){
		building.iterateBlocks(iterator); 
	}); 
}

MapData.prototype.iterateFloors = function(iterator){
	return this.iterateBuildings(function(building){
		building.iterateFloors(iterator); 
	}); 
}

MapData.prototype.iterateRooms = function(iterator){
	return this.iterateBuildings(function(building){
		building.iterateRooms(iterator); 
	}); 
}

//special things
MapData.prototype.findRoomById = function(id){
	var res = undefined; 

	this.iterateRooms(function(room){
		if(room.id.indexOf(id) > -1){
			res = room;
			return true; 
		}
	});

	return res; 
}

//Search for a room
MapData.prototype.searchRoom = function(query){
	var res = []; 

	var query = jQuery.isArray(query)?query:[query]; 

	this.iterateRooms(function(room){
		if(room.matches(query)){
			res.push(room); 
		}
	});

	return res; 
}

MapData.prototype.getFloorByState = function(building, block, floor){
	return this.buildings[building].blocks[block].floors[floor]; 
}

//renaming stuff
MapData.prototype.setIds = function(iterator){
	return this.iterateRooms(function(room, floor, block, building){
		room.id = room.id.map(function(id){
			return iterator.call(room, id, room, floor, block, building); 
		})
	});
}

MapData.prototype.setNames = function(iterator){
	return this.iterateRooms(function(room, floor, block, building){
		room.name = iterator.call(room, room.name, room, floor, block, building); 
	});
}

//filter the rooms
MapData.prototype.filterRooms = function(filter){
	var rems = []; 

	var res = this.iterateRooms(function(room, floor, block, building){
		var res = filter.call(room, room, floor, block, building); 
		if(!res){
			rems.push(room); 
		}
	});

	rems.map(function(r){
		r.remove(); 
	})

	return res; 

}
//remove given rooms
MapData.prototype.removeRooms = function(ids){
	var ids = jQuery.isArray(ids)?ids:[ids]; 

	return this.filterRooms(function(room){
		for(var i=0;i<ids.length;i++){
			if(room.id.indexOf(ids[i]) > -1){
				return false; 
			}
		}
		return true; 
	})
}

MapData.prototype.updateRoom = function(id, data){
	this.findRoomById(id).updateTo(data); 
	return this; 
}