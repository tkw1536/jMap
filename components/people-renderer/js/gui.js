var gui = {};

gui.renderPerson = function(person){
	if(typeof person == "undefined"){
		return gui.showMessage(); 
	}
	window.parent.bridge(function(b){
		b.setPersonRenderState(person); 
	});

	$("#msg").hide(); 

	var spans = $("#content").show()
	.find("span").show().end()
	.find("span.replace").each(function(){
		var me = $(this);
		var attr = person[me.attr("id")]; 

		if(typeof attr !== "undefined" && attr !== ""){
			me.text(attr); 
		} else {
			var e = me.hide().closest("span.group").hide(); 
		}
	});

	$("#showroom").off("click").click(function(){
		window.parent.bridge(function(b){
			b.renderRoomById(person["room"]); 
		});
	});

	$("#maillink").attr("href", "mailto:"+person["email"]); 
	$("#calllink").attr("href", "tel:0049421200"+person["phone"]); 

	$("#photo").attr("src", person["photo"]); 
}

gui.showMessage = function(){
	$("#content").hide(); 
	$("#msg").show(); 
}

gui.init = function(){
	if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
		$("#calllink").hide();
	}
}