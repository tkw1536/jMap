/*
	Sample 2 Building
	Not used anywhere
*/

var test = (function(){

	var Test1 = [
		[-64, -60, 10, 12, "T1 MB-422", ["MB-422"], "student"],
		[-64, -48, 10, 24, "T1 MB 418 / MB 419", ["MB-418", "MB-419"], "student"],
		[-64, -24, 10, 24, "T1 MB 414 / MB 415", ["MB-414", "MB-415"], "student"],
		[-64, 0, 10, 24, "T1 MB 410 / 411", ["MB-410", "MB-411"], "student"],
		[-64, 24, 10, 24, "T1 MB 406 / 407", ["MB-406", "MB-407"], "student"],
		[-64, 48, 10, 24, "T1 MB 402 / 403", ["MB-402", "MB-403"], "student"]
	]; 

	var Test2 = [
		[-48, 48, 10, 24, "T2 MB 438 / 439", ["MB-438", "MB-439"], "student"],
		[-48, 24, 10, 24, "T2 MB 434 / 435", ["MB-434", "MB-435"], "student"],
		[-48, 0, 10, 24, "T2 MB 430 / 431", ["MB-430", "MB-431"], "student"],
		[-48, -24, 10, 24, "T2 MB 426 / 427", ["MB-426", "MB-427"], "student"],
		[-48, -36, 10, 12, "T2 MB 424", ["MB-424"], "student"]
	]; 
		
	var Test3 = [
		[58, -36, 10, 12, "T3 MB 460", ["MB-460"], "student"],
		[58, -24, 10, 24, "T3 MB 462 / 463", ["MB-462", "MB-463"], "student"],
		[58, 0, 10, 24, "T3 MB 466 / 467", ["MB-466", "MB-467"], "student"],
		[58, 24, 10, 24, "T3 MB 470 / 471", ["MB-470", "MB-471"], "student"],
		[58, 48, 10, 24, "T3 MB 474 / 475", ["MB-474", "MB-475"], "student"]
	]; 


	var Test4 = [
		[74, 48, 10, 24, "T4 MB 496 / 497", ["MB-496", "MB-497"], "student"],
		[74, 24, 10, 24, "T4 MB 492 / 493", ["MB-492", "MB-493"], "student"],
		[74, 0, 10, 24, "T4 MB 488 / 489", ["MB-488", "MB-489"], "student"],
		[74, -24, 10, 24, "T4 MB 484 / 485", ["MB-484", "MB-485"], "student"],
		[74, -48, 10, 24, "T4 MB 480 / 481", ["MB-480", "MB-481"], "student"],
		[74, -60, 10, 12, "T4 MB 478", ["MB-478"], "student"]
	]; 

	return {
		"name": "Test", 
		"machine_name": "test", 
		"blocks": [
				{
					"name": "Test1", 
					"machine_name": "tst1", 
					"floors": [
						{
							"rooms": Test1
						}, 
						{
							"rooms": Test2
						}
					]
				}, 
				{
					"name": "Test2", 
					"machine_name": "tst2", 
					"floors": [
						{
							"rooms": Test3
						}, 
						{
							"rooms": Test4
						}
					]
				}
			]
	};
})(); 