var gui = {};

gui.makeSearch = function(query){
	jpeople.search(query, function(res){
		$("#welcomeresult").remove(); 
		if(res){
			gui.renderResults(res); 
		} else {
			gui.clear();
		}
	})
}

gui.showRoom = function(id){
	window.parent.renderer.loadRemote("renderer", function(){
		var res = this.gui.renderRoomById(id, true);

		if(!res){
			this.gui.showNotFoundMsg(); 
		}
	}); 
}

gui.renderResults = function(people){

	var resultList = gui.clear(); 

	/*
		<a href="#" class="list-group-item" id="welcomeresult">
			<h4 class="list-group-item-heading">To get started</h4>
			<p class="list-group-item-text">select a room on the left or search for a person by typing in the box above</p>
		</a>
	*/

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


gui.clear = function(){
	return $("#results").empty(); 
}