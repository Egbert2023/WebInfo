'use strict';

var webInfoController =  function($rootScope, $scope, navSrv) {
    $scope.navSrv = navSrv;
    $scope.isNew = function(d) {
        var ret = false;
        let yourDate = new Date();
        let yy = yourDate.toISOString().split('T')[0];
        ret = (yy <= d.newTo)? true : false;   // to late
        ret = (yy >= d.newFrom)? ret : false;  // to early
        return ret;
    };
    $scope.isToEarly = function(d) {
        var ret = true;
        let yourDate = new Date();
        let yy = yourDate.toISOString().split('T')[0];
        ret = (yy < d.newFrom)? true : false;
        return ret;
    };
   
    $scope.scope_webInfoController = $scope.url;    
       
    // +/- Toggle for accordion
    $scope.toggleMenu = function() {
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
    };
    
    // Export siteMap.xml and siteMapImages.xml to console.log();
    $scope.compSideMaps = function() {
        let sm = {"siteMap":"", "siteMapImg": ""};
        sm = $scope.navSrv.computeSiteMaps($rootScope);
        console.log("sitemap.xml");
        console.log(sm.siteMap);
        console.log("sitemapimages.xml");
        console.log(sm.siteMapImg);
    };
    
    // Download siteMap.xml and siteMapImages.xml to download folder on local;
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
    
    // Check if application is started with parameter
    $scope.getUrlParam = function() {
        let loc = window.location;
        let href = loc.href;
        let arr = href.split("?");
        let ret = (arr.length>0)? arr[1] : "";
        return ret;        
    };
  
    $scope.key = ($event) => {
        console.log('got key ' + $event.code);
    };

    return false;
};
