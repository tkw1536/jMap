var KP = (function(){
	var floor2 = [
		//A-Block
		[0, 1, 12, 8, "KA 201/202/203", ["KA-201","KA-202","KA-203"], "student"],
		[0, 4, 5, 8, "KA 240/241", ["KA-240","KA-241"], "student"],

		[0, 12, 5, 8, "KA 236/237", ["KA-236","KA-237"], "student"],
		[0, 20, 5, 8, "KA 232/233", ["KA-232","KA-233"], "student"],
		[0, 28, 5, 8, "KA 228/229", ["KA-228","KA-229"], "student"],
		[0, 36, 5, 8, "KA 224/225", ["KA-224","KA-225"], "student"],
		[0, 44, 5, 2, "KA2 Stairs", [""], "stairs"],
		
		[5, 9, 2, 40, "KA2 Corridor", [""], "cor"],

		[7, 12, 5, 8, "KA 208/209", ["KA-208","KA-209"], "student"],
		[7, 20, 5, 8, "KA 212/213", ["KA-212","KA-213"], "student"],
		[7, 28, 5, 8, "KA 216/217", ["KA-216","KA-217"], "student"],
		[7, 36, 5, 8, "KA 220/221", ["KA-220","KA-221"], "student"],
		[7, 44, 5, 2, "KA2 Kitchen", [""], "kitchen"],

		//B-Block
		[24, 1, 12, 8, "KB 201/202/203", ["KB-201","KB-202","KB-203"], "student"],
		[24, 4, 5, 8, "KB 240/241", ["KB-240","KB-241"], "student"],

		[24, 12, 5, 8, "KB 236/237", ["KB-236","KB-237"], "student"],
		[24, 20, 5, 8, "KB 232/233", ["KB-232","KB-233"], "student"],
		[24, 28, 5, 8, "KB 228/229", ["KB-228","KB-229"], "student"],
		[24, 36, 5, 8, "KB 224/225", ["KB-224","KB-225"], "student"],
		[24, 44, 5, 2, "KB2 Stairs", [""], "stairs"],
		
		[29, 9, 2, 40, "KB2 Corridor", [""], "cor"],

		[31, 12, 5, 8, "KB 208/209", ["KB-208","KB-209"], "student"],
		[31, 20, 5, 8, "KB 212/213", ["KB-212","KB-213"], "student"],
		[31, 28, 5, 8, "KB 216/217", ["KB-216","KB-217"], "student"],
		[31, 36, 5, 8, "KB 220/221", ["KB-220","KB-221"], "student"],
		[31, 44, 5, 2, "KB2 Kitchen", [""], "kitchen"],

		//C-Block
		[48, 1, 12, 8, "KC 201/202/203", ["KC-201","KC-202","KC-203"], "student"],
		[48, 4, 5, 8, "KC 240/241", ["KC-240","KC-241"], "student"],

		[48, 12, 5, 8, "KC 236/237", ["KC-236","KC-237"], "student"],
		[48, 20, 5, 8, "KC 232/233", ["KC-232","KC-233"], "student"],
		[48, 28, 5, 8, "KC 228/229", ["KC-228","KC-229"], "student"],
		[48, 36, 5, 8, "KC 224/225", ["KC-224","KC-225"], "student"],
		[48, 44, 5, 2, "KC2 Stairs", [""], "stairs"],
		
		[53, 9, 2, 40, "KC2 Corridor", [""], "cor"],

		[55, 12, 5, 8, "KC 208/209", ["KC-208","KC-209"], "student"],
		[55, 20, 5, 8, "KC 212/213", ["KC-212","KC-213"], "student"],
		[55, 28, 5, 8, "KC 216/217", ["KC-216","KC-217"], "student"],
		[55, 36, 5, 8, "KC 220/221", ["KC-220","KC-221"], "student"],
		[55, 44, 5, 2, "KC2 Kitchen", [""], "kitchen"]
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