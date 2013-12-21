/* 
	Stats Functions
	Compute optimal render sizes
*/

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
	var s = (size - margin)/(max-min);
	return (s>=1)?s:1; //scale at least 1
}

stats.getOrigin = function(scale, min, max, margin_1, margin_2){
	return -(scale*min)+margin_1;
};
stats.findFrameSize = function(){
	return [
		$("body").width(),
		$("body").height()
	]
}

stats.findScale = function(m_x_1, m_x_2, m_y_1, m_y_2, rooms){
	var m_x = m_x_1 + m_x_2; 
	var m_y = m_y_1 + m_y_2; 


	var size = stats.findFrameSize();

	var x_scale = stats.getScale(stats.getMinX(rooms), stats.getMaxX(rooms), size[0], m_x);
	var y_scale = stats.getScale(stats.getMinY(rooms), stats.getMaxY(rooms), size[1], m_y);

	return Math.floor(Math.min(x_scale, y_scale));
}

stats.findOrigin = function(m_x_1, m_x_2, m_y_1, m_y_2, rooms){
	var scale = stats.findScale(m_x_1, m_x_2, m_y_1, m_y_2, rooms);
	var size = stats.findFrameSize();

	return [
		stats.getOrigin(scale, stats.getMinX(rooms), stats.getMaxX(rooms), m_x_1, m_x_2), 
		stats.getOrigin(scale, stats.getMinY(rooms), stats.getMaxY(rooms), m_y_1, m_y_2)
	];
}