var C3 = (function(){

	var C_D_block1 = [
		[18, 7, 8, 5, "CC1 A/B", ["A/B"], "student"],
		[26, 7, 8, 5, "CC1 C/D", ["A/B"], "student"],
		[34, 7, 8, 5, "CC1 E/F", ["A/B"], "student"],
		[42, 7, 8, 5, "CC1 G/H", ["A/B"], "student"],
		[48, 7, 2, 5, "CC1 Kitchen", ["Kitchen"], "kitchen"],

		[18, 14, 8, 5, "CC1 I/J", ["A/B"], "student"],
		[26, 14, 8, 5, "CC1 K/L", ["A/B"], "student"],
		[34, 14, 8, 5, "CC1 M/N", ["A/B"], "student"],
		[42, 14, 8, 5, "CC1 O/P", ["A/B"], "student"],
		[48, 14, 2, 5, "CC1 Stairs", ["Stair"], "stairs"],

		[18, 12, 34, 2, "CC1 Corridor", [""], "cor"],

		[18, -12, 8, 5, "CD1 A/B", ["A/B"], "student"],
		[26, -12, 8, 5, "CD1 C/D", ["A/B"], "student"],
		[34, -12, 8, 5, "CD1 E/F", ["A/B"], "student"],
		[42, -12, 8, 5, "CD1 G/H", ["A/B"], "student"],
		[48, -12, 2, 5, "CD1 Kitchen", ["Kitchen"], "kitchen"],

		[18, -19, 8, 5, "CD1 I/J", ["A/B"], "student"],
		[26, -19, 8, 5, "CD1 K/L", ["A/B"], "student"],
		[34, -19, 8, 5, "CD1 M/N", ["A/B"], "student"],
		[42, -19, 8, 5, "CD1 O/P", ["A/B"], "student"],
		[48, -19, 2, 5, "CD1 Stairs", ["Stair"], "stairs"],

		[18, -14, 34, 2, "CD1 Corridor", [""], "cor"]
	]; 

	var C_D_block2 = [
		[18, 7, 8, 5, "CC2 A/B", ["A/B"], "student"],
		[26, 7, 8, 5, "CC2 C/D", ["A/B"], "student"],
		[34, 7, 8, 5, "CC2 E/F", ["A/B"], "student"],
		[42, 7, 8, 5, "CC2 G/H", ["A/B"], "student"],
		[48, 7, 2, 5, "CC2 Kitchen", ["Kitchen"], "kitchen"],

		[18, 14, 8, 5, "CC2 I/J", ["A/B"], "student"],
		[26, 14, 8, 5, "CC2 K/L", ["A/B"], "student"],
		[34, 14, 8, 5, "CC2 M/N", ["A/B"], "student"],
		[42, 14, 8, 5, "CC2 O/P", ["A/B"], "student"],
		[48, 14, 2, 5, "CC2 Stairs", ["Stair"], "stairs"],

		[18, 12, 34, 2, "CC2 Corridor", [""], "cor"],

		[18, -12, 8, 5, "CD2 A/B", ["A/B"], "student"],
		[26, -12, 8, 5, "CD2 C/D", ["A/B"], "student"],
		[34, -12, 8, 5, "CD2 E/F", ["A/B"], "student"],
		[42, -12, 8, 5, "CD2 G/H", ["A/B"], "student"],
		[48, -12, 2, 5, "CD2 Kitchen", ["Kitchen"], "kitchen"],

		[18, -19, 8, 5, "CD2 I/J", ["A/B"], "student"],
		[26, -19, 8, 5, "CD2 K/L", ["A/B"], "student"],
		[34, -19, 8, 5, "CD2 M/N", ["A/B"], "student"],
		[42, -19, 8, 5, "CD2 O/P", ["A/B"], "student"],
		[48, -19, 2, 5, "CD2 Stairs", ["Stair"], "stairs"],

		[18, -14, 34, 2, "CD2 Corridor", [""], "cor"]
	];

	var C_D_block3 = [
		[18, 7, 8, 5, "CC3 A/B", ["A/B"], "student"],
		[26, 7, 8, 5, "CC3 C/D", ["A/B"], "student"],
		[34, 7, 8, 5, "CC3 E/F", ["A/B"], "student"],
		[42, 7, 8, 5, "CC3 G/H", ["A/B"], "student"],
		[48, 7, 2, 5, "CC3 Kitchen", ["Kitchen"], "kitchen"],

		[18, 14, 8, 5, "CC3 I/J", ["A/B"], "student"],
		[26, 14, 8, 5, "CC3 K/L", ["A/B"], "student"],
		[34, 14, 8, 5, "CC3 M/N", ["A/B"], "student"],
		[42, 14, 8, 5, "CC3 O/P", ["A/B"], "student"],
		[48, 14, 2, 5, "CC3 Stairs", ["Stair"], "stairs"],

		[18, 12, 34, 2, "CC3 Corridor", [""], "cor"],

		[18, -12, 8, 5, "CD3 A/B", ["A/B"], "student"],
		[26, -12, 8, 5, "CD3 C/D", ["A/B"], "student"],
		[34, -12, 8, 5, "CD3 E/F", ["A/B"], "student"],
		[42, -12, 8, 5, "CD3 G/H", ["A/B"], "student"],
		[48, -12, 2, 5, "CD3 Kitchen", ["Kitchen"], "kitchen"],

		[18, -19, 8, 5, "CD3 I/J", ["A/B"], "student"],
		[26, -19, 8, 5, "CD3 K/L", ["A/B"], "student"],
		[34, -19, 8, 5, "CD3 M/N", ["A/B"], "student"],
		[42, -19, 8, 5, "CD3 O/P", ["A/B"], "student"],
		[48, -19, 2, 5, "CD3 Stairs", ["Stair"], "stairs"],

		[18, -14, 34, 2, "CD3 Corridor", [""], "cor"]
	];

	return {
		"name": "College 3", 
		"machine_name": "c3", 
		"blocks": [
				{
					"name": "Block C+D+E", 
					"machine_name": "tstC", 
					"floors": [
						{
							"rooms": C_D_block1
						}, 
						{
							"rooms": C_D_block2
						},
						{
							"rooms": C_D_block3
						}
					]
				}
			]
	};
})(); 