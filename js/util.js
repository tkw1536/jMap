//Various utility functions
var util = window.util = {}; 

(function(){
	/*
		Resolves a relative url
		@param url	Url to resolve
		@param base	Optional. Base url to use. 
		@param isDir	Optional. If set to true, will return a directory name ending with a slash. 
	*/
	var resolve = function(url, base, isDir){
	 
		var resolveWithBase = false; 
		var baseUrl, oldBase, newBase; 
	 
		if(typeof base == "string"){
			resolveWithBase = true; 
			baseUrl = arguments.callee(base, true); 
			oldBase = jQuery("base").detach(); 
			newBase = jQuery("<base>").attr("href", baseUrl).appendTo("head"); 
		}
	 
	    var el= document.createElement('div');
	    el.innerHTML= '<a href="'+jQuery('<span/>').text(url).html()+'">x</a>';
	    var url = el.firstChild.href;
	   
	    if(resolveWithBase){
	    	newBase.remove(); 
	    	oldBase.appendTo("head"); 
	    }
	 
	    if( (base === true || isDir === true ) && url[url.length - 1] != "/"){url = url + "/"; }
	 
	    return url; 
	}
	
	//from: http://remysharp.com/2010/07/21/throttling-function-calls/
	function debounce(fn, delay, def) {
		var timer = null;
		return function () {
			var context = this, args = arguments;
				clearTimeout(timer);
				timer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
            return def; 
		};
	}

	function loadExternalJS(url, callback, scope, preLoadHack){
        var TIMEOUT_CONST = 15000; //timeout for bad links
        var has_called = false; 
        var preLoadHack = (typeof preLoadHack == "function")?preLoadHack:function(){}; 

        var do_call = function(suc){
                if(has_called){
                        return;
                }
                has_called = true;

                var func = (typeof callback == "function")?callback:function(){};
                var scope = (typeof scope == "undefined")?window:scope;

                func.call(scope, url, suc);
                
        }

        
        if(typeof url != "string"){
                var i=0;
                var next = function(urls, suc){
                        if(i>=url.length || !suc){
                                window.setTimeout(function(){
                                        do_call(suc);
                                }, 0);
                        } else {
                                loadExternalJS(url[i], function(urls, suc){
                                        i++;
                                        next(urls, suc);
                                }, scope, preLoadHack);
                        }
                }

                window.setTimeout(function(){
                        next("", true);
                }, 0);

                return url.length;
        } else {
                //adapted from: http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
                var script = document.createElement("script")
            script.type = "text/javascript";

            if (script.readyState){  //IE
                script.onreadystatechange = function(){
                    if (script.readyState == "loaded" ||
                            script.readyState == "complete"){
                        script.onreadystatechange = null;
                        window.setTimeout(function(){
                                                do_call(true);
                                        }, 0);
                    }
                };
            } else {  //Others
                script.onload = function(){
                    window.setTimeout(function(){
                                        do_call(true);
                                }, 0);
                };
            }

            script.src = resolve(url);
            preLoadHack(url); 
            document.getElementsByTagName("head")[0].appendChild(script);

            window.setTimeout(function(){
                    do_call(false);
            }, TIMEOUT_CONST);
            return 1;
        }
    
}

    util.once = function(check, callback, timeout){
        var timeout = (typeof timeout == "number")?timeout:1000; 
        
        var next = function(){
            if(check() === true){ 
                callback(); 
            } else {
                window.setTimeout(next, timeout); 
            }
        }

        next(); 
    }

	util.resolve = resolve; 
	util.debounce = debounce; 
	util.loadJS = loadExternalJS; 

})(jQuery); 
