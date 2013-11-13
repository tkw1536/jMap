$(function(){

	window.jpeople_server_hack = window.location.hostname; //TODO: Remove this when publishing


	function check_external_image(callback){
		//Check if we are in the Jacobs University network
		var test = $("<img/>")
		.on("error", function(){
			test.off("error").off("load"); 
			callback(false); 
		})
		.on("load", function(){
			test.off("error").off("load"); 
			callback(true); 
		})
		.attr("src", "http://jpeople.user.jacobs-university.de/utils/images/37917.jpg"); 
	}

	function check_external_query(callback){
		jpeople.search("", function(res){
			callback(res !== false); 
		})
	}

	check_external_query(function(s){
		var s = !s; 
		if(s){
			gui.renderExternalModeMessage(); //we are external
		}
		gui.init(s)
	}); 

	
})