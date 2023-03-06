'use strict';

var getHtml4Id = function(rootScope, loc, paramSrv){
    //var naviList = paramSrv.getNaviList();
    let naviList = rootScope.naviList;
    let ret = "";
    
    if(rootScope.isLoaded_naviList) {
        ret = getEntry("", naviList, "subm", "href", '#!' + loc, "url");
    } else {
        rootScope.$watch(rootScope.isLoaded_naviList, function() {
            ret = getEntry("", naviList, "subm", "href", '#!' + loc, "url");
        });
    }   
    return ret;
};

var getHtml = function($http, $compile, scope, ele, url, callback) {
    let htm = "";
    
    $http({
        url: url,
        method: 'GET'
    }).then( function(response, status, headers, config) {
        htm = callback($http, $compile, scope, ele, response.data);
    }),
    function(errResp) {
        console.log("Error in $http get.");
    };
    return htm;
};

var getEntry = function(inRt, objArr, sub, key, val, ret) {
// https://stackoverflow.com/questions/2641347/short-circuit-array-foreach-like-calling-break
    let rt = inRt;
    let BreakException = {};
    try{objArr.forEach(o => {
        if(rt !== "") {throw BreakException;};
        if(o[sub] !== undefined && o[sub].length>0) {
            rt = getEntry(rt, o[sub], sub, key, val, ret);
        };
        if(o[key] === val) {
            rt = o[ret];
            throw BreakException;
        }});
    } catch(e){
        if (e !== BreakException) throw e;
    };
    return rt;
};

var getCurrentLink = function(rootScope, path) {
    //var naviList = getNaviList();
    //var naviList = rootScope.naviList;
    let obj = {};
    let ret = [];
    let naviList = rootScope.naviList;

    let computeLink = function(naviList) {
        naviList.forEach(o => {
            if(o.href === '#!' + path) {
                obj = {label: o.label, href: o.href};
                ret.push(obj);
            };

            o.subm.forEach(os => {
                if(os.href === '#!' + path) {
                    obj = {label: o.label, href: o.href};
                    ret.push(obj);
                    obj = {label: os.label, href: os.href};
                    ret.push(obj);
                };

                if(os.subm !== undefined) {
                    os.subm.forEach(oss => {
                        if(oss.href === '#!' + path) {
                            obj = {label: o.label, href: o.href};
                            ret.push(obj);
                            obj = {label: os.label, href: os.href};
                            ret.push(obj);
                            obj = {label: oss.label, href: oss.href};
                            ret.push(obj);                    
                        }
                    });
                }
            });
        });
        return ret;
    };    
    ret = computeLink(naviList);
    return ret;
};

// read the naviList.json file and creat a sitemap.xml into a variable siteMapXML.
// read the imgBoxList.json file and creat a sitemapimage.xml into a variable siteMapImageXML.
// exported to console.log().
// put this files to site root

var computeSiteMaps = function(rootScope) {
// Exampel of sitemap with images
//    <?xml version="1.0" encoding="UTF-8"?>
//    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
//      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
//      <url>
//        <loc>http://www.aleksander.de/index.html</loc>
//        <image:image>
//           <image:loc>http://www.aleksander.de/content/aleks/pictures/Mein-Apfelbaum.jpg</image:loc>
//           <image:title>Title of picture</image:title>
//        </image:image>
//        <lastmod>2023-03-04</lastmod>
//      </url>
//    </urlset>

    let contentFolder = rootScope.contentFolder;
    let urlBase = "http://www.aleksander.de/index.html";
    let siteMaps = {"siteMap":"", "siteMapImg": ""};
    let naviList = rootScope.naviList;
    let imgBoxList = rootScope.imgBoxList;
    let sm  = '<?xml version="1.0" encoding="UTF-8"?>';
    sm = sm + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
    sm = sm + '    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';
    
    naviList.forEach(o => {
        sm = sm + '  <url>';
        sm = sm + '    <loc>' + urlBase + o.href + '</loc>';
        sm = sm + '    <changefreq>weekly</changefreq>';
        sm = sm + '  </url>';

        if(o.subm) {
           o.subm.forEach(p => {
            sm = sm + '  <url>';
            sm = sm + '    <loc>' + urlBase + p.href + '</loc>';
            sm = sm + '    <changefreq>weekly</changefreq>';
            sm = sm + '  </url>';

            if(p.subm) {
                p.subm.forEach(q => {
                    sm = sm + '  <url>';
                    sm = sm + '    <loc>' + urlBase + q.href + '</loc>';
                    sm = sm + '    <changefreq>weekly</changefreq>';
                    sm = sm + '  </url>';
                });
            }                
        });
    }});       
    sm = sm + '</urlset>';
    siteMaps.siteMap = sm;
    return siteMaps;
};