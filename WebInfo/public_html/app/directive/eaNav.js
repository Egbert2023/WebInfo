'use strict';
    
var eaNavDirektive = function($rootScope, $http, $location, paramSrv, navSrv) {
    return {
        restrict: 'E',
        templateUrl: "app/template/navbar.html",
        controller: function($rootScope, $scope, $http) {
            
            $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
                $scope.navi = $rootScope.naviList;
                $scope.naviList = $rootScope.naviList;
                // Test
                console.log("4 - $rootScope.$on('LoadJsonFile-naviList', evt, opt)");
                console.log(evt);
                console.log(opt);                
            });
          
            // Test
            console.log("6 - eaNavDirektive - controller ($rootScope)");
            console.log($rootScope);
        },      
        
        link: function (scope, element, attr) {
            
            //scope.navi = $rootScope.naviList;
            $rootScope.$watch('naviList', function(newVal, oldVal){
                scope.navi = $rootScope.naviList;
                scope.naviList = $rootScope.naviList;
            }, true);                        
                        
//            if($rootScope.isLoaded_naviList) {
//                scope.currentLink = paramSrv.getCurrentLink($rootScope, $location.path());
//            } else {
//                scope.currentLink = {};
//            };            
            
            scope.isActive = function(nav) {
                return nav.href.indexOf(scope.location) === 1;
            };
            $rootScope.$on("$locationChangeSuccess", function(event, next, current) {            
                scope.location = $location.path();
            });
            
            // Test
            console.log("5 - eaNavDirektive - link ($rootScope)");
            console.log($rootScope);

        }            
     };
};



