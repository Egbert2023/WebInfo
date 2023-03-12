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
        // init params
        let sm = {"siteMap":"", "siteMapImg": ""};
        sm = $scope.navSrv.computeSiteMaps($rootScope);
        
        // define a help function
        var dwn = function(fileName, xml) {
            //https://stackoverflow.com/questions/5143504/how-to-create-and-download-an-xml-file-on-the-fly-using-javascript
            let a = document.createElement('a');
            var bb = new Blob([xml], {type: 'text/plain'});
            
            a.setAttribute('href', window.URL.createObjectURL(bb));
            a.setAttribute('download', fileName);
            a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
            a.draggable = true; 
            a.classList.add('dragout');
            a.click();
        };
        
        // do action
        dwn("sitemap.xml", sm.siteMap);
        dwn("sitemapimages.xml", sm.siteMapImg);
    };    
        
//    // Test
//    console.log("1 - webInfoController($scope)");
//    console.log($scope);
   
    return false;
};
