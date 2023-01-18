'use strict';

var eaImg = function ( $rootScope ) {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: "app/template/imgTemplate.html",
        
        // local scope
        scope: true,

        controller: function($scope) {
            /* https://www.w3schools.com/howto/howto_js_lightbox.asp */
            
            // Test
            console.log("controller:eaImg($scope, scope)");
            console.log($scope);
                       
            // Open the Modal
            $scope.openModal = function() {
                var opt = {
                    key: $scope.imgBoxKey,
                    imgArr: $scope.imgArr,
                    imgBodyArr: $scope.imgBodyArr,
                    imgBoxIdx: $scope.imgBoxIdx
                };
                $rootScope.$emit("openModalImgBox", opt);
                // $rootScope.$broadcas("openModalImgBox", $scope.imgBoxKey);
            };
                        
        },   // controller
        
        link: function (scope, ele, attrs) {      
            
            scope.imgBoxKey = attrs.imgBoxKey;
            var obj = scope.imgBoxList.find(o => o.imgKey === scope.imgBoxKey); 
            scope.imgArr = obj.imgList;
            scope.imgBodyArr = obj.imgBodyList;
            scope.imgBoxIdx = attrs.imgBoxIdx;
            scope.imgBoxImg = scope.imgArr[scope.imgBoxIdx-1];
            scope.imgBoxBody = scope.imgBodyArr[scope.imgBoxIdx-1];
        }
    };  // return
};   // eaImgBox()

