(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/combination"],{1218:function(t,n,i){"use strict";i.r(n);var o=i("1f78"),a=i.n(o);for(var e in o)["default"].indexOf(e)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(e);n["default"]=a.a},"19eb":function(t,n,i){},"1f78":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i("52c6"),a=i("202d"),e={name:"combination",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{pinkInfo:"",combinationList:[],numConfig:this.dataConfig.numConfig.val,txtColor:this.dataConfig.txtColor.color[0].item,themeColor:this.dataConfig.themeColor.color[0].item,mbConfig:this.dataConfig.mbConfig.val,lrConfig:this.dataConfig.lrConfig.val,imgUrl:this.dataConfig.imgConfig.url,priceShow:this.dataConfig.priceShow.val,bntShow:this.dataConfig.bntShow.val,titleShow:this.dataConfig.titleShow.val,pinkShow:this.dataConfig.pinkShow.val,joinShow:this.dataConfig.joinShow.val,prConfig:this.dataConfig.prConfig.val,bgColor:this.dataConfig.bgColor.color[0].item,conStyle:this.dataConfig.conStyle.type}},created:function(){},mounted:function(){this.pink(),this.getCombinationList()},methods:{getCombinationList:function(){var t=this,n=t.$config.LIMIT,i={page:1,limit:t.numConfig>=n?n:t.numConfig};(0,a.getCombinationList)(i).then((function(n){t.combinationList=n.data})).catch((function(n){return t.$util.Tips({title:n})}))},pink:function(){var t=this;(0,o.pink)().then((function(n){t.pinkInfo=n.data}))}}};n.default=e},"9e5c":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var o=function(){var t=this,n=t.$createElement,i=(t._self._c,t.combinationList.length),o=i>0?t.$t("拼团活动"):null,a=i>0&&t.pinkInfo.pink_count>0?t.$t("人拼团成功."):null,e=i>0?t.$t("更多"):null,f=i>0?t.__map(t.combinationList,(function(n,i){var o=t.__get_orig(n),a=t.joinShow?t.$t("人团"):null,e=t.pinkShow?t.$t("拼团价"):null,f=t.priceShow?t.$t("￥"):null,l=t.bntShow?t.$t("参与拼团"):null;return{$orig:o,m3:a,m4:e,m5:f,m6:l}})):null;t.$mp.data=Object.assign({},{$root:{g0:i,m0:o,m1:a,m2:e,l0:f}})},a=[]},a8a9:function(t,n,i){"use strict";i.r(n);var o=i("9e5c"),a=i("1218");for(var e in a)["default"].indexOf(e)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(e);i("e99d");var f=i("f0c5"),l=Object(f["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=l.exports},e99d:function(t,n,i){"use strict";var o=i("19eb"),a=i.n(o);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/combination-create-component',
    {
        'pages/index/diy/components/combination-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a8a9"))
        })
    },
    [['pages/index/diy/components/combination-create-component']]
]);
