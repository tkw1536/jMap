# jMap 2.0

This is the dev branch of JMap. It contains an almost complete rewrite of jMap, jMap 2.0. Really early phases of development as its an (almost complete) rewrite. 

## Directory Structure

* / index.html, readme, favicon
* /components/ JavScript files, sorted by purpose
* /pages/ All sub pages
* /data/ Data Files
* /lib/ JS / CSS Libraries
* /doc/ JavaScript documentation

## Documentation
Run 

```
rm -rf doc && jsdoc -r . README.md -d doc
```

to rebuild the documentation. 

## Requirements

* needs to run on a webserver
* any modern browser should work
* tested in Chrome

## Libraries

* jQuery
* Bootstrap
* Gridersize (written for this purpose)
* OpenJUB (--future--)