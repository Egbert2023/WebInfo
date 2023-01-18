'use strict';

var eaImgBox = function ($compile, $rootScope) {
    return {
        restrict: 'AE',
        replace: false,
        templateUrl: "app/template/imgBox.html",
        
        scope: true,

        controller: function($scope) {
            /* https://www.w3schools.com/howto/howto_js_lightbox.asp */
            
            // Initialisation
            $scope.slideIndex = 1;
            
            //  listening to event "openModalImgBox" from directive "eaImg"
            $rootScope.$on("openModalImgBox", function(evt, opt) {
                
                // comput modal inner HTML 
                var iHtml = $scope.getInnerHtml(opt);
                
                // init values
                $scope.imgArrLen = opt.imgArr.length;
                $scope.slideIndex = opt.imgBoxIdx;
                $scope.slideIndexOld = $scope.slideIndex;
                
                // include iHtml into modal view
                var modalContentInner = document.getElementById("myModalContent");
                var ele = angular.element(modalContentInner);
                $scope.setInnerHtml(ele, iHtml, $scope, $scope.slideIndex);

                $scope.eleModalContent = ele;
              
                // open Modal
                $scope.openModal();
                $scope.currentSlide($scope.slideIndex);
                return false;
            });
            
            // Open the Modal
            $scope.openModal = function() {
                var docModal = document.getElementById("myModal");
                if(docModal !== null) {
                    docModal.style.display = "block";
                }  
                return false;
            };

            // Close the Modal
            $scope.closeModal = function () {
                var docModal = document.getElementById("myModal");
                if(docModal !== null) {
                    docModal.style.display = "none";
                }    
                return false;
            };

            // Next/previous controls
            $scope.plusSlides = function (n) {
                var sIdx = parseInt($scope.slideIndex);
                
                // Hide current picture
                var idNum = "imgNumber" + sIdx.toString();
                var idImg = "imgPicture" + sIdx.toString();
                var docNum = document.getElementById(idNum);
                var docImg = document.getElementById(idImg);
                if(docNum !== null) {docNum.style.display = "none";}
                if(docImg !== null) {docImg.style.display = "none";}

                // compute the new slideIndex
                var si = sIdx + parseInt(n);
                var len = parseInt($scope.imgArrLen);
                si = (si>len)? si-len : si;
                si = (si<1)? si+len : si;
                $scope.slideIndex = parseInt(si);
                
                // show new picture
                idNum = "imgNumber" + si.toString();
                idImg = "imgPicture" + si.toString();
                docNum = document.getElementById(idNum);
                docImg = document.getElementById(idImg);
                if(docNum !== null) {docNum.style.display = "block";}
                if(docImg !== null) {docImg.style.display = "block";}
                return false;
            };

            // Thumbnail image controls
            $scope.currentSlide = function (si) {
                $scope.slideIndex = si;
                
                var idNum = "imgNumber" + si.toString();
                var idImg = "imgPicture" + si.toString();
                var docNum = document.getElementById(idNum);
                var docImg = document.getElementById(idImg);
                if(docNum !== null) {docNum.style.display = "block";}
                if(docImg !== null) {docImg.style.display = "block";}
                return false;
            };
  
            // compute the innerr HTML for modal picture viewer
            $scope.getInnerHtml = function(opt) {
                var imgArr = opt.imgArr;
                var imgBodyArr = opt.imgBodyArr;
                var len = imgArr.length;
                var iHtml = "";

                iHtml = '<div ><div class="mySlides" >' ;
                for(let i = 0; i<len; i++) {
                    var idx = i+1;
                    var ht = '<div id="imgNumber' + idx.toString() + '" class="numbertext eaImgBoxItem">' + idx.toString() + ' / ' + len.toString() + '</div>' + 
                            '<img id="imgPicture' + idx.toString() + '" ng-src="' + imgArr[i] + '" class="eaImgBoxItem" style="width:100%">';                            
                    iHtml = iHtml + ht;
                };
                iHtml = iHtml + '</div>';

                iHtml = iHtml + '<!-- Next/previous controls -->' + 
                '<a class="prev" ng-click="plusSlides(-1)">&#10094;</a>' +
                '<a class="next" ng-click="plusSlides(1)">&#10095;</a>' ;

                iHtml = iHtml + '</div>';
                
                return iHtml;
            };            
            
            $scope.setInnerHtml = function(ele, htm, scope,idx) {
                if(htm !== ""){
                    ele.html(htm);
                    
                    $compile(ele.contents())(scope);
                    scope.slideIndex = idx;
                }
                return false;
            };
        },   // controller
        
        link: function (scope, ele, attrs) {      
            scope.imgBoxKey = attrs.imgBoxKey;            
            if(scope.imgBoxKey !== undefined) {
                var obj = scope.imgBoxList.find(o => o.imgKey === scope.imgBoxKey); 
                scope.imgBoxArr = obj.imgList;
                scope.imgBodyArr = obj.imgBodyList;
                scope.imgBoxIdx = attrs.imgBoxIdx;
                scope.imgBoxImg = scope.imgBoxArr[scope.imgBoxIdx-1];
           }  // if(scope.imgBoxKey !== undefined)
        }  // link
    };  // return
};   // eaImgBox()

