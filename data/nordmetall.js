/*
	Buildings - Data for Nordmetall
*/

var NM1 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"

	//B - West - Out
	[-64, -60, 10, 12, "NB tbd ", undefined, "student"],
	[-64, -48, 10, 24, "NB 118 / 119 ", ["NB-118", "NB-119"], "student"],
	[-64, -24, 10, 24, "NB 114 / 115 ", ["NB-114", "NB-115"], "student"],
	[-64, 0, 10, 24, "NB 110 / 111 ", ["NB-110", "NB-111"], "student"],
	[-64, 24, 10, 24, "NB 106 / 107 ", ["NB-106", "NB-107"], "student"],
	[-64, 48, 10, 24, "NB 102 / 103 ", ["NB-102", "NB-103"], "student"], 

	//B - West - In
	[-48, 48, 10, 24, "Toilets ", undefined, "toilet"],
	[-48, 24, 10, 24, "NB 134 / 135 ", ["NB-134", "NB-135"], "student"],
	[-48, 0, 10, 24, "NB 130 / 131 ", ["NB-130", "NB-131"], "student"],
	[-48, -24, 10, 24, "NB 126 / 127 ", ["NB-126", "NB-127"], "student"],
	[-48, -36, 10, 12, "NB unknown ", undefined, "student"], 

	//B - East - In 
	[58, -36, 10, 12, "NB tbd ", undefined, "student"],
	[58, -24, 10, 24, "NB 162 / 163 ", ["NB-162", "NB-163"], "student"],
	[58, 0, 10, 24, "NB 166 / 167 ", ["NB-166", "NB-167"], "student"],
	[58, 24, 10, 24, "NB 170 / 171 ", ["NB-170", "NB-171"], "student"],
	[58, 48, 10, 24, "NB 174 / 175 ", ["NB-174", "NB-175"], "student"], 

	//B - East - Out
	[74, 48, 10, 24, "NB 196 / 197 ", ["NB-196", "NB-197"], "student"],
	[74, 24, 10, 24, "NB 192 / 193 ", ["NB-192", "NB-193"], "student"],
	[74, 0, 10, 24, "NB 188 / 189 ", ["NB-188", "NB-189"], "student"],
	[74, -24, 10, 24, "NB 184 / 185 ", ["NB-184", "NB-185"], "student"],
	[74, -48, 10, 24, "NB 180 / 181 ", ["NB-180", "NB-181"], "student"],
	[74, -60, 10, 12, "NB tbd ", undefined, "student"], 

	[-54, -60, 6, 132, "Corridor West", undefined, "cor"],
	[-48, -48, 10, 12, "Staircase West", undefined, "stairs"],
	[-38, -48, 12, 10, "Kitchen NB 145", ["NB-145"], "kitchen"],

	[-26, -48, 24, 10, "NB 146 / 147", ["NB-146", "NB-147"], "student"],
	[-2, -48, 24, 10, "NB 150 / 151", ["NB-150", "NB-151"], "student"],
	[-48, -60, 116, 12, "Corridor North", ["corr_north"], "cor"],
	[22, -48, 24, 10, "RA Apartment NB 155", ["NB-155"], "admin"],

	[46, -48, 12, 10, "Kitchen NB 158", ["NB-158"], "kitchen"],
	[58, -48, 10, 12, "Staircase East", undefined, "stairs"],
	[68, -60, 6, 132, "Corridor East", undefined, "cor"]
];

var NM2 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"

	//B - West - Out
	[-64, -60, 10, 12, "NB tbd ", undefined, "student"],
	[-64, -48, 10, 24, "NB 218 / 219 ", ["NB-218", "NB-219"], "student"],
	[-64, -24, 10, 24, "NB 214 / 215 ", ["NB-214", "NB-215"], "student"],
	[-64, 0, 10, 24, "NB 210 / 211 ", ["NB-210", "NB-211"], "student"],
	[-64, 24, 10, 24, "NB 206 / 207 ", ["NB-206", "NB-207"], "student"],
	[-64, 48, 10, 24, "NB 202 / 203 ", ["NB-202", "NB-203"], "student"], 

	//B - West - In
	[-48, 48, 10, 24, "NB 238 / 239 ", ["NB-238", "NB-239"], "student"],
	[-48, 24, 10, 24, "NB 234 / 235 ", ["NB-234", "NB-235"], "student"],
	[-48, 0, 10, 24, "NB 230 / 231 ", ["NB-230", "NB-231"], "student"],
	[-48, -24, 10, 24, "NB 226 / 227 ", ["NB-226", "NB-227"], "student"],
	[-48, -36, 10, 12, "NB unknown ", undefined, "student"], 

	//B - East - In 
	[58, -36, 10, 12, "NB tbd ", undefined, "student"],
	[58, -24, 10, 24, "NB 262 / 263 ", ["NB-262", "NB-263"], "student"],
	[58, 0, 10, 24, "NB 266 / 267 ", ["NB-266", "NB-267"], "student"],
	[58, 24, 10, 24, "NB 270 / 271 ", ["NB-270", "NB-271"], "student"],
	[58, 48, 10, 24, "NB 274 / 275 ", ["NB-274", "NB-275"], "student"], 

	//B - East - Out
	[74, 48, 10, 24, "NB 296 / 297 ", ["NB-296", "NB-297"], "student"],
	[74, 24, 10, 24, "NB 292 / 293 ", ["NB-292", "NB-293"], "student"],
	[74, 0, 10, 24, "NB 288 / 289 ", ["NB-288", "NB-289"], "student"],
	[74, -24, 10, 24, "NB 284 / 285 ", ["NB-284", "NB-285"], "student"],
	[74, -48, 10, 24, "NB 280 / 281 ", ["NB-280", "NB-281"], "student"],
	[74, -60, 10, 12, "NB tbd ", undefined, "student"], 

	[-54, -60, 6, 132, "Corridor West", undefined, "cor"],
	[-48, -48, 10, 12, "Staircase West", undefined, "stairs"],
	[-38, -48, 12, 10, "Kitchen NB 245", ["NB-245"], "kitchen"],

	[-26, -48, 24, 10, "NB 246 / 247", ["NB-246", "NB-247"], "student"],
	[-2, -48, 24, 10, "NB 250 / 251", ["NB-250", "NB-251"], "student"],
	[-48, -60, 116, 12, "Corridor North", ["corr_north"], "cor"],
	[22, -48, 24, 10, "RA Apartment NB 255", ["NB-255"], "admin"],

	[46, -48, 12, 10, "Kitchen NB 258", ["NB-258"], "kitchen"],
	[58, -48, 10, 12, "Staircase East", undefined, "stairs"],
	[68, -60, 6, 132, "Corridor East", undefined, "cor"]
];

var NM3 = [
	//[x, y, x_size, y_size, name, id, type]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"

	//B - West - Out
	[-64, -60, 10, 12, "NB tbd ", undefined, "student"],
	[-64, -48, 10, 24, "NB 319/ 318 ", ["NB-318", "NB-319"], "student"],
	[-64, -24, 10, 24, "NB 315/ 314 ", ["NB-315", "NB-314"], "student"],
	[-64, 0, 10, 24, "NB 311/ 310 ", ["NB-311", "NB-310"], "student"],
	[-64, 24, 10, 24, "NB 307/ 306 ", ["NB-307", "NB-306"], "student"],
	[-64, 48, 10, 24, "NB 303/ 302 ", ["NB-303", "NB-302"], "student"],
	
	//B - West - In
	[-48, 48, 10, 24, "NB 338/ 339 ", ["NB-338", "NB-339"], "student"],
	[-48, 24, 10, 24, "NB 334/ 335 ", ["NB-334", "NB-335"], "student"],
	[-48, 0, 10, 24, "NB 330/ 331 ", ["NB-330", "NB-331"], "student"],
	[-48, -24, 10, 24, "NB 326/ 327 ", ["NB-326", "NB-327"], "student"],
	[-48, -36, 10, 12, "NB unknown ", undefined, "student"],

	//B - East - In 
	[58, -36, 10, 12, "NB tbd ", undefined, "student"],
	[58, -24, 10, 24, "NB 363/ 362 ", ["NB-363", "NB-362"], "student"],
	[58, 0, 10, 24, "NB 367/ 366 ", ["NB-367", "NB-366"], "student"],
	[58, 24, 10, 24, "NB 371/ 370 ", ["NB-371", "NB-370"], "student"],
	[58, 48, 10, 24, "NB 375/ 374 ", ["NB-375", "NB-374"], "student"],

	//B - East - Out
	[74, 48, 10, 24, "NB 396/ 397 ", ["NB-396", "NB-397"], "student"],
	[74, 24, 10, 24, "NB 392/ 393 ", ["NB-392", "NB-393"], "student"],
	[74, 0, 10, 24, "NB 388/ 389 ", ["NB-388", "NB-389"], "student"],
	[74, -24, 10, 24, "NB 384/ 385 ", ["NB-384", "NB-385"], "student"],
	[74, -48, 10, 24, "NB 380/ 381 ", ["NB-380", "NB-381"], "student"],
	[74, -60, 10, 12, "NB tbd ", undefined, "student"],

	[-54, -60, 6, 132, "Corridor West", undefined, "cor"],
	[-48, -48, 10, 12, "Staircase West", undefined, "stairs"],
	[-38, -48, 12, 10, "Kitchen NB 345", ["NB-345"], "kitchen"],
	
	[-26, -48, 24, 10, "NB 347/346 ", ["NB-347", "NB-346"], "student"],
	[-2, -48, 24, 10, "NB 351/350 ", ["NB-351", "NB-350"], "student"],
	[-48, -60, 116, 12, "Corridor North", ["corr_north"], "cor"],
	[22, -48, 24, 10, "RA Apartment NB 355", ["NB-355"], "admin"],
	
	[46, -48, 12, 10, "Kitchen NB 358", ["NB-358"], "kitchen"],
	[58, -48, 10, 12, "Staircase East", undefined, "stairs"],
	[68, -60, 6, 132, "Corridor East", undefined, "cor"]
];

var NM4 = [
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

var NM = [
	["Floor 1", NM1], 
	["Floor 2", NM2], 
	["Floor 3", NM3], 
	["Floor 4", NM4]
]
