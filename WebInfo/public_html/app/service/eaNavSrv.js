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


