'use strict';

var eaLoadJson = function ( $rootScope, $http ) {
    return {
        restrict: 'E',
        replace: true,
        
        // local scope
        scope: true,

        controller: function($scope) {
            
            $scope.getParamObject = function(folder, paramName, rootScope, http) {
                var url = folder + paramName + ".json";
                rootScope["isLoaded_" + paramName] = false;

                let callback = function(paramName, rootScope, json) {
                    const obj = json;
                    rootScope[paramName] = obj.entries;
                    rootScope["isLoaded_" + paramName] = true;
 
                    return obj.entries;
                };
                let newObject = rootScope[paramName];
                if(newObject === undefined 
                   || (newObject.constructor === Object && Object.entries(newObject).length === 0)) 
                {
                    fetch (url).then (function (response) {
                        return response.json();
                    }).then (function(response){
                        newObject = callback(paramName, rootScope, response);
                        var opt = {
                            paramName: paramName,
                            paramObj: newObject
                        };
                        rootScope.$emit("LoadJsonFile-" + paramName, opt);
                    }).catch (function (error) {
                            console.log ("Fehler: " + error);
                        }); 
                };                
                return false;
            };
        }, // controller        
        
        link: function (scope, ele, attrs) {      
            $rootScope.contentFolder = attrs.contentFolder;
            let cf = $rootScope.contentFolder;
            let jsonFolder = attrs.jsonFolder;
            let jsonFiles = attrs.jsonFiles;
            jsonFiles = jsonFiles.split(",");
            jsonFiles.forEach(o => {scope.getParamObject(cf + jsonFolder + "/", o.trim(), $rootScope, $http);});
        }
    };  // return
};   // eaLoadJson()

