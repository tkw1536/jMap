var gui = {};

gui.init = function(){
	//load the settings
	window.parent.bridge(function(b, w){
		$("#force-imgs").bootstrapSwitch('setState', b.getForceImages()); 
		$("#force-imgs").on('switch-change', function(e, data){
			b.setForceImages(data.value);  
		});

		$("#cook-eggs").bootstrapSwitch('setState', !w.eggs.cooked); 
		$("#cook-eggs").on('switch-change', function(e, data){
			w.eggs.cooked = !data.value; 
		});

		$("#eggs").click(function(){
			w.jQuery("iframe").remove();
		})
	}); 

}