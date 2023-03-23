'use strict';

var eaCookiesDirektive = function($rootScope, $cookies, $compile ) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/template/cookieBanner.html",
        scope: false,
        
        controller: function($scope) {

            let doc = document.getElementById('modalCookies');
            $scope.modalCookiesDoc = angular.element(doc);


//            // Initialization for cookies
//            $scope.initCookies = function() {
//                $scope.cookies = {};
//                var cooEss = $cookies.get("WebInfo_Cookie_Ess");
//                var cooAna = $cookies.get("WebInfo_Cookie_Ana");
//                var cooExt = $cookies.get("WebInfo_Cookie_Ext");
//                $scope.cookies = {
//                    ess: true,
//                    ana: false,
//                    ext: false        
//                };    
//                if(cooAna) { $scope.cookies.ana = (cooAna==="true")? true : false;};
//                if(cooExt) { $scope.cookies.ext = (cooExt==="true")? true : false;};    
//
//                return false;
//            };    
//            $scope.initCookies();
            
            // Save all cookies by type
            $scope.saveCookies = function() {
                $cookies.put("WebInfo_Cookie_Ess", true);
                $cookies.put("WebInfo_Cookie_Ana", ($scope.cookies.ana)? "true" : "false");
                $cookies.put("WebInfo_Cookie_Ext", ($scope.cookies.ext)? "true" : "false");
            };

            
            $scope.closeModalCookies = function(){
//                $scope.showCookies = false;
//                return false;
                
//                let doc = document.getElementById('modalCookies');
//                let target = angular.element(doc);

                if($scope.modalCookiesDoc) {
                    $scope.modalCookiesDoc.css('display','none');
                }
            };
            $scope.openModalCookies = function(){
//                $scope.showCookies = true;
//                return false;
                
//                let doc = document.getElementById('modalCookies');                
//                let target = angular.element(doc);
//                $scope.modalCookieDoc = target;
                if($scope.modalCookiesDoc) {
                    $scope.modalCookiesDoc.css('display','block');
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
                        
            $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
                
                
                // read from JSON parameters
                scope.title = $rootScope.paramsApp[0].cookies.title;
                scope.body = $rootScope.paramsApp[0].cookies.body;
                scope.types = $rootScope.paramsApp[0].cookies.types;
                scope.links = $rootScope.paramsApp[0].cookies.links;
                
                // init cookies
                scope.cookies = [];
                var htm01 = '\n\t<div class="col-lg-3 col-md-6 col-sm-12">';
                var htm = "";
                var htm02 = '\n\t</div>';
                for(let i=0; i<scope.types.length; i++) {
                    let cook = $cookies.get("WebInfo_Cookie_" + scope.types[i].id);
                    let x = scope.types[i].id;
                    let y = (cook)? cook : scope.types[i].def;
                    let o = {};
                    o[x] = y;
                    scope.cookies.push(o);
                    htm = htm + htm01 + '\n\t\t<input type="checkbox" id="' + scope.types[i].id + 'Id" name="'  + scope.types[i].id + '" value="' + scope.types[i].id + '">';
                    htm = htm + '\n\t\t<label for="' + scope.types[i].id + '">' + scope.types[i].title + '</label>' + htm02;
                    //<input type="checkbox" id="essId" name="ess" value="ess">
                    //<label for="ess">Essentiell</label>
                }
                
                // init links
                
                
                
                
                // read from Tag parameter
                scope.cookiesUsed = attr.cookiesUsed;
                if(scope.cookiesUsed === "true") {
                    let doc = document.getElementById("eaInnerCookies");
                    let aDoc = angular.element(doc);
                    let html = $compile(htm)(scope);
                    aDoc.append(html);

                    // modalCookies to show
                    scope.openModalCookies();
                }                
            });
        }
    };
};

