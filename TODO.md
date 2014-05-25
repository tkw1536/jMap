# Preliminary TODO List


# Components API

jMap.components._registry // The registry
jMap.components.register(name, frameId, defaultData); //just registers a component from main
jMap.components.load(name, data = default Data); //load the given data

## Loader
* load /pages/$name
* window.postMessage("componentLoadData", data); => shoudl render the data

## Inside components

* Component.name; 
* do all kinds of funky init stuff
* window.parent.postMessage("componentInitFinished", componentObjectRef); 

# Map API

jMap.map._data
jMap.map.createBuilding(name, mname); //create a building with the given name
jMap.map.addFloor(building_cname, block_id, floor_id); //creates a floor and assigns the given block id
jMap.map.getBuildings() //gets an array of all buildings
jMap.map.getFloors(building_cname); //gets array of floor numbers
jMap.map.getBlocks(building_cname, floor_id); //gets an id of all the blocks which have a gvien floor
jMap.map.getData(building_cname, floor_id); //gets the map data for a given floor 
jMap.map.resolvePath(id); //resolves a path and returns the building_cname, floor_id (and not block)

# Auth / People API

jMap.people._authToken
jMap.people.setAuthToken(); 
jMap.people.find(query, callback) //search with the given token

# Event API

jMap.events //Event Handler
jMap.events.trigger(evt, args)
jMap.events.on(evt, handler)
jMap.events.once(evt, handler)
jMap.events.off(evt || handler)