'use strict';
    
var eaNavDirektive = function($rootScope, $http, $location, paramSrv, navSrv) {
    return {
        restrict: 'E',
        templateUrl: "app/template/navbar.html",
        controller: function($rootScope, $http) {
            // Test
            console.log("Controller in eaNavDirektive call getParamObject()");
            navSrv.getParamObject("naviList", $rootScope, $http);
            
            // Test
            console.log("eaNavDirektive - controller ($rootScope)");
            console.log($rootScope);
        },      
        
        link: function (scope, element, attr) {
            
            //scope.navi = $rootScope.naviList;
            $rootScope.$watch('naviList', function(newVal, oldVal){
                scope.navi = $rootScope.naviList;
            }, true);                        
            //scope.navi = paramSrv.getNaviList();
            
            scope.currentLink = paramSrv.getCurrentLink($rootScope, $location.path());
            
            scope.isActive = function(nav) {
                return nav.href.indexOf(scope.location) === 1;
            };
            $rootScope.$on("$locationChangeSuccess", function(event, next, current) {            
                scope.location = $location.path();
            });
            
            // Test
            console.log("eaNavDirektive - link ($rootScope)");
            console.log($rootScope);

        }            
     };
};



