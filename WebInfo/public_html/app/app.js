'use strict';

var webInfo = angular.module("webInfo", ["ngRoute", "ngCookies"]);


//var configSrv = webInfo.service('eaConfigSrv', [function($routeProvider){
//    this.eaNavConfig = eaNavConfig;      
//}]);
//configSrv.$inject = ['$scope'];


var navSrv = webInfo.service('eaNavSrv', ['$q', function () {
    var vm = this;
    //vm.getUrlById = getUrlById;
    //vm.getHtml = getHtml;
    vm.getCurrentLink = getCurrentLink;
    vm.computeSiteMaps = computeSiteMaps;
}]);
navSrv.$inject = ['$scope', '$rootScope'];

webInfo.directive('eaLoadJson', ['$rootScope', '$http', eaLoadJson]).$inject = ['$scope'];
webInfo.directive('eaNavi', ['$rootScope', '$http', '$location', '$compile', eaNavDynDirektive]); 
webInfo.directive('eaAddHtml', ['$rootScope', '$compile', '$http', eaAddHtmlDirective]);
webInfo.directive('eaPathLink', ['$rootScope', '$location', 'eaNavSrv', eaPathLinkDirective]).$inject = ['$scope'];
webInfo.directive('eaFooter', ['$rootScope', eaFooterDirective]).$inject = ['$scope'];
webInfo.directive('eaImgBox', ['$compile', '$rootScope', eaImgBox]).$inject = ['$scope'];
webInfo.directive('eaImg', ['$rootScope', eaImg]).$inject = ['$scope'];
webInfo.directive('eaAccCoat', ['$compile', '$rootScope', eaAccCoat]).$inject = ['$scope'];
webInfo.directive('eaAccKey', ['$compile', '$rootScope', eaAccKey]).$inject = ['$scope'];
webInfo.directive('eaNews', ['$rootScope', eaNews]).$inject = ['$scope'];
webInfo.directive('eaVideo', ['$rootScope', eaVideo]).$inject = ['$scope'];
webInfo.directive('eaCookies', ['$rootScope', '$cookies', '$compile', eaCookiesDirektive]).$inject = ['$scope'];
webInfo.directive('eaProvideObj', ['$rootScope', eaProvideObj]);
webInfo.directive('eaDeTicket',  [eaDeTicket]);

// eaConfigSrv.js is in eaNavConfig.js
webInfo.config(['$routeProvider', eaNavConfig]);

webInfo.controller('webInfoController', ['$rootScope', '$scope', 'eaNavSrv', webInfoController])
        .$inject = ['$scope'];
webInfo.controller('eaNaviController', ['$rootScope', '$scope', '$location', 'eaNavSrv', eaNaviController])
        .$inject = ['$scope'];
