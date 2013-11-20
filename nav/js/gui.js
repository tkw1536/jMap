//from: http://remysharp.com/2010/07/21/throttling-function-calls/
function debounce(fn, delay) {
	var timer = null;
	return function () {
		var context = this, args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
}


var gui = {};

gui.makeSearch = debounce(function(query){
	if(gui.externalMode){
		gui.searchRoomsExternal(query.split(";"), function(res){
			gui.renderRoomResults(res);
		}); 
	} else {
		// Internally we have jPeople access
		gui.searchJPeople(query.split(";"), function(res){
			$("#welcomeresult").remove(); 

			gui.renderPeopleResults(res); 
		}); 
	}
}, 250); 

gui.searchJPeople = function(persons, callback){
	var i=0; 
	var results = []; 
	var next = function(){
		if(i<persons.length){
			if((!persons[i] || /^\s*$/.test(persons[i]))){
				i++; 
				return next(); 
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

gui.showRoom = function(id){
	window.parent.renderer.loadRemote("renderer", function(){
		var res = this.gui.renderRoomById(id, true);

		if(!res){
			this.gui.showNotFoundMsg(); 
		}
	}); 
}

gui.showPerson = function(data){
	var state = false;

	var next = function(){
		window.parent.renderer.loadRemote("people-renderer", function(win){
			win.render.prevRenderState = state; 
			win.render.renderPerson(data); 
		}); 
	}

	if(window.parent.renderer.loadRemote.providerName == "renderer"){
		//If the renderer is currently loaded, save its state
		window.parent.renderer.loadRemote("renderer", function(win){
			var state = win.gui.getRenderState(); 
			next(); 
		});
	} else {
		next(); 
	}
}

gui.renderPeopleResults = function(people){

	if(!people){
		return gui.renderModeMessage(); 
	}

	var resultList = gui.clear(); 
	for(var i=0;i<people.length;i++){
		(function(person){
			$("<a href='#'>").addClass("list-group-item")
			.click(function(){gui.showPerson(person); return false; })
			.append(
				$("<h4>").addClass("list-group-item-heading pull-right").text(person["lname"]+", "+person["fname"])
				.click(function(){gui.showPerson(person); return false;  }), 
				$("<div>").addClass("list-group-item-text").append(
					$("<img>").attr("src",person.photo).width(42).height(56)
					.click(function(){
					gui.showRoom(person.room); 
					return false; 
				})
				)
				)
			.appendTo(resultList); 
		})(people[i]); 
	}
}
gui.searchRoomsExternal = function(persons, callback){
	var i=0; 
	var results = []; 
	var next = function(){
		if(i<persons.length){
			if((!persons[i] || /^\s*$/.test(persons[i]))){
				i++; 
				return next(); 
			}
			gui.searchRoomExternal(persons[i].trim(), function(res){
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
gui.searchRoomExternal = function(query, callback){
	//search rooms database

	window.parent.renderer.loadRemote("renderer", function(){

		if(query.length < 3){
			return callback(false);
		}

		var win = this; 
		var results = []; 

		//match a string
		var matches = function(q, str){
			if(typeof str == "string"){
				return (str.toLowerCase().indexOf(q.toLowerCase()) !== -1); 
			} else if(typeof str !== "undefined"){
				try{
					for(var i=0;i<str.length;i++){
						if(matches(q, str[i])){
							return true; 
						}
					}
				} catch(e){}
				return false; 
			} else {
				return false; 
			}
		}

		var matchesW = function(q, str){
			var res = (matches(q, str) || matches(q.split(" ").join("-"), str)); 
			return res; 
		}

		var data = this.Data.iterateRooms(function(room, i, j){
			//do stuff here
			//search for query somehow
			if(matchesW(query, room[4]) || matchesW(query, room[5]) || matchesW(query, room[6]) || matchesW(query, win.Buildings[i][0])){
				results.push(
				{
					"id": (typeof room[5] !== "undefined")?room[5][0]:undefined, 
					"name": room[4], 
					"building": win.Buildings[i][0], 
					"floor": win.Buildings[i][1][j][0]
				})
			}
		}); 

		callback(results); 

	}); 
}

gui.renderRoomResults = function(rooms){

	if(!rooms){
		return gui.renderModeMessage(); 
	}

	var resultList = gui.clear(); 
	for(var i=0;i<rooms.length;i++){
		(function(room){
			$("<a href='#'>").addClass("list-group-item")
			.click(function(){
				gui.showRoom(room.id); 
				return false; 
			})
			.append(
				$("<h4>").addClass("list-group-item-heading pull-right").text(room.name), 
				$("<div>").addClass("list-group-item-text")
				.text(room.building+", "+room.floor)
				)
			.appendTo(resultList); 
		})(rooms[i]); 
	}
}

gui.renderModeMessage = function(){
	var m = $("<a href='#'>").addClass("list-group-item")
	.click(function(){
		return false; 
	})

	if(gui.externalMode && !gui.canInternalMode){

		m.append(
			$("<h4>").addClass("list-group-item-heading").text("External Mode"), 
			$("<div>").addClass("list-group-item-text").text("You are not in the Jacobs University network. You can only search for rooms. ")
		)
	} else if(gui.externalMode){
		m.append(
			$("<h4>").addClass("list-group-item-heading").text("Room search mode"), 
			$("<div>").addClass("list-group-item-text").text("click to switch to full search mode")
		).click(function(){
			gui.externalMode = false; 
			$("#peoplesearch").keyup(); //update searcg
		})
	} else {
		m.append(
			$("<h4>").addClass("list-group-item-heading").text("Full search mode"), 
			$("<div>").addClass("list-group-item-text").text("click to switch to room search mode")
		).click(function(){
			gui.externalMode = true; 
			$("#peoplesearch").keyup(); //update searcg
		})
	}
	return m.appendTo(gui.clear()); 
}


gui.clear = function(){
	return $("#results").empty(); 
}

gui.init = function(ext){

	gui.externalMode = ext;
	gui.canInternalMode = !ext; 

	gui.renderModeMessage();

	$("#searchform").submit(function(){
		gui.makeSearch($("#peoplesearch").val()); 
		return false; 
	}); 

	$("#welcomeresult").click(function(){
		return false; 
	});

	$("#peoplesearch").bind("keyup input paste", function(){
		gui.makeSearch($("#peoplesearch").val()); 
	});
}