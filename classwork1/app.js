//declaring the dependencies
//making an object is not necessary.
var myApp = angular.module('app', ['ionic']);

myApp.controller("name", function($scope, $http){
	
	//these are  not visible
	var private_greetings = "Ashok";
	var message = "Assignment 2"

	//this is visible
	$scope.mygreetings = private_greetings;
	$scope.message = message;


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

    $scope.login = function() {
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

	//Initiliazing an object settings to 
    var settings = angular.extend({}, defaultSettings);

    // sets the specific URL for $http.get method
    settings.url = "https://api.parse.com/1/classes/stuff";

    // sets the appropriate REST VERB for tha API call
    settings.method = "GET";

    // gets the data from Parse, if successfull
	$http(settings).success(function(response){
		$scope.stuff = response.results;
	});
});

