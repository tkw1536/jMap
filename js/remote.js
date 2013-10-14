window.loadRemote = function(providerName){
	window.loadRemote = function(name, callback){

		var callback = (typeof callback == "function")?callback:function(){}; 
		if(name == providerName){
			$(function(){
				callback.call(window, window);
			});
		} else {

			var frameName = window.name; 
			var parent = window.parent; 

			parent.document.getElementsByName(frameName)[0].onload = function(){ 

				parent[frameName].loadRemote(name, callback); 
				parent.document.getElementsByName(frameName)[0].onload = function(){}; //Unregister onload event
			}

			location.href = "../"+name+"/index.html"; 
		}
	};
}