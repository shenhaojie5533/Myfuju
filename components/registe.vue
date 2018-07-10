<template>
    <div class="content">
        <div class="header">
            <a href="#" class="hleft"><img src="../assets/img/logo.png" alt=""></a>
            <a href="#" class="hright">返回福居网首页<i class="iconfont icon-xiayibu" style="font-size: 16px;"></i></a>
        </div>
        <div class="main">
            <div class="mind">
                <div class="oneli"><h1>创建账号</h1><a href="#">已有账号，立即登录</a></div>
                <form action="">
                    <div class="for"><el-input v-model="formData.mobile" placeholder="请输入手机号码" type="text"><i slot="prefix" class="iconfont icon-weibiaoti2fuzhi07"></i></el-input></div>
                    <div class="for"><el-input v-model="formData.verify" placeholder="请输入短信验证码" type="text" class="duanxin"><i slot="prefix" class="iconfont icon-mima"></i></el-input><input type="button" value="获取验证码" class="yanzheng"></div>
                    <div class="for"><el-input v-model="formData.password" placeholder="请输入6-18位密码" type="password"><i slot="prefix" class="iconfont icon-mima"></i></el-input></div>
                    <div class="for"><el-input v-model="formData.name" placeholder="请输入昵称" type="text"><i slot="prefix" class="iconfont icon-bianjiqianbixieshuru"></i></el-input></div>
                    <a href="#"><input type="button" value="立即注册" @click="submit" id="dian"></a>
                    <p class="last">点击立即注册，则表示您阅读并同意遵守<a href="#" class="forlast">福居网平台服务协议</a></p>
                </form>
            </div>
            <div class="footer">
                <p>北京福居网网络科技有限公司| Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有| 京ICP备13012924号-1</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import md5 from 'md5'
    import qs from 'qs'
    export default {
      layout:"none",
        data(){
            return{
                formData: {
                    mobile: "",
                    verify: "",
                    password: "",
                    name: ""
                },
                btnText: "获取验证码",
                isSending: false,
                canCommit: false,
                phoneError: "",
                smsError: "",
                pwdError: "",
                nameError: ""
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
    .mind .for .duanxin{
        width: 238px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
    }
</style>
<style scoped>
.content{
    width: 100%;
    height: 100%;
}
    .header{
        width: 100%;
        height: 80px;
        background-color: #fff;
        text-align: center;
    }
    .header .hleft{
        margin-right: 845px;
    }
    .header .hleft img{
        width: 120px;
        height: auto;
        vertical-align:middle;
    }
    .header .hright{
        height: 80px;
        line-height: 80px;
        font-size: 14px;
        color: #666;
    }

    .main{
        width: 100%;
        height: 100%;
        background-color: #eee;
        text-align: center;
        padding: 30px 0;
    }
    .main .mind{
        width: 360px;
        padding: 40px 130px;
        margin: 0 auto;
        background: #fff;
    }
    .mind .oneli h1{
        padding: 0;
        margin: 0;
        color: #777;
        font-size: 27px;
        display: inline-block;
    }
    .mind .oneli a{
        color: orange;
        font-size: 13px;
        margin-left: 128px;
    }
    .mind .oneli{
        padding-bottom: 30px;
    }
    .mind .for{
        width: 360px;
        height: 50px;
        margin-bottom: 20px;
        line-height: 50px;
    }
    .mind i{
        color: #ccc;
        font-size: 20px;
    }
    .mind .for .yanzheng{
        width: 110px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #fff;
        margin-left: 12px;
        color: #bbb;
    }
    #dian{
        width: 100%;
        height: 50px;
        background-color: #c30d23;
        text-align: center;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .mind .last{
        font-size: 12px;
        color: #888;
    }
    .mind .last a{
        font-size: 13px;
        color: black;
        font-weight: bold;
    }
    .mind .last a:hover{
        color: #333;
    }
    .footer p{
        font-size: 15px;
        color: #777;
        margin-top: 30px;
    }
</style>