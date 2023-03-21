'use strict';

// not in use.

var eaCookiesDirektive = function($rootScope) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/template/cookieBanner.html",
        scope: false,
        
        controller: function($scope) {
            $scope.initCookies();
                 
            $scope.closeModalCookies = function(){
                let doc = document.getElementById('modalCookies');
                let target = angular.element(doc);
                if(target) {
                    target.css('display','none');
                }
            };
            $scope.openModalCookies = function(){
                let doc = document.getElementById('modalCookies');
                let target = angular.element(doc);
                if(target) {
                    target.css('display','block');
                }
            };
                        
            $scope.saveCurrentCookies = function(x) {
                switch(x) {
                    case "all":
                        $scope.cookies.ana = true;
                        $scope.cookies.ext = true;
                        break;
                    case "current":
                        $scope.cookies.ana = true;
                        $scope.cookies.ext = true;
                        break;
                    default:
                        $scope.cookies.ana = false;
                        $scope.cookies.ext = false;
                };
                
                // Close modal window
                $scope.saveCookies();
                $scope.closeModalCookies();
            };
        }, // controller

        link: function (scope, element, attr) {
            scope.scope_eaCookiesDirektive = scope.url;    
            let paramCookies = {};
            
            // read from Tag parameter
            scope.cookiesUsed = attr.cookiesUsed;
            if(scope.cookiesUsed === "true") {
                // modalCookies to show
                scope.openModalCookies();
            }
        }
    };
};

