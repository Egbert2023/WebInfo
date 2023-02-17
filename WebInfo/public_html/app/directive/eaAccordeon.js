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
            $scope.accIdx = 0;
            $scope.vis_1 = true;
            
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
            
            
            let setTransclude = function(html) {
                let htmlAll = getInnerFromTag(html, "ea-acc-coat");
                let htmlKey = "";
                let len = 0;
                let end = 0;
            // Get all innerHtml's from the original Html code, 
            // push it into the $scope.accKeysHtm array
                do{
                    htmlKey = getInnerFromTag(htmlAll, "ea-acc-key");
                    len = htmlKey.length;
                    if(len > 0) {
                       $scope.accKeysHtm.push(htmlKey);
                       // '<ea-acc-key data-title="...">'.length + len + '</ea-acc-key>'.length
                       end = htmlAll.indexOf("</ea-acc-key") + 13;
                       htmlAll = htmlAll.substring(end);
                       //htmlAll = htmlAll.substring(len);
                    }
                } while (len > 0);
                return false;
            };
            let htm = $scope.$parent.htm;
            $scope.accKeysHtm = [];
            setTransclude(htm);
 
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
        //transclude: true,
        transclude: false,
        template: "<div class='eaContent'>" +
                    "<a href='' ng-click='setVisible(this)'>" + 
                        "<div class='eaSubTitle'>{{title}}" + 
                            "<span ng-show='vis_{{accIdx}}' style='float: right'>-</span>" + 
                            "<span ng-show='!vis_{{accIdx}}' style='float: right'>+</span>" + 
                        "</div>" + 
                    "</a>" + 
                    "<div ng-show='vis_{{accIdx}}'>" + 
                        "<ea-transclude>" + 
                            "X" +
                        "</ea-transclude>" + 
                    "</div>" + 
                  "</div>",

        // local scope   -- <ng-transclude></ng-transclude>
        scope: true,

        controller: function($scope, $rootScope) {
            let idx = $scope.$parent.$parent.accIdx + 1;
            $scope.$parent.$parent.accIdx = idx;
            $scope.accIdx = idx;
            if(idx===1) {
                $scope["vis_1"] = true;
            };            
            
            $scope.setVisible = function(t) {
                let idx = t.accIdx;
                let varName = "vis_";
                //let ret = "";
                if($scope[varName + idx.toString()]===true) {
                   $scope[varName + idx.toString()]=false; 
                } else {
                    // every accKey has their own scope
//                    for(let i=1; i<$scope.$parent.$parent.accIdx; i++) {
//                        $scope[varName + i.toString()] = false;
//                    };
                    $scope[varName + idx.toString()] = true;
                };
                return false;
            };           
        },   // controller
        
        // scope,element,attrs,ctrl, transclude
        link: function (scope, ele, attrs, ctrl, transclude) {      
            //scope.accId = attrs.accId;
            scope.title = attrs.title;
            
//            // Test
//            console.log("eaAccKey - link (ele, el)");
//            console.log(ele);

            // put the code in the right place in the html document and run $compile()
            let newInnerHtml = scope.$parent.$parent.accKeysHtm[scope.accIdx - 1];
            let el = ele.find('ea-transclude');
            //el.innerHTML = newInnerHtml;
            el.html(newInnerHtml);
            
//            // Test
//            console.log(el);
            
            //let newEle = el.html();
            $compile(el.contents())(scope);
            
            //el.replaceWith($compile(newInnerHtml)(scope));

        }  // link
    };  // return
};   // eaAccKey()
