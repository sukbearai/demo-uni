require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/lottery/components/noticeBar"],{"31ac":function(t,n,e){},"36ce":function(t,n,e){"use strict";var a=e("31ac"),i=e.n(a);i.a},4287:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement,n=(this._self._c,this.$t("恭喜您")),e=this.$t("获得");this.$mp.data=Object.assign({},{$root:{m0:n,m1:e}})},i=[]},4306:function(t,n,e){"use strict";e.r(n);var a=e("adb6"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},adb6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"noticeBar",data:function(){return{animateUp:!1,listData:JSON.parse(JSON.stringify(this.showMsg)),timer:null}},props:{showMsg:{type:Array}},mounted:function(){this.timer=setInterval(this.scrollAnimate,2500)},methods:{scrollAnimate:function(){var t=this;this.animateUp=!0,setTimeout((function(){t.listData.push(t.listData[0]),t.listData.shift(),t.animateUp=!1}),500)}},destroyed:function(){clearInterval(this.timer)}};n.default=a},d4f2:function(t,n,e){"use strict";e.r(n);var a=e("4287"),i=e("4306");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("36ce");var s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"7047ae9c",null,!1,a["a"],void 0);n["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/goods/lottery/components/noticeBar-create-component',
    {
        'pages/goods/lottery/components/noticeBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d4f2"))
        })
    },
    [['pages/goods/lottery/components/noticeBar-create-component']]
]);
