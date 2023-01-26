'use strict';

var webInfoController =  function($rootScope, $scope, $location, $http, $q, navSrv, paramSrv) {

    // initialisation of parameters
    $rootScope.contentFolder = "content/fegh/";
    
    navSrv.getParamObject("naviList", $rootScope, $http);
    navSrv.getParamObject("objBg", $rootScope, $http);
    navSrv.getParamObject("imgBoxList", $rootScope, $http);
    navSrv.getParamObject("newsList", $rootScope, $http);
    
                     

    if($rootScope["isLoaded_naviList"]) {
        $scope.naviList = $rootScope.naviList;
        $scope.navi = $rootScope.naviList;
    } else {
        $rootScope.$watch('naviList', function(newVal, oldVal){
            $scope.naviList = $rootScope.naviList;
            $scope.navi = $rootScope.naviList;
        }, true);                        
    }
    
    // Test
    // $scope.naviList can use in 
    // 'eaNaviController' and 
    // 'eaNavDirektive' (this call is too early)
    

//    // initialisation of parameters
//    //$scope.objBg = paramSrv.getObjBg();
//    //$scope.objBg = (typeof $scope.objBg !== 'undefined')? $scope.objBg : paramSrv.getObjBg();
//    $scope.objBg = navSrv.getParamObject("objBg", $rootScope, $http);
////    $rootScope.$watch('objBg', function(newVal, oldVal){
////        $scope.objBg = $rootScope.objBg;
////    }, true);      

//    if($rootScope["isLoaded_objBg"]) {
//        $scope.objBg = $rootScope.objBg;
//    } else {
//        $rootScope.$watch('objBg', function(newVal, oldVal){
//            $scope.objBg = $rootScope.objBg;
//        }, true);                        
//    }

    
//    //$scope.newsList = paramSrv.getNewsList();
//    $scope.newsList = (typeof $scope.newsList !== 'undefined')? $scope.newsList : paramSrv.getNewsList();
//        
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
    
    // Test
    console.log("1 - webInfoController($rootScope, $scope)");
    console.log($rootScope);
    console.log($scope);
    
    return false;
};
