'use strict';

var webInfoController =  function($rootScope, $scope, navSrv) {
    $scope.navSrv = navSrv;
    $scope.isNew = function(d) {
        var ret = false;
        
        let yourDate = new Date();
        let yy = yourDate.toISOString().split('T')[0];
        
        ret = (yy <= d.newTo)? true : false;
        ret = (yy >= d.newFrom)? ret : false;
        return ret;
    };
   
    $scope.scope_webInfoController = $scope.url;    
        
    $scope.toggleMenu = function()
    {
        let x = document.getElementById("myToogle");
        if(x.parentNode){
            if(x.parentNode.nextElementSibling){
                if(x.parentNode.nextElementSibling.classList){
                    if(x.parentNode.nextElementSibling.classList.length > 2){
                        x.click();
                    }
                }
            }
            
        };        
        //x.click();
    };
    
    $scope.compSideMaps = function() {
        let sm = {"siteMap":"", "siteMapImg": ""};
        sm = $scope.navSrv.computeSiteMaps($rootScope);
        console.log("sitemap.xml");
        console.log(sm.siteMap);
        console.log("sitemapimages.xml");
        console.log(sm.siteMapImg);
    };
    $scope.downloadSiteMaps = function() {
        let sm = {"siteMap":"", "siteMapImg": ""};
        sm = $scope.navSrv.computeSiteMaps($rootScope);
        let xml = sm.siteMap;
        let fileName = "sitemap.xml";
        var dwn = function(fileName, xml) {
            // https://stackoverflow.com/questions/25631738/using-javascript-to-store-a-file-to-a-local-machine-downloading
            a = document.createElement('a');
            a.setAttribute("href", "data:application/xml;charset=utf-8," + xml);
            a.setAttribute("download", fileName);
            a.click();
            a.click();
        };
        dwn("sitemap.xml", sm.siteMap);
        dwn("sitemapimages.xml", sm.siteMapImg);
    };    
        
//    // Test
//    console.log("1 - webInfoController($scope)");
//    console.log($scope);
   
    return false;
};
