'use strict';
    
var eaNavDirektive = function($rootScope, $http, $location, eaNavSrv) {
    return {
        restrict: 'E',
        templateUrl: "app/template/navbar.html",
        controller: function($rootScope, $scope, $http) {
            
            
            
            $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
                                
                $scope.scope_eaNavDirektive_Controller = $scope.url;    
                
                $scope.naviList = $rootScope.naviList;
                
                $scope.url = $scope.navSrv.getHtml4Id($rootScope, $location.path(), eaNavSrv);
                
//                // Test
//                console.log("4 - Directive-eaNavDirektive-Controller-$on('LoadJsonFile-naviList')($scope)");
//                console.log($scope);
//                
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



