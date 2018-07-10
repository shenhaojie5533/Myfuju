<template>
    <div class="ye">
        <div class="content clearfix">
            <ul class="list fll clearfix">
                <li class="fll"><a href="/">首页</a></li>
                <li class="fll"><a href="/ershou">二手房</a></li>
                <li class="fll"><a href="/newhouse">新房</a></li>
                <li class="fll"><a href="#">租房</a></li>
                <li class="fll"><a href="#">学区房</a></li>
                <li class="fll"><a href="#">小区</a></li>
                <li class="fll"><a href="#">经纪人</a></li>
                <li class="fll"><a href="#">百科</a></li>
                <li class="te fll"><a href="#">在线委托</a>
                    <ul class="teshu">
                        <li><a href="#">我是业主</a></li>
                        <li><a href="#">帮我找房</a></li>
                    </ul>
                </li>
                <li class="fll"><a href="#">工具</a></li>
                <li class="fll"><a href="#">专题</a></li>
            </ul>
            <div class="r-login flr">
                <a href="#">请登录</a>
                <span>|</span>
                <a href="#">立即注册</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headertwo",

        mounted(){
        },
    }
</script>
<style>
    *{
        padding: 0;
        margin: 0;
    }

</style>
<style scoped>
.ye{
    width: 100%;
    background-color: #eee;
}
    .ye .content{
        width: 1100px;
        height: 60px;
        margin: 0 auto;
    }
.list {
    font-size: 16px;
}

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
    bottom: 0;
    left: -17px;
    z-index: 200;
    transform: translateY(100%);
    width: 100px;
    background-color: #fff;
    text-align: center;
}
.list .fll {
    margin-left: 35px;
    line-height: 60px;
}

.list a {
    color: #000;
    padding: 10px 0 17px;
}

.list a:hover {
    color: #c30d23;
    border-bottom: 2px solid #c30d23;
}
.teshu li {
    color: black;
    line-height: 35px;
}

.teshu li:hover a {
    color: #c30d23;
    border-bottom: none;
}

.list .te:hover .teshu {
    display: block;
}

.r-login{
    height: 60px;
    font-size: 12px;
    color: #000;
    line-height: 60px;
}
.r-login span{
    margin: 0 10px;
}
.r-login a{
    color: #000;
}
</style>