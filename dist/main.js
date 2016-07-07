require.config({
    baseUrl: '/dist',
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
        new Function(localStorage['v' + version + '_code'])();
        document.getElementById('css-content').innerHTML = localStorage['v' + version + '_css'];
        // requirejs(['app']);
    }

    function storeCode() {
        return new Promise(function(resolve, reject) {
            requirejs(['text!./app.js', 'text!./app.css'], function (code, css) {
                localStorage.version = version;
                localStorage['v' + version + '_code'] = code;
                localStorage['v' + version + '_css'] = css;
                resolve(code, css);
            });
        });
    }

});
