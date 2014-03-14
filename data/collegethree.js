var C3 = (function(){

	var Cblock1 = [
		[18, -7, 8, 5, "CC1 A/B", ["A/B"], "student"],
		[26, -7, 8, 5, "CC1 C/D", ["A/B"], "student"],
		[34, -7, 8, 5, "CC1 E/F", ["A/B"], "student"],
		[42, -7, 8, 5, "CC1 G/H", ["A/B"], "student"],
		[48, -7, 2, 5, "CC1 Kitchen", ["Kitchen"], "kitchen"],

		[18, -14, 8, 5, "CC1 I/J", ["A/B"], "student"],
		[26, -14, 8, 5, "CC1 K/L", ["A/B"], "student"],
		[34, -14, 8, 5, "CC1 M/N", ["A/B"], "student"],
		[42, -14, 8, 5, "CC1 O/P", ["A/B"], "student"],
		[48, -14, 2, 5, "CC1 Stairs", ["Stair"], "stairs"],

		[18, -12, 34, 2, "CC1 Corridor", [""], "cor"]
	]; 

	var Cblock2 = [
		[18, -7, 8, 5, "CC2 A/B", ["A/B"], "student"],
		[26, -7, 8, 5, "CC2 C/D", ["A/B"], "student"],
		[34, -7, 8, 5, "CC2 E/F", ["A/B"], "student"],
		[42, -7, 8, 5, "CC2 G/H", ["A/B"], "student"],
		[48, -7, 2, 5, "CC2 Kitchen", ["Kitchen"], "kitchen"],

		[18, -14, 8, 5, "CC2 I/J", ["A/B"], "student"],
		[26, -14, 8, 5, "CC2 K/L", ["A/B"], "student"],
		[34, -14, 8, 5, "CC2 M/N", ["A/B"], "student"],
		[42, -14, 8, 5, "CC2 O/P", ["A/B"], "student"],
		[48, -14, 2, 5, "CC2 Stairs", ["Stair"], "stairs"],

		[18, -12, 34, 2, "CC2 Corridor", [""], "cor"]
	];

	var Cblock3 = [
		[18, -7, 8, 5, "CC3 A/B", ["A/B"], "student"],
		[26, -7, 8, 5, "CC3 C/D", ["A/B"], "student"],
		[34, -7, 8, 5, "CC3 E/F", ["A/B"], "student"],
		[42, -7, 8, 5, "CC3 G/H", ["A/B"], "student"],
		[48, -7, 2, 5, "CC3 Kitchen", ["Kitchen"], "kitchen"],

		[18, -14, 8, 5, "CC3 I/J", ["A/B"], "student"],
		[26, -14, 8, 5, "CC3 K/L", ["A/B"], "student"],
		[34, -14, 8, 5, "CC3 M/N", ["A/B"], "student"],
		[42, -14, 8, 5, "CC3 O/P", ["A/B"], "student"],
		[48, -14, 2, 5, "CC3 Stairs", ["Stair"], "stairs"],

		[18, -12, 34, 2, "CC3 Corridor", [""], "cor"]
	];
	return {
		"name": "College3", 
		"machine_name": "c3", 
		"blocks": [
				{
					"name": "BlockC", 
					"machine_name": "tstC", 
					"floors": [
						{
							"rooms": Cblock1
						}, 
						{
							"rooms": Cblock2
						},
						{
							"rooms": Cblock3
						}
					]
				}
			]
	};
})(); 