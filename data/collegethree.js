var C3 = (function(){

	var Cblock1 = [
		[18, -7, 8, 5, "CC A/B", ["A/B"], "student"],
		[26, -7, 8, 5, "CC C/D", ["A/B"], "student"],
		[34, -7, 8, 5, "CC E/F", ["A/B"], "student"],
		[42, -7, 8, 5, "CC G/H", ["A/B"], "student"],
		[48, -7, 2, 5, "CC Kitchen", ["Kitchen"], "kitchen"],

		[18, -14, 8, 5, "CC I/J", ["A/B"], "student"],
		[26, -14, 8, 5, "CC K/L", ["A/B"], "student"],
		[34, -14, 8, 5, "CC M/N", ["A/B"], "student"],
		[42, -14, 8, 5, "CC O/P", ["A/B"], "student"],
		[48, -14, 2, 5, "CC Stairs", ["Stair"], "staircase"],

		[18, -12, 34, 2, "Corridor", [""], "corridor"]
	]; 

	var Cblock2 = [
		[18, -7, 8, 5, "CC A/B", ["A/B"], "student"],
		[26, -7, 8, 5, "CC C/D", ["A/B"], "student"],
		[34, -7, 8, 5, "CC E/F", ["A/B"], "student"],
		[42, -7, 8, 5, "CC G/H", ["A/B"], "student"],
		[48, -7, 2, 5, "CC Kitchen", ["Kitchen"], "kitchen"],

		[18, -14, 8, 5, "CC I/J", ["A/B"], "student"],
		[26, -14, 8, 5, "CC K/L", ["A/B"], "student"],
		[34, -14, 8, 5, "CC M/N", ["A/B"], "student"],
		[42, -14, 8, 5, "CC O/P", ["A/B"], "student"],
		[48, -14, 2, 5, "CC Stairs", ["Stair"], "staircase"],

		[18, -12, 34, 2, "Corridor", [""], "corridor"]
	];

	var Cblock3 = [
		[18, -7, 8, 5, "CC A/B", ["A/B"], "student"],
		[26, -7, 8, 5, "CC C/D", ["A/B"], "student"],
		[34, -7, 8, 5, "CC E/F", ["A/B"], "student"],
		[42, -7, 8, 5, "CC G/H", ["A/B"], "student"],
		[48, -7, 2, 5, "CC Kitchen", ["Kitchen"], "kitchen"],

		[18, -14, 8, 5, "CC I/J", ["A/B"], "student"],
		[26, -14, 8, 5, "CC K/L", ["A/B"], "student"],
		[34, -14, 8, 5, "CC M/N", ["A/B"], "student"],
		[42, -14, 8, 5, "CC O/P", ["A/B"], "student"],
		[48, -14, 2, 5, "CC Stairs", ["Stair"], "staircase"],

		[18, -12, 34, 2, "Corridor", [""], "corridor"]
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