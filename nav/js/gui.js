var gui = {};

gui.makeSearch = function(query){
	if(gui.externalMode){
		// gui.renderRoomResults(); 
		gui.renderExternalModeMessage(); 
	} else {
		// Internal mdeo we have jPeople access
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
		// code to show person in main
	})
}

gui.renderPeopleResults = function(people){

	var resultList = gui.clear(); 
	for(var i=0;i<people.length;i++){
		(function(person){
			$("<a href='#'>").addClass("list-group-item")
			.click(function(){
				gui.showRoom(person.room); 
				return false; 
			})
			.append(
				$("<h4>").addClass("list-group-item-heading pull-right").text(person["lname"]+", "+person["fname"]), 
				$("<div>").addClass("list-group-item-text").append(
					$("<img>").attr("src",person.photo).width(42).height(56)
				//	$("<span class='pull-right'>").text(person.majorlong + ", "+ person.country), 
					
				)
			)
			.appendTo(resultList); 
		})(people[i]); 
    }
}

gui.renderRoomResults = function(rooms){

	var resultList = gui.clear(); 
	for(var i=0;i<rooms.length;i++){
		(function(room){
			$("<a href='#'>").addClass("list-group-item")
			.click(function(){
				gui.showRoom(rooms.id); 
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