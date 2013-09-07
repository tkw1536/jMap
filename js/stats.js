var stats = function(cb){
	return (function(i){
		var x = []; 
		var Floor = Floors[i][1]; 

		for(var i=0;i<Floor.length;i++){
			x.push(cb.call(Floor, Floor[i], x)); 
		}

		return x; 
	}); 
}

stats.getMaxX = stats(function(room){
	return Math.max(room[0], room[0]+room[2]); 
});

stats.getMinX = stats(function(room){
	return Math.min(room[0], room[0]+room[2]); 
});

stats.getMaxY = stats(function(room){
	return Math.max(room[1], room[1]+room[3]); 
});

stats.getMinY = stats(function(room){
	return Math.min(room[1], room[1]+room[3]); 
});


stats.getX = function(i){
	return [
		Math.min.apply(Math, stats.getMinX(i)),
		Math.max.apply(Math, stats.getMaxX(i))
	]; 
};

stats.getY = function(i){
	return [
		Math.min.apply(Math, stats.getMinY(i)),
		Math.max.apply(Math, stats.getMaxY(i))
	]; 
}

stats.getBestXSize = function(i, frameX){
	var size = stats.getX(i);
	return (frameX / (size[1] - size[0]) ); 
}; 

stats.getBestYSize = function(i, frameY){
	var size = stats.getY(i);
	return (frameY / (size[1] - size[0]) ); 
}; 