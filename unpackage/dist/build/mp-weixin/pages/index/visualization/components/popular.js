(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/popular"],{4939:function(t,e,i){"use strict";var n=i("92cb"),s=i.n(n);s.a},"756a":function(t,e,i){"use strict";i.r(e);var n=i("8e72"),s=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},"8d58":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={easyLoadimage:function(){return Promise.all([i.e("common/vendor"),i.e("components/easy-loadimage/easy-loadimage")]).then(i.bind(null,"d5a6"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.isShow&&t.hotList.length),n=i?t.$t(t.titleInfo[0].val):null,s=i?t.$t(t.titleInfo[1].val):null,o=i?t.$t("更多"):null,a=i?t.__map(t.hotList,(function(e,i){var n=t.__get_orig(e),s=t.$t("热度 TOP");return{$orig:n,m3:s}})):null,l=!t.isShow&&t.isIframe&&t.hotList.length,c=l?t.$t("更多"):null,r=t.isIframe&&!t.hotList.length,u=r?t.$t("更多"):null,f=r?t.$t("排行榜、暂无数据"):null;t.$mp.data=Object.assign({},{$root:{g0:i,m0:n,m1:s,m2:o,l0:a,g1:l,m4:c,g2:r,m5:u,m6:f}})},o=[]},"8e72":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("0e62")),o=(i("26cb"),i("66aa")),a=i("e807"),l=getApp(),c={name:"goodList",mixins:[s.default],props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig&&t.selectConfig.activeValue?t.selectConfig.activeValue:""),this.$set(this,"type",t.selectSortConfig&&t.selectSortConfig.activeValue?t.selectSortConfig.activeValue:""),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.titleInfo=t.titleInfo.list,this.productslist())}}},created:function(){},mounted:function(){},data:function(){return{hotList:[],name:this.$options.name,isShow:!0,isIframe:l.globalData.isIframe,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0,titleInfo:[]}},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,a.getHomeProducts)(e).then((function(e){t.hotList=e.data.list})).catch((function(e){t.$util.Tips({title:e})}))},gopage:function(t){var e=this;(0,o.goPage)().then((function(i){e.$util.JumpPath(t)}))}}};e.default=c},"92cb":function(t,e,i){},e6f7:function(t,e,i){"use strict";i.r(e);var n=i("8d58"),s=i("756a");for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("4939");var a=i("f0c5"),l=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"14617c47",null,!1,n["a"],void 0);e["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/popular-create-component',
    {
        'pages/index/visualization/components/popular-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e6f7"))
        })
    },
    [['pages/index/visualization/components/popular-create-component']]
]);
