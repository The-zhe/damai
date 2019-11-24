var sku = $('.sku_item');
for (var i = 0; i < sku.length; i++) {
    sku[i].onclick = function() {
        sku.removeClass('active');
        this.classList.add("active");

        var price = '￥' + this.childNodes[1].innerHTML + '.00';
        // console.log(price);
        var totol = $('.totol__price');
        totol.innertext = price;
        totol[0].innerHTML = totol.innertext;

        // console.log($('.totol__price').text());
    }
}