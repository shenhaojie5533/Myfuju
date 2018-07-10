<template>
  <div v-cloak>
    <headerone></headerone>
    <headerthree></headerthree>
      <rightfix></rightfix>
    <section class="container">

        <!--轮播图-->
        <div class="slider">
            <div v-swiper:mySwiper="swiperOption" v-banner id="banner" style="overflow: hidden">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="banner in banners">
                        <img :src="'http://www.fooju.cn/'+banner.picurl" style="display: block;" class="picture">
                    </div>
                </div>
            </div>
            <div class="mid-text">
                <div class="sou">
                    <ul class="clearfix">
                        <li class="fll souli" :class="{active:seletedIndex == 0}" @click="seletedIndex=0">找二手房</li>
                        <li class="fll souli" :class="{active:seletedIndex == 1}" @click="seletedIndex=1">找新房</li>
                        <li class="fll souli" :class="{active:seletedIndex == 2}" @click="seletedIndex=2">找租房</li>
                        <li class="fll souli" :class="{active:seletedIndex == 3}" @click="seletedIndex=3">找学区房</li>
                        <li class="fll souli" :class="{active:seletedIndex == 4}" @click="seletedIndex=4">找小区</li>
                    </ul>
                    <div class="shuru clearfix">
                        <input type="text" class="kuang-in fll":placeholder="placeholderText" v-model="searchText">
                        <span class="kuang-btn fll" @click="handleSearch">搜索</span>
                        <span class="map fll" v-if="seletedIndex<3"><img style='vertical-align:middle;' src="../assets/img/mapSearch.png">地图找房</span>
                        <ul class="pre-search">
                            <li v-for="item in searchData">我是测试内容</li>
                            <li v-for="item in searchData">我是测试内容</li>
                            <li v-for="item in searchData">我是测试内容</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="contend">
            <div class="pic1">
                <div class="four"><a href="#"><img src="../assets/img/store.png"><br><span class="firstf">查门店</span><br><span class="second">查优质门店</span></a></div>
                <div class="four"><a href="#"><img src="../assets/img/entrust.png"><br><span class="firstf">在线委托</span><br><span class="second">有问题我们帮你</span></a></div>
                <div class="four"><a href="#"><img src="../assets/img/mapBlue.png"><br><span class="firstf">地图找房</span><br><span class="second">地图找房</span></a></div>
                <div class="four"><a href="#"><img src="../assets/img/encyclopedias.png"><br><span class="firstf">福居百科</span><br><span class="second">看百科了解更多</span></a></div>
            </div>

            <div class="pic2">
                <div class="three"><a href="#"><img src="../assets/img/zsfy.png"></a></div>
                <div class="three"><a href="#"><img src="../assets/img/dbf.png"></a></div>
                <div class="three"><a href="#"><img src="../assets/img/feature.png"></a></div>
            </div>

            <div class="newhouse">
                <div class="tyt"><span class="tytfont">精品新房</span><span class="tytleft"><a href="">更多新房<i class="iconfont icon-guanbi1"></i></a></span></div>
                <p class="shuoming">在这里为您寻觅一个新家</p>
                <div class="newpic">
                    <div class="big1"><a href="#">
                        <div class="bpic"><img src="../assets/img/new1.jpg" ></div>
                        <div class="fotlabel clearfix"><span class="label1">呼和浩特亿利生态城</span><span class="label2">0元/平</span></div>
                        </a></div>
                    <div class="big1"><a href="#">
                        <div class="bpic"><img src="../assets/img/new2.jpg" ></div>
                        <div class="fotlabel clearfix"><span class="label1">盛世国际</span><span class="label2">8800元/平</span></div>
                    </a></div>
                    <div class="big1"><a href="#">
                        <div class="bpic"><img src="../assets/img/new3.jpg" ></div>
                        <div class="fotlabel clearfix"><span class="label1">荷塘月色</span><span class="label2">8500元/平</span></div>
                    </a></div>
                </div>
            </div>

            <div class="oldhouse">
                <div class="tyt"><span class="tytfont">二手优品</span><span class="tytleft"><a href="">更多二手房<i class="iconfont icon-guanbi1"></i></a></span></div>
                <p class="shuoming">生活因为宽广，才会不断延伸</p>
                <div class="oldpic">
                    <div class="big2"><a href="#"><div class="bpic"><img src="../assets/img/old1.png"></div></a>
                        <div class="money">118万</div>
                        <div class="what"><p class="p1">北辰新领地 三居 可按揭</p><p class="p2">3室2厅2卫 128.80㎡</p></div>
                    </div>
                    <div class="big2"><a href="#"><div class="bpic"><img src="../assets/img/old2.png"></div></a>
                        <div class="money">90万</div>
                        <div class="what"><p class="p1">兴农小区 出售</p><p class="p2">2室1厅2卫 83.10㎡</p></div>
                    </div>
                    <div class="big2"><a href="#"><div class="bpic"><img src="../assets/img/old3.png"></div></a>
                        <div class="money">198万</div>
                        <div class="what"><p class="p1">计委楼 豪华装 南北通透</p><p class="p2">3室2厅1卫 117.00㎡</p></div>
                    </div>
                </div>
            </div>

            <div class="oldhouse">
                <div class="tyt"><span class="tytfont">精品租房</span><span class="tytleft"><a href="">更多租房<i class="iconfont icon-guanbi1"></i></a></span></div>
                <p class="shuoming">与其等待，不如坐享繁华</p>
                <div class="oldpic">
                    <div class="big2"><a href="#"><div class="bpic"><img src="../assets/img/zu1.png"></div></a>
                        <div class="what"><p class="p1">阳光馨苑小区 出售</p><p class="p2 clearfix"><span>1室1厅1卫 45.00㎡</span><span class="right">1100元/月</span></p></div>
                    </div>
                    <div class="big2"><a href="#"><div class="bpic"><img src="../assets/img/zu2.png"></div></a>
                        <div class="what"><p class="p1">学府花园精装 出售</p><p class="p2 clearfix"><span>3室22厅2卫 148.00㎡</span><span class="right">2500元/月</span></p></div>
                    </div>
                    <div class="big2"><a href="#"><div class="bpic"><img src="../assets/img/zu3.png"></div></a>
                        <div class="what"><p class="p1">京能蓝色理想 精装修</p><p class="p2 clearfix"><span>2室2厅1卫 97.00㎡</span><span class="right">2600元/月</span></p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import headerone from '~/components/headerone'
import headerthree from '~/components/headerthree'
import rightfix from '~/components/rightfix'
import api from '~/mainApi'
export default {
    components: {headerone,headerthree,rightfix},
  async asyncData () {
      let bannerData = await axios.get(api.paramToUrl(api.adLists,{type: 0,position:0}))
      return{
          banners: bannerData.data.data,
      }
  },
  head () {
    return {
      title: 'My fuju'
    }
  },
    data(){
        return{
            seletedIndex:0,
            placeholderText:"输入小区名查找二手房",
        }
    },
    watch:{
        seletedIndex(newValue,oldValue){
            switch(newValue){
                case 0:
                    this.placeholderText="输入小区名查找二手房";
                    break;
                case 1:
                    this.placeholderText="输入楼盘名进行搜索";
                    break;
                case 2:
                    this.placeholderText="输入小区名查找出租的房屋";
                    break;
                case 3:
                    this.placeholderText="输入小区名查找学区房";
                    break;
                case 4:
                    this.placeholderText="找小区要输入小区名";
                    break;
            }
        }
    },
    mounted(){
    },
    directives:{
        banner(el,binding,vnode){
            function setBannerHeight() {
                let bannerHeight=(document.documentElement.clientHeight||document.body.clientHeight) - 100;
                let bannerWidth=document.documentElement.clientWidth||document.body.clientWidth;
                el.style.width=bannerWidth+'px';
                el.style.height=bannerHeight+'px';
                let bannerRate=bannerWidth/bannerHeight;

                let imgArr=el.querySelectorAll('img');
                imgArr.forEach(item=>{
                    let imgHeight=item.offsetHeight;
                    let imgWidth=item.offsetWidth;
                    let imgRate=imgWidth/imgHeight;

                    if(bannerRate>imgRate){
                        item.style.width=bannerWidth +"px" ;
                        item.style.height="auto" ;
                        item.style.marginTop=-(item.offsetHeight-bannerHeight)/2+'px';
                    } else{
                        item.style.height=bannerHeight +"px" ;
                        item.style.width="auto" ;
                        item.style.marginLeft=-(item.offsetWidth-bannerWidth)/2+'px';
                    }
                })
            }
            setBannerHeight();
            window.onresize=setBannerHeight
        }
    }
}
</script>

<style scoped>
  [v-cloak]{
    display: none;
  }
  .contend{
      width: 1100px;
      margin: 0 auto;
  }
.slider .picture{
    display: block;
    width: 100%;
}
.pic1{
    text-align: center;
    display: table;
    width: 100%;
    margin: 40px 0;
}
    .pic1 .four{
        display: table-cell;
        width: 25%;
        text-align: center;
    }
  .pic1 .four img{
      height: 90px;
      margin-bottom: 10px;
  }
  .pic1 .four .firstf{
      font-size: 20px;
      color: #333;
      height: 40px;
      line-height: 40px;
  }
  .pic1 .four .second{
      font-size: 14px;
      color: #666;
  }

  .pic2{
      text-align: center;
      display: table;
      width: 100%;
      margin-bottom: 20px;
  }
  .pic2 .three{
      display: table-cell;
      width: 33%;
      text-align: center;
  }
  .pic2 .three img{
      height: 225px;
      margin-bottom: 30px;
  }

    .contend .tyt .tytfont{
        font-size: 30px;
        font-weight: bolder;
        color: #333;
        margin-left: 30px;
    }
  .contend .tyt{
      width: 100%;
      position: relative;
  }
  .contend .tyt .tytleft{
      position: absolute;
      right: 30px;
  }
  .contend .tyt .tytleft a{
      color: #888;
      font-size: 16px;
  }
  .contend .shuoming{
      padding-left: 30px;
      color: #555;
      font-size: 16px;
  }
    .newhouse .newpic{
        text-align: center;
        display: table;
        width: 100%;
        margin-bottom: 40px;
    }
  .newpic .big1{
      display: table-cell;
      width: 30%;
      text-align: center;
      position: relative;
  }
  .bpic{
      width: 306px;
      height: 230px;
      margin: 0 auto;
      overflow: hidden;
  }
  .newpic .big1 .fotlabel{
      opacity: 0.6;
      line-height: 25px;
      margin-left: 30px;
      width: 306px;
      height: 25px;
      text-align: left;
      font-size: 14px;
      color: white;
      background-color: #000;
      position: absolute;
      bottom: 0;
  }
  .clearfix::after{
      content: '';
      display: block;
      clear: both;
  }
  .newpic .big1 .fotlabel .label2{
      float: right;
      margin-right: 10px;
  }
  .newpic .big1 .fotlabel .label1{
      margin-left: 10px;
  }
  
    .bpic img{
        cursor: pointer;
        transition: all 0.5s;
        width: 306px;
        height: 230px;
    }
    .bpic img:hover{
        transform: scale(1.1);
    }
  .oldhouse .oldpic{
      text-align: center;
      display: table;
      width: 100%;
      margin-bottom: 40px;
  }
  .oldpic .big2{
      display: table-cell;
      width: 30%;
      text-align: center;
      position: relative;
  }
  .oldpic .big2 .money{
      position: absolute;
      left: 30px;
      top: 10px;
      z-index: 2;
      min-width: 70px;
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      padding-right: 20px;
      background: url(../assets/img/pricetag.png) no-repeat;
      background-size: 90% 90%;
      font-size: 20px;
      color: #fff;
  }
  .oldpic .big2 .what{
      text-align: left;
      margin-left: 30px;
  }
  .oldpic .big2 .what .p1{
      font-size: 16px;
  }
  .oldpic .big2 .what .p2{
      font-size: 15px;
      color: #666;
  }
  .oldpic .big2 .what .p2 .right{
      float: right;
      margin-right: 30px;
      color: red;
  }
  .slider{
      position: relative;
  }
    .slider .mid-text{
        z-index: 500;
       position: absolute;
        top: 55%;
        left: 8%;
    }
  .sou{
      width: 1100px;
  }
  .sou .clearfix{
      margin: 0 ;
  }
  .sou .active{
      font-weight: 700;
  }
  .souli{
      position: relative;
      font-size: 16px;
      color: #fff;
      padding: 20px 10px;
      cursor: pointer;
  }
  .sou .active::after{
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border: 10px solid transparent;
      border-bottom: 10px solid #fff;
  }
  .souli:first-child{
      padding-left: 0;
  }
  .shuru{
      padding-left: 40px;
  }
  .shuru .kuang-in{
      width: 700px;
      height: 60px;
      background-color: #fff;
      line-height: 60px;
      padding-left: 10px;
      font-size: 16px;
  }
  .shuru .kuang-btn{
      width: 150px;
      height: 62px;
      background-color: #c30d23;
      color: #fff;
      text-align: center;
      line-height: 62px;
  }
  .shuru .map{
      width: 150px;
      height: 62px;
      background-color: #5f1985;
      color: #fff;
      text-align: center;
      line-height: 62px;
      margin-left: 40px;
  }
  .shuru .map img{
      width: 20px;
      height: 20px;
      margin-right: 10px;
  }
</style>
