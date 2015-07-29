'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', '$http', '$rootScope', function ($scope, $location, $window, $http, $rootScope) {
        $scope.$root.title = "Vincent's Awesome Page";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });

        $rootScope.cityName = "Seattle";

        $scope.lookupForecast = function (cityName) {
            cityName = cityName.trim();
            cityName.replace(" ", "+");
            $rootScope.cityName = cityName;
            $http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",us&mode=json").success(function (data, headers, config) {
                console.log("It worked!");
                console.log(data);
                $scope.weatherInfo = data;
                $scope.weatherList = $scope.weatherInfo["list"];
            }).error(function (data, headers, config) {
                console.log("Didn't work :/");
                console.log(data);
            });
        };

    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', '$http', '$rootScope', function ($scope, $location, $window, $http, $rootScope) {
        $scope.$root.title = "Vincent's Awesome Page | About";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
        $scope.cityName = $rootScope.cityName;
        $http.get("https://yboss.yahooapis.com/ysearch/web,images?q=" + $rootScope.cityName + "&sites=&format=json").success(function (data, headers, config) {
            console.log("Found an image!");
            console.log(data);
        }).error(function (data, headers, config) {
            console.log("Didn't find an image :/");
            console.log(data);
        });
    }])

    // Path: /contact
    .controller('ContactCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = "Vincent's Awesome Page | Contact";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = "Vincent's Awesome Page | Sign In";
        // TODO: Authorize a user
        $scope.login = function () {
            $location.path('/');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);