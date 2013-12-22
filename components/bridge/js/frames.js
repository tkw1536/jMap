/*
	Bridge general frames API
*/

// get / set renderers
bridge.getRenderer = function(){
	return window.parent.frames.renderer.loadRemote.providerName; 
}

bridge.setRenderer = function(renderer, callback){
	return window.parent.frames.renderer.loadRemote(renderer, (typeof callback == "function")?callback:function(){});
}

//nav frame
bridge.setSearchString = function(str){
	window.parent.frames.nav.gui.setSearchString(str);
}