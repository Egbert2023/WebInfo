'use strict';

var eaLoadParams = function ( $rootScope ) {
    return {
        restrict: 'E',
        replace: true,
        
        // local scope
        scope: true,

//        controller: function($scope) {
//            
////            // Test
////            console.log("controller:eaImg($scope, scope)");
////            console.log($scope);
//                       
//            // Load object from json file
//            $scope.getParamObject = function(folder, paramName, rootScope, http) {
//                var url = folder + "json/" + paramName + ".json";
//                rootScope[paramName] = {};
//                rootScope["isLoaded-" + paramName] = false;
//                
//                var callback = function(paramName, rootScope, json) {
//                    const obj = json;
//                    rootScope[paramName] = obj.entrys;
//                    
////                    // Test
////                    console.log("getParamObject - callback($rootScope)");
////                    console.log(paramName);
////                    console.log(rootScope);
//
//                    return obj.entrys;
//                };
//                
//                var newObject = rootScope[paramName];
//                if(newObject === undefined 
//                   || (newObject.constructor === Object && Object.entries(newObject).length === 0)) {
//
//                    http({
//                        url: url,
//                        method: 'GET'
//                    }).then(function(response){
//                        newObject = callback(paramName, rootScope, response.data);
//                        var opt = {
//                            paramName: paramName,
//                            paramObj: newObject
//                        };
//                        rootScope["isLoaded-" + paramName] = true;
//                        rootScope.$emit("LoadJsonFile-" + paramName, opt);
//                    }, function(errResp){
//                            console.log("Error in $http get.");
//                            console.log(errResp);
//                    });
//                };
//                return false;
//            };
//        },   // controller
        
        link: function (scope, ele, attrs) {      
            $rootScope.folder = attrs.contentFolder;
            
//            scope.getParamObject(folder, "naviList", $rootScope, $http);
//            scope.getParamObject(folder, "objBg", $rootScope, $http);
//            scope.getParamObject(folder, "imgBoxList", $rootScope, $http);
//            scope.getParamObject(folder, "newsList", $rootScope, $http);
            
        }
    };  // return
};   // eaLoadParams()

