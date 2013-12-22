/*
	Floor structure
*/
var Floor = function(data, block){
	this.block = block; 
	this.floor_index = undefined; 

	this.rooms = []; 

	if(jQuery.isArray(data)){
		var data = {
			"name": data[0], 
			"rooms": data[1]
		};
	} else {
		var data = data; 
	}

	this.name = data.name; 

	for(var i=0;i<data.rooms.length;i++){
		this.rooms.push(
			new Room(data.rooms[i], this)
		); 
	}

	this.updateIndexes(); 
}; 

Floor.prototype.getName = function(){
	return (typeof this.name !== "undefined")?this.name:("Floor "+(this.getIndex()+1).toString()); 
};

//updates
Floor.prototype.updateIndexes = function(){
	for(var i=0;i<this.rooms.length;i++){
		this.rooms[i].room_index = i; 
	}
}

//location of floor
Floor.prototype.getIndex = function(){
	return this.floor_index; 
}; 

Floor.prototype.getBlock = function(){
	return this.block; 
}; 

Floor.prototype.getBuilding = function(){
	return this.getBlock().getBuilding(); 
}; 

Floor.prototype.getPosition = function(){
	var block = this.block; 
	var building = block.getBuilding(); 

	return {
		"floor": this.getIndex(), 
		"block": block.getIndex(),
		"building": building.getIndex()
	}
}; 

//modifiers
Floor.prototype.remove = function(){
	//remove this floor from the block
	return this.getBlock().removeFloor(this.getIndex()); 
}

Floor.prototype.cloneTo = function(newBlock){
	//clone this floor to another block
	var newBlock = (newBlock instanceof Block)?newBlock:this.getBlock(); 
	var floor = new Floor(this.toArray().slice(0), newBlock); 
	newBlock.addFloor(floor); 
	return floor; 
}

Floor.prototype.moveTo = function(newBlock){
	return this.remove().cloneTo(newBlock); 
}

Floor.prototype.addRoom = function(room){
	var room = (room instanceof Room)?room:new Room(room, this); 
	room.floor = this; 
	this.rooms.push(room); 
	this.updateIndexes(); 
	return this; 
}

Floor.prototype.removeRoom = function(roomIndex){
	this.rooms.splice(roomIndex, 1); 
	this.updateIndexes(); 
	return this; 
}

//iterators
Floor.prototype.iterateRooms = function(iterator){
	var block = this.block; 
	var building = block.getBuilding(); 

	for(var i=0;i<this.rooms.length;i++){
		var res = iterator.call(this.rooms[i], this.rooms[i], this, block, building);

		if(typeof res !== "undefined"){
			return res; 
		}
	}

	return this; 
}

//coordinate transforms
Floor.prototype.coordinateTransform = function(transform){
	return this.iterateRooms(function(room){
		room.coordinateTransform(transform); 
	});
}

Floor.prototype.coordinateTranslate = function(x, y){
	return this.iterateRooms(function(room){
		room.coordinateTranslate(x, y); 
	});
}

//export
Floor.prototype.toArray = function(){
	return [
		this.name, 
		this.rooms.map(function(room){
			return room.toArray(); 
		})
	]
}

//inhertited stuffs
Floor.prototype.setIds = MapData.prototype.setIds; 
Floor.prototype.setNames = MapData.prototype.setNames; 
Floor.prototype.filterRooms  = MapData.prototype.filterRooms; 
Floor.prototype.removeRooms  = MapData.prototype.removeRooms; 
Floor.prototype.findRoomById  = MapData.prototype.findRoomById; 
Floor.prototype.updateRoom  = MapData.prototype.updateRoom; 