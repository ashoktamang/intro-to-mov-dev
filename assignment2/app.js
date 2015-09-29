//declaring the dependencies
//making an object is not necessary.
var myApp = angular.module('app', ['ionic', 'starter.services']);

myApp.controller("starter", function ($scope, Parse) {
    //these are  not visible
	var private_greetings = "Ashok";
	var message = "Assignment 2"

	//this is visible
	$scope.mygreetings = private_greetings;
	$scope.message = message;
	// $scope.stuff = Parse.getStuffList();
	// console.log($scope.stuff);
	// console.log($scope.stuff.data.results);

	var populateList = function () {
        Parse.getStuffList().then(function (_data) {
        	console.log(_data);
            $scope.stuffs = _data.data.results;
            console.log($scope.stuffs);
        }, function error(_error) {
            alert("Error", _error);
        });
    }

    populateList();

    // Settings for list-options
    $scope.shouldShowDelete = false;
	$scope.shouldShowReorder = false;
	$scope.listCanSwipe = true;

	$scope.data = {
		showDelete: false
	};

	$scope.update = function(item) {
		alert('Edit Item: ' + item.id);
	};
	$scope.delete = function(item) {
		alert('Share Item: ' + item.id);
	};
});

myApp.service("Parse", function ($http){ 
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

    var login = function() {
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
      };
      $http(settings)
      // success callback function implemented as an
      // anonymous function
      .success(function(_successResponse) {
        //alert(JSON.stringify(_successResponse));
      })
      // error callback function referenced as a defined
      // function above
      .error(function(_errorResponse) {
        alert(JSON.stringify(res_errorResponseponse));
      })
      // done handler is called irregardless of an error or success
      // this is a catch all
      .done(function(response) {
        console.log("DONE - " + JSON.stringify(response));
      });
    };

  
  return {
    getStuffList: function(){
		//Initiliazing an object settings to 
		var settings = angular.extend({}, defaultSettings);

		// sets the specific URL for $http.get method
		settings.url = "https://api.parse.com/1/classes/stuff";

		// sets the appropriate REST VERB for tha API call
		settings.method = "GET";

		// gets the data from Parse, if successfull
		return $http(settings).success(function(response){
		});
	},

  }
});


