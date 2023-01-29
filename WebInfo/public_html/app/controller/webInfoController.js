'use strict';

var webInfoController =  function($rootScope, $scope, navSrv) {

    $scope.Name = "webInfoController";
    $scope.navSrv = navSrv;
    $scope.isNew = function(d) {
        var ret = false;
        
        let yourDate = new Date();
        let yy = yourDate.toISOString().split('T')[0];
        
        ret = (yy <= d.newTo)? true : false;
        ret = (yy >= d.newFrom)? ret : false;
        return ret;
    };
   
    $rootScope.firstCall = true;
        
    // Test
    console.log("1 - webInfoController($scope)");
    console.log($scope);
   
    return false;
};
