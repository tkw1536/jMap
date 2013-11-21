var stats = function(cb, cb2){
	return (function(Floor){
		var x = []; 

		for(var i=0;i<Floor.length;i++){
			x.push(cb.call(Floor, Floor[i], x)); 
		}

		return cb2(x); 
	}); 
}

stats.getMaxX = stats(function(room){
	return Math.max(room[0], room[0]+room[2]); 
}, function(a){return Math.max.apply(undefined, a); });

stats.getMinX = stats(function(room){
	return Math.min(room[0], room[0]+room[2]); 
}, function(a){return Math.min.apply(undefined, a); });

stats.getMaxY = stats(function(room){
	return Math.max(room[1], room[1]+room[3]); 
}, function(a){return Math.max.apply(undefined, a); });

stats.getMinY = stats(function(room){
	return Math.min(room[1], room[1]+room[3]); 
}, function(a){return Math.min.apply(undefined, a); });

stats.getScale = function(min, max, size, margin){
	return (size - 2*margin)/(max-min);
}

stats.getOrigin = function(scale, min, max, margin){
	return -(scale*min)+margin;
};
stats.findFrameSize = function(){
	return [
		$("body").width(),
		$("body").height()
	]
}

stats.findScale = function(m_x, m_y, rooms){
	var size = stats.findFrameSize();

	var x_scale = stats.getScale(stats.getMinX(rooms), stats.getMaxX(rooms), size[0], m_x);
	var y_scale = stats.getScale(stats.getMinY(rooms), stats.getMaxY(rooms), size[1], m_y);

	return Math.floor(Math.min(x_scale, y_scale));
}

stats.findOrigin = function(m_x, m_y, rooms){
	var scale = stats.findScale(m_x, m_y, rooms);
	var size = stats.findFrameSize();

	return [
		stats.getOrigin(scale, stats.getMinX(rooms), stats.getMaxX(rooms), m_x), 
		stats.getOrigin(scale, stats.getMinY(rooms), stats.getMaxY(rooms), m_y)
	];
}