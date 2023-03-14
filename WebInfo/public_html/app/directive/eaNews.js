'use strict';

var eaNews = function ( $rootScope ) {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: "app/template/news/newPart.html",
        
        // local scope
        scope: true,

        controller: function($scope) {
            $scope.scope_eaNewsDirektive = $scope.url;    

            // get al params
            $scope.newsAll = $rootScope.newsList;
            
        },   // controller
        
        // <ea-news data-news-title="News" 
        //          data-news-mode="all" | "new" | "arc"
        //          data-news-limit="3"
        //          data-news-init-idx = "0" | "1...n">
        //</ea-news>
        link: function (scope, ele, attrs) {      
           scope.title = attrs.newsTitle;
           scope.mode = attrs.newsMode;
           scope.limit = attrs.newsLimit;
           scope.initIdx = attrs.newsInitIdx;
           
           if(scope.initIdx) {
               $rootScope.globalArcIdx = scope.initIdx - 1;
           }
           // compute current news
           // scope.mode==="all" then all without ToEarly
           // scope.mode==="new" then all by function isNew()
           // scope.mode==="arc" then all by function !isNew()
           switch(scope.mode) {
               case "all": {
                   scope.news = scope.newsAll.filter(o => !scope.$parent.$parent.isToEarly(o));
                   break;
               }
               case "new": {
                   scope.news = scope.newsAll.filter(o => scope.$parent.$parent.isNew(o));
                   break;
               }
               case "arc": {
                   scope.news = scope.newsAll.filter(o => !scope.$parent.$parent.isNew(o));
                   break;
               }
               // default is mode==="new"
               default: {
                   scope.news = scope.newsAll.filter(o => {scope.$parent.isNew(o);});
               }
           }
           if(scope.limit) {
               scope.news = scope.news.slide(0,scope.limit-1);
           }
        }
    };  // return
};   // eaNews()

