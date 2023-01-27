'use strict';

var webInfoController =  function($rootScope, $scope, $location, $http, $q, navSrv, paramSrv) {

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
