'use strict';

//var eaDemo = angular.module("eaDemo", ["ngRoute", "ngAnimate"]);
var webInfo = angular.module("webInfo", ["ngRoute", "ngCookies"]);

var configSrv = webInfo.service('eaConfigSrv', [function($routeProvider){
    this.eaNavConfig = eaNavConfig;      
}]);
configSrv.$inject = ['$scope'];

var navSrv = webInfo.service('eaNavSrv', ['$q', function () {
    var vm = this;
    vm.getHtml4Id = getHtml4Id;
    vm.getHtml = getHtml;
    vm.getCurrentLink = getCurrentLink;
    vm.computeSiteMaps = computeSiteMaps;
}]);
navSrv.$inject = ['$scope', '$rootScope'];

webInfo.directive('eaLoadParams', ['$rootScope', '$http', eaLoadParams]).$inject = ['$scope'];
webInfo.directive('eaNavi', ['$rootScope', '$http', '$location', 'eaNavSrv', eaNavDirektive]).$inject = ['$scope'];
webInfo.directive('eaAddHtml', ['$rootScope', '$location', '$compile', '$http', 'eaNavSrv', eaAddHtmlDirective]).$inject = ['$scope'];
webInfo.directive('eaPathLink', ['$rootScope', '$location', 'eaNavSrv', eaPathLinkDirective]).$inject = ['$scope'];
webInfo.directive('eaFooter', ['$rootScope', eaFooterDirective]).$inject = ['$scope'];
webInfo.directive('eaImgBox', ['$compile', '$rootScope', eaImgBox]).$inject = ['$scope'];
webInfo.directive('eaImg', ['$rootScope', eaImg]).$inject = ['$scope'];
webInfo.directive('eaAccCoat', ['$compile', '$rootScope', eaAccCoat]).$inject = ['$scope'];
webInfo.directive('eaAccKey', ['$compile', '$rootScope', eaAccKey]).$inject = ['$scope'];
webInfo.directive('eaNews', ['$rootScope', eaNews]).$inject = ['$scope'];
webInfo.directive('eaVideo', ['$rootScope', eaVideo]).$inject = ['$scope'];
webInfo.directive('eaCookies', ['$rootScope', eaCookiesDirektive]).$inject = ['$scope'];

// $compile, $rootScope
webInfo.config(['$routeProvider', eaNavConfig]);

webInfo.controller('webInfoController', ['$rootScope', '$scope', '$cookies', 'eaNavSrv', webInfoController])
        .$inject = ['$scope'];
webInfo.controller('eaNaviController', ['$rootScope', '$scope', '$location', 'eaNavSrv', eaNaviController])
        .$inject = ['$scope'];
