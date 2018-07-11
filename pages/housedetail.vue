<template>
    <div class="bg">
        <headertwo></headertwo>
        <div class="head">
            <div class="mid-sou clearfix">
                <img src="../assets/img/logo.png" class="lpic fll">
                <div class="xiala fll"><span>呼和浩特</span><i class="iconfont icon-tubiao-"></i></div>
                <ul class="twohead fll clearfix">
                    <li class="listone fll"><a href="#">在售</a></li>
                    <li class="listone fll"><a href="#">小区</a></li>
                    <li class="listone fll"><a href="#">地图找房</a></li>
                    <li class="listone fll"><a href="#">计算器</a></li>
                    <li class="listone fll"><a href="#">去估价</a></li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="pass clearfix">
                <div class="road fll"><a href="#">福居网</a> > <a href="#">二手房</a> > <a href="#">测试数据</a></div>
                <div class="guanzhu flr">
                    <a href="#" class="guan"><i class="iconfont icon-xingxu"></i><span>关注此房源</span></a>
                    <a href="#"><i class="iconfont icon-iconfontzhizuobiaozhun20"></i><span>分享此房源</span></a>
                </div>
            </div>

            <div class="bigjing">
                <div class="title">先锋小区</div>
                <div class="fangda">
                    <myZoom></myZoom>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headertwo from '~/components/headertwo'
    import myZoom from '~/components/myZoom'
    export default {
        components: {headertwo,myZoom},
        name: "housedetail"
    }
</script>

<style scoped>
    .head{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ccc;
    }
    .head .mid-sou{
        margin: 0 auto;
        width: 1100px;
        height: 80px;
    }
    .head .mid-sou .lpic{
        vertical-align:middle;
        width: 128px;
        height: 40px;
        margin-top: 20px;
    }
    .head .mid-sou .twohead{
        margin-left: 70px;
        line-height: 80px;
    }
    .mid-sou .listone a{
        margin: 0 25px;
        font-size: 16px;
        color: #333;
    }
    .mid-sou .listone a:hover{
        color: #c30d23;
    }
    .xiala {
        margin-left: 20px;
        margin-top: 25px;
        width: 107px;
        height: 30px;
        border: 1px solid #aaa;
        color: #666;
        border-radius: 20px;
        line-height: 35px;
        font-size: 16px;
        text-align: center;
    }
    .iconfont {
        font-size: 16px;
    }

    .content{
        width: 1100px;
        margin: 20px auto;
    }
    .content .pass{
        color: #aaa;
    }
    .content .pass a{
        color: #aaa;
        font-size: 14px;
    }
    .content .pass .guan{
        margin-right: 25px;
    }
    .content .pass .guanzhu a i:first-child{
        margin-right: 5px;
    }
    .content .bigjing .title{
        color: #333;
        font-size: 30px;
        margin: 20px 0;
    }
</style>