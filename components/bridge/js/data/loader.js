var RenderData = new MapData(); 

var finishedLoads = []; 
var loading = false; 

var buildingLoadReady = false; 

$.holdReady(true);

window.loadBuilding = function(JS_FILE_NAME, VARIABLE_NAME){
	buildingLoadReady = false; 

	//load the building
	if(loading){
		return finishedLoads.push(arguments); 
	} else {
		loading = true; 

		util.loadJS("../../data/"+JS_FILE_NAME, function(){
			RenderData.addBuilding(window[VARIABLE_NAME]); 

			loading = false; 
			if(finishedLoads.length > 0){
				window.loadBuilding.apply(window, finishedLoads.pop())
			} else {
				buildingLoadReady = true; 
			}
		});

	}
}

window.endBuildingLoad = function(){
	$.holdReady(false);
}