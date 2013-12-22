/*
	Room structure
*/
var Room = function(data, floor){
	this.floor = floor; 
	this.room_index = undefined; //index of this room

	if(jQuery.isArray(data)){
		var data = {
			"coords": [data[0], data[1], data[2], data[3]], 
			"name": data[4], 
			"id": data[5], 
			"type": data[6], 
			"force_include": data[7]
		}
	} else {
		var data = data; 
	}
	
	this.x = data.coords[0]; 
	this.y = data.coords[1]; 
	this.x_size = data.coords[2]; 
	this.y_size = data.coords[3]; 

	this.id = jQuery.isArray(data.id)?data.id:[data.id];
	this.name = (typeof data.name == "string")?data.name:this.id.join(" / "); //TODO: Generate name here

	this.type = (typeof data.type == "string")?data.type:"student"; 
	this.force_search = (data.force_include === true); 
}

Room.prototype.updateTo = function(data){
	var keys = ["type", "force_search", "name"]; 

	for(var i=0;i<keys.length;i++){
		if(data.hasOwnProperty(keys[i])){
			console.log(keys[i], "refresh"); 
			this[keys[i]] = data[keys[i]]; 
		}
	}

	if(data.hasOwnProperty("id")){
		this.id = jQuery.isArray(data.id)?data.id:[data.id]; 
	}

	if(data.hasOwnProperty("coords")){
		this.x = data.coords[0]; 
		this.y = data.coords[1]; 
		this.x_size = data.coords[2]; 
		this.y_size = data.coords[3]; 
	}

	return this; 
}

//location of room
Room.prototype.getFloor = function(){
	return this.floor; 
}

Room.prototype.getBlock = function(){
	return this.getFloor().getBlock(); 
}

Room.prototype.getBuilding = function(){
	return this.getFloor().getBlock().getBuilding(); 
}

Room.prototype.getPosition = function(){
	var floor = this.floor; 
	var block = floor.getBlock(); 
	var building = block.getBuilding(); 

	return {
		"room": this.getIndex(),
		"floor": floor.getIndex(), 
		"block": block.getIndex(),
		"building": building.getIndex()
	}
}

Room.prototype.getIndex = function(){
	//gets the index of this one in the parent
	return this.room_index; 
}

//modifiers
Room.prototype.remove = function(){
	//remove this room from the parent
	return this.getFloor().removeRoom(this.getIndex()); 
}

Room.prototype.cloneTo = function(newFloor){
	//remove this room from the parent
	var newFloor = (newFloor instanceof Floor)?newFloor:this.getFloor(); 
	var room = new Room(this.toArray().slice(0), newFloor); 
	newFloor.addRoom(room); 
	return room; 
}

Room.prototype.moveTo = function(newFloor){
	return this.remove().cloneTo(newFloor); 
}

//coordinate transforms
Room.prototype.coordinateTransform = function(transform){
	//transform(x, y) = [x', y']
	//assumes that transform is continuous and transforms squares to squares
	var transform = transform.bind(this); 

	var x_min = Math.min(this.x, this.x+this.x_size); 
	var x_max = Math.max(this.x, this.x+this.x_size); 

	var y_min = Math.min(this.y, this.y+this.y_size); 
	var y_max = Math.max(this.y, this.y+this.y_size); 

	var A = transform(x_min, y_min); 
	var B = transform(x_min, y_max); 
	var C = transform(x_max, y_min); 
	var D = transform(x_max, y_max); 

	var x_min_n = Math.min(A[0], B[0], C[0], D[0]); 
	var x_max_n = Math.max(A[0], B[0], C[0], D[0]); 
	var y_min_n = Math.min(A[1], B[1], C[1], D[1]); 
	var y_max_n = Math.max(A[1], B[1], C[1], D[1]); 

	this.x = x_min_n; 
	this.x_size = (x_max_n - x_min_n); 
	this.y = y_min_n; 
	this.y_size = (y_max_n - y_min_n); 

	return this; 
}

Room.prototype.coordinateTranslate = function(x, y){
	//translates the coordinates by (x, y)
	this.x += x; 
	this.y += y; 
	return this; 
}

//special: room matching for search
Room.prototype.matches = function(query){
	var query = jQuery.isArray(query)?query:[query]; 
	var floorName = this.getBlock().name || ""; 
	var blockName = this.getBlock().name || ""; 
	var buildingName = this.getBuilding().name; 

	if(this.type !== "student" && this.type !== "kitchen" && !this.force_search){
		//only match student rooms
		return false; 
	}

	for(var i=0;i<query.length;i++){
		var q = query[i]; 
		if(q.length < 3){
			continue; 
		}

		if(
			util.matches(q, this.name) || 
			util.matches(q, this.id) ||
			util.matches(q, floorName) ||
			util.matches(q, blockName) ||
			util.matches(q, buildingName)
		){
			return true; 
		}
	}

	return false; 
}




//export
Room.prototype.toArray = function(){
	//[x, y, x_size, y_size, name, id, type, search_force_include]
	return [
		this.x, 
		this.y,
		this.x_size,
		this.y_size,
		this.name, 
		this.id,
		this.type,
		this.force_search?true:false
	]
}