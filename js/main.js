//We do not support file
if(location.protocol == "file:"){
	location.href = "components/misc/file.html"; 
}

//Parse array parameters

var renderParam = location.hash.substring(1);
if(renderParam !== ""){
	window.bridge(function(b, me){
		util.once(function(){
			return me.buildingLoadReady; 
		}, function(){
			var i = renderParam.indexOf("/"); 
			if(i !== -1){
				var building = renderParam.substring(0, i); 
				var floor = parseInt(renderParam.substring(i+1))-1; 

				b.renderMap({
					"build": building, 
					"floor": floor,
					"flash": undefined
				}); 
			} else {
				b.renderRoomById(renderParam);
			}
		}); 
	}); 
}

var searchParam = unescape(location.search.substring(1)); 
if(searchParam !== ""){
	window.bridge(function(b){
		b.setSearchString(searchParam);  //search for the given person
	})
}