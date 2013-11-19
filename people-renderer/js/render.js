var render = {};

render.prevRenderState = JSON.stringify({
		"build": 0, 
		"floor": 0, 
		"flash": undefined
});

render.resumeRoomRenderer = function(){
	window.loadRemote("renderer", function(win){
		win.gui.setRenderState(render.prevRenderState); 
	})
};  

render.renderPerson = function(person){
	alert(person); //TODO: Make an actual person rendering
}