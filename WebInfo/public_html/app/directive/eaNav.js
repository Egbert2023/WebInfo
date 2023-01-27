'use strict';
    
var eaNavDirektive = function($rootScope, $http, $location) {
    return {
        restrict: 'E',
        templateUrl: "app/template/navbar.html",
        controller: function($rootScope, $scope, $http) {
            
            $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
                $scope.naviList = $rootScope.naviList;
            });
        },      
        
        link: function (scope, element, attr) {
            scope.isActive = function(nav) {
                return nav.href.indexOf(scope.location) === 1;
            };
            $rootScope.$on("$locationChangeSuccess", function(event, next, current) {            
                scope.location = $location.path();
            });
        }            
     };
};



