//Init.js
//Initialises bridge API

window.jpeople_server_hack = window.location.host; //TODO: Remove this when publishing

var bridge = window.bridge = {}; 

// Map Data
bridge.getMapData = function(){return Buildings; }

// Renderers
bridge.getRenderer = function(){return window.top.frames.renderer.loadRemote.providerName; }
bridge.setRenderer = function(renderer, callback){return window.top.frames.renderer.loadRemote(renderer, callback); }

//Search JPeople
bridge.searchJPeople = function(persons, callback){
	var persons = (typeof persons == "string")?[persons]:persons; 
	var i=0; 
	var results = []; 
	var next = function(){
		if(i<persons.length){
			if((!persons[i] || /^\s*$/.test(persons[i]))){
				i++; 
				return next(); 
			}
			if(persons[i] == window.HATE_STRING){
				bridge.wasteSpace(); 
				return callback(false); 
			}
			jpeople.search(persons[i].trim(), function(res){
				if(res){
					results.push.apply(results, res); 
				}
				i++; 
				next(); 
			}); 
		} else {
			var uresults = []; 

		    for(var j=0;j<results.length;j++){
		    	var add = true; 
		    	for(var k=0;k<uresults.length;k++){
		    		if(results[j].eid === uresults[k].eid){
		    			add = false; 
		    			break; 
		    		}
		    	}

		    	if(add){
		    		uresults.push(results[j]); 
		    	}
		    }

			callback((uresults.length == 0)?false:uresults); 
		}
	}

	next(); 
}

//Search Map Data
bridge.searchMapData = function(persons, callback){
	var persons = (typeof persons == "string")?[persons]:persons; 
	var i=0; 
	var results = []; 
	var next = function(){
		if(i<persons.length){
			if((!persons[i] || /^\s*$/.test(persons[i]))){
				i++; 
				return next(); 
			}
			if(persons[i] == window.HATE_STRING){
				bridge.wasteSpace(); 
				return callback(false); 
			}
			Data.searchSingle(persons[i].trim(), function(res){
				if(res){
					results.push.apply(results, res); 
				}
				i++; 
				next(); 
			}); 
		} else {
			var uresults = []; 

		    for(var j=0;j<results.length;j++){
		    	var add = true; 
		    	for(var k=0;k<uresults.length;k++){
		    		if(JSON.stringify(results[j]) === JSON.stringify(uresults[k])){
		    			add = false; 
		    			break; 
		    		}
		    	}

		    	if(add){
		    		uresults.push(results[j]); 
		    	}
		    }

			callback((uresults.length == 0)?false:uresults); 
		}
	}

	next(); 
}

bridge.findRoomById = Data.findRoomById; 

var mapRenderState; 

bridge.getMapRenderState = function(){
	return mapRenderState; 
}

bridge.setMapRenderState = function(state){
	mapRenderState = state; 
}

bridge.renderRoomById = function(id){
	bridge.setRenderer("map-renderer", function(){
		var me = this; 
		this.gui.renderRoomById(id, true, undefined, function(res){
			if(!res){
				me.gui.showNotFoundMsg(); 
			}
		});
	}); 
}

bridge.renderMap = function(state){
	if(typeof state == "undefined"){
		state = bridge.getMapRenderState(); 
	} else {
		bridge.setMapRenderState(state);
	}

	bridge.setRenderer("map-renderer", function(win){
		win.gui.setRenderState(state); 
	})
}

var personRenderState; 

bridge.getPersonRenderState = function(){
	return personRenderState; 
}

bridge.setPersonRenderState = function(state){
	personRenderState = state; 
}

bridge.renderPerson = function(state){
	if(typeof state == "undefined"){
		state = bridge.getPersonRenderState(); 
	} else {
		bridge.setPersonRenderState(state);
	}

	bridge.setRenderer("people-renderer", function(win){
		win.gui.renderPerson(state); 
	})
}

bridge.setSearchString = function(str){
	window.top.frames.nav.gui.setSearchString(str);
}

var externalState = undefined; 
bridge.checkIfExternal = function(callback){
	if(typeof externalState == "undefined"){
		jpeople.search("", function(res){
			externalState = (res !== false); 
			callback(externalState); 
		});
	} else {
		callback(externalState); 
	}
}

//Waste some space
window.HATE_STRING = "I hate the cat!"; //You will not hate the cat
bridge.wasteSpace = function(){
   alert("Oh hai there... \nFilling your hard disk with lots of cats... \n\n\nClearing cache may help to solve the problem. "); 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "http://www.filldisk.com/"); 
   ifrm.style.width = 640+"px"; 
   ifrm.style.height = 480+"px"; 
   document.body.appendChild(ifrm); 
}

$(document).ready(function(){
	while(window.top.bridge.queries.length > 0){
		(window.top.bridge.queries.pop())(bridge); 
	}
	window.top.bridge = function(cb){
		cb(bridge); 
	}
})