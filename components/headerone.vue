<template>
    <div id="denglu">
        <div id="r-login">
            <a href="#" @click="show = true">请登录</a>
            <span>|</span>
            <a href="#">立即注册</a>
        </div>
        <div class="login" v-show="show" @click="show = false">
            <div class="listtwo" @click.stop="show = true">
                <div class="icon"><i class="iconfont icon-guanbi" @click.stop="show = false"></i></div>
                <div class="content">
                    <div class="oneli"><h1>登录</h1><a href="#">没有账号，立即注册</a></div>
                    <form action="">
                        <div class="for"><el-input v-model="input1" placeholder="请输入手机号码" type="text"><i slot="prefix" class="iconfont icon-weibiaoti2fuzhi07"></i></el-input></div>
                        <div class="for"><el-input v-model="input2" placeholder="请输入密码" type="password"><i slot="prefix" class="iconfont icon-mima"></i></el-input></div>
                        <a href="#"><input type="button" value="登录" id="dian"></a>
                        <a href="#" class="forlast">忘记密码？</a>
                    </form>
                    <div id="foot">
                        <a href="#" class="pic"><img src="../assets/img/qq.png"><br><span>qq登录</span></a>
                        <a href="#" class="pic"><img src="../assets/img/weixin.png"><br><span>微信登录</span></a>
                        <a href="#" class="pic"><img src="../assets/img/weibo.png"><br><span>微博登录</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerone",
        data(){
            return{
                show:false,
                input1: '',
                input2: ''
            }
        },
        mounted(){

        }
    }
</script>

<style>
    .el-input__inner{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
    }
</style>
<style scoped>
    #denglu{
        padding-top: 10px;
        width: 100%;
        height: 40px;
    }
    #r-login{
        height: 40px;
        text-align: right;
        margin-right: 117px;
        font-size: 12px;
        color: #000;
    }
    #r-login span{
        margin: 0 10px;
    }
    #r-login a{
        color: #000;
    }

    .login{
        z-index: 998;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
    }
    .login .listtwo{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: 620px;
        height: 476px;
        background-color: #fff;
    }
    .listtwo .icon{
        text-align: right;
        padding: 5px;
    }
    .listtwo .icon .iconfont{
        font-size: 25px;
        color: #666;
    }
    .content{
        width: 360px;
        padding: 0 130px;
        margin: 0 auto;
    }

    .content .oneli h1{
        padding: 0;
        margin: 0;
        color: #777;
        font-size: 27px;
        display: inline-block;
    }
    .content .oneli a{
        color: orange;
        font-size: 13px;
        margin-left: 183px;
    }
    .content .oneli{
        padding-bottom: 30px;
    }
    .content .for{
        width: 360px;
        height: 50px;
        margin-bottom: 20px;
        line-height: 50px;
    }
    .content .for i{
        color: #ccc;
        font-size: 20px;
    }
    #dian{
        width: 100%;
        height: 50px;
        background-color: #c30d23;
        text-align: center;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 30px;
    }
    .forlast{
        display: block;
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #777;
        margin-bottom: 20px;
    }
    .forlast:hover{
        color: #444;
    }
    #foot{
        width: 100%;
        text-align: center;
    }
    #foot .pic{
        display: inline-block;
        width: 28%;
    }
    #foot .pic img{
        width: 40px;
        height: 40px;
    }
    #foot .pic span{
        color: #222;
        font-size: 14px;
    }
</style>