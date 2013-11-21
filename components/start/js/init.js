$(function(){
	$("<a href='#'>").click(function(){
		window.loadRemote("map-renderer"); 
		return false; 
	}).text("Start rendering! ").appendTo("body"); 
});