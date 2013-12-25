/*
	Building structure
*/
var Building = function(data, mapData){
	this.blocks = []; 
	this.mapdata = mapData; 

	if(jQuery.isArray(data)){
		var data = {
			"name": data[0], 
			"machine_name": data[1],
			"blocks": data[3]
		};
	} else {
		var data = data; 
	}

	this.name = data.name; 
	this.machine_name = data.machine_name; 
	this.id = undefined; 
	this.mapData = mapData; 

	for(var i=0;i<data.blocks.length;i++){
		this.blocks.push(
			new Block(data.blocks[i], this)
		); 
	}

	this.updateIndexes(); 
}; 

Building.prototype.set = function(stuff){
	var stuff = (typeof stuff !== "undefined")?stuff:{}; 
	this.name = (stuff.hasOwnProperty("name"))?stuff.name:this.name; 
	this.machine_name = (stuff.hasOwnProperty("machine_name"))?stuff.machine_name:this.machine_name; 
	return this; 
}

Building.prototype.getName = function(){
	return this.name; 
}; 

Building.prototype.getMName = function(){
	return (typeof this.machine_name !== "undefined")?this.machine_name:this.getName().toLowerCase().split(" ").join("_"); 
}

//updates
Building.prototype.updateIndexes = function(){
	for(var i=0;i<this.blocks.length;i++){
		this.blocks[i].block_index = i; 
	}
}

//location of block
Building.prototype.getIndex = function(){
	return this.id; 
}; 

Building.prototype.getPosition = function(){
	return {
		"building": this.getIndex()
	}
}; 

//modifiers

Building.prototype.cloneTo = function(newMapData){
	//clone this block to another building
	return new Building(this.toArray(), newMapData || this.getMapData()); 
}

Building.prototype.remove = function(newMapData){
	//clone this block to another building
	this.getMapData.removeBuilding()
}

Building.prototype.addBlock = function(block){
	var block = (block instanceof Block)?block:new Block(block, this); 
	block.building = this; 
	this.blocks.push(block); 
	this.updateIndexes(); 
	return this; 
}

Building.prototype.removeBlock = function(blockIndex){
	this.blocks.splice(blockIndex, 1); 
	this.updateIndexes(); 
	return this; 
}

//iterators
Building.prototype.iterateBlocks = function(iterator){
	for(var i=0;i<this.blocks.length;i++){
		var res = iterator.call(this.blocks[i], this.blocks[i], this);
		if(typeof res !== "undefined"){
			return res; 
		}
	}

	return this; 
}

Building.prototype.iterateFloors = function(iterator){
	return this.iterateBlocks(function(block){
		block.iterateFloors(iterator); 
	}); 
}

Building.prototype.iterateRooms = function(iterator){
	return this.iterateBlocks(function(block){
		block.iterateRooms(iterator); 
	}); 
}

//coordinate transforms
Building.prototype.coordinateTransform = function(transform){
	return this.iterateBlocks(function(block){
		block.coordinateTransform(transform); 
	});
}

Building.prototype.coordinateTranslate = function(x, y){
	return this.iterateBlocks(function(block){
		block.coordinateTranslate(x, y); 
	});
}

//export
Building.prototype.toArray = function(){
	return [
		this.name, 
		this.machine_name, 
		this.id, 
		this.blocks.map(function(block){
			return block.toArray(); 
		})
	]
}

//addTo
Building.prototype.addTo = function(newBuilding){
	var newBuilding = (newBuilding instanceof Building)?newBuilding:new Building(newBuilding); 
	newBuilding.add(this); 
	return this; 
}

//add
Building.prototype.add = function(newMapData){
	var me = this; 
	var newBuilding = (newBuilding instanceof Building)?newBuilding:new Building(newBuilding); 
	newBuilding.iterateBlocks(function(block){
		block.cloneTo(me); 
	}); 

	return this; 
}

//select by machine name
Building.prototype.selectByMName = function(str){
	if(str == ""){
		return this; 
	}
	var components = str.split("/"); 

	for(var i=0;i<this.blocks.length;i++){
		if(this.blocks[i].getMName() == components[0]){
			components.splice(0, 1); 
			return this.blocks[i].selectByMName(components.join("/")); 
		}
	}

	var i = parseInt(components[0]); 

	if(0<=i && i<this.blocks.length){
		components.splice(0, 1); 
		return this.blocks[i].selectByMName(components.join("/")); 
	}

	return undefined; 
}

//inhertited stuffs
Building.prototype.setIds = MapData.prototype.setIds; 
Building.prototype.setNames = MapData.prototype.setNames; 
Building.prototype.filterRooms  = MapData.prototype.filterRooms; 
Building.prototype.removeRooms  = MapData.prototype.removeRooms; 
Building.prototype.findRoomById  = MapData.prototype.findRoomById; 
Building.prototype.updateRoom  = MapData.prototype.updateRoom; 

//empty Building
Building.empty = function(){return new Building({"name": "", "machine_name": "", "blocks": []}, MapData.empty()); };