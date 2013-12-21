var jpeople_server_name, 
jpeople_server_path, 
jpeople_image_server, 
jpeople_server_image_prefix, 
jpeople_server_image_suffix,
jpeople_server_protocol;

(function(){

//
// Config
//

//There should be no need to change this. 

//Where is jPeople?
jpeople_server_name = "jpeople.user.jacobs-university.de";
jpeople_server_path = "/ajax.php";
jpeople_image_server = "swebtst01.public.jacobs-university.de"; //switch this to something else
jpeople_server_image_prefix = "/jPeople/image.php?id=";
jpeople_server_image_suffix = "";
jpeople_server_protocol = location.protocol; 

//Map for property names
//Anything not in here will be removed
var jpeople_attr_map = {
	"id": "id",
	"eid": "eid",
	"employeetype": "employeetype",
	"attributes": "attributes",
	"account": "account",
	"attributes": "attributes",
	"fname": "fname",
	"lname": "lname",
	"birthday": "birthday",
	"country": "country",
	"college": "college",
	"majorlong": "majorlong",
	"majorinfo": "majorinfo",
	"major": "major",
	"status": "status",
	"year": "year",
	"room": "room",
	"phone": "phone",
	"email": "email",
	"description": "description",
	"title": "title",
	"office": "office",
	"deptinfo": "deptinfo",
	"block": "block",
	"floor": "floor"
};

//end config

var self = {}; 


//The Search function
self.search = function(query, callback){
	//encode the query
	var query = encodeURIComponent(query);

	//me the search and get a result
	jQuery
	.ajax({
		url: jpeople_server_protocol+"//"+jpeople_server_name+jpeople_server_path+"?action=fullAutoComplete&str="+query,
	})
	.done(function(data){
		try{
			var data = (typeof data == "string")?JSON.parse(data):data; 
			var people_tree = data["records"] || []; 
			var people_list = []; 

			for(var i=0;i<people_tree.length;i++){
				var person = people_tree[i]; 

				var person_dict = {}; 

				for(var tag in person){
					if(jpeople_attr_map.hasOwnProperty(tag)){
						person_dict[jpeople_attr_map[tag]] = person[tag]; 
					}
				}

				person_dict["photo"] = jpeople_server_protocol+"//"+jpeople_image_server+jpeople_server_image_prefix+person_dict["eid"]+jpeople_server_image_suffix;

				people_list.push(person_dict); 
			}

			callback(people_list); 
		} catch(e){
			callback(false); 
		}
	})
	.fail(function() {
	  callback(false); 
	});

};

self.main = function(query){
	if(query == ""){
		console.log("jPeople API Client (Client Side JavaScript)");
		console.log("(c) Tom Wiesing 2013");
		console.log("Usage: "+args[0]+" $SEARCH"); 
	} else {
		self.search(query, function(res){
			if(!res){
				console.log("Search failed! ");
				console.log("Please make sure you are in the Jacobs University Network / VPN. ");
			} else {
				var out = function (obj, item, pre, post){	
					var pre = (typeof pre == "string")?pre:""; 
					var post = (typeof post == "string")?post:""; 

					if(obj.hasOwnProperty(item)){
						var data = obj[item]; 
						if(data != ""){
							console.log(pre+data+post);
						}
					}
				};

				for(var i=0;i<res.length;i++){
					var person = res[i]; 

					out(person, 'lname', undefined, ", "+person['fname']);
					out(person, 'attributes', undefined, ", "+person['description']);
					out(person, 'college', 'College: ');
					out(person, 'office', 'Office: ');
					out(person, 'room');
					out(person, 'email');
					out(person, 'phone', "(0421) 200 ");
					out(person, 'country', "Country: ");
					out(person, 'majorinfo', "Major: ");
					console.log("--");
				}
			}
		})
	}
	
};

window.jpeople = self; 
})(); 