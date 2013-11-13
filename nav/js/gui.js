var gui = {};

gui.makeSearch = function(query){
	if(gui.externalMode){
		gui.searchRoomExternal(query, function(res){
			gui.renderRoomResults(res);
		}); 
	} else {
		// Internally we have jPeople access
		jpeople.search(query, function(res){
			$("#welcomeresult").remove(); 
			if(res){
				gui.renderPeopleResults(res); 
			} else {
				gui.clear();
			}
		}); 
	}
	
	
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
	window.parent.renderer.loadRemote("renderer", function(){
		console.log(this.gui); 
		this.gui.showPerson(data); 
	})
}

gui.renderPeopleResults = function(people){

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

gui.searchRoomExternal = function(query, callback){
	//search rooms database

	window.parent.renderer.loadRemote("renderer", function(){

		if(query.length < 3){
			return; 
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

gui.renderExternalModeMessage = function(){
	$("<a href='#'>").addClass("list-group-item")
	.click(function(){
		gui.showRoom(person.room); 
		return false; 
	})
	.append(
		$("<h4>").addClass("list-group-item-heading").text("External Mode"), 
		$("<div>").addClass("list-group-item-text").text("You are not in the Jacobs University network. You will not be able to search (for now). ")
		)
	.appendTo(gui.clear()); 
}


gui.clear = function(){
	return $("#results").empty(); 
}

gui.init = function(ext){

	gui.externalMode = ext; 

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