/*
	Block structure
*/
var Block = function(data, building){
	this.building = building; 
	this.block_index = undefined; 

	this.floors = []; 

	if(jQuery.isArray(data)){
		var data = {
			"name": data[0], 
			"floors": data[1]
		}; 
	} else {
		var data = data; 
	}

	this.name = data.name; 

	for(var i=0;i<data.floors.length;i++){
		this.floors.push(
			new Floor(data.floors[i], this)
		); 
	}

	this.updateIndexes(); 
}; 

Block.prototype.getName = function(){
	return (typeof this.name !== "undefined")?this.name:("Block "+(this.getIndex()+1).toString())
}

//updates
Block.prototype.updateIndexes = function(){
	for(var i=0;i<this.floors.length;i++){
		this.floors[i].floor_index = i; 
	}
}

//location of block
Block.prototype.getIndex = function(){
	return this.block_index; 
}; 

Block.prototype.getBuilding = function(){
	return this.building; 
}; 

Block.prototype.getPosition = function(){
	var building = this.getBuilding(); 

	return {
		"block": this.getIndex(), 
		"building": building.getIndex()
	}
}; 

//modifiers
Block.prototype.remove = function(){
	//remove this block from the building
	return this.getBuilding().removeBlock(this.getIndex()); 
}

Block.prototype.cloneTo = function(newBuilding){
	//clone this block to another building
	var newBuilding = (newBuilding instanceof Building)?newBuilding:this.getBuilding(); 
	var block = new Block(this.toArray().slice(0), newBuilding); 
	newBuilding.addBlock(block); 
	return block; 
}

Block.prototype.moveTo = function(newBuilding){
	return this.remove().cloneTo(newBuilding); 
}

Block.prototype.addFloor = function(floor){
	var floor = (floor instanceof Floor)?floor:new Floor(floor, this); 
	floor.block = this; 
	this.floors.push(floor); 
	this.updateIndexes(); 
	return this; 
}

Block.prototype.removeFloor = function(floorIndex){
	this.floors.splice(floorIndex, 1); 
	this.updateIndexes(); 
	return this; 
}

//iterators
Block.prototype.iterateFloors = function(iterator){
	var building = this.getBuilding(); 

	for(var i=0;i<this.floors.length;i++){
		var res = iterator.call(this.floors[i], this.floors[i], this, building);

		if(typeof res !== "undefined"){
			return res; 
		}
	}

	return this; 
}

Block.prototype.iterateRooms = function(iterator){
	return this.iterateFloors(function(floor){
		floor.iterateRooms(iterator); 
	}); 
}

//coordinate transforms
Block.prototype.coordinateTransform = function(transform){
	return this.iterateFloors(function(floor){
		floor.coordinateTransform(transform); 
	});
}

Block.prototype.coordinateTranslate = function(x, y){
	return this.iterateFloors(function(floor){
		floor.coordinateTranslate(x, y); 
	});
}

//export
Block.prototype.toArray = function(){
	return [
		this.name, 
		this.floors.map(function(floor){
			return floor.toArray(); 
		})
	]
}

//inhertited stuffs
Block.prototype.setIds = MapData.prototype.setIds; 
Block.prototype.setNames = MapData.prototype.setNames; 
Block.prototype.filterRooms  = MapData.prototype.filterRooms; 
Block.prototype.removeRooms  = MapData.prototype.removeRooms; 
Block.prototype.findRoomById  = MapData.prototype.findRoomById; 
Block.prototype.updateRoom  = MapData.prototype.updateRoom; 
