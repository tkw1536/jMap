var gui = {};

gui.renderPerson = function(person){
	window.top.bridge(function(b){
		b.setPersonRenderState(person); 
	})
	alert(JSON.stringify(person)); 
}