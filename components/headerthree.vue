<template>
    <div class="all">
        <div class="next">
            <div class="pic">
                <img class="l" src="../assets/img/logo.png" alt="">
                <div class="xiala" @click="show = true"><span>呼和浩特</span><i class="iconfont icon-tubiao-"></i></div>
            </div>
            <div class="list">
                <span class="first"><a href="/">首页</a></span>
                <span><a href="/ershou">二手房</a></span>
                <span><a href="/newhouse">新房</a></span>
                <span><a href="#">租房</a></span>
                <span><a href="#">学区房</a></span>
                <span><a href="#">小区</a></span>
                <span><a href="#">经纪人</a></span>
                <span><a href="#">百科</a></span>
                <span class="te">
                   <a href="#">在线委托</a>
                   <ul class="teshu">
                        <li><a href="#">我是业主</a></li>
                        <li><a href="#">帮我找房</a></li>
                    </ul>
               </span>
                <span><a href="#">工具</a></span>
                <span><a href="#">专题</a></span>
            </div>
        </div>
        <div class="face" v-show="show" @click="show = false">
            <ul @click.stop="show = true">
                <li class="icon"><i class="iconfont icon-guanbi" @click.stop="show = false"></i></li>
                <li class="oneli"><h2>选择区县</h2></li>
                <li class="twoli"><a href="#">呼和浩特</a></li>
                <li><span>H</span><a href="#">回民区</a></li>
                <li><span>J</span><a href="#">金桥开发区</a></li>
                <li><span>R</span><a href="#">如意开发区</a></li>
                <li><span>S</span><a href="#">赛罕区</a></li>
                <li><span>X</span><a href="#">新城区</a></li>
                <li><span>Y</span><a href="#">玉泉区</a></li>
            </ul>
        </div>
    </div>
</template>
<style>
    .te {
        position: relative;
    }
    .te:hover .teshu {
        display: block;
    }
    .teshu {
        display: none;
        padding: 0;
        position: absolute;
        bottom: -33px;
        left: -20px;
        z-index: 200;
        transform: translateY(100%);
        width: 100px;
        background-color: #fff;
        text-align: center;
    }


</style>

<script>
    export default {
        name: "headerthree",
        data(){
            return{
                show:false
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .all{
        position: relative;
        padding: 0;
        margin: 0;
    }

    .next {
        width: 100%;
        display: flex;
        text-align: center;
    }

    .pic {
        display: flex;
        padding-left: 123px;
    }

    .l {
        width: 128px;
        height: 40px;
    }

    .xiala {
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

    .iconfont {
        font-size: 16px;
    }

    .list {
        font-size: 16px;
        padding: 15px 0 10px 20px;
    }

    .list span {
        margin-left: 35px;
    }

    .list a {
        color: #000;
        padding: 10px 0 15px;
    }

    .list a:hover {
        color: #c30d23;
        border-bottom: 2px solid #c30d23;
    }

    .first a {
        color: #c30d23;
        border-bottom: 2px solid #c30d23;
    }

    .teshu li {
        color: black;
        line-height: 30px;
    }

    .teshu li:hover a {
        color: #c30d23;
        border-bottom: none;
    }

    .list .te:hover .teshu {
        display: block;
    }

    .face{
        z-index: 998;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
    }
    .face ul{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: 720px;
        height: 354px;
        background-color: #fff;
    }

    .face ul li{
        line-height: 30px;
        font-size: 16px;
        padding-left: 35px;
    }

    .face .icon{
        text-align: right;
        padding: 5px;
    }
    .face .icon .iconfont{
        font-size: 25px;
        color: #777;
    }

    .face .oneli{
        padding-right: 30px;
    }
    .face .oneli h2{
        border-bottom: 1px solid #777;
        padding-bottom: 8px;
        margin: 0;
    }
    .face .twoli{
        font-size: 18px;
        margin: 10px 0 20px;
    }

    .face ul li span{
        color: #777;
        margin-right: 10px;
    }
    .face ul li a:hover{
        color: #c30d23;
    }
    .face ul li a{
        color: black;
    }
</style>