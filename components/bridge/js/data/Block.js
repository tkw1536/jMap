/*
	Block structure
*/
var Block = function(data, building){
	this.building = building || Building.empty(); 
	this.block_index = undefined; 

	this.floors = []; 

	if(jQuery.isArray(data)){
		var data = {
			"name": data[0], 
			"machine_name": data[1], 
			"floors": data[2]
		}; 
	} else {
		var data = data; 
	}

	this.name = data.name; 
	this.machine_name = data.machine_name;

	for(var i=0;i<data.floors.length;i++){
		this.floors.push(
			new Floor(data.floors[i], this)
		); 
	}

	this.updateIndexes(); 
}; 

Block.prototype.set = function(stuff){
	var stuff = (typeof stuff !== "undefined")?stuff:{}; 
	this.name = (stuff.hasOwnProperty("name"))?stuff.name:this.name; 
	this.machine_name = (stuff.hasOwnProperty("machine_name"))?stuff.machine_name:this.machine_name; 
	return this; 
}

Block.prototype.getName = function(){
	return (typeof this.name !== "undefined")?this.name:("Block "+(this.getIndex()+1).toString())
}

Block.prototype.getMName = function(){
	return (typeof this.machine_name !== "undefined")?this.machine_name:this.getName().toLowerCase().split(" ").join("_"); 
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

//addTo
Block.prototype.addTo = function(newBlock){
	var newBlock = (newBlock instanceof Block)?newBlock:new Block(newBlock); 
	newBlock.add(this); 
	return this; 
}

//add
Block.prototype.add = function(newBlock){
	var me = this; 
	var newBlock = (newBlock instanceof Block)?newBlock:new Block(newBlock); 
	newBlock.iterateFloors(function(floor){
		floor.cloneTo(me); 
	}); 

	return this; 
}

//export
Block.prototype.toArray = function(){
	return [
		this.name, 
		this.machine_name, 
		this.floors.map(function(floor){
			return floor.toArray(); 
		})
	]
}

Block.prototype.selectByMName = function(str){
	if(str == ""){
		return this; 
	}
	var components = str.split("/"); 

	for(var i=0;i<this.floors.length;i++){
		if(this.floors[i].getMName() == components[0]){
			components.splice(0, 1); 
			return this.floors[i].selectByMName(components.join("/")); 
		}
	}

	var i = parseInt(components[0]); 

	if(0<=i && i<this.floors.length){
		components.splice(0, 1); 
		return this.floors[i].selectByMName(components.join("/")); 
	}

	return undefined; 
}

//inhertited stuffs
Block.prototype.setIds = MapData.prototype.setIds; 
Block.prototype.setNames = MapData.prototype.setNames; 
Block.prototype.filterRooms  = MapData.prototype.filterRooms; 
Block.prototype.removeRooms  = MapData.prototype.removeRooms; 
Block.prototype.findRoomById  = MapData.prototype.findRoomById; 
Block.prototype.updateRoom  = MapData.prototype.updateRoom; 

//empty block
Block.empty = function(){return new Block({"machine_name": "", "floors": []}, Building.empty())}; 