//Init.js
//Initialises bridge API

var bridge = window.bridge = {}; 

$(document).ready(function(){
	while(window.parent.bridge.queries.length > 0){
		(window.parent.bridge.queries.pop()).call(window, bridge, window); 
	}
	window.parent.bridge = function(cb){
		cb.call(window, bridge, window); 
	}
}); 