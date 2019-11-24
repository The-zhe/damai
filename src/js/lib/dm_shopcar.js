let baseUrl = 'http://localhost:8080/damai';

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                console.log(shop);
                let idlist = shop.map(elm => elm.id).join();
                $.ajax({
                    url: baseUrl + '/lib/shop.php',
                    type: 'get',
                    data: {
                        idlist: idlist
                    },
                    dataType: 'json',
                    success: function(response) {
                        // console.log(response);
                        console.log(typeof(Number(shop[0].price.slice(1))));
                        var tempstr = '';
                        var allprice = '';

                        response.forEach(elm => {
                            // let pic = JSON.parse(elm.pic);
                            // var arr = shop.filter((val, i) => {
                            //     return val.id == elm.id;
                            // })
                            console.log(elm.pro_pic);
                            var pic = elm.pro_pic;
                            var title = elm.pro_title;
                            var place = elm.pro_place;
                            var date = elm.pro_date;
                            tempstr += `
                        <li class="list_chk">
                            <input type="checkbox" id="checkbox_2" class="son_check">
                            <label for="checkbox_2"></label>
                        </li>
                        <li class="list_con">
                            <div class="list_img">
                                <a href="javascript:;"><img src="../img/${pic}" alt=""></a>
                            </div>
                            <div class="list_text"><a href="javascript:;">${title}</a></div>
                        </li>
                        <li class="list_info">
                            <p>地点：${place}</p>
                            <p>时间：${date}</p>
                        </li>
                        <li class="list_price">
                            <p class="price">${shop[0].price}</p>
                        </li>
                        <li class="list_amount">
                            <div class="amount_box">
                                <a href="javascript:;" class="reduce reSty">-</a>
                                <input type="text" value="${shop[0].num}" class="sum">
                                <a href="javascript:;" class="plus">+</a>
                            </div>
                        </li>
                        <li class="list_sum">
                            <p class="sum_price">${Number(shop[0].price.slice(1)) * shop[0].num}</p>
                        </li>
                        <li class="list_op">
                            <p class="del"><a href="#" class="delBtn">移除商品</a></p>
                        </li>
                            `

                            allprice += `
                            <div class="bar-right">
                                <div class="piece">已选商品<strong class="piece_num">0</strong>件</div>
                                <div class="totalMoney">共计: <strong class="total_text">.00</strong></div>
                                <div class="calBtn"><a href="javascript:;">结算</a></div>
                            </div>
                            `
                        })
                        $('.drawing').html(tempstr);
                        $('.bar-wrapper').html(allprice);
                        callback && callback();
                    }
                })
            }
        }
    }
})