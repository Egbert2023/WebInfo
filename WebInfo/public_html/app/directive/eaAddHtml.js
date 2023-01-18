'use strict';

var eaAddHtmlDirective = function ($compile, $http) {
    
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {        

        var url = attrs.eaAddHtml;
        
        // https://stackoverflow.com/questions/42066311/how-to-use-callback-in-http-angular-js
        var callback = function($http, $compile, scope, ele, htm){
            scope.htm = htm; 
            if(htm !== ""){
                ele.html(htm);
                $compile(ele.contents())(scope);
            }
            return htm;
        };
        if(url!=="") {
            scope.navSrv.getHtml($http, $compile, scope, ele, url, callback);
        }
     
//        // Test
//        console.log("eaAddHtmlDirective.link(scope)");
//        console.log(scope);

    }};
};

