'use strict';

var eaCardDirektive = function($rootScope, $location) {
    var cardObjErg = [
        {idx: 1, title: "xx1", body: "dfdsfvb", url: ""},
        {idx: 3, title: "xx3", body: "", url: "app/html/impressum"}
    ];
    var cardObjHome = [
        {idx: 8, title: "xx8", body: "eqwgweg", url: ""},
        {idx: 1, title: "xx1", body: "dfdsfvb", url: ""},
        {idx: 2, title: "xx2", body: "fvdsfvb", url: ""},
        {idx: 3, title: "xx3", body: "", url: "app/html/impressum"},
        {idx: 4, title: "xx4", body: "gjgjhg", url: ""},
        {idx: 5, title: "xx5", body: "hgjhg", url: ""},
        {idx: 6, title: "xx6", body: "iuilui", url: ""},
        {idx: 7, title: "xx7", body: "fgjhfj", url: ""}
    ];

    return {
        restrict: 'E',
        scope: {
            cardObj: '@'
        },
        templateUrl: "app/template/cardTemplate.html",
        
        link: function (scope, element, attr) {
            scope.cardObj = cardObjHome;

            // Test
            console.log("eaNavDirektive -> scope");
            console.log(scope);


            scope.isActive = function(cardObj) {
        //                // Test
        //                console.log("isActive(nav) - ?");
        //                console.log(nav.href.indexOf(scope.location) === 1);

                return cardObjHome.idx.indexOf(scope.location) === 1;
            };

            $rootScope.$on("$locationChangeSuccess", function(event, next, current) {            
                scope.location = $location.path();
            });
        }
    };
};

