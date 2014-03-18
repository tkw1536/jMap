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

		[16, -19, 10, 5, "CB 108/109", ["CB-108","CB-109"], "student"],
		[26, -19, 8, 5, "CB 112/113", ["CB-112","CB-113"], "student"],
		[34, -19, 8, 5, "CB 116/117", ["CB-116","CB-117"], "student"],
		[42, -19, 8, 5, "CB 120/121", ["CB-120","CB-121"], "student"],
		[50, -19, 2, 5, "CB1 Kitchen", ["CB1_k"], "kitchen"],

		[5, -19, 8, 12, "CB 101/102/103", ["CB-101","CB-102","CB-103"], "student"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"],

		[16, -12, 10, 5, "CB 136/137", ["CB-136","CB-137"], "student"],
		[26, -12, 8, 5, "CB 132/133", ["CB-132","CB-133"], "student"],
		[34, -12, 8, 5, "CB 128/129", ["CB-128","CB-129"], "student"],
		[42, -12, 8, 5, "CB 124/125", ["CB-124","CB-125"], "student"],
		[50, -12, 2, 5, "CB1 Stairs", ["CB1_s"], "stairs"],

		
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

		[16, -19, 10, 5, "CB 208/209", ["CB-208","CB-209"], "student"],
		[26, -19, 8, 5, "CB 212/213", ["CB-212","CB-213"], "student"],
		[34, -19, 8, 5, "CB 216/217", ["CB-216","CB-217"], "student"],
		[42, -19, 8, 5, "CB 220/221", ["CB-220","CB-221"], "student"],
		[50, -19, 2, 5, "CB2 Kitchen", ["CB2_k"], "kitchen"],

		[5, -19, 8, 12, "CB 201/202/203", ["CB-201","CB-202","CB-203"], "student"],
		[8, -12, 8, 5, "CB 240/241", ["CB-240","CB-241"], "student"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"],

		[16, -12, 10, 5, "CB 236/137", ["CB-236","CB-237"], "student"],
		[26, -12, 8, 5, "CB 232/133", ["CB-232","CB-233"], "student"],
		[34, -12, 8, 5, "CB 228/129", ["CB-228","CB-229"], "student"],
		[42, -12, 8, 5, "CB 224/125", ["CB-224","CB-225"], "student"],
		[50, -12, 2, 5, "CB2 Stairs", ["CB2_s"], "stairs"],

		[13, 12, 39, 2, "CA2 Corridor", [""], "cor"],
		[13, -14, 39, 2, "CB2 Corridor", [""], "cor"],

		[54, -19, 3, 5, "CE ", ["CE-"], "student"],
		[57, -19, 3, 5, "CE ", ["CE-"], "student"],
		[60, -19, 3, 5, "CE ", ["CE-"], "student"],
		[63, -19, 3, 5, "CE ", ["CE-"], "student"],
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
		[54, -7, 3, 7, "MMR", ["C3-MMR"], "student"],
		[54, 0, 3, 7, "TV Room", ["C3-TVRoom"], "student"],
		[54, -12, 3, 5, "Toilet", [""], "toilet"],

		[52, -19, 2, 12, "CBA Corridor", [""], "cor"],
		[54, -14, 12, 2, "B2E2D Corridor", [""], "cor"],
		[66, -19, 2, 12, "CDC Corridor", [""], "cor"]
	];

	var A_B_floor3 = [
		[16, 7, 10, 5, "CA 308/309", ["CA-308","CA-309"], "student"],
		[26, 7, 8, 5, "CA 312/313", ["CA-312","CA-313"], "student"],
		[34, 7, 8, 5, "CA 316/317", ["CA-316","CA-317"], "student"],
		[42, 7, 8, 5, "CA 320/321", ["CA-320","CA-321"], "student"],
		[50, 7, 2, 5, "CA3 Kitchen", ["CA3_k"], "kitchen"],

		[5, 7, 8, 12, "CA 301/302/303", ["CA-301","CA-302","CA-303"], "student"],
		[8, 14, 8, 5, "CA 340/341", ["CA-340","CA-341"], "student"],
		[13, 7, 3, 5, "Stairs", [""], "stairs"],

		[16, 14, 10, 5, "CA 336/337", ["CA-336","CA-337"], "student"],
		[26, 14, 8, 5, "CA 332/333", ["CA-332","CA-333"], "student"],
		[34, 14, 8, 5, "CA 328/329", ["CA-328","CA-329"], "student"],
		[42, 14, 8, 5, "CA 324/325", ["CA-324","CA-325"], "student"],
		[50, 14, 2, 5, "CA3 Stairs", [""], "stairs"],

		[16, -19, 10, 5, "CB 308/309", ["CB-308","CB-309"], "student"],
		[26, -19, 8, 5, "CB 312/313", ["CB-312","CB-313"], "student"],
		[34, -19, 8, 5, "CB 316/317", ["CB-316","CB-317"], "student"],
		[42, -19, 8, 5, "CB 320/321", ["CB-320","CB-321"], "student"],
		[50, -19, 2, 5, "CB3 Kitchen", ["CB3_k"], "kitchen"],

		[5, -19, 8, 12, "CB 301/302/303", ["CB-301","CB-302","CB-303"], "student"],
		[8, -12, 8, 5, "CB 340/341", ["CB-340","CB-341"], "student"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"],

		[16, -12, 10, 5, "CB 336/337", ["CB-336","CB-337"], "student"],
		[26, -12, 8, 5, "CB 332/333", ["CB-332","CB-333"], "student"],
		[34, -12, 8, 5, "CB 328/329", ["CB-328","CB-329"], "student"],
		[42, -12, 8, 5, "CB 324/325", ["CB-324","CB-325"], "student"],
		[50, -12, 2, 5, "CB3 Stairs", ["CB3_s"], "stairs"],

		[54, -19, 3, 5, "CE ", ["CE-"], "student"],
		[57, -19, 3, 5, "CE ", ["CE-"], "student"],
		[60, -19, 3, 5, "CE ", ["CE-"], "student"],
		[63, -19, 3, 5, "CE ", ["CE-"], "student"],
		[54, 14, 3, 5, "CE ", ["CE-"], "student"],
		[57, 14, 3, 5, "CE ", ["CE-"], "student"],
		[60, 14, 3, 5, "CE ", ["CE-"], "student"],
		[63, 14, 3, 5, "CE ", ["CE-"], "student"],

		[52, 7, 2, 12, "CAB Corridor", [""], "cor"],
		[54, 12, 12, 2, "A2E2C Corridor", [""], "cor"],
		[66, 7, 2, 12, "CCD Corridor", [""], "cor"],

		[52, -19, 2, 12, "CBA Corridor", [""], "cor"],
		[54, -14, 12, 2, "B2E2D Corridor", [""], "cor"],
		[66, -19, 2, 12, "CDC Corridor", [""], "cor"],


		[54, 7, 3, 3, "Stairs", [""], "stairs"],
		[54, 10, 3, 2, "Elevator", [""], "stairs"],
		[57, -12, 9, 24, "Quiet Study Area", ["C3-QSA"], "student"],
		[54, -7, 3, 7, "Extra Quiet Study Area", ["C3-EQSA"], "student"],
		[54, 0, 3, 7, "College Office", ["C3-CollegeOffice"], "student"],
		[54, -12, 3, 5, "Toilet", [""], "toilet"],

		[13, 12, 39, 2, "CA3 Corridor", [""], "cor"],
		[13, -14, 39, 2, "CB3 Corridor", [""], "cor"]
	];

	var C_D_floor1 = [
		[16, 7, 10, 5, "CC 108/109", ["CC-108","CC-109"], "student"],
		[26, 7, 8, 5, "CC 112/113", ["CC-112","CC-113"], "student"],
		[34, 7, 8, 5, "CC 116/117", ["CC-116","CC-117"], "student"],
		[42, 7, 8, 5, "CC 120/121", ["CC-120","CC-121"], "student"],
		[50, 7, 2, 5, "CC1 Kitchen", ["CC1_k"], "kitchen"],

		[16, 14, 10, 5, "CC 136/137", ["CC-136","CC-137"], "student"],
		[26, 14, 8, 5, "CC 132/133", ["CC-132","CC-133"], "student"],
		[34, 14, 8, 5, "CC 128/129", ["CC-128","CC-129"], "student"],
		[42, 14, 8, 5, "CC 124/125", ["CC-124","CC-125"], "student"],
		[50, 14, 2, 5, "CC1 Stairs", ["CC1_s"], "stairs"],

		[8, 12, 44, 2, "CC1 Corridor", [""], "cor"],

		[16, -19, 10, 5, "CD 108/109", ["CD-108","CD-109"], "student"],
		[26, -19, 8, 5, "CD 112/113", ["CD-112","CD-113"], "student"],
		[34, -19, 8, 5, "CD 116/117", ["CD-116","CD-117"], "student"],
		[42, -19, 8, 5, "CD 120/121", ["CD-120","CD-121"], "student"],
		[50, -19, 2, 5, "CD1 Kitchen", ["CD1_k"], "kitchen"],

		[16, -12, 10, 5, "CD 136/137", ["CD-136","CD-137"], "student"],
		[26, -12, 8, 5, "CD 132/133", ["CD-132","CD-133"], "student"],
		[34, -12, 8, 5, "CD 128/129", ["CD-128","CD-129"], "student"],
		[42, -12, 8, 5, "CD 124/125", ["CD-124","CD-125"], "student"],
		[50, -12, 2, 5, "CD1 Stairs", ["CD1_s"], "stairs"],

		[8, -14, 44, 2, "CD1 Corridor", [""], "cor"],
		[6, -19, 2, 38, "CCD Corridor", [""], "cor"],

		[8, 7, 5, 5, "", [""], "student"],
		[13, 7, 3, 5, "Stairs", [""], "stairs"],

		[8, -19, 5, 5, "", [""], "student"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"]
	]; 

	var C_D_floor2 = [
		[16, 7, 10, 5, "CC 208/209", ["CC-208","CC-209"], "student"],
		[26, 7, 8, 5, "CC 212/213", ["CC-212","CC-213"], "student"],
		[34, 7, 8, 5, "CC 216/217", ["CC-216","CC-217"], "student"],
		[42, 7, 8, 5, "CC 220/221", ["CC-220","CC-221"], "student"],
		[50, 7, 2, 5, "CC2 Kitchen", ["CC2_k"], "kitchen"],

		[16, 14, 10, 5, "CC 236/237", ["CC-236","CC-237"], "student"],
		[26, 14, 8, 5, "CC 232/233", ["CC-232","CC-233"], "student"],
		[34, 14, 8, 5, "CC 228/229", ["CC-228","CC-229"], "student"],
		[42, 14, 8, 5, "CC 224/225", ["CC-224","CC-225"], "student"],
		[50, 14, 2, 5, "CC2 Stairs", ["CC2_s"], "stairs"],

		[8, 12, 44, 2, "CC2 Corridor", [""], "cor"],

		[16, -19, 10, 5, "CD 208/209", ["CD-208","CD-209"], "student"],
		[26, -19, 8, 5, "CD 212/213", ["CD-212","CD-213"], "student"],
		[34, -19, 8, 5, "CD 216/217", ["CD-216","CD-217"], "student"],
		[42, -19, 8, 5, "CD 220/221", ["CD-220","CD-221"], "student"],
		[50, -19, 2, 5, "CD2 Kitchen", ["CD2_k"], "kitchen"],

		[16, -12, 10, 5, "CD 236/237", ["CD-236","CD-237"], "student"],
		[26, -12, 8, 5, "CD 232/233", ["CD-232","CD-233"], "student"],
		[34, -12, 8, 5, "CD 228/229", ["CD-228","CD-229"], "student"],
		[42, -12, 8, 5, "CD 224/225", ["CD-224","CD-225"], "student"],
		[50, -12, 2, 5, "CD2 Stairs", ["CD2_s"], "stairs"],

		[8, -14, 44, 2, "CD2 Corridor", [""], "cor"],

		[6, -19, 2, 38, "CCD Corridor", [""], "cor"],

		[8, 7, 5, 5, "", [""], "student"],
		[8, 14, 8, 5, "", ["RA"], "admin"],
		[13, 7, 3, 5, "Stairs", [""], "stairs"],

		[8, -19, 5, 5, "", [""], "student"],
		[8, -12, 8, 5, "", ["RA"], "admin"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"]
	];

	var C_D_floor3 = [
		[16, 7, 10, 5, "CC 308/309", ["CC-308","CC-309"], "student"],
		[26, 7, 8, 5, "CC 312/313", ["CC-312","CC-313"], "student"],
		[34, 7, 8, 5, "CC 316/317", ["CC-316","CC-317"], "student"],
		[42, 7, 8, 5, "CC 320/321", ["CC-320","CC-321"], "student"],
		[50, 7, 2, 5, "CC3 Kitchen", ["CC3_k"], "kitchen"],

		[16, 14, 10, 5, "CC 336/137", ["CC-336","CC-337"], "student"],
		[26, 14, 8, 5, "CC 332/133", ["CC-332","CC-333"], "student"],
		[34, 14, 8, 5, "CC 328/129", ["CC-328","CC-329"], "student"],
		[42, 14, 8, 5, "CC 324/125", ["CC-324","CC-325"], "student"],
		[50, 14, 2, 5, "CC3 Stairs", ["CC3_s"], "stairs"],

		[8, 12, 44, 2, "CC3 Corridor", [""], "cor"],

		[16, -19, 10, 5, "CD 308/309", ["CD-308","CD-309"], "student"],
		[26, -19, 8, 5, "CD 312/313", ["CD-312","CD-313"], "student"],
		[34, -19, 8, 5, "CD 316/317", ["CD-316","CD-317"], "student"],
		[42, -19, 8, 5, "CD 320/321", ["CD-320","CD-321"], "student"],
		[50, -19, 2, 5, "CD3 Kitchen", ["CD3_k"], "kitchen"],

		[16, -12, 10, 5, "CD 336/337", ["CD-336","CD-337"], "student"],
		[26, -12, 8, 5, "CD 332/333", ["CD-332","CD-333"], "student"],
		[34, -12, 8, 5, "CD 328/329", ["CD-328","CD-329"], "student"],
		[42, -12, 8, 5, "CD 324/325", ["CD-324","CD-325"], "student"],
		[50, -12, 2, 5, "CD3 Stairs", ["CD3_s"], "stairs"],

		[8, -14, 44, 2, "CD3 Corridor", [""], "cor"],

		[6, -19, 2, 38, "CCD Corridor", [""], "cor"],

		[8, 7, 5, 5, "", [""], "student"],
		[8, 14, 8, 5, "", ["RA"], "admin"],
		[13, 7, 3, 5, "Stairs", [""], "stairs"],

		[8, -19, 5, 5, "", [""], "student"],
		[8, -12, 8, 5, "", ["RA"], "admin"],
		[13, -19, 3, 5, "Stairs", [""], "stairs"]
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