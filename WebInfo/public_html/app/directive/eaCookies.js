'use strict';

// not in use.

var eaCookiesDirektive = function($rootScope) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/template/cookieBanner.html",
        scope: false,
        
        controller: function($scope) {
            $scope.saveCookies = function(x) {
                switch(x) {
                    case "all":
                        
                        break;
                    case "cur":
                        
                        break;
                    default:
                                                
                }
            };
        }, // controller

        link: function (scope, element, attr) {
            scope.scope_eaCookiesDirektive = scope.url;    
            
            // Get params from JSON file
            let paramCookies = $rootScope.paramsApp[0].cookies;
            
            // read from parameters
            scope.titleCookie = paramCookies.title;
            scope.bodyCookie = paramCookies.body;
            scope.typesCookie = paramCookies.types;
            scope.linksCookie = paramCookies.links;
    
    

        }
    };
};

