require.config({
    paths: {
        jquery: "./jquery.min",
        reg: "./lib/dm_login",
        md5: "./jquery.md5"
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'reg'], function($, reg) {
    reg.get('.fm-button')
});