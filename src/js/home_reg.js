require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/dm_home",
        lazeload: "./jquery.lazyload.min"
    },
    shim: {
        lazyload: ['jquery']
    }
});

require(['jquery', 'index'], function($, index) {
    index.get();
});