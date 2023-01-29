'use strict';

var eaAddHtmlDirective = function ($rootScope, $location, $compile, $http, navSrv) {
    
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {        

        let url = attrs.eaAddHtml;
        
        // https://stackoverflow.com/questions/42066311/how-to-use-callback-in-http-angular-js
        let callback = function($http, $compile, scope, ele, htm){
            scope.htm = htm; 
            if(htm !== ""){
                ele.html(htm);
                $compile(ele.contents())(scope);
            } else {console,log("Html is not available!");}
            return htm;
        };
        
        if(url!=="") {            
            // Test
            console.log("9 - Directive-eaAddHtml-Link URL=''($scope)");
            console.log(scope);
        } else {
            scope.$watch(url, function(){
                url = navSrv.getHtml4Id($rootScope, $location.path(), navSrv);
            });
        };
            
        // Test
        console.log("6 - Directive-eaAddHtml-Link URL=''($scope)");
        console.log(scope);

        }
    };
};


