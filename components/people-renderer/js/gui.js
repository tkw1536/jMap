var gui = {};

gui.renderPerson = function(person){
	if(typeof person == "undefined"){
		return gui.showMessage(); 
	}
	window.parent.bridge(function(b){
		b.setPersonRenderState(person); 
	})
	$("#content").text(JSON.stringify(person)); 
}

gui.showMessage = function(){
	return $("#content").text("Please search a person on the left. Thanks. "); 
}