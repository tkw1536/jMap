var C3 = (function(){

	var A_B_floor1 = [
		[16, 7, 10, 5, "CA 108/109", ["CA-108","CA-109"], "student"],
		[26, 7, 8, 5, "CA 112/113", ["CA-112","CA-113"], "student"],
		[34, 7, 8, 5, "CA 116/117", ["CA-116","CA-117"], "student"],
		[42, 7, 8, 5, "CA 120/121", ["CA-120","CA-121"], "student"],
		[50, 7, 2, 5, "CA1 Kitchen", ["CA1_k"], "kitchen"],

		[5, 7, 8, 12, "CA 101/102/103", ["CA-101","CA-102","CA-103"], "student"],
		[13, 7, 3, 5, "Stairs", [""], "stairs"],

		[16, 14, 10, 5, "CA 136/137", ["CA-136","CA-137"], "student"],
		[26, 14, 8, 5, "CA 132/133", ["CA-132","CA-133"], "student"],
		[34, 14, 8, 5, "CA 128/129", ["CA-128","CA-129"], "student"],
		[42, 14, 8, 5, "CA 124/125", ["CA-124","CA-125"], "student"],
		[50, 14, 2, 5, "CA1 Stairs", ["CA1_s"], "stairs"],

		[18, -19, 8, 5, "CB1 A/B", [""], "student"],
		[26, -19, 8, 5, "CB1 C/D", [""], "student"],
		[34, -19, 8, 5, "CB1 E/F", [""], "student"],
		[42, -19, 8, 5, "CB1 G/H", [""], "student"],
		[50, -19, 2, 5, "CB1 Kitchen", ["CD1_k"], "kitchen"],

		[5, -19, 8, 12, "CB 101/102/103", ["CB-101","CB-102","CB-103"], "student"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"],

		[18, -12, 8, 5, "CB1 I/J", [""], "student"],
		[26, -12, 8, 5, "CB1 K/L", [""], "student"],
		[34, -12, 8, 5, "CB1 M/N", [""], "student"],
		[42, -12, 8, 5, "CB1 O/P", [""], "student"],
		[50, -12, 2, 5, "CB1 Stairs", ["CD1_s"], "stairs"],

		
		[13, 12, 39, 2, "CA1 Corridor", [""], "cor"],
		[13, -14, 39, 2, "CB1 Corridor", [""], "cor"],

		[54, -19, 12, 12, "Kitchen", [""], "main_kitchen"],
		[52, -7, 16, 26, "Servery", ["C3-Servery"], "kitchen"],
		
		[54, 7, 3, 3, "Stairs", [""], "stairs"],
		[54, 10, 3, 2, "Elevator", [""], "stairs"],
		[52, -19, 2, 12, "CBA Corridor", [""], "cor"],
		[66, -19, 2, 12, "CDC Corridor", [""], "cor"],
		[52, 7, 2, 12, "CAB Corridor", [""], "cor"],
		[66, 7, 2, 12, "CCD Corridor", [""], "cor"]
	]; 

	var A_B_floor2 = [
		[16, 7, 10, 5, "CA 208/209", ["CA-208","CA-209"], "student"],
		[26, 7, 8, 5, "CA 212/213", ["CA-212","CA-213"], "student"],
		[34, 7, 8, 5, "CA 216/217", ["CA-216","CA-217"], "student"],
		[42, 7, 8, 5, "CA 220/221", ["CA-220","CA-221"], "student"],
		[50, 7, 2, 5, "CA2 Kitchen", ["CA2_k"], "kitchen"],

		[5, 7, 8, 12, "CA 201/202/203", ["CA-201","CA-202","CA-203"], "student"],
		[8, 14, 8, 5, "CA 240/241", ["CA-240","CA-241"], "student"],
		[13, 7, 3, 5, "Stairs", [""], "stairs"],

		[16, 14, 10, 5, "CA 236/237", ["CA-236","CA-237"], "student"],
		[26, 14, 8, 5, "CA 232/233", ["CA-232","CA-233"], "student"],
		[34, 14, 8, 5, "CA 228/229", ["CA-228","CA-229"], "student"],
		[42, 14, 8, 5, "CA 224/225", ["CA-224","CA-225"], "student"],
		[50, 14, 2, 5, "CA2 Stairs", [""], "stairs"],

		[18, -19, 8, 5, "CB2 A/B", [""], "student"],
		[26, -19, 8, 5, "CB2 C/D", [""], "student"],
		[34, -19, 8, 5, "CB2 E/F", [""], "student"],
		[42, -19, 8, 5, "CB2 G/H", [""], "student"],
		[50, -19, 2, 5, "CB2 Kitchen", [""], "kitchen"],

		[5, -19, 8, 12, "CB 201/202/203", ["CB-201","CB-202","CB-203"], "student"],
		[8, -12, 8, 5, "CB 240/241", ["CB-240","CB-241"], "student"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"],

		[18, -12, 8, 5, "CB2 I/J", [""], "student"],
		[26, -12, 8, 5, "CB2 K/L", [""], "student"],
		[34, -12, 8, 5, "CB2 M/N", [""], "student"],
		[42, -12, 8, 5, "CB2 O/P", [""], "student"],
		[50, -12, 2, 5, "CB2 Stairs", [""], "stairs"],

		[13, 12, 39, 2, "CA2 Corridor", [""], "cor"],
		[13, -14, 39, 2, "CB2 Corridor", [""], "cor"],

		[54, 14, 3, 5, "CE 202", ["CE-202"], "student"],
		[57, 14, 3, 5, "CE 205", ["CE-205"], "student"],
		[60, 14, 3, 5, "CE 208", ["CE-208"], "student"],
		[63, 14, 3, 5, "CE 211", ["CE-211"], "student"],

		[52, 7, 2, 12, "CAB Corridor", [""], "cor"],
		[54, 12, 12, 2, "A2E2C Corridor", [""], "cor"],
		[66, 7, 2, 12, "CCD Corridor", [""], "cor"],

		[54, 7, 3, 3, "Stairs", [""], "stairs"],
		[54, 10, 3, 2, "Elevator", [""], "stairs"],
		[57, -12, 9, 24, "Common Room", ["C3-CommonRoom"], "student"],
		[54, -7, 3, 7, "MMR", ["MMR-CommonRoom"], "student"],
		[54, 0, 3, 7, "TV Room", ["TV-CommonRoom"], "student"],
		[54, -12, 3, 5, "Toilet", [""], "toilet"],

		[52, -19, 2, 12, "CBA Corridor", [""], "cor"],
		[54, -14, 12, 2, "B2E2D Corridor", [""], "cor"],
		[66, -19, 2, 12, "CDC Corridor", [""], "cor"]
	];

	var A_B_floor3 = [
		[18, 7, 8, 5, "CA 308/309", ["CA-308","CA-309"], "student"],
		[26, 7, 8, 5, "CA 312/313", ["CA-312","CA-313"], "student"],
		[34, 7, 8, 5, "CA 316/317", ["CA-316","CA-317"], "student"],
		[42, 7, 8, 5, "CA 320/321", ["CA-320","CA-321"], "student"],
		[50, 7, 2, 5, "CA3 Kitchen", ["CA3_k"], "kitchen"],

		[5, 7, 8, 12, "CA 301/302/303", ["CA-301","CA-302","CA-303"], "student"],
		[8, 14, 8, 5, "CA 340/341", ["CA-340","CA-341"], "student"],
		[13, 7, 3, 5, "Stairs", [""], "stairs"],

		[18, 14, 8, 5, "CA 336/137", ["CA-336","CA-337"], "student"],
		[26, 14, 8, 5, "CA 332/133", ["CA-332","CA-333"], "student"],
		[34, 14, 8, 5, "CA 328/129", ["CA-328","CA-329"], "student"],
		[42, 14, 8, 5, "CA 324/125", ["CA-324","CA-325"], "student"],
		[50, 14, 2, 5, "CA3 Stairs", [""], "stairs"],

		[13, 12, 39, 2, "CA3 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CB3 A/B", [""], "student"],
		[26, -19, 8, 5, "CB3 C/D", [""], "student"],
		[34, -19, 8, 5, "CB3 E/F", [""], "student"],
		[42, -19, 8, 5, "CB3 G/H", [""], "student"],
		[50, -19, 2, 5, "CB3 Kitchen", [""], "kitchen"],

		[5, -19, 8, 12, "CB 301/302/303", ["CB-301","CB-302","CB-303"], "student"],
		[8, -12, 8, 5, "CB 340/341", ["CB-340","CB-341"], "student"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"],

		[18, -12, 8, 5, "CB3 I/J", [""], "student"],
		[26, -12, 8, 5, "CB3 K/L", [""], "student"],
		[34, -12, 8, 5, "CB3 M/N", [""], "student"],
		[42, -12, 8, 5, "CB3 O/P", [""], "student"],
		[50, -12, 2, 5, "CB3 Stairs", [""], "stairs"],

		[13, -14, 39, 2, "CB3 Corridor", [""], "cor"]
	];

	var C_D_floor1 = [
		[18, 7, 8, 5, "CC 108/109", ["CC-108","CC-109"], "student"],
		[26, 7, 8, 5, "CC 112/113", ["CC-112","CC-113"], "student"],
		[34, 7, 8, 5, "CC 116/117", ["CC-116","CC-117"], "student"],
		[42, 7, 8, 5, "CC 120/121", ["CC-120","CC-121"], "student"],
		[50, 7, 2, 5, "CC1 Kitchen", ["CC1_k"], "kitchen"],

		[18, 14, 8, 5, "CC 136/137", ["CC-136","CC-137"], "student"],
		[26, 14, 8, 5, "CC 132/133", ["CC-132","CC-133"], "student"],
		[34, 14, 8, 5, "CC 128/129", ["CC-128","CC-129"], "student"],
		[42, 14, 8, 5, "CC 124/125", ["CC-124","CC-125"], "student"],
		[50, 14, 2, 5, "CC1 Stairs", ["CC1_s"], "stairs"],

		[18, 12, 34, 2, "CC1 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CD1 A/B", [""], "student"],
		[26, -19, 8, 5, "CD1 C/D", [""], "student"],
		[34, -19, 8, 5, "CD1 E/F", [""], "student"],
		[42, -19, 8, 5, "CD1 G/H", [""], "student"],
		[50, -19, 2, 5, "CD1 Kitchen", ["CD1_k"], "kitchen"],

		[18, -12, 8, 5, "CD1 I/J", [""], "student"],
		[26, -12, 8, 5, "CD1 K/L", [""], "student"],
		[34, -12, 8, 5, "CD1 M/N", [""], "student"],
		[42, -12, 8, 5, "CD1 O/P", [""], "student"],
		[50, -12, 2, 5, "CD1 Stairs", ["CD1_s"], "stairs"],

		[18, -14, 34, 2, "CD1 Corridor", [""], "cor"],
		[66, -19, 2, 38, "CCD Corridor", [""], "cor"]
	]; 

	var C_D_floor2 = [
		[18, 7, 8, 5, "CC 208/209", ["CC-208","CC-209"], "student"],
		[26, 7, 8, 5, "CC 212/213", ["CC-212","CC-213"], "student"],
		[34, 7, 8, 5, "CC 216/217", ["CC-216","CC-217"], "student"],
		[42, 7, 8, 5, "CC 220/221", ["CC-220","CC-221"], "student"],
		[50, 7, 2, 5, "CC2 Kitchen", ["CC2_k"], "kitchen"],

		[18, 14, 8, 5, "CC 236/237", ["CC-236","CC-237"], "student"],
		[26, 14, 8, 5, "CC 232/233", ["CC-232","CC-233"], "student"],
		[34, 14, 8, 5, "CC 228/229", ["CC-228","CC-229"], "student"],
		[42, 14, 8, 5, "CC 224/225", ["CC-224","CC-225"], "student"],
		[50, 14, 2, 5, "CC2 Stairs", ["CC2_s"], "stairs"],

		[18, 12, 34, 2, "CC2 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CD2 A/B", [""], "student"],
		[26, -19, 8, 5, "CD2 C/D", [""], "student"],
		[34, -19, 8, 5, "CD2 E/F", [""], "student"],
		[42, -19, 8, 5, "CD2 G/H", [""], "student"],
		[50, -19, 2, 5, "CD2 Kitchen", [""], "kitchen"],

		[18, -12, 8, 5, "CD2 I/J", [""], "student"],
		[26, -12, 8, 5, "CD2 K/L", [""], "student"],
		[34, -12, 8, 5, "CD2 M/N", [""], "student"],
		[42, -12, 8, 5, "CD2 O/P", [""], "student"],
		[50, -12, 2, 5, "CD2 Stairs", [""], "stairs"],

		[18, -14, 34, 2, "CD2 Corridor", [""], "cor"]
	];

	var C_D_floor3 = [
		[18, 7, 8, 5, "CC 308/309", ["CC-308","CC-309"], "student"],
		[26, 7, 8, 5, "CC 312/313", ["CC-312","CC-313"], "student"],
		[34, 7, 8, 5, "CC 316/317", ["CC-316","CC-317"], "student"],
		[42, 7, 8, 5, "CC 320/321", ["CC-320","CC-321"], "student"],
		[50, 7, 2, 5, "CC3 Kitchen", ["CC3_k"], "kitchen"],

		[18, 14, 8, 5, "CC 336/137", ["CC-336","CC-337"], "student"],
		[26, 14, 8, 5, "CC 332/133", ["CC-332","CC-333"], "student"],
		[34, 14, 8, 5, "CC 328/129", ["CC-328","CC-329"], "student"],
		[42, 14, 8, 5, "CC 324/125", ["CC-324","CC-325"], "student"],
		[50, 14, 2, 5, "CC3 Stairs", ["CC3_s"], "stairs"],

		[18, 12, 34, 2, "CC3 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CD3 A/B", [""], "student"],
		[26, -19, 8, 5, "CD3 C/D", [""], "student"],
		[34, -19, 8, 5, "CD3 E/F", [""], "student"],
		[42, -19, 8, 5, "CD3 G/H", [""], "student"],
		[50, -19, 2, 5, "CD3 Kitchen", [""], "kitchen"],

		[18, -12, 8, 5, "CD3 I/J", [""], "student"],
		[26, -12, 8, 5, "CD3 K/L", [""], "student"],
		[34, -12, 8, 5, "CD3 M/N", [""], "student"],
		[42, -12, 8, 5, "CD3 O/P", [""], "student"],
		[50, -12, 2, 5, "CD3 Stairs", [""], "stairs"],

		[18, -14, 34, 2, "CD3 Corridor", [""], "cor"]
	];

	return {
		"name": "College 3", 
		"machine_name": "c3", 
		"blocks": [
				{
					"name": "Block A+B", 
					"machine_name": "tstAB", 
					"floors": [
						{
							"rooms": A_B_floor1
						}, 
						{
							"rooms": A_B_floor2
						},
						{
							"rooms": A_B_floor3
						}
					]
				},
				{
					"name": "Block C+D", 
					"machine_name": "tstCD", 
					"floors": [
						{
							"rooms": C_D_floor1
						}, 
						{
							"rooms": C_D_floor2
						},
						{
							"rooms": C_D_floor3
						}
					]
				}
			]
	};
})(); 