'use strict';
    
var eaNavDirektive = function($rootScope, $location, paramSrv) {
    return {
        restrict: 'E',
        templateUrl: "app/template/navbar.html",
        link: function (scope, element, attr) {
            scope.navi = paramSrv.getNaviList();
            scope.currentLink = paramSrv.getCurrentLink($location.path());
            scope.isActive = function(nav) {
                return nav.href.indexOf(scope.location) === 1;
            };
            $rootScope.$on("$locationChangeSuccess", function(event, next, current) {            
                scope.location = $location.path();
            });
        }            
     };
};



