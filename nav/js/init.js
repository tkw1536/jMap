$(function(){

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

	window.jpeople_server_hack = window.location.hostname; //TODO: Remove this when publishing
})