//We do not support file
if(location.protocol == "file:"){
	location.href = "components/misc/file.html"; 
}

var renderParam = location.hash.substring(1);
if(renderParam !== ""){
	window.bridge(function(b, me){
		util.once(function(){
			return me.buildingLoadReady; 
		}, function(){
			console.log("Unsupported!")
		}); 
	}); 
}

var searchParam = unescape(location.search.substring(1)); 
if(searchParam !== ""){
	window.bridge(function(b){
		b.setSearchString(searchParam);  //search for the given person
	})
}

$(function(){
	window.frames["renderer"].location.href = util.resolve("components/start/index.html"); 
	//force the start page as location in the renderer
})