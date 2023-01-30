'use strict';

var webInfoController =  function($rootScope, $scope, navSrv) {
    $scope.navSrv = navSrv;
    $scope.isNew = function(d) {
        var ret = false;
        
        let yourDate = new Date();
        let yy = yourDate.toISOString().split('T')[0];
        
        ret = (yy <= d.newTo)? true : false;
        ret = (yy >= d.newFrom)? ret : false;
        return ret;
    };
   
    $scope.scope_webInfoController = $scope.url;    
        
//    // Test
//    console.log("1 - webInfoController($scope)");
//    console.log($scope);
   
    return false;
};
