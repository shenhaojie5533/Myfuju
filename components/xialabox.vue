<template>
    <div class="all" v-tab>
        <div class="header">
            <slot name="header">
                <h1>头部</h1>
            </slot>
        </div>
        <div class="middle">
            <div style="height: 0;" class="flex-box" id="middle-box">
                <slot name="middle">
                    <div>我是内容</div>
                    <div>我是内容</div>
                    <div>我是内容</div>
                    <div>我是内容</div>
                    <div>我是内容</div>
                    <div>我是内容</div>
                    <div>我是内容</div>
                </slot>
            </div>
        </div>
        <div class="bottom">
            <slot name="bottom">
                <h3>底部</h3>
            </slot>
        </div>
        <div>
            <span v-show="!showMore"  class="flex-btn" id="more" @click="handleShow(true)">更多选项 <i class="iconfont icon-tubiao-"></i></span>
            <span v-show="showMore"  class="flex-btn" id="retract" @click="handleShow(false)">收起选项 <i class="iconfont icon-shangla"></i></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xialabox",
        data(){
            return{
                showMore:false
            }
        },
        methods:{
            handleShow(isShow){
                this.showMore=isShow;
            }
        },
        directives:{
            tab:{
                inserted(el,binding,vnode){
                    let moreBtn=el.querySelector("#more");
                    let retractBtn=el.querySelector("#retract");
                    let box=el.querySelector("#middle-box")

                    moreBtn.onclick=function () {
                        console.log(1)
                        if (!window.getComputedStyle){
                            return
                        }
                        box.style.height="auto";
                        let targetHeight=getComputedStyle(box).height;
                        box.style.height="0px";
                        box.offsetHeight;
                        box.style.height=targetHeight;
                    }
                    retractBtn.onclick=function () {
                        console.log(2)
                        if (!window.getComputedStyle){
                            return
                        }
                        box.style.height=0;
                    }
                }
            }
            // trans:{
            //     update(el,biding,vnode){
            //         let isShow=vnode.context.$data.isShow;
            //         if(!isShow){
            //             el.style.height=0;
            //         }
            //         else {
            //             el.style.height="auto";
            //             let startHeight=0;
            //             let targetHeight= getComputedStyle(el).height;
            //
            //             el.style.transition="none";
            //             el.style.height=startHeight;
            //             el.offsetWidth;
            //             el.style.transition="height ease .5s";
            //             el.style.height=targetHeight;
            //         }
            //     }
            // }
        }
    }
</script>

<style scoped>
    .all{
        width: 100%;
        /*height: 500px;*/
    }
    .flex-box{
        transition: height ease .5s;
        overflow: hidden;
    }
    .flex-btn {
        display: block;
        text-align: center;
        font-size: 16px;
        color: #bbb;
        padding: 30px 0;
        border-bottom: 1px solid #ccc;
    }
</style>