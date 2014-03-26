var KP = (function(){
	var floor2 = [
		[0, 1, 12, 8, "KA 1", ["KA-1","KA-1","KA-1"], "student"],
		[0, 4, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],

		[0, 12, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],
		[0, 20, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],
		[0, 28, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],
		[0, 36, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],
		[0, 44, 5, 2, "KA1 Stairs", [""], "stairs"],
		
		[5, 9, 2, 40, "CC1 Corridor", [""], "cor"],

		[7, 12, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],
		[7, 20, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],
		[7, 28, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],
		[7, 36, 5, 8, "KA 1", ["KA-1","KA-1"], "student"],
		[7, 44, 5, 2, "KA1 Kitchen", [""], "kitchen"]
	]; 

	var floor1 = [
	];

	var floor3 = [
	];

	return {
		"name": "Krupp", 
		"machine_name": "krupp", 
		"blocks": [
				{
					"name": "Krupp", 
					"machine_name": "abcd", 
					"floors": [
						{
							"rooms": floor1
						}, 
						{
							"rooms": floor2
						},
						{
							"rooms": floor3
						}
					]
				}
			]
	};
})(); 