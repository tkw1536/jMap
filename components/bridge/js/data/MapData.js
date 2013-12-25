/*
	Manages Map Data, an array of buildings
*/

var MapData = function(){
	this.buildings = []; 
};

MapData.prototype.set = function(){
	return this; 
}

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
	this.findRoomById(id).set(data); 
	return this; 
}

//addTo
MapData.prototype.addTo = function(newMapData){
	var newMapData = (newMapData instanceof MapData)?newMapData:new MapData(newMapData); 
	newMapData.add(this); 
	return this; 
}

//add
MapData.prototype.add = function(newMapData){
	var me = this; 
	var newMapData = (newMapData instanceof MapData)?newMapData:new MapData(newMapData); 
	newMapData.iterateBuildings(function(build){
		build.cloneTo(me); 
	}); 

	return this; 
}

MapData.prototype.selectByMName = function(str){
	if(str == ""){
		return this; 
	}
	var components = str.split("/"); 

	for(var i=0;i<this.buildings.length;i++){
		if(this.buildings[i].getMName() == components[0]){
			components.splice(0, 1); 
			return this.buildings[i].selectByMName(components.join("/")); 
		}
	}

	var i = parseInt(components[0]); 

	if(0<=i && i<this.buildings.length){
		components.splice(0, 1); 
		return this.buildings[i].selectByMName(components.join("/")); 
	}

	return undefined; 
}

//get closest
MapData.selectClosestRoom = function(mapObj){
	if(mapObj instanceof Room){
		return mapObj; 
	}
	if(mapObj instanceof Floor){
		return mapObj.rooms[0]; 
	}
	if(mapObj instanceof Block){
		return mapObj.floors[0].rooms[0]; 
	}
	if(mapObj instanceof Building){
		return mapObj.blocks[0].floors[0].rooms[0]; 
	}
	if(mapObj instanceof MapData){
		return mapObj.buildings[0].blocks[0].floors[0].rooms[0]; 
	}

	return undefined; 
}; 


MapData.selectClosestFloor = function(mapObj){
	if(mapObj instanceof Room){
		return mapObj.getFloor(); 
	}
	if(mapObj instanceof Floor){
		return mapObj; 
	}
	if(mapObj instanceof Block){
		return mapObj.floors[0]; 
	}
	if(mapObj instanceof Building){
		return mapObj.blocks[0].floors[0]; 
	}
	if(mapObj instanceof MapData){
		return mapObj.buildings[0].blocks[0].floors[0]; 
	}

	return undefined; 
}; 


MapData.selectClosestBlock = function(mapObj){
	if(mapObj instanceof Room){
		return mapObj.getFloor().getBlock(); 
	}
	if(mapObj instanceof Floor){
		return mapObj.getBlock(); 
	}
	if(mapObj instanceof Block){
		return mapObj; 
	}
	if(mapObj instanceof Building){
		return mapObj.blocks[0]; 
	}
	if(mapObj instanceof MapData){
		return mapObj.buildings[0].blocks[0]; 
	}

	return undefined; 
}; 

MapData.selectClosestBuilding = function(mapObj){
	if(mapObj instanceof Room){
		return mapObj.getFloor().getBlock().getBuilding(); 
	}
	if(mapObj instanceof Floor){
		return mapObj.getBlock().getBuilding(); 
	}
	if(mapObj instanceof Block){
		return mapObj.getBuilding();
	}
	if(mapObj instanceof Building){
		return mapObj; 
	}
	if(mapObj instanceof MapData){
		return mapObj.buildings[0]; 
	}

	return undefined; 
}; 

MapData.selectClosestMapData = function(mapObj){
	if(mapObj instanceof Room){
		return mapObj.getFloor().getBlock().getBuilding().mapdata; 
	}
	if(mapObj instanceof Floor){
		return mapObj.getBlock().getBuilding().mapdata; 
	}
	if(mapObj instanceof Block){
		return mapObj.getBuilding().mapdata;
	}
	if(mapObj instanceof Building){
		return mapObj.mapdata;;
	}
	if(mapObj instanceof MapData){
		return mapObj; 
	}

	return undefined; 
}; 

MapData.empty = function(){return new MapData();};  