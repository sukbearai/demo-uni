(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodClass/index"],{"319c":function(t,n,i){},"3a73":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"d_goodList",props:{dataConfig:{type:Object,default:function(){}},tempArr:{type:Array,default:[]},isLogin:{type:Boolean,default:!1}},data:function(){return{addIng:!1}},created:function(){},mounted:function(){},methods:{goDetail:function(t){this.$emit("detail",t)},goCartDuo:function(t){this.$emit("gocartduo",t)},goCartDan:function(t,n){this.$emit("gocartdan",t,n)},CartNumDes:function(t,n){this.addIng||(this.addIng=!0,this.$emit("ChangeCartNumDan",!1,t,n))},CartNumAdd:function(t,n){this.addIng||(this.addIng=!0,this.$emit("ChangeCartNumDan",!0,t,n))}}};n.default=a},5187:function(t,n,i){"use strict";var a=i("319c"),e=i.n(a);e.a},c755:function(t,n,i){"use strict";i.r(n);var a=i("c9a3"),e=i("f954");for(var u in e)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(u);i("5187");var c=i("f0c5"),o=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=o.exports},c9a3:function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,i=(t._self._c,t.$t("￥")),a=t.__map(t.tempArr,(function(n,i){var a=t.__get_orig(n),e=n.activity&&"1"===n.activity.type?t.$t("秒杀"):null,u=n.activity&&"2"===n.activity.type?t.$t("砍价"):null,c=n.activity&&"3"===n.activity.type?t.$t("拼团"):null,o=n.stock>0&&(!n.activity||"1"!==n.activity.type&&"2"!==n.activity.type&&"3"!==n.activity.type)&&n.spec_type?t.$t("选规格"):null,r=n.stock>0?null:t.$t("已售罄");return{$orig:a,m0:e,m1:u,m2:c,m4:o,m5:r}}));t.$mp.data=Object.assign({},{$root:{m3:i,l0:a}})},e=[]},f954:function(t,n,i){"use strict";i.r(n);var a=i("3a73"),e=i.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(u);n["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodClass/index-create-component',
    {
        'components/goodClass/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c755"))
        })
    },
    [['components/goodClass/index-create-component']]
]);