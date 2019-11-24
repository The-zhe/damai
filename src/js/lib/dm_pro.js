let baseUrl = 'http://localhost:8080/damai';


define(['jquery', 'cookie'], function($, cookie) {
    return {
        get: function(callback) {
            $.ajax({
                type: 'get',
                url: baseUrl + '/lib/getpro.php',
                dataType: "json",
                // data: {
                //     phone: $('#reg_mobile').val(),
                //     password: $.md5($('#reg_password').val()),
                // },
                success: function(response) {
                    // console.log(response);
                    con = '';
                    response.forEach(value => {
                        console.log(value);
                        var title = value.pro_title;
                        var place = value.pro_place;
                        var date = value.pro_date;
                        var pic = value.pro_pic;
                        var price_1 = value.pro_price.split(',')[0].slice(4, -1);
                        var price_2 = value.pro_price.split(',')[1].slice(4, -1);
                        var price_3 = value.pro_price.split(',')[2].slice(4, -1);
                        var price_4 = value.pro_price.split(',')[3].slice(4, -1);
                        var price_5 = value.pro_price.split(',')[4].slice(4, -1);



                        con += `
                        <div data-v-22df3800="" class="cover"><span class="tip">总票代</span> <img alt="" class="poster" src="../img/${pic}" lazy="loaded"></div>
                        <div data-v-22df3800="" class="order">
                            <div data-v-22df3800="" class="title">
                                <span data-v-22df3800="">${title}</span></div>

                            <div data-v-22df3800="" data-spm="projectinfo" class="address">
                                <div class="time">时间:${date}</div>
                                <div class="place">
                                    <div class="addr">场馆:${place}</div>
                                    <a data-spm="#" target="_blank" class="mapicon"></a>
                                </div>
                            </div>

                            <div data-v-c5e1b140="" data-v-22df3800="" class="perform-notice">
                                <div data-v-c5e1b140="" class="perform-notice-prefix">
                                    <div data-v-c5e1b140="" class="speaker"></div><span data-v-c5e1b140="">预售</span></div>
                                <div data-v-c5e1b140="" class="perform-notice-content hastitle">
                                    <div data-v-c5e1b140="">本商品为预售商品，正式开票后将在第一时间为您配送</div>
                                    <div data-v-c5e1b140="" class="perform-notice-content-detail">预售期间，由于主办未正式开票，下单后无法立即配送票品。一般演出前2-6周出票，待正式开票后将在第一时间为您配送，请耐心等待。纸质票购票后可在订单详情页查看物流信息</div>
                                </div>
                                <div data-v-68a98614="" data-v-c5e1b140="" class="popup" style="display: none;">
                                    <div data-v-68a98614="" class="popup__hd"><span data-v-68a98614="">重要通知</span></div>
                                    <div data-v-68a98614="" class="popup__bd">
                                        <div data-v-c5e1b140="" data-v-68a98614="">预售期间，由于主办未正式开票，下单后无法立即配送票品。一般演出前2-6周出票，待正式开票后将在第一时间为您配送，请耐心等待。纸质票购票后可在订单详情页查看物流信息</div>

                                    </div>
                                </div>
                            </div>

                            <div data-v-22df3800="" class="perform__order__box">

                                <div class="notice-time"><img src="../img/pro_i.png" class="notice-time-icon">场次时间均为演出当地时间</div>
                                <div class="perform__order__select perform__order__select__performs">
                                    <div class="select_left">场次</div>
                                    <div class="select_right">
                                        <div class="select_right_list">
                                            <div class="select_right_list_item active1"><span class="presell">预售</span> <span>2019-12-28 周六 19:30</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="perform__desc__info">
                                    <p></p>
                                </div>
                                <div class="perform__order__select">
                                    <div class="select_left">票档</div>
                                    <div class="select_right">
                                        <div class="select_right_list">
                                            <div class="select_right_list_item sku_item">
                                                <div class="skuname"><i>￥</i>${price_1}</div>
                                            </div>
                                            <div class="select_right_list_item sku_item">
                                                <div class="skuname"><i>￥</i>${price_2}</div>
                                            </div>
                                            <div class="select_right_list_item sku_item active">
                                                <div class="skuname"><i>￥</i>${price_3}</div>
                                            </div>
                                            <div class="select_right_list_item sku_item">
                                                <div class="skuname"><i>￥</i>${price_4}</div>
                                            </div>
                                            <div class="select_right_list_item sku_item">
                                                <div class="skuname"><i>￥</i>${price_5}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="perform__order__price">
                                    <div class="number_left">数量</div>
                                    <div class="number_right">
                                        <div class="number_right_info">
                                            <div data-v-1bfbfb02="" class="cafe-c-input-number">
                                                <a data-v-1bfbfb02="" class="cafe-c-input-number-handler cafe-c-input-number-handler-down cafe-c-input-number-handler-disabled">-</a>
                                                <div data-v-1bfbfb02="" class="cafe-c-input-number-input-wrap"><input data-v-1bfbfb02="" autocomplete="off" spellcheck="false" placeholder="" class="cafe-c-input-number-input" min="1" max="100" value="1"></div> <a data-v-1bfbfb02="" class="cafe-c-input-number-handler cafe-c-input-number-handler-up">+</a></div>
                                        </div>
                                        </div>
                                </div>
                                <div class="perform__desc__info perform__desc__info__active">
                                    <p>按付款顺序配票，优先连座配票</p>
                                </div>

                                <div class="perform__order__price">
                                    <div class="number_left">合计</div>
                                    <div class="number_right"><span class="totol__price"><i>￥</i>688.00</span>
                                        <span class="totle__offer go__login">登录后查看是否享受优惠</span></div>
                                </div>

                                <div>
                                    <div data-spm="dbuy" class="buybtn"><a href="../html/shopcar.html" style="color:#fff;">立即预订</a></div>

                                </div>

                            </div>
                        </div>
                        `

                    })
                    $('.cont').html(con);
                    callback && callback(response[0].pro_id)
                        // console.log(response[0].pro_price.split(',')[0].slice(4,-1));
                },
                error: function(xhr, err) {
                    return err;
                }
            });
        },

        run: function() {

            var input = $('.cafe-c-input-number-input');
            var add = $('.cafe-c-input-number-handler-up');
            var reduce = $('.cafe-c-input-number-handler-down')

            // var num = 1;
            // console.log(num);
            // console.log(add);
            // add[0].onclick = function() {
            //     num++;
            //     if (num >= 4) {
            //         num = 4

            //     }
            //     input[0].value = num;
            // }
            // reduce[0].onclick = function() {
            //     num--;
            //     if (num <= 0) {
            //         num = 0;
            //     }
            //     input[0].value = num;
            // }

            var sku = $('.sku_item');
            var num = 1;
            // console.log(sku);
            for (var i = 0; i < sku.length; i++) {
                sku[i].onclick = function() {
                    num = 1;
                    sku.removeClass('active');
                    this.classList.add('active');

                    var str = this.childNodes[1].innerHTML + ' ';
                    console.log(str);
                    var price = str.slice(8, -1);
                    console.log(price);
                    var totol = $('.totol__price');

                    totol.innertext = Number(price);
                    console.log(typeof(totol.innertext));
                    totol[0].innerHTML = '￥' + totol.innertext + '.00 ';


                    add[0].onclick = function() {
                        num++;
                        if (num >= 4) {
                            num = 4;
                        }
                        input[0].value = num;
                        totol[0].innerHTML = '￥' + totol.innertext * num + '.00 ';
                    }
                    reduce[0].onclick = function() {
                        num--;
                        if (num <= 0) {
                            num = 0;
                        }
                        input[0].value = num;
                        totol[0].innerHTML = '￥' + totol.innertext * num + '.00 ';
                    }
                }
            }
        },

        cookie: function(id, price, num) {
            // console.log(id, price, num);
            let shop = cookie.get('shop'); // 获取cookie数据 判断是否存在
            // 如果有cookie  修改cookie
            // 如果有cookie  添加cookie
            // console.log(shop)
            let product = {
                id: id,
                price: price,
                num: num
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.price = price : null;
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 购物车没有内容 新建一个购物车
                shop.push(product); //将商品放入购物车
            }
            cookie.set('shop', JSON.stringify(shop), 1);

        }

    }

});