'use strict';

var eaCookiesDemoDirektive = function($rootScope, $cookies) {
    return {
        restrict: 'A',
        scope: false,
        
        controller: function($scope) {
            // -----------------------------
            // Functions for dirCookies.html
            // -----------------------------
            $scope.getCoolorByCtype = function(t) {
                let retCook = (t.length > 8)? t : "WebInfo_Cookie_" + t;
                return ($cookies.get(retCook)==="true")? "lightgreen" : "lightcoral";
            };
            
            $scope.getCoolorByValue = function(c) {
                let cc = $cookies.get(c);
                return (cc)? "lightgreen" : "lightcoral";
            };
            
            $scope.removeAllCookies = function() {
                let allCook = Object.keys($cookies.getAll());
                for(let i=0; i<allCook.length; i++) {
                    $cookies.remove(allCook[i], $scope.CookieProviderOptions);
                }
                $scope.cookiesUsed = false;
            };
            
            $scope.startCookies  = function(){
                //$scope.cookiePut('cookiesDemo', true, $scope.CookieProviderOptions);
                $scope.cookiePut('cookiesDemo', true, $scope.CookieProviderOptions);
                $scope.cookiesUsed = true;
                $scope.initCookies();
                if($scope.modalCookiesDoc) {
                    $scope.modalCookiesDoc.css('display','block');
                }     
            };      
                        
            $scope.setCookiesParam = function() {
                // https://stackoverflow.com/questions/66201196/js-how-to-update-cookies-to-samesite-none
                //let s = JSON.stringify($scope.cookiesParam) + "; Secure; SameSite=None; path=/"; 
                let s = JSON.stringify($scope.cookiesParam); 
                $scope.cookiePut("cookiesParam", s, $scope.CookieProviderOptions);
            };
            
            $scope.getCookiesParam = function() {
                let retObj={};
                //let myJson = $scope.cookieGet("cookiesParam");
                let myJson = $scope.cookieGet("cookiesParam");
                retObj = (myJson)? JSON.parse(myJson) : retObj;
                return retObj;
            };
            
            $scope.isEmpty = function(obj) {
                return Object.keys(obj).length === 0;
            };
            
            $scope.updateCookies  = function(){                       
                $rootScope.paramsApp.cookies = $scope.cookiesParam;
            };
        }, // controller

        link: function (scope, element, attr) {
            // demo for cookies - cookiesDemo is a cookie set for demo purposes
            // scope.cookiePut("cookiesDemo", "true");
            let cookDemo = $cookies.get(attr.eaCookiesDemo);
            let cookUsedOriginal = attr.cookiesUsed;
            scope.cookiesUsed = (cookUsedOriginal!=="true" && cookDemo==="true") ? true:false;
            let cRet = scope.getCookiesParam();
            let cp = (!scope.isEmpty(cRet))? cRet : scope.cookiesParam;
            
            if($rootScope.paramsApp) {
                scope.cookiesParam = (cp)? cp : $rootScope.paramsApp.cookies;
                $rootScope.paramsApp.cookies = scope.cookiesParam;
            } else
            {
                $rootScope.$on("LoadJsonFile-paramsApp", function(evt, opt) {
                    scope.cookiesParam = (cp)? cp : $rootScope.paramsApp.cookies;
                    $rootScope.paramsApp.cookies = scope.cookiesParam;
                });
            };
        }
    };
};

