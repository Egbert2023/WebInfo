'use strict';

var eaNaviController =  function($rootScope, $scope, $location, paramSrv) {
    
    // prepare the news list
    //$scope.newsList = $scope.$parent.newsList;
    if($rootScope.isLoaded_newsList) {
        $scope.newsList = $rootScope.newsList;
    } else {  $scope.newsList = {};};
    $rootScope.$on("LoadJsonFile-newsList", function(evt, opt) {
        $scope.newsList = $rootScope.newsList;
    });

    // prepare background pictures
    var setBg = function(objBg) {
        let pathArr = $location.path().split("/");
        let bg = ($scope.objBg[pathArr[1]] !== null)? 
            $scope.objBg.find(o => o.key === pathArr[1]).pic : "";
        let ngView = document.getElementById("ng-view");
        if(ngView!==null) {
            if(ngView.style!==null) {ngView.style.backgroundImage = bg;}}        
    };
    if($rootScope.isLoaded_objBg) {
        $scope.objBg = $rootScope.objBg;
        setBg($scope.objBg);
    } else { $scope.objBg = {};}
    $rootScope.$on("LoadJsonFile-objBg", function(evt, opt) {
        $scope.objBg = $rootScope.objBg;
        setBg($scope.objBg);
    });
    
    // prepare the Image box handlingw
//    $scope.imgBoxList = $scope.$parent.imgBoxList;
//    $scope.imgBoxKey = "";
    if($rootScope.isLoaded_imgBoxList) {
        $scope.imgBoxList = $rootScope.imgBoxList;
    } else { $scope.imgBoxList = {};}
    $rootScope.$on("LoadJsonFile-imgBoxList", function(evt, opt) {
        $scope.imgBoxList = $rootScope.imgBoxList;
    });


    // prepare the link path viewer
    var pathArr = $location.path().split("/");
    $scope.url = $scope.navSrv.getHtml4Id($rootScope, $location.path(), paramSrv);
    $scope.htm = "";
    
    //$scope.currLink = getCurrentLink($rootScope, $location.path());   
    
    // prepare site map
    //$scope.navi = paramSrv.getNaviList();
    //$scope.navi = $rootScope.naviList;
    if($rootScope.isLoaded_naviList) {
        $scope.navi = $rootScope.naviList;
        $scope.currLink = getCurrentLink($rootScope, $location.path());
    } else {  $scope.navi = {};};
    $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
        $scope.navi = $rootScope.naviList;
        $scope.currLink = getCurrentLink($rootScope, $location.path());
    });

    // Test
    console.log("7 - eaNaviController($rootScope)");
    console.log($rootScope);
    
    return false;
};

