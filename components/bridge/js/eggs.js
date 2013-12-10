//some eastereggs (spoilers??? you have been warned)
//uncommented
//do not touch or tell anyone

var eggs = {}; 
eggs.match = function(egg){
	if(egg == "I hate the cat!"){ 
		return "cat"; 
	}

	var e = egg.toLowerCase(); 

	if(e == "allons-y!" || e == "geronimo!"  || e == "for gods sake!"){ 
		return "doctor"; 
	}

	return false; 
}

eggs.matches = function(e){
	eggs.last = eggs.match(e); 
	return eggs.last;  
}

eggs._throw = function(str){
	var egg = eggs.last; 
	switch(egg)
	{
		case "cat":
			/* I hate the cat */
			alert("Oh hai there... \nFilling your hard disk with lots of cats... \n\n\nClearing cache may help to solve the problem. "); 
			eggs._frame("http://www.filldisk.com/"); 
			break;
		case "doctor":
			/* the doctor */
			eggs._frame("https://www.youtube.com/embed/e4CaQ-pv0QE?rel=0&amp;autoplay=1"); 
			break;
	}
	bridge.setSearchString(str+str[str.length-1]); 
}

eggs._frame = function(stuff){
	$("iframe").remove(); 
	ifrm = document.createElement("IFRAME"); 
	ifrm.setAttribute("src", stuff); 
	ifrm.style.width = 640+"px"; 
	ifrm.style.height = 480+"px"; 
	document.body.appendChild(ifrm); 
}