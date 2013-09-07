var Floor1 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"

	//B - West - Out
	[-64, -60, 10, 12, "Room 1", undefined, "student"],
	[-64, -48, 10, 24, "Room 2", undefined, "student"],
	[-64, -24, 10, 24, "Room 3", undefined, "student"],
	[-64, 0, 10, 24, "Room 4", undefined, "student"],
	[-64, 24, 10, 24, "Room 5", undefined, "student"],
	[-64, 48, 10, 24, "Room 6", undefined, "student"],
	
	//B - West - In
	[-48, 48, 10, 24, "Toilets", undefined, "toilet"],
	[-48, 24, 10, 24, "Room 8", undefined, "student"],
	[-48, 0, 10, 24, "Room 9", undefined, "student"],
	[-48, -24, 10, 24, "Room 10", undefined, "student"],
	[-48, -36, 10, 12, "Room 11", undefined, "student"],

	//B - East - In 
	[58, -36, 10, 12, "Room 14", undefined, "student"],
	[58, -24, 10, 24, "Room 15", undefined, "student"],
	[58, 0, 10, 24, "Room 16", undefined, "student"],
	[58, 24, 10, 24, "Room 17", undefined, "student"],
	[58, 48, 10, 24, "Room 18", undefined, "student"],

	//B - East - Out
	[74, 48, 10, 24, "Room 19", undefined, "student"],
	[74, 24, 10, 24, "Room 20", undefined, "student"],
	[74, 0, 10, 24, "Room 21", undefined, "student"],
	[74, -24, 10, 24, "Room 22", undefined, "student"],
	[74, -48, 10, 24, "Room 23", undefined, "student"],
	[74, -60, 10, 12, "Room 24", undefined, "student"],

	[-54, -60, 6, 132, "Corridor West", undefined, "cor"],
	[-48, -48, 10, 12, "Staircase West", undefined, "stairs"],
	[-38, -48, 12, 10, "Kitchen West", undefined, "kitchen"],
	
	[-26, -48, 24, 10, "Room 12", undefined, "student"],
	[-2, -48, 24, 10, "Room 13", undefined, "student"],
	[-48, -60, 116, 12, "Corridor North", "corr_north", "cor"],
	[22, -48, 24, 10, "RA Apartment", undefined, "admin"],
	
	[46, -48, 12, 10, "Kitchen East", undefined, "kitchen"],
	[58, -48, 10, 12, "Staircase East", undefined, "stairs"],
	[68, -60, 6, 132, "Corridor East", undefined, "cor"]
];

var Floor2 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"

	//B - West - Out
	[-64, -60, 10, 12, "NB tbd ", undefined, "student"],
	[-64, -48, 10, 24, "NB 219/ 218 ", undefined, "student"],
	[-64, -24, 10, 24, "NB 215/ 214 ", undefined, "student"],
	[-64, 0, 10, 24, "NB 211/ 210 ", undefined, "student"],
	[-64, 24, 10, 24, "NB 207/ 206 ", undefined, "student"],
	[-64, 48, 10, 24, "NB 203/ 202 ", undefined, "student"],
	
	//B - West - In
	[-48, 48, 10, 24, "NB 238/ 239 ", undefined, "student"],
	[-48, 24, 10, 24, "NB 234/ 235 ", undefined, "student"],
	[-48, 0, 10, 24, "NB 230/ 231 ", undefined, "student"],
	[-48, -24, 10, 24, "NB 226/ 227 ", undefined, "student"],
	[-48, -36, 10, 12, "NB unknown ", undefined, "student"],

	//B - East - In 
	[58, -36, 10, 12, "NB tbd ", undefined, "student"],
	[58, -24, 10, 24, "NB 263/ 262 ", undefined, "student"],
	[58, 0, 10, 24, "NB 267/ 266 ", undefined, "student"],
	[58, 24, 10, 24, "NB 271/ 270 ", undefined, "student"],
	[58, 48, 10, 24, "NB 275/ 274 ", undefined, "student"],

	//B - East - Out
	[74, 48, 10, 24, "NB 296/ 297 ", undefined, "student"],
	[74, 24, 10, 24, "NB 292/ 293 ", undefined, "student"],
	[74, 0, 10, 24, "NB 288/ 289 ", undefined, "student"],
	[74, -24, 10, 24, "NB 284/ 285 ", undefined, "student"],
	[74, -48, 10, 24, "NB 280/ 281 ", undefined, "student"],
	[74, -60, 10, 12, "NB tbd ", undefined, "student"],

	[-54, -60, 6, 132, "Corridor West", undefined, "cor"],
	[-48, -48, 10, 12, "Staircase West", undefined, "stairs"],
	[-38, -48, 12, 10, "Kitchen NB 245", undefined, "kitchen"],
	
	[-26, -48, 24, 10, "NB 247/246 ", undefined, "student"],
	[-2, -48, 24, 10, "NB 251/250 ", undefined, "student"],
	[-48, -60, 116, 12, "Corridor North", "corr_north", "cor"],
	[22, -48, 24, 10, "RA Apartment NB 255", undefined, "admin"],
	
	[46, -48, 12, 10, "Kitchen NB 258", undefined, "kitchen"],
	[58, -48, 10, 12, "Staircase East", undefined, "stairs"],
	[68, -60, 6, 132, "Corridor East", undefined, "cor"]
];

var Floor3 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"

	//B - West - Out
	[-64, -60, 10, 12, "NB tbd ", undefined, "student"],
	[-64, -48, 10, 24, "NB 319/ 318 ", undefined, "student"],
	[-64, -24, 10, 24, "NB 315/ 314 ", undefined, "student"],
	[-64, 0, 10, 24, "NB 311/ 310 ", undefined, "student"],
	[-64, 24, 10, 24, "NB 307/ 306 ", undefined, "student"],
	[-64, 48, 10, 24, "NB 303/ 302 ", undefined, "student"],
	
	//B - West - In
	[-48, 48, 10, 24, "NB 338/ 339 ", undefined, "student"],
	[-48, 24, 10, 24, "NB 334/ 335 ", undefined, "student"],
	[-48, 0, 10, 24, "NB 330/ 331 ", undefined, "student"],
	[-48, -24, 10, 24, "NB 326/ 327 ", undefined, "student"],
	[-48, -36, 10, 12, "NB unknown ", undefined, "student"],

	//B - East - In 
	[58, -36, 10, 12, "NB tbd ", undefined, "student"],
	[58, -24, 10, 24, "NB 363/ 362 ", undefined, "student"],
	[58, 0, 10, 24, "NB 367/ 366 ", undefined, "student"],
	[58, 24, 10, 24, "NB 371/ 370 ", undefined, "student"],
	[58, 48, 10, 24, "NB 375/ 374 ", undefined, "student"],

	//B - East - Out
	[74, 48, 10, 24, "NB 396/ 397 ", undefined, "student"],
	[74, 24, 10, 24, "NB 392/ 393 ", undefined, "student"],
	[74, 0, 10, 24, "NB 388/ 389 ", undefined, "student"],
	[74, -24, 10, 24, "NB 384/ 385 ", undefined, "student"],
	[74, -48, 10, 24, "NB 380/ 381 ", undefined, "student"],
	[74, -60, 10, 12, "NB tbd ", undefined, "student"],

	[-54, -60, 6, 132, "Corridor West", undefined, "cor"],
	[-48, -48, 10, 12, "Staircase West", undefined, "stairs"],
	[-38, -48, 12, 10, "Kitchen NB 345", undefined, "kitchen"],
	
	[-26, -48, 24, 10, "NB 347/346 ", undefined, "student"],
	[-2, -48, 24, 10, "NB 351/350 ", undefined, "student"],
	[-48, -60, 116, 12, "Corridor North", "corr_north", "cor"],
	[22, -48, 24, 10, "RA Apartment NB 355", undefined, "admin"],
	
	[46, -48, 12, 10, "Kitchen NB 358", undefined, "kitchen"],
	[58, -48, 10, 12, "Staircase East", undefined, "stairs"],
	[68, -60, 6, 132, "Corridor East", undefined, "cor"]
];

var Floor4 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"

	//B - West - Out
	[-64, -60, 10, 12, "Room 1", undefined, "student"],
	[-64, -48, 10, 24, "Room 2", undefined, "student"],
	[-64, -24, 10, 24, "Room 3", undefined, "student"],
	[-64, 0, 10, 24, "Room 4", undefined, "student"],
	[-64, 24, 10, 24, "Room 5", undefined, "student"],
	[-64, 48, 10, 24, "Room 6", undefined, "student"],
	
	//B - West - In
	[-48, 48, 10, 24, "Room 7", undefined, "student"],
	[-48, 24, 10, 24, "Room 8", undefined, "student"],
	[-48, 0, 10, 24, "Room 9", undefined, "student"],
	[-48, -24, 10, 24, "Room 10", undefined, "student"],
	[-48, -36, 10, 12, "Room 11", undefined, "student"],

	//B - East - In 
	[58, -36, 10, 12, "Room 14", undefined, "student"],
	[58, -24, 10, 24, "Room 15", undefined, "student"],
	[58, 0, 10, 24, "Room 16", undefined, "student"],
	[58, 24, 10, 24, "Room 17", undefined, "student"],
	[58, 48, 10, 24, "Room 18", undefined, "student"],

	//B - East - Out
	[74, 48, 10, 24, "Room 19", undefined, "student"],
	[74, 24, 10, 24, "Room 20", undefined, "student"],
	[74, 0, 10, 24, "Room 21", undefined, "student"],
	[74, -24, 10, 24, "Room 22", undefined, "student"],
	[74, -48, 10, 24, "Room 23", undefined, "student"],
	[74, -60, 10, 12, "Room 24", undefined, "student"],

	[-54, -60, 6, 132, "Corridor West", undefined, "cor"],
	[-48, -60, 4, 12, "Corridor Extension W", undefined, "cor"],
	[-48, -48, 10, 12, "Staircase West", undefined, "stairs"],
	[-44, -60, 6, 12, "Kitchen West", undefined, "kitchen"],
	
	[58, -60, 6, 12, "Kitchen East", undefined, "kitchen"],
	[58, -48, 10, 12, "Staircase East", undefined, "stairs"],
	[64, -60, 4, 12, "Corridor Extension E", undefined, "cor"],
	[68, -60, 6, 132, "Corridor East", undefined, "cor"]
];

var Floors = [
	["1st Floor", Floor1], 
	["2nd Floor", Floor2],
	["3rd Floor", Floor3],
	["4th Floor", Floor4]
	//["5th Floor", Floor5]
]