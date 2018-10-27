
// API、後端資料庫、JSON
var farm = {
    farmer: '卡斯伯',
    chick: 15,
    duck: 3,
    dog: ['張姆士','龐的'],
    goDinner: function(){
        console.log(farm.farmer+'，該回家吃晚飯');
    },
    poultryTotal: function(){
        var num = farm.chick + farm.duck;
        console.log('我的農場總共有'+num+'隻家禽');
    }
};

farm.goDinner();
farm.poultryTotal();