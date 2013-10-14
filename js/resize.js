$(function(){
	$(window).resize(function(){

		$("frame").css({"height": $(window).height()}); 

		for(var i=0;i<window.frames.length;i++){
			var targetWin = window.frames[i]; 
			targetWin.jQuery(targetWin).resize(); 
		}
	})
})