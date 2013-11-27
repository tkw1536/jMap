(function(){
	var providerName = location.pathname.split("/"); 
	providerName = providerName[(providerName[providerName.length-1]=="" || providerName[providerName.length-1]=="index.html")?(providerName.length-2):(providerName.length-1)]

	window.loadRemote = function(name, callback){
		var callback = (typeof callback == "function")?callback:function(){}; 
		if(name == providerName){
			$(function(){
				callback.call(window, window);
			});
		} else {

			var frameName = window.name; 
			var parent = window.parent; 

			var frameElem = parent.$(parent.document.getElementsByName(frameName)[0]); 

			frameElem.one("load", function(){ 
				parent[frameName].loadRemote(name, callback); 	
			}); 

			location.href = "../"+name+"/index.html"; 
		}
	};

	window.loadRemote.providerName = providerName; 
})();