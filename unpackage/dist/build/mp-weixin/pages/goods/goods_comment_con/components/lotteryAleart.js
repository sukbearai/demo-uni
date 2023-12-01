require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods_comment_con/components/lotteryAleart"],{"0da6":function(t,a,e){},"4cff":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{aleartData:{}}},props:{aleartType:{type:Number},alData:{type:Object},aleartStatus:{type:Boolean,default:!1}},watch:{aleartType:function(t){2===t&&(this.aleartData={title:"抽奖结果",img:this.alData.image,msg:this.alData.prompt,btn:"好的",type:this.alData.type})},aleartStatus:function(t){t||(this.aleartData={})}},methods:{posterImageClose:function(t){this.$emit("close",!1)}}};a.default=n},"65f5":function(t,a,e){"use strict";e.r(a);var n=e("84e9"),o=e("b778");for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(r);e("b01d");var u=e("f0c5"),i=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"21e2285c",null,!1,n["a"],void 0);a["default"]=i.exports},"84e9":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},o=[]},b01d:function(t,a,e){"use strict";var n=e("0da6"),o=e.n(n);o.a},b778:function(t,a,e){"use strict";e.r(a);var n=e("4cff"),o=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/goods/goods_comment_con/components/lotteryAleart-create-component',
    {
        'pages/goods/goods_comment_con/components/lotteryAleart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("65f5"))
        })
    },
    [['pages/goods/goods_comment_con/components/lotteryAleart-create-component']]
]);
