var C3 = (function(){

	var C_D_floor1 = [
		[18, 27, 8, 5, "CC1 A/B", [""], "student"],
		[26, 27, 8, 5, "CC1 C/D", [""], "student"],
		[34, 27, 8, 5, "CC1 E/F", [""], "student"],
		[42, 27, 8, 5, "CC1 G/H", [""], "student"],
		[48, 27, 2, 5, "CC1 Kitchen", ["CC1_k"], "kitchen"],

		[18, 34, 8, 5, "CC1 I/J", [""], "student"],
		[26, 34, 8, 5, "CC1 K/L", [""], "student"],
		[34, 34, 8, 5, "CC1 M/N", [""], "student"],
		[42, 34, 8, 5, "CC1 O/P", [""], "student"],
		[48, 34, 2, 5, "CC1 Stairs", ["CC1_s"], "stairs"],

		[18, 32, 34, 2, "CC1 Corridor", [""], "cor"],

		[18, 1, 8, 5, "CD1 A/B", [""], "student"],
		[26, 1, 8, 5, "CD1 C/D", [""], "student"],
		[34, 1, 8, 5, "CD1 E/F", [""], "student"],
		[42, 1, 8, 5, "CD1 G/H", [""], "student"],
		[48, 1, 2, 5, "CD1 Kitchen", ["CD1_k"], "kitchen"],

		[18, 8, 8, 5, "CD1 I/J", [""], "student"],
		[26, 8, 8, 5, "CD1 K/L", [""], "student"],
		[34, 8, 8, 5, "CD1 M/N", [""], "student"],
		[42, 8, 8, 5, "CD1 O/P", [""], "student"],
		[48, 8, 2, 5, "CD1 Stairs", ["CD1_s"], "stairs"],

		[18, -14, 34, 2, "CD1 Corridor", [""], "cor"]
	]; 

	var C_D_floor2 = [
		[18, 27, 8, 5, "CC2 A/B", [""], "student"],
		[26, 27, 8, 5, "CC2 C/D", [""], "student"],
		[34, 27, 8, 5, "CC2 E/F", [""], "student"],
		[42, 27, 8, 5, "CC2 G/H", [""], "student"],
		[48, 27, 2, 5, "CC2 Kitchen", [""], "kitchen"],

		[18, 34, 8, 5, "CC2 I/J", [""], "student"],
		[26, 34, 8, 5, "CC2 K/L", [""], "student"],
		[34, 34, 8, 5, "CC2 M/N", [""], "student"],
		[42, 34, 8, 5, "CC2 O/P", [""], "student"],
		[48, 34, 2, 5, "CC2 Stairs", [""], "stairs"],

		[18, 32, 34, 2, "CC2 Corridor", [""], "cor"],

		[18, 1, 8, 5, "CD2 A/B", [""], "student"],
		[26, 1, 8, 5, "CD2 C/D", [""], "student"],
		[34, 1, 8, 5, "CD2 E/F", [""], "student"],
		[42, 1, 8, 5, "CD2 G/H", [""], "student"],
		[48, 1, 2, 5, "CD2 Kitchen", [""], "kitchen"],

		[18, 8, 8, 5, "CD2 I/J", [""], "student"],
		[26, 8, 8, 5, "CD2 K/L", [""], "student"],
		[34, 8, 8, 5, "CD2 M/N", [""], "student"],
		[42, 8, 8, 5, "CD2 O/P", [""], "student"],
		[48, 8, 2, 5, "CD2 Stairs", [""], "stairs"],

		[18, 6, 34, 2, "CD2 Corridor", [""], "cor"]
	];

	var C_D_floor3 = [
		[18, 27, 8, 5, "CC3 A/B", [""], "student"],
		[26, 27, 8, 5, "CC3 C/D", [""], "student"],
		[34, 27, 8, 5, "CC3 E/F", [""], "student"],
		[42, 27, 8, 5, "CC3 G/H", [""], "student"],
		[48, 27, 2, 5, "CC3 Kitchen", [""], "kitchen"],

		[18, 34, 8, 5, "CC3 I/J", [""], "student"],
		[26, 34, 8, 5, "CC3 K/L", [""], "student"],
		[34, 34, 8, 5, "CC3 M/N", [""], "student"],
		[42, 34, 8, 5, "CC3 O/P", [""], "student"],
		[48, 34, 2, 5, "CC3 Stairs", [""], "stairs"],

		[18, 32, 34, 2, "CC3 Corridor", [""], "cor"],

		[18, 1, 8, 5, "CD3 A/B", [""], "student"],
		[26, 1, 8, 5, "CD3 C/D", [""], "student"],
		[34, 1, 8, 5, "CD3 E/F", [""], "student"],
		[42, 1, 8, 5, "CD3 G/H", [""], "student"],
		[48, 1, 2, 5, "CD3 Kitchen", [""], "kitchen"],

		[18, 8, 8, 5, "CD3 I/J", [""], "student"],
		[26, 8, 8, 5, "CD3 K/L", [""], "student"],
		[34, 8, 8, 5, "CD3 M/N", [""], "student"],
		[42, 8, 8, 5, "CD3 O/P", [""], "student"],
		[48, 8, 2, 5, "CD3 Stairs", [""], "stairs"],

		[18, 6, 34, 2, "CD3 Corridor", [""], "cor"]
	];

	return {
		"name": "College 3", 
		"machine_name": "c3", 
		"blocks": [
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