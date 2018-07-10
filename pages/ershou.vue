<template>
    <div class="bg">
        <headertwo></headertwo>
        <rightfix></rightfix>
        <div class="head">
            <div class="mid-sou">
                <img src="../assets/img/logo.png" class="lpic fll">
                <ul class="twohead fll clearfix">
                    <li class="listone fll"><a href="#">在售</a></li>
                    <li class="listone fll"><a href="#">小区</a></li>
                    <li class="listone fll"><a href="#">地图找房</a></li>
                    <li class="listone fll"><a href="#">计算器</a></li>
                    <li class="listone fll"><a href="#">去估价</a></li>
                </ul>
            </div>
        </div>
        <div class="mid-content">
            <div class="road"><a href="#">福居网</a> > <a href="#">二手房</a></div>
            <div class="sch clearfix">
                <input type="text" class="kuang-in fll" placeholder="搜索">
                <span class="kuang-btn fll">搜索</span>
            </div>
            <div class="check-table">
            <xialabox>
                <div class="table-head" slot="header">
                    <div class="header quyu clearfix">
                        <span class="tablename fll">区域</span>
                        <div class="check fll clearfix">
                            <el-checkbox v-model="isChecked.r_id" class="fll" @change="handleClear('r_id')">不限</el-checkbox>
                            <el-checkbox-group v-model="formData.r_id" data-key="r_id" class="fll" @change="handleChange('r_id')">
                                <el-checkbox v-for="(item,index) in fillData2.r_idData" :key="index" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="header jiage clearfix">
                        <span class="tablename fll">价格</span>
                        <div class="check fll clearfix">
                            <el-checkbox v-model="isChecked.total_price" class="fll" @change="handleClear('total_price')">不限</el-checkbox>
                            <el-checkbox-group v-model="formData.total_price" class="fll" @change="handleChange('total_price')">
                                <el-checkbox v-for="item in fillData.total_priceData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                            <div class="inputjia">
                                <input type="text" class="min" v-model="formData.minPrice">
                                <span class="split">-</span>
                                <input type="text" class="max" v-model="formData.maxPrice">
                                <span class="units">万</span>
                                <button class="yes">确定</button>
                            </div>
                        </div>
                    </div>
                    <div class="header huxing clearfix">
                        <span class="tablename fll">户型</span>
                        <div class="check fll">
                            <el-checkbox-group v-model="formData.bedroom">
                                <el-checkbox v-for="item in fillData.bedroomData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>

                <div class="table-mid" slot="middle">
                    <div class="mid leixing clearfix">
                        <span class="tablename fll">类型</span>
                        <div class="check fll">
                            <el-checkbox-group v-model="formData.type">
                                <el-checkbox v-for="item in fillData.typeData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="mid zhuangxiu clearfix">
                        <span class="tablename fll">装修</span>
                        <div class="check fll">
                            <el-checkbox-group v-model="formData.decoration">
                                <el-checkbox v-for="item in fillData.decorationData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="mid chaoxiang clearfix">
                        <span class="tablename fll">朝向</span>
                        <div class="check fll">
                            <el-checkbox-group v-model="formData.direction">
                                <el-checkbox v-for="item in fillData.directionData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="mid mianji clearfix">
                        <span class="tablename fll">面积</span>
                        <div class="check fll clearfix">
                            <el-checkbox v-model="isChecked.built_area" class="fll" @change="handleClear('built_area')">不限</el-checkbox>
                            <el-checkbox-group v-model="formData.built_area" class="fll" @change="handleChange('built_area')">
                                <el-checkbox v-for="item in fillData.built_areaData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                            <div class="inputjia">
                                <input type="text" class="min" v-model="formData.minCustom_bulit_area">
                                <span class="split">-</span>
                                <input type="text" class="max" v-model="formData. maxCustom_bulit_area">
                                <span class="units">平</span>
                                <button class="yes">确定</button>
                            </div>
                        </div>
                    </div>
                    <div class="mid louling clearfix">
                        <span class="tablename fll">楼龄</span>
                        <div class="check fll clearfix">
                            <el-checkbox v-model="isChecked.age" class="fll" @change="handleClear('age')">不限</el-checkbox>
                            <el-checkbox-group v-model="formData.age" class="fll" @change="handleChange('age')">
                                <el-checkbox v-for="item in fillData.ageData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="mid louceng clearfix">
                        <span class="tablename fll">楼层</span>
                        <div class="check fll clearfix">
                            <el-checkbox v-model="isChecked.floor_type" class="fll" @change="handleClear('floor_type')">不限</el-checkbox>
                            <el-checkbox-group v-model="formData.floor_type" class="fll" @change="handleChange('floor_type')">
                                <el-checkbox v-for="item in fillData.floor_typeData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="mid dianti clearfix">
                        <span class="tablename fll">电梯</span>
                        <div class="check fll">
                            <el-checkbox-group v-model="formData.dianti">
                                <el-checkbox v-for="item in fillData.diantiData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="mid qita clearfix">
                        <span class="tablename fll">其他</span>
                        <div class="check fll">
                            <input type="text" class="scher" placeholder="在结果中搜索">
                            <button class="yes">确定</button>
                        </div>
                    </div>
                </div>

                <!--伸缩框底部-->
                <div class="table-bottom clearfix" slot="bottom">
                    <span class="bottomname fll">筛选分类</span>
                    <div class="allscharr clearfix">
                        <span class="souarr" v-for="item in selectedData"  @click="handleReduce(item)">{{item.title}}<i class="iconfont icon-guanbi"></i></span>
                        <span class="clearall" @click="handleClearAll"><i class="iconfont icon-lajixiang"></i>清除全部</span>
                    </div>
                </div>
            </xialabox>
            </div>

            <!--筛选数据-->
            <div class="houselist">
                <div class="datalist">
                    <div class="orderbox">
                        <lable v-for="item in fillData.orderData" class="order-label" :class="{active: params.order == item.id}">
                            {{item.title}}
                            <input type="radio"  name="order" :value="item.id" @change="getData" v-model="params.order">
                        </lable>
                    </div>
                </div>

                <div class="mid databox clearfix">
                    <span class="tablename fll" style="color: #333;padding-right: 35px;padding-top: 5px;">筛选</span>
                    <div class="check fll">
                        <el-checkbox-group v-model="formData.label">
                            <el-checkbox v-for="item in fillData.labelData" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>

                <div class="allhouse">
                    <h2>共找到<span style="color: #c30d23; display: inline-block;margin: 0 5px;">{{houseCount}}个</span> 呼和浩特 二手房源</h2>
                    <div class="houseone clearfix" :key="index" v-for="(item,index) in houseArr">
                        <nuxt-link :to="{name: 'secondHand-id', params: {id: item.id}}" class="item-img fll">
                            <img :src="'http://www.fooju.cn/'+item.pic">
                        </nuxt-link>
                        <div class="item-msg fll">
                            <nuxt-link :to="{name: 'secondHand-id', params: {id: item.id}}" class="title">
                                {{item.title}}
                            </nuxt-link>
                            <div class="introduce">
                                <span>{{item.village}}|{{item.bedroom}}室|{{item.livingroom}}厅|{{item.wc}}卫{{item.direction}}</span>
                            </div>
                            <div class="build mt-15">
                                <span> {{item.floor}}/{{item.floor_totle}}层|{{item.decoration}}</span>
                            </div>
                            <div class="construction-time mt-15">
                                <span> {{item.age}}年建|{{item.type}}</span>
                            </div>
                            <div class="attention mt-15">
                                <span>{{item.guanzhu}}人关注|共{{item.guanzhu_num}}次带看|{{item.fabushijian>0?`${item.fabushijian}天前发布`:"今天发布"}}</span>
                            </div>
                            <div class="good-point" v-if="item.lable">
                                <span v-if="item.lable" style="background:#5f1985;color:#FFFFFF;" v-for="label in item.lable">
                                    {{label.name}}
                                </span>
                            </div>
                        </div>

                        <div class="price-box flr">
                            <div class="total-price">
                                {{item.total_price}} <span class="unit">万</span>
                            </div>
                            <div class="unit-price">
                                单价{{item.unit_price}}元/平米
                            </div>
                            <div class="follow cancel-follow" @click.stop="handleCancel(item.id)" v-if="item.guanzhu==1">
                                已关注
                            </div>
                            <div class="follow" @click.stop="handleCollect(item.id)" v-else>
                                关注
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :total="houseCount">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headertwo from '~/components/headertwo'
    import rightfix from '~/components/rightfix'
    import xialabox from '~/components/xialabox'
    import {mapState} from 'vuex'
    import api from '~/mainApi'
    import axios from '~/plugins/axios'
    export default {
        components: {headertwo,rightfix,xialabox},
        head() {
            return {
                title: "福居二手房"
            }
        },
        async asyncData (){
            let r_idData = await axios.get(api.paramToUrl(api.regionLists, {city: "呼和浩特"}))
            r_idData.data.data = r_idData.data.data.map(item => {
                item.title = item.area;
                return item
            })
            return {
                fillData2: {
                    r_idData: r_idData.data.data
                }
            }
        },
        data () {
            return {
                formData: {
                    r_id: [],
                    total_price: [],
                    bedroom: [],
                    minPrice: "",
                    maxPrice: "",
                    type: [],
                    decoration: [],
                    direction: [],
                    built_area: [],
                    minCustom_bulit_area: "",
                    maxCustom_bulit_area: "",
                    dianti: [],
                    age: [],
                    floor_type: [],
                    search: "",
                    order: 1,
                    label:[],
                },
                fillData: {
                    total_priceData: [
                        {
                            title: "30万以下",
                            id: '0-30'
                        },
                        {
                            title: "30-40万",
                            id: '30-40'
                        },
                        {
                            title: "40-50万",
                            id: '40-50'
                        },
                        {
                            title: "50万以上",
                            id: '50-99999'
                        }
                    ],
                    bedroomData: [
                        {title: "一室", id: 0},
                        {title: "两室", id: 1},
                        {title: "三室", id: 2},
                        {title: "四室", id: 3},
                        {title: "五室", id: 4}
                    ],
                    typeData: [
                        {title: '平层', id: 0},
                        {title: '复式', id: 1},
                        {title: '跃层', id: 2}
                    ],
                    decorationData: [
                        {title: '毛坯', id: 0},
                        {title: '豪装', id: 1},
                        {title: '精装', id: 2},
                        {title: '简装', id: 3},
                        {title: '中装', id: 4}
                    ],
                    directionData: [
                        {title: '东', id: 0},
                        {title: '西', id: 1},
                        {title: '南', id: 2},
                        {title: '北', id: 3},
                        {title: '南北', id: 4},
                        {title: '西南', id: 5},
                        {title: '东北', id: 6},
                        {title: '东北', id: 7},
                        {title: '西北', id: 8},
                        {title: '东西', id: 9}
                    ],
                    built_areaData: [
                        {title: '50平以下', id: 1},
                        {title: '50-70平', id: 2},
                        {title: '70-90平', id: 3},
                        {title: '90以上', id: 4}
                    ],
                    diantiData: [{id: 0, title: '是'}, {id: 1, title: '否'}],
                    ageData: [
                        {id: 1, title: '5年以内'},
                        {id: 2, title: '10年以内'},
                        {id: 3, title: '15年以内'},
                        {id: 4, title: '15年以上'}
                    ],
                    floor_typeData: [
                        {id: 1, title: "底层"},
                        {id: 2, title: "低楼层"},
                        {id: 3, title: "中层"},
                        {id: 4, title: "中高层"},
                    ],
                    orderData: [
                        {
                            title: "最新",
                            id: 1
                        },
                        {
                            title: "房屋总价",
                            id: 2
                        },
                        {
                            title: "房屋单价",
                            id: 6
                        },
                        {
                            title: "房屋面积",
                            id: 4
                        }
                    ],
                    labelData:[
                        {id: 1, title: "两年内"},
                        {id: 2, title: "满两年"},
                        {id: 3, title: "满五年"},
                        {id: 4, title: "随时看房"},
                    ]
                },
                isChecked: {
                    r_id: true,
                    total_price: true,
                    built_area: true,
                    floor_type: true,
                    age:true,
                },
                selectedObj: {},
                houseCount: 0,
                houseArr: [],
                orderComputed: {},
                params: {
                    page_size: 10,
                    page_num: 1,
                    order: 1
                },
                currentPage:1
            }
        },
        methods:{
            handleCustom(){

            },
            handleCurrentChange(a){
                this.currentPage = a
                this.params.page_num = this.currentPage
            },
           handleClear(key){
               if(this.isChecked[key]){
                   this.formData[key].splice(0);
               }
           },
            handleChange(val){
                if(this.formData[val].length>0){
                    this.isChecked[val]=false;
                }else {
                    this.isChecked[val]=true;
                }
            },
            handleReduce(item){
                let index=this.formData[item._parentName].findIndex(val=>val==item.id);
                this.formData[item._parentName].splice(index,1)
            },
            handleClearAll(){
                let formData=this.formData;
                for(let arr in formData){
                    if(formData[arr]instanceof Array){
                        formData[arr].splice(0);
                        this.handleChange(arr);
                    }
                }
            },
            getData(){
                let formData=this.formData;
                let params={...this.params};

                for(let key in formData){
                    if (formData[key] instanceof Array&&formData[key].length>0 ) {
                        params[key]=formData[key].map(item=>item.id)
                    }
                }
                // if(this.userid){
                //     params.userid=this.userid
                // }
                // const loading=this.$loading({
                //     lock:true,
                //     text:'数据加载中...',
                //     spinner: 'el-icon-loading',
                //     background:'rgba(0,0,0,0.7)'
                // });
                axios.get(api.paramToUrl(api.used_lists,params)).then(res=>{
                    console.log(res);
                    this.houseCount=res.data.count;
                    this.houseArr= res.data.data;
                    // loading.close()
                }).catch(err =>{
                    // loading.close()
                })
            },
            handleCancel(id) {
                if(this.userid){
                    this.
                    $axios.post(api.houseCollectCancel,{type:1,user_id: this.userid,house_id: id})
                        .then(res => {
                            this.$message.success("取关成功");
                            this.getData();
                        })
                }
            },
            //关注
            handleCollect(id) {
                if(this.userid){
                    this.
                    $axios.post(api.houseCollect,{type:1,user_id: this.userid,house_id: id})
                        .then(res => {
                            this.$message.success("关注成功")
                            this.getData();
                        })
                }
            }
        },
        computed:{
            selectedData(){
                let formData=this.formData;
                let allData= [];
                for(let key in formData){
                    if(formData[key]instanceof Array){
                        formData[key].map(item =>{
                            item._parentName=key;
                        })
                        allData.push(...formData[key]);
                    }
                }
                return allData;
            },
            ...mapState(['userid','username'])
        },
        watch:{
           selectedData(){
               this.getData();
           },
            currentPage(){
                this.getData();
            }
        },
        mounted(){
            this.getData();
        },
    }
</script>


<style>
    *{
        margin: 0;
        padding: 0;
    }
    .el-checkbox__inner{
        width: 17px;
        height: 17px;
    }
    .el-checkbox__input{
        line-height: 3;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        background-color: #c30d23;
        border-color: #c30d23;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #c30d23;
    }
    .el-checkbox__inner::after{
        box-sizing: content-box;
        content: "";
        border: 2px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 5px;
        position: absolute;
        top: 2px;
    }
    .el-checkbox__inner:hover {
        border-color: #c30d23;
    }
    .el-checkbox__input.is-focus .el-checkbox__inner {
        border-color: #c30d23;
    }
    .el-checkbox+.el-checkbox {
        margin-right: 30px;
        margin-left: 0;
    }
    .el-checkbox{
        margin-right: 30px;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #5f1985;
        color: #fff;
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover {
        background-color: #5f1985;
        color: #fff;
    }
    .el-pager li {
        padding: 0 15px;
        background: #fff;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
    }
    .el-pagination button, .el-pagination span:not([class*=suffix]){
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }
</style>
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

    .mid-content{
        margin: 20px auto;
        width: 1100px;
    }
    .mid-content .road{
        color: #aaa;
    }
    .mid-content .road a{
        color: #aaa;
        font-size: 14px;
    }
    .mid-content .sch{
       margin: 40px 0;
    }
    .sch .kuang-in{
        width: 700px;
        height: 60px;
        background: #fff;
        line-height: 60px;
        padding-left: 10px;
        font-size: 14px;
        background: #eee;
    }
    .sch .kuang-btn{
        width: 150px;
        height: 62px;
        background-color: #c30d23;
        color: #fff;
        text-align: center;
        line-height: 62px;
    }

    /*复选框列表*/
    .check-table .table-head,.table-mid{
        padding-right: 300px;
        font-size: 14px;
    }
    .table-head .header,.mid{
        margin: 10px 0;
    }
    .check-table .tablename{
        color: #333;
        padding-right: 20px;
        padding-top: 5px;
    }
    .check-table .check{
        margin-left: 20px;
        width: 70%;
    }
    .check .min,.max{
        border: 1px solid #ccc;
        height: 20px;
        width: 80px;
        color: #999;
    }
    .check .inputjia{
        color: #999;
        margin: 10px 0;
    }
    .check .yes{
        display: inline-block;
        height: 22px;
        width: 50px;
        background-color: #c30d23;
        color: #fff;
        margin-left: 10px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #c30d23;
    }
    .check .inputjia .split{
        margin: 0 5px;
    }
    .check .scher{
        border: 1px solid #ccc;
        height: 20px;
        width: 150px;
        color: #999;
    }
    .table-bottom{
        margin-top: 10px;
        font-size: 14px;
    }
    .table-bottom .allscharr{
        width: 1000px;
        float: right;
    }
    .table-bottom .souarr{
        float: left;
        border: 1px solid #ccc;
        color: #c30d23;
        font-size: 14px;
        text-align: center;
        height: 26px;
        width: 110px;
        display: block;
        line-height: 26px;
        margin-right: 20px;
        margin-bottom: 20px;
        margin-top: -5px;
    }
    .table-bottom .souarr i{
        float: right;
        background: #ccc;
        color: #fff;
        width: 26px
    }
    .table-bottom .clearall{
        float: left;
        margin-top: -5px;
        user-select: none;
        color: #666;
        border: none;
        cursor: pointer;
    }
    .table-bottom .clearall i {
        margin-right: 10px;
        background: 0 0;
        color: #666;
        font-size: 20px
    }
    .table-bottom .bottomname{
        color: #333;
    }

    .houseone{
        margin-top: 40px;
    }
    .houseone .item-img img{
        width: 285px;
        height: 214px;
    }
    .houseone .item-msg{
        margin-left: 30px;
    }
    .houseone .item-msg .title{
        color: #333;
        font-size: 20px;
    }
    .houseone .item-msg .introduce{
        margin-top: 25px;
        color: #666;
        font-size: 14px;
    }
    .houseone .item-msg .build,.construction-time,.attention{
        color: #666;
        font-size: 14px;
    }
    .houseone .item-msg .good-point{
        margin-top: 16px;
        font-size: 14px;
        color: #666;
    }
    .houseone .item-msg .good-point span{
        padding: 4px 10px;
        border-radius: 4px;
        margin-right: 10px;
    }
    .price-box{
        text-align: right;
    }
    .price-box .total-price{
        font-size: 40px;
        color: #c30d23;
    }
    .price-box .total-price .unit{
        font-size: 20px;
    }
    .price-box .unit-price{
        font-size: 14px;
        color: #666;
        margin-top: 20px;
    }
    .price-box .follow{
        width: 100px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        border: 1px solid #c30d23;
        font-size: 16px;
        color: #c30d23;
        margin-top: 40px;
        border-radius: 4px;
        margin-left: 45px;
    }
    .allhouse .page{
        margin-top: 30px;
        text-align: right;
    }
</style>
