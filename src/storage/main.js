require.config({
    baseUrl: '/src',
    paths: {
        'text': '/lib/text/text'
    }
});

define(function() {
    'use strict';

    var version = '0.0.1';

    // Analyze the url param.
    // var urlParam = {};
    // (location.search.match(/\w+=[\w*\.?]*/g) || []).forEach(function (search) {
    //     var map = search.split('=');
    //     urlParam[map[0]] = map[1];
    // });

    if (localStorage['v' + version + '_code'] || version == localStorage.version) { // could read the code
        readCode(version);
    } else { // have to add new storage to store the code
        storeCode().then(function () {
            readCode(version);
        });
    }

    function readCode(version) {
        eval(localStorage['v' + version + '_code']);
        requirejs(['index']);
    }

    function storeCode() {
        return new Promise(function(resolve, reject) {
            requirejs(['text!./storage/index.js'], function (code) {
                localStorage.version = version;
                localStorage['v' + version + '_code'] = code;
                resolve(code);
            });
        });
    }

});
