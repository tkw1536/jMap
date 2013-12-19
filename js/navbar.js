var nbar = undefined; 

$(function(){
	//Init the navbar here
	nbar = $("<ul>").addClass("nav nav-tabs").appendTo(
		$("<div>").addClass("container bar").prependTo("body")
	);

	var entries = $('<li class="dropdown main active"><a class="dropdown-toggle" data-toggle="dropdown" href="#" style="width: 100px; ">Loading ...<span class="caret"></span></a></li>')
	.appendTo(nbar); 

	var menu = $('<ul class="dropdown-menu" role="menu">').appendTo(entries); 

	window.parent.bridge(function(bridge){
		menu.append(
			$("<li id='menuitem-start'>").append($("<a href='#'>").text("Start").click(function(){window.loadRemote("start"); })), 

			$("<li id='menuitem-map-renderer'>").append($("<a href='#'>").text("Map").click(function(){
				bridge.renderMap(); 
			}))
		);

		bridge.checkIfExternal(function(s){
			if(s){
				menu.append(
					$("<li id='menuitem-people-renderer'>").append($("<a href='#'>").text("Person").click(function(){
						bridge.renderPerson(); 
					}))
				);
			}

			menu.append(
				$("<li id='menuitem-about'>").append($("<a href='#'>").text("About").click(function(){window.loadRemote("about"); }))
			);

		}); 

		var id = $(document.getElementById("menuitem-"+window.loadRemote.providerName));

		entries.find("a").eq(0).text(id.addClass("disabled").find("a").text()).append("<span class='caret'></span>");
	}); 
})

window.navbar = {}; 

window.navbar.add = function(elem){
	$(elem).detach().appendTo(nbar); //Add stuff to the navbar
}