'use strict';

// https://stackoverflow.com/questions/27675321/angular-js-nesting-custom-directives

var eaAccCoat = function ($compile, $rootScope) {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div id="accId">' + 
                    '<div class="eaTitle">{{accTitle}}</div>' + 
                    '<ng-transclude></ng-transclude>' +
                  '</div>',

        // local scope 
        scope: true,

        controller: function($scope, $rootScope) {
            $rootScope.accIdx = 0;
            $rootScope.vis_1 = true;
            
            var getInnerFromTag = function(html, tag) {
                let htmlWork = html;
                let start = htmlWork.indexOf("<" + tag);
                let lenAdd = ("<" + tag + " ").length;
                htmlWork = htmlWork.substring(start + lenAdd);
                start = htmlWork.indexOf(">") + 1;
                let end = htmlWork.indexOf("</" + tag);
                let sub = htmlWork.substring(start, end);
                
                return sub;    
            };            
            
/*            
//            let setTransclude = function(html) {
//                let htmlAll = getInnerFromTag(html, "ea-acc-coat");
//                let htmlKey = "";
//                let len = 0;
//                let end = 0;
//            // Get all innerHtml's from the original Html code, 
//            // push it into the $rootScope.accKeysHtm array
//                do{
//                    htmlKey = getInnerFromTag(htmlAll, "ea-acc-key");
//                    len = htmlKey.length;
//                    if(len > 0) {
//                       $rootScope.accKeysHtm.push(htmlKey);
//                       // '<ea-acc-key data-title="...">'.length + len + '</ea-acc-key>'.length
//                       end = htmlAll.indexOf("</ea-acc-key") + 13;
//                       htmlAll = htmlAll.substring(end);
//                       //htmlAll = htmlAll.substring(len);
//                    }
//                } while (len > 0);
//                return false;
//            };
//            let htm = $scope.$parent.htm;
//            $rootScope.accKeysHtm = [];
            //setTransclude(htm);
 */
        },   // controller
        
        link: function (scope, ele, attrs) {      
            scope.accTitle = attrs.accTitle;
        }  // link
    };  // return
};   // eaAccCoat()

var eaAccKey = function ($compile, $rootScope) {
    return {
        restrict: 'E',
        require : '^eaAccCoat',
        transclude: true,
        //transclude: false,
        template: "<div class='accordion'>" +
                    "<a href='' ng-click='setVisible(this)'>" + 
                        "<div class='eaSubTitle'>{{title}}" + 
                            "<span ng-show='vis_{{accIdx}}' style='float: right'>-</span>" + 
                            "<span ng-show='!vis_{{accIdx}}' style='float: right'>+</span>" + 
                        "</div>" + 
                    "</a>" + 
                    "<div ng-show='vis_{{accIdx}}'>" + 
                        "<ea-transclude>" + 
                            "<ng-transclude></ng-transclude>" +
                        "</ea-transclude>" + 
                    "</div>" + 
                  "</div>",

        // local scope
        scope: true,

        controller: function($scope, $rootScope) {
            let idx = $rootScope.accIdx + 1;
            $rootScope.accIdx = idx;
            $scope.accIdx = idx;
            
            $scope.setVisible = function(t) {
                let idx = t.accIdx;
                let varName = "vis_";
                
                if($rootScope[varName + idx.toString()]===true) {
                   $rootScope[varName + idx.toString()]=false; 
                } else {
                    for(let i=1; i<$rootScope.accIdx; i++) {
                        $rootScope[varName + i.toString()] = false;
                    };
                    varName = "vis_" + idx.toString();
                    $rootScope[varName] = true;
                };
                return $rootScope[varName];
            };           
        },   // controller
        
        // scope,element,attrs,ctrl, transclude
        link: function (scope, ele, attrs, ctrl, transclude) {      
            //scope.accId = attrs.accId;
            scope.title = attrs.title;
            
/*            
            // put the code in the right place in the html document and run $compile()
//            let newInnerHtml = $rootScope.accKeysHtm[0];
//            let el = ele.find('ea-transclude');
//            //el = el.innerHtml;
//            let newEle = el.html(el);
//            $compile(newEle.contents())(scope);
            //el.replaceWith($compile(newInnerHtml)(scope));
*/          
        }  // link
    };  // return
};   // eaAccKey()
