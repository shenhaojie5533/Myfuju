<template>
    <div class="bg">
        <headertwo></headertwo>
        <rightfix></rightfix>
        <div class="header-two clearfix">
            <div class="pic fll clearfix">
                <img class="l fll" src="../assets/img/logo.png" alt="">
                <div class="xiala fll"><span>呼和浩特</span><i class="iconfont icon-tubiao-"></i></div>
            </div>
            <div class="midfont fll">
                <span><a href="#" class="shouye">首页</a></span>
                <span><a href="#" class="loupan">楼盘</a></span>
            </div>
            <div class="shuru clearfix flr">
                <input type="text" class="kuang-in fll">
                <span class="kuang-btn fll">搜索</span>
                <span class="map fll"><img style='vertical-align:middle;' src="../assets/img/mapSearch.png">地图找房</span>
            </div>
        </div>

        <div class="slider">
            <div v-swiper:mySwiper="swiperOption" v-banner id="banner" style="overflow: hidden">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../assets/img/newhouse-slider.jpg" class="picture">
                    </div>
                </div>
            </div>

        </div>

        <div class="content">
            <div class="mid-pic1"><a href="#"><img src="../assets/img/5addb08e6db97.png" alt=""></a></div>
            <div class="mid-pic2"><a href="#"><img src="../assets/img/5b34508084a14.gif" alt=""></a></div>


            <div class="newshow">
                <div class="bigbox">
                    <a href="#">
                        <div class="bpic"><img src="../assets/img/zu1.png"></div>
                        <div class="fotlabel clearfix"><p class="label1">呼和浩特亿利生态城</p><p class="label2">0元/平</p></div>
                    </a>
                    <div class="what"><span class="s1">均价：</span><span class="s2">8200元</span><span class="s3">小高层</span><p class="p2"><span>1室1厅1卫 45.00㎡</span><span class="right">1100元/月</span></p></div>
                </div>
                <div class="bigbox" style="margin: 0 37px">
                    <a href="#">
                        <div class="bpic"><img src="../assets/img/zu2.png"></div>
                        <div class="fotlabel"><p class="label1">呼和浩特亿利生态城</p><p class="label2">0元/平</p></div>
                    </a>
                    <div class="what"><p class="p1">学府花园精装 出售</p><p class="p2 clearfix"><span>3室22厅2卫 148.00㎡</span><span class="right">2500元/月</span></p></div>
                </div>
                <div class="bigbox">
                    <a href="#">
                        <div class="bpic"><img src="../assets/img/zu3.png"></div>
                        <div class="fotlabel clearfix"><p class="label1">呼和浩特亿利生态城</p><p class="label2">0元/平</p></div>
                    </a>
                    <div class="what"><p class="p1">京能蓝色理想 精装修</p><p class="p2 clearfix"><span>2室2厅1卫 97.00㎡</span><span class="right">2600元/月</span></p></div>
                </div>
            </div>

            <div class="newshow">
                <div class="bigbox">
                    <a href="#">
                        <div class="bpic"><img src="../assets/img/zu1.png"></div>
                        <div class="fotlabel clearfix"><p class="label1">呼和浩特亿利生态城</p><p class="label2">0元/平</p></div>
                    </a>
                    <div class="what"><span class="s1">均价：</span><span class="s2">8200元</span><span class="s3">小高层</span><p class="p2"><span>1室1厅1卫 45.00㎡</span><span class="right">1100元/月</span></p></div>
                </div>
                <div class="bigbox" style="margin: 0 37px">
                    <a href="#">
                        <div class="bpic"><img src="../assets/img/zu2.png"></div>
                        <div class="fotlabel"><p class="label1">呼和浩特亿利生态城</p><p class="label2">0元/平</p></div>
                    </a>
                    <div class="what"><p class="p1">学府花园精装 出售</p><p class="p2 clearfix"><span>3室22厅2卫 148.00㎡</span><span class="right">2500元/月</span></p></div>
                </div>
                <div class="bigbox">
                    <a href="#">
                        <div class="bpic"><img src="../assets/img/zu3.png"></div>
                        <div class="fotlabel clearfix"><p class="label1">呼和浩特亿利生态城</p><p class="label2">0元/平</p></div>
                    </a>
                    <div class="what"><p class="p1">京能蓝色理想 精装修</p><p class="p2 clearfix"><span>2室2厅1卫 97.00㎡</span><span class="right">2600元/月</span></p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headertwo from '~/components/headertwo'
    import rightfix from '~/components/rightfix'
    export default {
        components: {headertwo,rightfix},
        name: "newhouse"
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
</style>
<style scoped>
    .bg{
        width: 100%;
        text-align: center;
    }
    .bg .content{
        width: 1100px;
        margin: 0 auto;
        text-align: center;
    }
    .bg .header-two{
        width: 1100px;
        margin: 20px auto;
    }

    .header-two .l {
        width: 128px;
        height: 40px;
    }
    .header-two .xiala {
        margin-left: 20px;
        margin-top: 10px;
        width: 107px;
        height: 30px;
        border: 1px solid #aaa;
        color: #666;
        border-radius: 20px;
        line-height: 35px;
        font-size: 16px;
        text-align: center;
    }
    .pic .iconfont {
        font-size: 16px;
    }
    .header-two .midfont{
        margin: 0 75px;
        padding-top: 16px;
    }
    .header-two .midfont .shouye{
        color: #c30d23;
        margin-right: 40px;
    }
    .header-two .midfont .loupan{
        color: #333;
    }

    .shuru .kuang-in{
        width: 300px;
        height: 40px;
        background-color: #fff;
        line-height: 40px;
        font-size: 16px;
        border: 1px solid #333;
    }
    .shuru .kuang-in:focus{
        border: 2px solid skyblue;
        height: 38px;
        width: 298px;
    }
    .shuru .kuang-btn{
        width: 102px;
        height: 42px;
        background-color: #c30d23;
        color: #fff;
        text-align: center;
        line-height: 42px;
    }
    .shuru .map{
        width: 150px;
        height: 42px;
        background-color: #5f1985;
        color: #fff;
        text-align: center;
        line-height: 42px;
        margin-left: 20px;
    }
    .shuru .map img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    .slider .picture{
        display: block;
        width: 100%;
    }
    .content .mid-pic1 a img{
        margin-top: 60px;
        width: 100%;
        height: auto;
        margin-bottom: 10px;
    }
    .content .mid-pic2 a img{
        width: 100%;
        height: auto;
        margin-bottom: 40px;
    }


    .content .newshow{
        text-align: center;
        width: 100%;
        margin: 40px auto;
    }
    .newshow .jur{
        margin: 0 38px;
    }
    .newshow .bigbox{
        width: 31%;
        text-align: center;
        position: relative;
        display: inline-block;
        margin: 0 auto;
        text-align: center;
    }
    .bigbox .bpic{
        width: 342px;
        height: 257px;
        overflow: hidden;
    }
    .newshow .bigbox .fotlabel{
        opacity: 0.6;
        width: 100%;
        text-align: left;
        font-size: 16px;
        color: white;
        background-color: #333;
        position: absolute;
        bottom: 42px;
    }
    .fotlabel .label1{
        font-size: 20px;
        font-weight: bold;
    }
    .newshow .bigbox .fotlabel p{
        margin:5px 10px;
    }
    .bpic img{
        cursor: pointer;
        transition: all 0.5s;
        width: 342px;
        height: 257px;
    }
    .bpic img:hover{
        transform: scale(1.1);
    }

</style>