'use strict';

var eaPathLinkDirective = function ($rootScope, $location) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: "app/template/pathLink.html",
    controller: function($scope) {
        if($rootScope.isLoaded_naviList) {
            $scope.naviList = $rootScope.naviList;
            $scope.currLink = getCurrentLink($rootScope, $location.path());
            //scope.url = scope.navSrv.getHtml4Id($rootScope, $location.path(), paramSrv);
        } else {  $scope.naviList = {};};
        $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
            $scope.naviList = $rootScope.naviList;
            $scope.currLink = getCurrentLink($rootScope, $location.path());
            //scope.url = scope.navSrv.getHtml4Id($rootScope, $location.path(), paramSrv);
        });
    },

    link: function (scope, ele, attrs) {        

    }};
};

