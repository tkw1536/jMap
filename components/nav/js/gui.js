var gui = {};
gui.ready = false; 

gui.makeSearch = function(query){
	if(gui.externalMode){
		window.parent.bridge(function(b){
			b.searchMapData(query.split(";"), function(res){
				gui.renderRoomResults(res);
			}); 
		});
	} else {
		// Internally we have jPeople access
		window.parent.bridge(function(b){
			b.searchJPeople(query.split(";"), function(res){
				gui.renderPeopleResults(res); 
			});
		}); 
	}
}

gui.showRoom = function(id){
	window.parent.bridge(function(b){
		b.renderRoomById(id[0]); 
	});
}

gui.showPerson = function(data){
	//show person via bridge
	window.parent.bridge(function(b){
		b.renderPerson(data); 
	});
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
					gui.showRoom(person.room[0]); 
					return false; 
				})
				)
				)
			.appendTo(resultList); 
		})(people[i]); 
	}
}

//render the room results
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
				.text(room.getBuilding().getName()+", "+room.getBlock().getName()+", "+room.getFloor().getName())
				)
			.appendTo(resultList); 
		})(rooms[i]); 
	}
}


//Mode Switching
gui.renderModeMessage = function(){
	var m = $("<a href='#' target='_parent'>").addClass("list-group-item"); 

	if(gui.externalMode && !gui.canInternalMode){

		m
		.append(
			$("<h4>").addClass("list-group-item-heading").text("External Mode"), 
			$("<div>").addClass("list-group-item-text").text("You are not logged in. You can only search for rooms. Click here to login. ")
		)
		.attr("href", "/login.php"); 
	} else if(gui.externalMode){
		m.append(
			$("<h4>").addClass("list-group-item-heading").text("Room search mode"), 
			$("<div>").addClass("list-group-item-text").text("click to switch to full search mode")
		).click(function(){
			gui.externalMode = false; 
			$("#peoplesearch").keyup(); //update search
			return false; 
		})
	} else {
		m.append(
			$("<h4>").addClass("list-group-item-heading").text("Full search mode"), 
			$("<div>").addClass("list-group-item-text").text("click to switch to room search mode")
		).click(function(){
			gui.externalMode = true; 
			$("#peoplesearch").keyup(); //update search
			return false; 
		})
	}

	var g = gui.clear(); 

	m.appendTo(g)
	
	return g
	.append(
		$("#copynotice").clone().removeClass("hidden")
		.click(function(){
			window.parent.bridge(function(b){
				b.setRenderer("about"); 
			})
		})
	);
}


//Gerneral
gui.clear = function(){
	return $("#results").empty(); 
}

gui.setSearchString = function(str){
	$("#peoplesearch").val(str);

	if(gui.ready){
		gui.makeSearch($("#peoplesearch").val());
	}
	 
}

gui.init = function(ext){
	var debounce_time = 250; 

	gui.ready = true; 

	gui.externalMode = ext;
	gui.canInternalMode = !ext; 

	gui.renderModeMessage();

	$("#searchform").submit(util.debounce(function(){
		gui.makeSearch($("#peoplesearch").val()); 
	}, debounce_time, false)); 

	$("#peoplesearch").bind("keyup input paste", util.debounce(function(){
		gui.makeSearch($("#peoplesearch").val()); 
	}, debounce_time));

	
	window.setTimeout(function(){
		gui.makeSearch($("#peoplesearch").val());
	}, debounce_time); 
}