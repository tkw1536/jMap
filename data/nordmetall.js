/*
	Buildings - Data for Nordmetall
*/

var NM = (function(){

	var Nordmetall = new Building({
		"name": "Nordmetall", 
		"machine_name": "nordmetall", 
		"blocks": []
	}); 

	var FloorPrefix = function(prefix, number){
		return function(name, room){
			var numberStr = prefix+" "+room.id.map(function(i){return number+i; }).join(" / ");
			if(room.type == "student"){
				return  numberStr; 
			} else if(room.type == "admin"){
				return "RA " + numberStr; 
			} else if(room.type == "kitchen"){
				return "Kitchen " + numberStr; 
			} else {
				return name; 
			}
		}
	}

	var B_Block_floor = new Floor({
		"rooms": [
			//B - West - Out
			[-64, -60, 10, 12, "", ["22"], "student"],
			[-64, -48, 10, 24, "", ["18", "19"], "student"],
			[-64, -24, 10, 24, "", ["14", "15"], "student"],
			[-64, 0, 10, 24, "", ["10", "11"], "student"],
			[-64, 24, 10, 24, "", ["06", "07"], "student"],
			[-64, 48, 10, 24, "", ["02", "03"], "student"], 

			//B - West - In
			[-48, 48, 10, 24, "", ["38", "39"], "student"],
			[-48, 24, 10, 24, "", ["34", "35"], "student"],
			[-48, 0, 10, 24, "", ["30", "31"], "student"],
			[-48, -24, 10, 24, "", ["26", "27"], "student"],
			[-48, -36, 10, 12, "", ["24"], "student"], 

			//B - East - In 
			[58, -36, 10, 12, "", ["60"], "student"],
			[58, -24, 10, 24, "", ["62", "63"], "student"],
			[58, 0, 10, 24, "", ["66", "67"], "student"],
			[58, 24, 10, 24, "", ["70", "71"], "student"],
			[58, 48, 10, 24, "", ["74", "75"], "student"], 

			//B - East - Out
			[74, 48, 10, 24, "", ["96", "97"], "student"],
			[74, 24, 10, 24, "", ["92", "93"], "student"],
			[74, 0, 10, 24, "", ["88", "89"], "student"],
			[74, -24, 10, 24, "", ["84", "85"], "student"],
			[74, -48, 10, 24, "", ["80", "81"], "student"],
			[74, -60, 10, 12, "", ["78"], "student"], 

			[-54, -60, 6, 132, "Corridor West", "cw", "cor"],
			[-48, -48, 10, 12, "Staircase West", "sw", "stairs"],
			[-38, -48, 12, 10, "Kitchen NB 45", ["45"], "kitchen"],

			[-26, -48, 24, 10, "", ["46", "47"], "student"],
			[-2, -48, 24, 10, "", ["50", "51"], "student"],
			[-48, -60, 116, 12, "Corridor North", ["cn"], "cor"],
			[22, -48, 24, 10, "RA Apartment NB 55", ["55"], "admin"],

			[46, -48, 12, 10, "Kitchen NB 58", ["58"], "kitchen"],
			[58, -48, 10, 12, "Staircase East", "se", "stairs"],
			[68, -60, 6, 132, "Corridor East", "ce", "cor"]
		]
	})

	var B_Block = new Block({
		"name": "B Block", 
		"machine_name": "B",
		"floors":[]
	}, Nordmetall); 

	Nordmetall.addBlock(B_Block); 

	//B1
	B_Block_floor.cloneTo(B_Block)
	.updateRoom("38", {
		"id": undefined, 
		"name": "Toilets", 
		"type": "toilet"
	})
	.setNames(FloorPrefix("NB", "1"))
	.setIds(function(id){
		return "NB-1"+id; 
	}).set({
		"machine_name": "1"
	});
	 

	//B2
	B_Block_floor.cloneTo(B_Block)
	.setNames(FloorPrefix("NB", "2"))
	.setIds(function(id){
		return "NB-2"+id; 
	}).set({
		"machine_name": "2"
	});

	//B3
	B_Block_floor.cloneTo(B_Block)
	.updateRoom("22", {
		"type": "common", 
		"id": undefined, 
		"name": ""
	})
	.setNames(FloorPrefix("NB", "3"))
	.setIds(function(id){
		return "NB-3"+id; 
	}).set({
		"machine_name": "3"
	});

	//B4
	B_Block_floor.cloneTo(B_Block)
	.removeRooms(["46", "50", "55", "cn"])
	.addRoom([-48, -60, 4, 12, "Corridor Extension W", "cee", "cor"])
	.addRoom([64, -60, 4, 12, "Corridor Extension E", "cew", "cor"])
	.updateRoom("58", {
		"coords": [58, -60, 6, 12]
	})
	.updateRoom("45", {
		"coords": [-44, -60, 6, 12]
	})
	.setNames(FloorPrefix("NB", "4"))
	.setIds(function(id){
		return "NB-4"+id; 
	}).set({
		"machine_name": "4"
	});

	return Nordmetall; 

		
		//C-Block
	//	[58, 82, 10, 10, "NC 203", ["NC-203"], "student"],
	//	[58, 88, 54, 6, "NC South Corridor", undefined, "cor"],
	//	[58, 94, 10, 10, "NC 224", ["NC-224"], "student"],
		
	//	[-2, -48, 24, 10, "NC 222", ["NC-222"], "student"],
	//	[-2, -48, 24, 10, "NC 218 / 219", ["NC-218", "NC-219"], "student"],
	//	[-2, -48, 24, 10, "NC 210 / 211", ["NC-210", "NC-211"], "student"],
	//	[-2, -48, 24, 10, "NC 216", ["NC-216"], "student"],
	//	[-2, -48, 24, 10, "NC 208", ["NC-208"], "student"],
	//	[-2, -48, 24, 10, "NC 207", ["NC-207"], "kitchen"],
})(); 