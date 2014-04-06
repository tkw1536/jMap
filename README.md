# jMap

This is a project which provides an interactive map of Jacobs University Bremen. It is an upgrade of the pre-existing jPeople by Stefan Mirea, as it provides a visulaiztion of room data. i.e. it has maps.

See the demo at http://tkw1536.github.io/jMap/ (external mode only)

## How it works

* Has three frames: 
	* `nav`: navigation
	* `renderer`: renders map
	* `bridge`: Serves as a bridge between other frames
	* some eastereggs (spoilers??? you have been warned)

## Data Structure

Sample data for buildings can be found in data/99_sample*.js. 

## License

Notice we are currently updating the license. 

All files in this project, with the exception of the files: 

* data/01_krupp.js
* data/02_mercator.js
* data/03_collegethree.js
* data/04_nordmetall.js

are licensed under [MIT](LICENSE.text) &copy; 2013-14 Tom Wiesing and Sourabh Lal

Those files are licensed under the following terms: 

```
(c) 2013-14 Tom Wiesing and Sourabh Lal

You may use the files data/01_krupp.js, data/02_mercator.js, data/03_collegethree.js, data/04_nordmetall.js only with explicit permissions from the copyright holders. This grant may or may not impose further restrictions on the use of those files. 
```

This project contains the following libraries: 

* [Bootstrap](http://getbootstrap.com/) 3.0.2, &copy; 2013 Twitter, which is licensed under [Apache 2 license](libs/bootstrap/LICENSE)
* [jQuery](http://jquery.com/) 2.0.3, &copy; 2013 jQuery Foundation and other contributors, which is licensed under [MIT License](libs/jquery/MIT-LICENSE.txt)
* [jquery.nicescroll](http://github.com/inuyaksa/jquery.nicescroll/) 3.5.4, &copy; 2011-13 InuYaksa, which is licensed under [MIT License](libs/jquery.nicescroll/MIT.LICENSE)
* [Bootstrap switch](http://github.com/nostalgiaz/bootstrap-switch/) 1.9.0 by @SpiritualGuru and @BdMdesigN, which is licensed under [Apache 2 license](libs/bootstrap-switch/LICENSE)
