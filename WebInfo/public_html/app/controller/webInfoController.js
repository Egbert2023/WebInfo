'use strict';

var webInfoController =  function($rootScope, $scope, $location, $http, $q, navSrv, paramSrv) {

    $rootScope.contentFolder = "content/fegh/";

    // read from json files
    //$scope.naviList = 
    navSrv.getParamObject("naviList", $rootScope, $http);
    
    // Test
    // $scope.naviList can use in 
    // 'eaNaviController' and 
    // 'eaNavDirektive' (this call is too early)
    


    // initialisation of parameters
    //$scope.objBg = paramSrv.getObjBg();
    $scope.objBg = (typeof $scope.objBg !== 'undefined')? $scope.objBg : paramSrv.getObjBg();
        
    //$scope.newsList = paramSrv.getNewsList();
    $scope.newsList = (typeof $scope.newsList !== 'undefined')? $scope.newsList : paramSrv.getNewsList();
        
    //$scope.imgBoxList = paramSrv.getImgBoxList();
    $scope.imgBoxList = (typeof $scope.imgBoxList !== 'undefined')? $scope.imgBoxList : paramSrv.getImgBoxList();

    $scope.navSrv = navSrv;
    $scope.isNew = function(d) {
        var ret = false;
        
        let yourDate = new Date();
        let yy = yourDate.toISOString().split('T')[0];
        
        ret = (yy <= d.newTo)? true : false;
        ret = (yy >= d.newFrom)? ret : false;
        return ret;
    };
    
    return false;
};
