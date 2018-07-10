<template>
    <div class="all">
        <div class="header">
            <slot>
                <h1>头部</h1>
            </slot>
        </div>
        <div class="middle">
            <div style="height: 0;" class="flex-box" v-trans>
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
            <slot name="bottom">底部</slot>
        </div>
        <button @click="handleShow">{{isShow?"收起选项":"更多选项"}}</button>
    </div>
</template>

<script>
    export default {
        name: "test",
        data(){
            return{
                isShow:false
            }
        },
        methods:{
            handleShow(){
                this.isShow=!this.isShow
            }
        },
        directives:{
            trans:{
                update(el,biding,vnode){
                    let isShow=vnode.context.$data.isShow;
                    if(!isShow){
                        el.style.height=0;
                    }
                    else {
                        el.style.height="auto";
                        let startHeight=0;
                        let targetHeight= getComputedStyle(el).height;

                        el.style.transition="none";
                        el.style.height=startHeight;
                        el.offsetWidth;
                        el.style.transition="height ease .5s";
                        el.style.height=targetHeight;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .all{
        width: 100%;
        /*height: 500px;*/
    }
.flex-box{
    transition: height ease 3s;
    overflow: hidden;
}
</style>