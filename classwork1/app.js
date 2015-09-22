//declaring the dependencies
//making an object is not necessary.
var myApp = angular.module('app', ['ionic']);

myApp.controller("name", function($scope){
	//this is not visible
	var private_greetings = "Hello World";

	//this is visible
	$scope.mygreetings = private_greetings;

	$scope.items = [
				"Storm Spirit",
				"Life Stealer",
				"Vengeful Spirit",
				"Troll Warlord",
				"Ashok Tamang",
				"Lina",
				"Puck",
				];

	//Auth for parse account and details in it
	var authenticationHeaders = {
        "x-parse-application-id": "gz2Z1PWrwbHXbo7RmLImvr2KPS4hodNY7Xi69Vwu",
        "x-parse-rest-api-key": "cn1vCkQZX9MNxeQyMzmZtSwr72kqevYQefAnjpL3"
    };

    var defaultSettings = {
        "async": true,
        "crossDomain": true,
        headers: authenticationHeaders,
    };

    function login() {
    	// copies the object...
	    var settings = {
	        "async": true,
	        //"crossDomain": true,
	        "headers": authenticationHeaders,
	        "url": "https://api.parse.com/1/login",
	        "method": "GET",
	        "data": {
	            "username": "ashok.tamang@bison.howard.edu",
	            "password": "yamahaFX3000"
	        }
	    }
	};

	$scope.login = login();

	var getStuff = [];

	
	var getStuffList = function() {

        // copies the object...
        var settings = $.extend({}, defaultSettings);

        // sets the specific URL for the ajax call, this
        // information would be specified in the API documentation
        settings.url = "https://api.parse.com/1/classes/stuff";

        // sets the appropriate REST VERB for tha API call, this
        // information would be specified in the API documentation
        settings.method = "GET";

        // makes the call using http client for jQuery $.ajax
        $.ajax(settings).done(function(response) {
            console.log(JSON.stringify(response, null, 2));

            // Parsing the data the values of the key "results" from the JSON object
            console.log(response["results"]);
            console.log("where is you?");

            var resultsArray = response["results"];
            for (i = 0; i < resultsArray.length; i++) {
            	var results = resultsArray[i];
            	console.log(JSON.stringify(results, null, 2));
            }
        getStuff = response["results"];

        });
    }

    $scope.getStuffList = getStuff;

    console.log("hellow");

    $scope.hey = [
    		"hey",
    		"hi",
    		"hello",
    ];
    
    
});
