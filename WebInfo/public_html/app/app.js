'use strict';

//var eaDemo = angular.module("eaDemo", ["ngRoute", "ngAnimate"]);
var webInfo = angular.module("webInfo", ["ngRoute"]);

var configSrv = webInfo.service('eaConfigSrv', [function($routeProvider){
    this.eaNavConfig = eaNavConfig;      
}]);
configSrv.$inject = ['$scope'];

var navSrv = webInfo.service('eaNavSrv', ['$q', function () {
    var vm = this;
    vm.getHtml4Id = getHtml4Id;
    vm.getHtml = getHtml;
    vm.getParamObject = getParamObject;
    vm.getCurrentLink = getCurrentLink;
}]);
navSrv.$inject = ['$scope', '$rootScope'];

webInfo.directive('eaLoadParams', ['$rootScope', '$http', eaLoadParams]).$inject = ['$scope'];
webInfo.directive('eaNavi', ['$rootScope', '$http', '$location', eaNavDirektive]).$inject = ['$scope'];
webInfo.directive('eaAddHtml', ['$compile', '$http', eaAddHtmlDirective]).$inject = ['$scope'];
webInfo.directive('eaPathLink', ['$rootScope', '$location', eaPathLinkDirective]).$inject = ['$scope'];
webInfo.directive('eaFooter', ['$rootScope', eaFooterDirective]).$inject = ['$scope'];
webInfo.directive('eaImgBox', ['$compile', '$rootScope', eaImgBox]).$inject = ['$scope'];
webInfo.directive('eaImg', ['$rootScope', eaImg]).$inject = ['$scope'];

webInfo.config(['$routeProvider', eaNavConfig]);


webInfo.controller('webInfoController', ['$rootScope', '$scope', '$location', '$http', '$q', 'eaNavSrv', webInfoController])
        .$inject = ['$scope'];
webInfo.controller('eaNaviController', ['$rootScope', '$scope', '$location', 'eaNavSrv', eaNaviController])
        .$inject = ['$scope'];
