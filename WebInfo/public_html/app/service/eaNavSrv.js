'use strict';

var getHtml4Id = function(rootScope, loc, paramSrv){
    
    var locArr = loc.split('/');
    var folder = locArr[1];
    var id = locArr[2];
    var ret = 'app/html/' + folder + '/' + folder + ('0000' + id).slice(('0000' + id).length-4,('0000' + id).length) + '.html';
    
    //var naviList = paramSrv.getNaviList();
    var naviList = rootScope.naviList;
    
    var ret2 = getEntry("", naviList, "subm", "href", '#!' + loc, "url");
        
    return (ret2 !== "")? ret2 : ret;
};

var getHtml = function($http, $compile, scope, ele, url, callback) {
    var ret = "";
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
    var folder = rootScope.contentFolder;
    var url = folder + "json/" + paramName + ".json";
    
    var callback = function(paramName, rootScope, json) {
        const obj = json;
        rootScope[paramName] = obj.entrys;
        
        // Test
        console.log("getParamObject - callback($rootScope)");
        console.log(rootScope);
        
        return obj.entrys;
    };
    var newObject = rootScope[paramName];
    if(newObject === undefined 
       || (newObject.constructor === Object && Object.entries(newObject).length === 0)) {
    
        http({
            url: url,
            method: 'GET'
        }).then(function(response){
            newObject = callback(paramName, rootScope, response.data);
        }, function(errResp){
                console.log("Error in $http get.");
                console.log(errResp);
        });
    };
    
    // Test
    console.log("getParamObject - end ($rootScope)");
    console.log(rootScope);

    
    return newObject;
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
    var rt = inRt;
    var BreakException = {};
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




