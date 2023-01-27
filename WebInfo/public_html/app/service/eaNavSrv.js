'use strict';

var getHtml4Id = function(rootScope, loc, paramSrv){
    
    let locArr = loc.split('/');
    let folder = locArr[1];
    let id = locArr[2];
    let ret = 'app/html/' + folder + '/' + folder + ('0000' + id).slice(('0000' + id).length-4,('0000' + id).length) + '.html';
    
    //var naviList = paramSrv.getNaviList();
    let naviList = rootScope.naviList;
    
    let ret2 = getEntry("", naviList, "subm", "href", '#!' + loc, "url");
        
    return (ret2 !== "")? ret2 : ret;
};

var getHtml = function($http, $compile, scope, ele, url, callback) {
    let ret = "";
    //url: scope.url,
    $http({
        url: url,
        method: 'GET'
    }).then( function(response, status, headers, config) {
        ret = callback($http, $compile, scope, ele, response.data);
    }),
    function(errResp) {
        console.log("Error in $http get.");
    };
    return ret;
};

var getParamObject = function(paramName, rootScope, http) {
    let folder = rootScope.contentFolder;
    
    let url = folder + "json/" + paramName + ".json";
    rootScope["isLoaded_" + paramName] = false;
    
    let callback = function(paramName, rootScope, json) {
        const obj = json;
        rootScope[paramName] = obj.entries;
        rootScope["isLoaded_" + paramName] = true;
        
        return obj.entries;
    };
    let newObject = rootScope[paramName];
    if(newObject === undefined 
       || (newObject.constructor === Object && Object.entries(newObject).length === 0)) {
    
        http({
            url: url,
            method: 'GET'
        }).then(function(response){
            newObject = callback(paramName, rootScope, response.data);
            var opt = {
                paramName: paramName,
                paramObj: newObject
            };
            rootScope.$emit("LoadJsonFile-" + paramName, opt);
            
        }, function(errResp){
                console.log("Error in $http get.");
                console.log(errResp);
        });
    };
    return false;
};

/*
 * objArr: Array with objects
 * sub:    the next deeper tier
 * key:    object key for search the right entry
 * val:    value of the searched entry
 * ret:    key of the searched entry for return * 
 * https://stackoverflow.com/questions/2641347/short-circuit-array-foreach-like-calling-break
 */


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


