(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/adsRecommend"],{"46f3":function(n,t,e){},"8d9a":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("66aa"),i=getApp(),o={name:"adsRecommend",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(n,t){n&&(this.recommendList=n.imgList.list,this.isShow=n.isShow.val)}}},data:function(){return{recommendList:[],name:this.$options.name,isIframe:i.globalData.isIframe,isShow:!0}},created:function(){},mounted:function(){},methods:{goDetail:function(t){(0,a.goPage)(t).then((function(e){n.navigateTo({url:t.info[0].value})}))}}};t.default=o}).call(this,e("543d")["default"])},"98d4":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.isIframe&&!n.recommendList.length),a=e?n.$t("广告位"):null,i=n.recommendList.length&&n.isShow&&!n.isIframe,o=n.recommendList.length&&n.isIframe;n.$mp.data=Object.assign({},{$root:{g0:e,m0:a,g1:i,g2:o}})},i=[]},c0f2:function(n,t,e){"use strict";e.r(t);var a=e("8d9a"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},fd51:function(n,t,e){"use strict";e.r(t);var a=e("98d4"),i=e("c0f2");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("feb8");var f=e("f0c5"),u=Object(f["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=u.exports},feb8:function(n,t,e){"use strict";var a=e("46f3"),i=e.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/adsRecommend-create-component',
    {
        'pages/index/visualization/components/adsRecommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fd51"))
        })
    },
    [['pages/index/visualization/components/adsRecommend-create-component']]
]);
