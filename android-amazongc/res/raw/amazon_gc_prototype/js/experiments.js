/*! Copyright 2013 Amazon Digital Services, Inc. All rights reserved. */
Experiments=(function(){var a=function(){var b="DEFAULT";this["getTreatmentForExperiment"]=function(d){var e={};e[constants.NativeCallKeys.VARIATION]=d;e[constants.NativeCallKeys.VARIATION_VARIABLE_DEFAULT_VALUE]=b;var f=NativeTransport.callNative({nativeCall:constants.NativeCallTypes.GET_VARIATION_VARIABLE,args:e});var c=$.Deferred();f.always(function(g){if(g==null||g[constants.NativeCallKeys.VARIATION]==null){c.resolve(b)}else{c.resolve(g[constants.NativeCallKeys.VARIATION])}});return c.promise()};this["isTreatmentDefault"]=function(c){return c==b}};return a}());console.log("Experiments loaded.");