(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodList/index"],{5625:function(t,i,n){"use strict";n.r(i);var e=n("7f5a"),a=n.n(e);for(var u in e)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(u);i["default"]=a.a},"7f5a":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n("26cb"),a=n("66aa"),u={computed:(0,e.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(i){var n=this;(0,a.goPage)().then((function(e){(0,a.goShopDetail)(i,n.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}))}))}}};i.default=u}).call(this,n("543d")["default"])},a2c0:function(t,i,n){"use strict";var e=n("a4ea"),a=n.n(e);a.a},a4ea:function(t,i,n){},f0e4:function(t,i,n){"use strict";n.r(i);var e=n("f36b"),a=n("5625");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(u);n("a2c0");var c=n("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"6786e958",null,!1,e["a"],void 0);i["default"]=r.exports},f36b:function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,n=(t._self._c,t.$t("￥")),e=t.__map(t.bastList,(function(i,n){var e=t.__get_orig(i),a=i.activity&&"1"===i.activity.type?t.$t("秒杀"):null,u=i.activity&&"2"===i.activity.type?t.$t("砍价"):null,c=i.activity&&"3"===i.activity.type?t.$t("拼团"):null,r=i.is_vip&&i.vip_price&&i.vip_price>0?t.$t("￥"):null,o=i.is_vip&&i.vip_price&&i.vip_price>0?t.$t("已售"):null,p=i.is_vip&&i.vip_price&&i.vip_price>0?t.$t(i.unit_name):null,l=i.is_vip&&i.vip_price&&i.vip_price>0?null:t.$t("已售"),f=i.is_vip&&i.vip_price&&i.vip_price>0?null:t.$t(i.unit_name);return{$orig:e,m0:a,m1:u,m2:c,m4:r,m5:o,m6:p,m7:l,m8:f}}));t.$mp.data=Object.assign({},{$root:{m3:n,l0:e}})},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodList/index-create-component',
    {
        'components/goodList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f0e4"))
        })
    },
    [['components/goodList/index-create-component']]
]);