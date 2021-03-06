/*
"use strict";

var exec = require('cordova/exec');

var Splunk = function(){

    var methods = [
        'logException', 'log', 'setApplicationInstallationIdentifier',
        'setBool', 'setDouble', 'setFloat', 'setInt', 'setLong', 'setString', 'setUserEmail',
        'setUserIdentifier', 'setUserName', 'simulateCrash'
    ];

    var execCall = function(methodName, args){ exec(null, null, "Splunk", methodName, args); };


    var self = this;
    for(var i=0; i<methods.length; i++) {
        // Wrapping the callback definition call into a temporary function, otherwise i will always
        // be set to methods.length when calling execCall()
        (function(idx){
            var currentMethod = methods[idx];
            self[currentMethod] = function(){
                execCall(currentMethod, arguments);
            };
        })(i);
    }

    this.LOG_LEVELS = {
        VERBOSE: 2,
        DEBUG: 3,
        INFO: 4,
        WARN: 5,
        ERROR: 6,
        ASSERT: 7
    };
};

var splunk = new Splunk();

module.exports = splunk;
*/