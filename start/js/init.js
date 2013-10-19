$(function(){
	
	$("<a href='#'>").click(function(){
		window.loadRemote("renderer"); 
		return false; 
	}).text("Start rendering! ").appendTo("body"); 
});

