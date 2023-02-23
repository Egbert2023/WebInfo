'use strict';
    
var eaNavDirektive = function($rootScope, $http, $location, eaNavSrv) {
    
    var urlIsReaded = false;
    
    return {
        restrict: 'E',
        templateUrl: "app/template/navbar.html",
        controller: function($rootScope, $scope, $http) {
            
            $scope.scope_eaNavDirektive_Controller = $scope.url;
            
            $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
                $scope.scope_eaNavDirektive_Controller = $scope.url;    
                $scope.naviList = $rootScope.naviList;
                $scope.url = $scope.navSrv.getHtml4Id($rootScope, $location.path(), eaNavSrv);
                urlIsReaded = true;
                
                $rootScope.$emit("ReadUrlIsReady", $scope.url);
                
//                // Test
//                console.log("4 - Directive-eaNavDirektive-Controller-$on('LoadJsonFile-naviList')($scope)");
//                console.log($scope);
                
            });
            
        },      
        
        link: function (scope, element, attr) {
            
            // /pictures/navLogo.gif
            //if(urlIsReaded) {
                let navLogo = attr.navLogo;
                scope.$parent.navLogo = scope.$parent.contentFolder + navLogo;
//
//                // Test
//                console.log("4.5 - Directive-eaNavDirektive-link($scope)");
//                console.log(scope);
            //}
            
            scope.isActive = function(nav) {
                return nav.href.indexOf(scope.location) === 1;
            };
            $rootScope.$on("$locationChangeSuccess", function(event, next, current) {            
                scope.location = $location.path();
            });
        }            
     };
};



