var bridge = window.bridge = function(cb){
	bridge.queries.push(cb); 
}

bridge.queries = []; 