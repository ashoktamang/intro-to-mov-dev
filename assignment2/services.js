angular.module('starter.services', [])

    .service("ParseService", function ($http) {

        var baseURL = "https://api.parse.com/1/";
        //Auth for parse account and details in it
        var authenticationHeaders = PARSE__HEADER_CREDENTIALS;

        var defaultSettings = {
            "async": true,
            "crossDomain": true,
            headers: authenticationHeaders,
        };

        var login = function () {
            // copies the object...
            var settings = {
                "async": true,
                //"crossDomain": true,
                "headers": authenticationHeaders,
                // "url": "https://api.parse.com/1/login",
                // "method": "GET",
                "data": {
                    "username": "ashok.tamang@bison.howard.edu",
                    "password": "yamahaFX3000"
                }
            };

            $http.get(baseURL + "login", settings)
                .then(function (response) {
                    // In the response resp.data contains the result
                    // check the console to see all of the data returned
                    console.log('login', response);
                    return response.data // for debug;
                });
        };


        return {
            getStuffList: function () {
                // Returns a list of stuff objects

                //Initializing an object settings to
                var settings = angular.extend({}, defaultSettings);

                // gets the data from Parse, if successful.
                return $http.get(baseURL + "classes/stuff/", settings)
                    .then(function (response) {
                        console.log(response) //for debug;
                        console.log(response.data); //for debug
                        return response.data;
                    });
            },

            getStuffId: function(_id) {
                // Returns a stuff object by ID

                var settings = angular.extend({}, defaultSettings);

                // get the stuff object by id, if successful.
                return $http.get(baseURL + "classes/stuff/" + _id, settings)
                    .then(function (response) {
                        console.log(response) //for debug;
                        console.log(response.data) //for debug;
                        return response.data;
                    });
            },

            addStuff: function (stuff) {

                // for POST, we only need to set the authentication header
                var settings = {
                    headers: authenticationHeaders,
                };

                var dataObject = {
                    "name": stuff.name,
                    "room": stuff.room,
                };

                var dataObjectString = JSON.stringify(dataObject);

                // $http returns a promise, which has a then function
                return $http.post(baseURL + 'classes/stuff', dataObjectString, settings)
                    .then(function (response) {
                        // In the response resp.data contains the result
                        // check the console to see all of the data returned
                        console.log('addObject', response);
                        return response.data;
                    });
            },
        }
    })