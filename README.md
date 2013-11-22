# CollegeMap

This is a project which provides an interactive map of the college I live in. Done together with my roommate. 

See the demo at http://w1536.tk/CollegeMap/ (external mdoe only)

## How it works

* Has three frames: 
	* `nav`: navigation
	* `renderer`: renders map
	* `bridge`: Serves as a bridge between other frames
	* some eastereggs

## Bridge API

```js
	//Access:
	window.top.bridge(function(bridge){
		//Do stuff here
	})
```

* `bridge.getRenderer()`
* `bridge.setRenderer(renderer, callback)`

* `bridge.getMapData()`

* `bridge.searchMapData(queries, callback)`
* `bridge.searchJPeople(queries, callback)`

* `bridge.checkIfExternal(callback)`

* `bridge.getMapRenderState()`
* `bridge.setMapRenderState(state)`
* `bridge.renderMap([state])`

* `bridge.getPersonRenderState()`
* `bridge.setPersonRenderState(person)`
* `bridge.renderPerson([person])` - Switch to render the given person or saved person render State

## License

&copy; 2013 Tom Wiesing and Sourabh Lal, licensed under [MIT](LICENSE)

This project contains the following libraries: 

* [Bootstrap](http://getbootstrap.com/) 3.0.2, &copy; 2013 Twitter, which is licensed under [Apache 2 license](libs/bootstrap/LICENSE)
* [jQuery](http://jquery.com/) 2.0.3, &copy; 2013 jQuery Foundation and other contributors, which is licensed under [MIT License](libs/jquery/MIT-LICENSE.txt)