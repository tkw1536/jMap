var C3 = (function(){

	var A_B_floor1 = [
		[18, 7, 8, 5, "CA 108/109", ["CA-108","CA-109"], "student"],
		[26, 7, 8, 5, "CA 112/113", ["CA-112","CA-113"], "student"],
		[34, 7, 8, 5, "CA 116/117", ["CA-116","CA-117"], "student"],
		[42, 7, 8, 5, "CA 120/121", ["CA-120","CA-121"], "student"],
		[48, 7, 2, 5, "CA1 Kitchen", ["CA1_k"], "kitchen"],

		[18, 14, 8, 5, "CA 136/137", ["CA-136","CA-137"], "student"],
		[26, 14, 8, 5, "CA 132/133", ["CA-132","CA-133"], "student"],
		[34, 14, 8, 5, "CA 128/129", ["CA-128","CA-129"], "student"],
		[42, 14, 8, 5, "CA 124/125", ["CA-124","CA-125"], "student"],
		[48, 14, 2, 5, "CA1 Stairs", ["CA1_s"], "stairs"],

		[18, -19, 8, 5, "CB1 A/B", [""], "student"],
		[26, -19, 8, 5, "CB1 C/D", [""], "student"],
		[34, -19, 8, 5, "CB1 E/F", [""], "student"],
		[42, -19, 8, 5, "CB1 G/H", [""], "student"],
		[48, -19, 2, 5, "CB1 Kitchen", ["CD1_k"], "kitchen"],

		[18, -12, 8, 5, "CB1 I/J", [""], "student"],
		[26, -12, 8, 5, "CB1 K/L", [""], "student"],
		[34, -12, 8, 5, "CB1 M/N", [""], "student"],
		[42, -12, 8, 5, "CB1 O/P", [""], "student"],
		[48, -12, 2, 5, "CB1 Stairs", ["CD1_s"], "stairs"],

		
		[18, 12, 34, 2, "CA1 Corridor", [""], "cor"],
		[18, -14, 34, 2, "CB1 Corridor", [""], "cor"],

		[50, -19, 2, 38, "CAB Corridor", [""], "cor"],
		[52, -19, 12, 12, "Kitchen", [""], "main_kitchen"],
		[52, -7, 12, 26, "Servery", ["C3-Servery"], "servery"],
		[64, -19, 2, 38, "CCD Corridor", [""], "cor"]
	]; 

	var A_B_floor2 = [
		[18, 7, 8, 5, "CA 208/209", ["CA-208","CA-209"], "student"],
		[26, 7, 8, 5, "CA 212/213", ["CA-212","CA-213"], "student"],
		[34, 7, 8, 5, "CA 216/217", ["CA-216","CA-217"], "student"],
		[42, 7, 8, 5, "CA 220/221", ["CA-220","CA-221"], "student"],
		[48, 7, 2, 5, "CA2 Kitchen", ["CA2_k"], "kitchen"],

		[18, 14, 8, 5, "CA 236/237", ["CA-236","CA-237"], "student"],
		[26, 14, 8, 5, "CA 232/233", ["CA-232","CA-233"], "student"],
		[34, 14, 8, 5, "CA 228/229", ["CA-228","CA-229"], "student"],
		[42, 14, 8, 5, "CA 224/225", ["CA-224","CA-225"], "student"],
		[48, 14, 2, 5, "CA2 Stairs", [""], "stairs"],

		[18, 12, 34, 2, "CA2 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CB2 A/B", [""], "student"],
		[26, -19, 8, 5, "CB2 C/D", [""], "student"],
		[34, -19, 8, 5, "CB2 E/F", [""], "student"],
		[42, -19, 8, 5, "CB2 G/H", [""], "student"],
		[48, -19, 2, 5, "CB2 Kitchen", [""], "kitchen"],

		[18, -12, 8, 5, "CB2 I/J", [""], "student"],
		[26, -12, 8, 5, "CB2 K/L", [""], "student"],
		[34, -12, 8, 5, "CB2 M/N", [""], "student"],
		[42, -12, 8, 5, "CB2 O/P", [""], "student"],
		[48, -12, 2, 5, "CB2 Stairs", [""], "stairs"],

		[18, -14, 34, 2, "CB2 Corridor", [""], "cor"]
	];

	var A_B_floor3 = [
		[18, 7, 8, 5, "CA 308/309", ["CA-308","CA-309"], "student"],
		[26, 7, 8, 5, "CA 312/313", ["CA-312","CA-313"], "student"],
		[34, 7, 8, 5, "CA 316/317", ["CA-316","CA-317"], "student"],
		[42, 7, 8, 5, "CA 320/321", ["CA-320","CA-321"], "student"],
		[48, 7, 2, 5, "CA3 Kitchen", ["CA3_k"], "kitchen"],

		[18, 14, 8, 5, "CA 336/137", ["CA-336","CA-337"], "student"],
		[26, 14, 8, 5, "CA 332/133", ["CA-332","CA-333"], "student"],
		[34, 14, 8, 5, "CA 328/129", ["CA-328","CA-329"], "student"],
		[42, 14, 8, 5, "CA 324/125", ["CA-324","CA-325"], "student"],
		[48, 14, 2, 5, "CA3 Stairs", [""], "stairs"],

		[18, 12, 34, 2, "CA3 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CB3 A/B", [""], "student"],
		[26, -19, 8, 5, "CB3 C/D", [""], "student"],
		[34, -19, 8, 5, "CB3 E/F", [""], "student"],
		[42, -19, 8, 5, "CB3 G/H", [""], "student"],
		[48, -19, 2, 5, "CB3 Kitchen", [""], "kitchen"],

		[18, -12, 8, 5, "CB3 I/J", [""], "student"],
		[26, -12, 8, 5, "CB3 K/L", [""], "student"],
		[34, -12, 8, 5, "CB3 M/N", [""], "student"],
		[42, -12, 8, 5, "CB3 O/P", [""], "student"],
		[48, -12, 2, 5, "CB3 Stairs", [""], "stairs"],

		[18, -14, 34, 2, "CB3 Corridor", [""], "cor"]
	];

	var C_D_floor1 = [
		[18, 7, 8, 5, "CC 108/109", ["CC-108","CC-109"], "student"],
		[26, 7, 8, 5, "CC 112/113", ["CC-112","CC-113"], "student"],
		[34, 7, 8, 5, "CC 116/117", ["CC-116","CC-117"], "student"],
		[42, 7, 8, 5, "CC 120/121", ["CC-120","CC-121"], "student"],
		[48, 7, 2, 5, "CC1 Kitchen", ["CC1_k"], "kitchen"],

		[18, 14, 8, 5, "CC 136/137", ["CC-136","CC-137"], "student"],
		[26, 14, 8, 5, "CC 132/133", ["CC-132","CC-133"], "student"],
		[34, 14, 8, 5, "CC 128/129", ["CC-128","CC-129"], "student"],
		[42, 14, 8, 5, "CC 124/125", ["CC-124","CC-125"], "student"],
		[48, 14, 2, 5, "CC1 Stairs", ["CC1_s"], "stairs"],

		[18, 12, 34, 2, "CC1 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CD1 A/B", [""], "student"],
		[26, -19, 8, 5, "CD1 C/D", [""], "student"],
		[34, -19, 8, 5, "CD1 E/F", [""], "student"],
		[42, -19, 8, 5, "CD1 G/H", [""], "student"],
		[48, -19, 2, 5, "CD1 Kitchen", ["CD1_k"], "kitchen"],

		[18, -12, 8, 5, "CD1 I/J", [""], "student"],
		[26, -12, 8, 5, "CD1 K/L", [""], "student"],
		[34, -12, 8, 5, "CD1 M/N", [""], "student"],
		[42, -12, 8, 5, "CD1 O/P", [""], "student"],
		[48, -12, 2, 5, "CD1 Stairs", ["CD1_s"], "stairs"],

		[18, -14, 34, 2, "CD1 Corridor", [""], "cor"],
		[64, -19, 2, 38, "CCD Corridor", [""], "cor"]
	]; 

	var C_D_floor2 = [
		[18, 7, 8, 5, "CC 208/209", ["CC-208","CC-209"], "student"],
		[26, 7, 8, 5, "CC 212/213", ["CC-212","CC-213"], "student"],
		[34, 7, 8, 5, "CC 216/217", ["CC-216","CC-217"], "student"],
		[42, 7, 8, 5, "CC 220/221", ["CC-220","CC-221"], "student"],
		[48, 7, 2, 5, "CC2 Kitchen", ["CC2_k"], "kitchen"],

		[18, 14, 8, 5, "CC 236/237", ["CC-236","CC-237"], "student"],
		[26, 14, 8, 5, "CC 232/233", ["CC-232","CC-233"], "student"],
		[34, 14, 8, 5, "CC 228/229", ["CC-228","CC-229"], "student"],
		[42, 14, 8, 5, "CC 224/225", ["CC-224","CC-225"], "student"],
		[48, 14, 2, 5, "CC2 Stairs", ["CC2_s"], "stairs"],

		[18, 12, 34, 2, "CC2 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CD2 A/B", [""], "student"],
		[26, -19, 8, 5, "CD2 C/D", [""], "student"],
		[34, -19, 8, 5, "CD2 E/F", [""], "student"],
		[42, -19, 8, 5, "CD2 G/H", [""], "student"],
		[48, -19, 2, 5, "CD2 Kitchen", [""], "kitchen"],

		[18, -12, 8, 5, "CD2 I/J", [""], "student"],
		[26, -12, 8, 5, "CD2 K/L", [""], "student"],
		[34, -12, 8, 5, "CD2 M/N", [""], "student"],
		[42, -12, 8, 5, "CD2 O/P", [""], "student"],
		[48, -12, 2, 5, "CD2 Stairs", [""], "stairs"],

		[18, -14, 34, 2, "CD2 Corridor", [""], "cor"]
	];

	var C_D_floor3 = [
		[18, 7, 8, 5, "CC 308/309", ["CC-308","CC-309"], "student"],
		[26, 7, 8, 5, "CC 312/313", ["CC-312","CC-313"], "student"],
		[34, 7, 8, 5, "CC 316/317", ["CC-316","CC-317"], "student"],
		[42, 7, 8, 5, "CC 320/321", ["CC-320","CC-321"], "student"],
		[48, 7, 2, 5, "CC3 Kitchen", ["CC3_k"], "kitchen"],

		[18, 14, 8, 5, "CC 336/137", ["CC-336","CC-337"], "student"],
		[26, 14, 8, 5, "CC 332/133", ["CC-332","CC-333"], "student"],
		[34, 14, 8, 5, "CC 328/129", ["CC-328","CC-329"], "student"],
		[42, 14, 8, 5, "CC 324/125", ["CC-324","CC-325"], "student"],
		[48, 14, 2, 5, "CC3 Stairs", ["CC3_s"], "stairs"],

		[18, 12, 34, 2, "CC3 Corridor", [""], "cor"],

		[18, -19, 8, 5, "CD3 A/B", [""], "student"],
		[26, -19, 8, 5, "CD3 C/D", [""], "student"],
		[34, -19, 8, 5, "CD3 E/F", [""], "student"],
		[42, -19, 8, 5, "CD3 G/H", [""], "student"],
		[48, -19, 2, 5, "CD3 Kitchen", [""], "kitchen"],

		[18, -12, 8, 5, "CD3 I/J", [""], "student"],
		[26, -12, 8, 5, "CD3 K/L", [""], "student"],
		[34, -12, 8, 5, "CD3 M/N", [""], "student"],
		[42, -12, 8, 5, "CD3 O/P", [""], "student"],
		[48, -12, 2, 5, "CD3 Stairs", [""], "stairs"],

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