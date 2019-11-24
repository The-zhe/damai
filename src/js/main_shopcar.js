require.config({
    paths: {
        jquery: "./jquery.min",
        cookie: "./cookie",
        shopcar: "./lib/dm_shopcar",
        car: "./car"
    },
    shim: {}
});

require(['jquery', 'shopcar', 'car'], function($, shopcar, car) {
    shopcar.render(function() {
        car.car()
    });
})