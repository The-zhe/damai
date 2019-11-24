require.config({
    paths: {
        jquery: "./jquery.min",
        reg: "./lib/dm_reg",
        md5: "./jquery.md5"
            // javascript: './JavaScript',
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'reg'], function($, reg) {
    reg.get('.red_button')
});