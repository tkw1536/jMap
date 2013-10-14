/*
	Buildings - Data for a Test Building
*/

var Test1 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"
	
	[-26, -48, 24, 10, "Room 12", undefined, "student"],
	[-2, -48, 24, 10, "Room 13", undefined, "student"],
	[-48, -60, 116, 12, "Corridor North", ["corr_north"], "cor"],
	[22, -48, 24, 10, "RA Apartment", undefined, "admin"],
	
	[46, -48, 12, 10, "Kitchen East", undefined, "kitchen"],
	[58, -48, 10, 12, "Staircase East", undefined, "stairs"],
	[68, -60, 6, 132, "Corridor East", undefined, "cor"]
];

var Test2 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"

	//B - West - Out
	[-64, -60, 10, 12, "NB tbd ", ["abc"], "student"],
	[-64, -48, 10, 24, "NB 219/ 218 ", undefined, "student"],
	[-64, -24, 10, 24, "NB 215/ 214 ", undefined, "student"],
	[-64, 0, 10, 24, "NB 211/ 210 ", undefined, "student"],
	[-64, 24, 10, 24, "NB 207/ 206 ", undefined, "student"],
	[-64, 48, 10, 24, "NB 203/ 202 ", undefined, "student"]
];

var Test = [
	["Floor 1", Test1], 
	["Floor 2", Test2]
]