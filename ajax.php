<?php
	

	// JSON URL which should be requested
	$json_url = 'http://jpeople.user.jacobs-university.de/ajax.php'
	 . "?action=fullAutoComplete&str="
	 . urlencode($_GET["str"]);

	// Initializing curl
	$ch = curl_init( $json_url );

	// Configuring curl options
	$options = array(
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_HTTPHEADER => array('Content-type: application/json') ,
	);

	// Setting curl options
	curl_setopt_array( $ch, $options );

	// Getting results
	$result =  curl_exec($ch); // Getting JSON result string
	curl_close($ch);

	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json");
	echo $result; 
 ?>