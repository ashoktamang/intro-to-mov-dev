var myApp = angular.module('starter.services', ['ionic']);

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