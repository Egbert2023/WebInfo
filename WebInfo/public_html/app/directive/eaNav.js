'use strict';
    
var eaNavDirektive = function($rootScope, $http, $location, eaNavSrv) {
    
    //var urlIsReaded = false;
    
    return {
        restrict: 'E',
        templateUrl: "app/template/navbar.html",
        controller: function($rootScope, $scope, $http) {
            
            $scope.scope_eaNavDirektive_Controller = $scope.url;
            
            $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
                $scope.scope_eaNavDirektive_Controller = $scope.url;    
                $scope.naviList = $rootScope.naviList;
                $scope.url = $scope.navSrv.getHtml4Id($rootScope, $location.path(), eaNavSrv);
                //urlIsReaded = true;
                
                $rootScope.$emit("ReadUrlIsReady", $scope.url);
            });
            
        },      
        
        link: function (scope, element, attr) {
            let navLogo = attr.navLogo;
            scope.$parent.navLogo = scope.$parent.contentFolder + navLogo;
            scope.isActive = function(nav) {
                return nav.href.indexOf(scope.location) === 1;
            };
            
            $rootScope.$on("$locationChangeSuccess", function(event, next, current) {            
                scope.location = $location.path();
            });
        }            
     };
};

var eaNavDynDirektive = function($rootScope, $http, $location, eaNavSrv) {
        return {
        restrict: 'E',
        template: '<nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top">' +
                  '\n\t<div class="container-fluid">' +
                  '\n\t\t<a class="navbar-brand"  href="#!/home">' +
                  '\n\t\t\t<img class="eaLogo" src="{{navLogo}}" alt=""/>' +
                  '\n\t\t</a>' +
                  '\n\t\t<button class="navbar-toggler" \n\t\t\t type="button" data-bs-toggle="collapse" \n\t\t\t data-bs-target="#navbarSupportedContent" ' +
                  '\n\t\t\t aria-controls="navbarSupportedContent" \n\t\t\t aria-expanded="false" ' +
                  '\n\t\t\t aria-label="Toggle navigation">' +
                  '\n\t\t<span id="myToogle" class="navbar-toggler-icon"></span>' +
                  '\n\t\t</button>' +
                  '\n\t\t<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
                  '\n\t\t\t<ul class="navbar-nav">' +
                  '\n\t\t\t\t<div id="eaInsertMenu"></div>' +
                  '\n\t\t\t</ul>' +
                  '\n\t\t</div>' +
                  '\n\t</div>' +
                  '\n</nav>',
        
        controller: function($rootScope, $scope, $http) {
            
            $scope.scope_eaNavDirektive_Controller = $scope.url;
            
            $rootScope.$on("LoadJsonFile-naviList", function(evt, opt) {
                $scope.scope_eaNavDirektive_Controller = $scope.url;    
                $scope.naviList = $rootScope.naviList;
                $scope.url = $scope.navSrv.getHtml4Id($rootScope, $location.path(), eaNavSrv);
                                
                $rootScope.$emit("ReadUrlIsReady", $scope.url);
                
                $scope.addMenu("nav",$scope.naviList);
            });
            
            $scope.getMenuItem = function(cls, naItem) {
                return '<li class="' + cls + '-item"><a class="' + cls + '-link" href="' + naItem.href + '">' + naItem.label + '</a> </li>';
            };
            
            $scope.addMenu = function(cls, naLi) {
                // {"id":"navStart", "label": "Home", "href": "#!/home", "url": "content/aleks/html/home.html", "imgKey": "",
                //  "subm": []},
                let htm = "";
                naLi.forEach(o => {
                    htm = htm + $scope.getMenuItem(cls, o);
                    if(o.subm) {
                        if(o.subm.length>0) {
                            cls = (cls==="sitemap")? "sitemap":"dropdown";
                            
                            htm = htm + '<ul class="submenu dropdown-menu">';
                            htm = htm + $scope.getMenuItem(cls, o.subm);
                                                       
                            htm = htm + $scope.addMenu(cls, o.subm);
                            
                            htm = htm + '</ul>';
                        };
                    };
                });
            };
            
        },      
        
        link: function (scope, element, attr) {
            let navLogo = attr.navLogo;
            scope.$parent.navLogo = scope.$parent.contentFolder + navLogo;
            scope.isActive = function(nav) {
                return nav.href.indexOf(scope.location) === 1;
            };
            
            $rootScope.$on("$locationChangeSuccess", function(event, next, current) {            
                scope.location = $location.path();
            });
        }            
     };
};

