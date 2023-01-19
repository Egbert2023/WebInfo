'use strict';

var webInfoController =  function($scope, $location, $http, $q, eaNavSrv) {

    $scope.contentFolder = "content/fegh/service/eaParamSrv.js";

    $scope.navSrv = eaNavSrv;
    
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
