<template>
    <div class="box">
        <ul class="tiao">
            <li>
                <i class="iconfont icon-kalendar"></i>
                <div class="desc">日程</div>
                <div class="kuang">我的日程</div>
            </li>
            <li>
                <i class="iconfont icon-xin"></i>
                <div class="desc">关注</div>
                <div class="kuang">我的关注</div>
            </li>
            <li>
                <i class="iconfont icon-home"></i>
                <div class="desc">卖房</div>
                <div class="kuang">在线卖房</div>
            </li>
            <li>
                <i class="iconfont icon-gongju"></i>
                <div class="desc">工具</div>
                <div class="kuang">房贷计算器</div>
            </li>
            <li>
                <i class="iconfont icon-weibiaoti2fuzhi07"></i>
                <div class="desc">APP</div>
                <div class="kuang2"><img src="../assets/img/app.png" alt=""></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "rightfix"
    }
</script>

<style scoped>
.tiao{
    position: fixed;
    z-index: 998;
    right: 0;
    top: 45%;
    transform: translateY(-50%);
    width: 40px;
    text-align: center;
    background-color: #fff;
    color: #333;
    padding: 15px 0;
}
    .tiao li .iconfont{
        font-size: 26px;
    }
    .tiao li{
        padding: 5px 0;
        margin-bottom: 40px;
        cursor: pointer;
        position: relative;
    }
    .tiao li .desc{
        font-size: 14px;
    }
    .tiao li:last-child{
        margin-bottom: 0;
    }
    .tiao li:hover{
        color: #fff;
        background-color: #5f1985;
    }
    .tiao li .kuang{
        display: none;
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        padding: 10px 20px;
        background-color: #5f1985;
        color: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 4px;
    }
    .tiao li .kuang::after{
        content: "";
        position: absolute;
        right: -16px;
        top: 50%;
        transform: translateY(-50%);
        border: 8px solid transparent;
        border-left: 8px solid #5f1985;
    }
    .tiao li:hover .kuang{
        display: block;
    }
.tiao li .kuang2{
    display: none;
    position: absolute;
    right: 41px;
    top: 50%;
    transform: translateY(-50%);
}
.tiao li .kuang2 img{
    width: 140px;
    height: auto;
}
.tiao li:hover .kuang2{
    display: block;
}
</style>