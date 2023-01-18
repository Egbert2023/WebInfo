'use strict';

var eaNaviController =  function($scope, $location, paramSrv) {
// all required parameters are determined
    $scope.objBg = paramSrv.getObjBg();
    
    // prepare the Image box handling
    $scope.newsList = paramSrv.getNewsList();
    $scope.imgBoxKey = "";
    $scope.imgBoxList = paramSrv.getImgBoxList();

    var pathArr = $location.path().split("/");
    $scope.url = $scope.navSrv.getHtml4Id($location.path(), paramSrv);
    $scope.htm = "";
    
    var bg = ($scope.objBg[pathArr[1]] !== null)? $scope.objBg[pathArr[1]] : "url(fotos/Solardach-mit-Blume.jpg center / cover no-repeat fixed";
        
    var ngView = document.getElementById("ng-view");
    if(ngView!==null) {
        if(ngView.style!==null) {
            ngView.style.backgroundImage = bg ;
        }
    }        
    // Fill the param for PathLink
    $scope.currLink = getCurrentLink($location.path());
    
    
//    // Test
//    console.log("eaNaviController -> $scope");
//    console.log($scope);
    
    return false;
};

