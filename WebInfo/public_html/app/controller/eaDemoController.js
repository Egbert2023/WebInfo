'use strict';

//var eaDemoController =  function($scope, $location, $http, $q, eaNavSrv, eaImgBoxSrv) {
var eaDemoController =  function($scope, $location, $http, $q, eaNavSrv) {

    $scope.navSrv = eaNavSrv;
    
    $scope.isNew = function(d) {
        var ret = false;
        
        let yourDate = new Date();
        let yy = yourDate.toISOString().split('T')[0];
        
        ret = (yy <= d.newTo)? true : false;
        ret = (yy >= d.newFrom)? ret : false;
        return ret;
    };
        
    // image Box handling
//    $scope.imgBoxSrv = eaImgBoxSrv;
//    $scope.slideIndex = 1;
//    $scope.openModal = eaImgBoxSrv.openModal();
//    $scope.closeModal = eaImgBoxSrv.closeModal();
//    $scope.plusSlides = eaImgBoxSrv.plusSlides(n);
//    $scope.currentSlide = eaImgBoxSrv.currentSlide();
//    $scope.showSlides = eaImgBoxSrv.showSlides(n);
    
    return false;
};

// The $inject property of every controllers (and pretty much every other type of object in Angular)
// needs to be a string array equal to the controllers arguments, only as strings

//eaDemoController.$inject = ['$scope'];


