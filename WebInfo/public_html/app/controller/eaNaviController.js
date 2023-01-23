'use strict';

var eaNaviController =  function($rootScope, $scope, $location, paramSrv) {
    
    // prepare the news list
    $scope.newsList = $scope.$parent.newsList;
    
    // prepare the Image box handling
    $scope.imgBoxList = $scope.$parent.imgBoxList;
    $scope.imgBoxKey = "";

    // prepare the link path viewer
    var pathArr = $location.path().split("/");
    $scope.url = $scope.navSrv.getHtml4Id($location.path(), paramSrv);
    $scope.htm = "";
    $scope.currLink = getCurrentLink($location.path());
    
    // compute the background picture
    $scope.objBg = $scope.$parent.objBg;
    var bg = ($scope.objBg[pathArr[1]] !== null)? $scope.objBg[pathArr[1]] : "url(content/.../pictures/Solardach-mit-Blume.jpg center / cover no-repeat fixed";
    var ngView = document.getElementById("ng-view");
    if(ngView!==null) {
        if(ngView.style!==null) {
            ngView.style.backgroundImage = bg ;
        }
    }        
    
    // prepare site map
    $scope.navi = paramSrv.getNaviList();
    
//    // Test
//    console.log("eaNaviController -> $scope");
//    console.log($scope);
    
    return false;
};

