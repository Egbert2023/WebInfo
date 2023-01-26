'use strict';

//var eaDemo = angular.module("eaDemo", ["ngRoute", "ngAnimate"]);
var webInfo = angular.module("webInfo", ["ngRoute"]);

var configSrv = webInfo.service('eaConfigSrv', [function($routeProvider){
    this.eaNavConfig = eaNavConfig;      
}]);
configSrv.$inject = ['$scope'];

var paramSrv = webInfo.service('eaParamSrv', [function(){
    this.getNewsList = getNewsList;
    //this.getProjectList = getProjectList;
    this.getObjBg = getObjBg;
    this.getCurrentLink = getCurrentLink;
    this.getImgBoxList = getImgBoxList;
}]);
paramSrv.$inject = ['$scope'];

var navSrv = webInfo.service('eaNavSrv', ['$q', function () {
    var vm = this;
    vm.getHtml4Id = getHtml4Id;
    vm.getHtml = getHtml;
    vm.getParamObject = getParamObject;
}]);
navSrv.$inject = ['$scope', '$rootScope'];

webInfo.directive('eaLoadParams', ['$rootScope', eaLoadParams]).$inject = ['$scope'];
webInfo.directive('eaNavi', ['$rootScope', '$http', '$location', 'eaParamSrv', 'eaNavSrv', eaNavDirektive]).$inject = ['$scope'];
webInfo.directive('eaAddHtml', ['$compile', '$http', eaAddHtmlDirective]).$inject = ['$scope'];
webInfo.directive('eaPathLink', ['$rootScope', '$location', eaPathLinkDirective]).$inject = ['$scope'];
webInfo.directive('eaFooter', eaFooterDirective).$inject = ['$scope'];
webInfo.directive('eaImgBox', ['$compile', '$rootScope', eaImgBox]).$inject = ['$scope'];
webInfo.directive('eaImg', ['$rootScope', eaImg]).$inject = ['$scope'];

webInfo.config(['$routeProvider', eaNavConfig]);


webInfo.controller('webInfoController', ['$rootScope', '$scope', '$location', '$http', '$q', 'eaNavSrv', 'eaParamSrv', webInfoController])
        .$inject = ['$scope'];
webInfo.controller('eaNaviController', ['$rootScope', '$scope', '$location', 'eaParamSrv', eaNaviController])
        .$inject = ['$scope'];
