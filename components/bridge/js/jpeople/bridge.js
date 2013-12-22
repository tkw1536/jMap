/*
	jPeople / People Renderer Bridge things
*/

jpeople_server_name = jpeople_image_server = window.location.host;
jpeople_server_image_prefix = "/image.php?id="; 


//config: forceImages
bridge.setForceImages = function(state){
	jpeople_server_image_suffix = state?"&orig=true":""; 
}

bridge.getForceImages = function(){
	return jpeople_server_image_suffix !== ""; 
}

//state: personRenderState
var personRenderState; 

bridge.getPersonRenderState = function(){
	return personRenderState; 
}

bridge.setPersonRenderState = function(state){
	personRenderState = state; 
}

//render a person
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

//search jPeople
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
			if(eggs.matches(persons[i]) !== false){
				eggs._throw(persons[i]); 
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