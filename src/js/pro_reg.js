require.config({
    paths: {
        jquery: "./jquery.min",
        reg: "./lib/dm_pro",
        cookie: "./cookie"
    },
    shim: {}
});

require(['jquery', 'reg'], function($, reg) {
    reg.get(function(id) {
        // console.log(id)
        // reg.cookie(id, $('.active').find('.skuname').text(), $('.cafe-c-input-number-input').val());
        // let price=$('.active').find('.skuname').text();
        // let num= $('.cafe-c-input-number-input').val();
        // reg.cookie(function(id, price,num){
        $('.buybtn').on('click', function() {
                reg.cookie(id, $('.active').find('.skuname').text(), $('.cafe-c-input-number-input').val());
            })
            // })

        reg.run();

    });
});