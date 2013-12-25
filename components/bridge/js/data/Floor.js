/*
	Floor structure
*/
var Floor = function(data, block){
	this.block = block || Block.empty(); 
	this.floor_index = undefined; 

	this.rooms = []; 

	if(jQuery.isArray(data)){
		var data = {
			"name": data[0],
			"machine_name": data[1],  
			"rooms": data[2]
		};
	} else {
		var data = data; 
	}

	this.name = data.name; 
	this.machine_name = data.machine_name; 

	for(var i=0;i<data.rooms.length;i++){
		this.rooms.push(
			new Room(data.rooms[i], this)
		); 
	}

	this.updateIndexes(); 
}; 

Floor.prototype.set = function(stuff){
	var stuff = (typeof stuff !== "undefined")?stuff:{}; 
	this.name = (stuff.hasOwnProperty("name"))?stuff.name:this.name; 
	this.machine_name = (stuff.hasOwnProperty("machine_name"))?stuff.machine_name:this.machine_name; 
	return this; 
}

Floor.prototype.getName = function(){
	return (typeof this.name !== "undefined")?this.name:("Floor "+(this.getIndex()+1).toString()); 
};

Floor.prototype.getMName = function(){
	return (typeof this.machine_name !== "undefined")?this.machine_name:this.getName().toLowerCase().split(" ").join("_"); 
}

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

//addTo
Floor.prototype.addTo = function(newFloor){
	var newFloor = (newFloor instanceof Floor)?newFloor:new Floor(newFloor); 
	newFloor.add(this); 
	return this; 
}

//add
Floor.prototype.add = function(newBlock){
	var me = this; 
	var newFloor = (newFloor instanceof Floor)?newFloor:new Floor(newFloor);
	newFloor.iterateRooms(function(room){
		room.cloneTo(me); 
	}); 

	return this; 
}

//export
Floor.prototype.toArray = function(){
	return [
		this.name, 
		this.machine_name, 
		this.rooms.map(function(room){
			return room.toArray(); 
		})
	]
}


Floor.prototype.selectByMName = function(str){
	if(str == ""){
		return this; 
	}
	var components = str.split("/"); 

	for(var i=0;i<this.rooms.length;i++){
		if(this.rooms[i].name == components[0]){
			return this.rooms[i]; 
		}
	}

	var i = parseInt(components[0]); 

	if(0<=i && i<this.rooms.length){
		components.splice(0, 1); 
		return this.rooms[i];
	}

	return undefined; 
}

//inhertited stuffs
Floor.prototype.setIds = MapData.prototype.setIds; 
Floor.prototype.setNames = MapData.prototype.setNames; 
Floor.prototype.filterRooms  = MapData.prototype.filterRooms; 
Floor.prototype.removeRooms  = MapData.prototype.removeRooms; 
Floor.prototype.findRoomById  = MapData.prototype.findRoomById; 
Floor.prototype.updateRoom  = MapData.prototype.updateRoom; 


Floor.empty = function(){return new Floor({"machine_name": "", "rooms": []}, Block.empty()); }