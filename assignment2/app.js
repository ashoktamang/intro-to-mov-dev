//declaring the dependencies
//making an object is not necessary.
angular.module('app', ['ionic', 'starter.services'])


    .controller("homeCtrl", function ($scope, ParseService, $state) {


        $scope.getStuffList = function () {
            ParseService.getStuffList()
                .then(function (_data) {
                    $scope.stuffs = _data.results;
                    console.log($scope.stuffs) //debug;
                });
        }

        $scope.getStuffList();

        // Settings for list-options
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;

        $scope.data = {
            showDelete: false
        };

        $scope.stuffName = "";
        $scope.stuffRoom = "";

        console.log($scope.stuffName);
        console.log($scope.stuffRoom);

        $scope.addStuff = function (stuff) {

            stuff = {
                "name": $scope.stuffName,
                "room": $scope.stuffRoom,
            }
            ParseService.addStuff(stuff).then(function (response) {
                console.log('addStuff', response);
                $scope.getStuffList();

            })

        }
        $scope.updateStuff = function (item) {
            alert('Edit Item: ' + item.id);
        };
        $scope.deleteStuff = function (item) {
            alert('Share Item: ' + item.id);
        };
    })

    .controller("detailCtrl", function ($scope, $state, ParseService) {
        //Get object by Id
        ParseService.getStuffId($state.params.objectID).then(function (_data) {
            console.log(_data); //debug
            $scope.stuffbyId = _data;

        }, function (_error) {
            alert("Error"._error.message);
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                controller: "homeCtrl"
            })
            .state('detail', {
                url: "/detail/:objectID",
                templateUrl: "detail.html",
                controller: "detailCtrl"
            });
    });
