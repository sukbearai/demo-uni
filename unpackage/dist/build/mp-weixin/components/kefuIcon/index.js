(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kefuIcon/index"],{"35c7":function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var c=function(){var t=this.$createElement;this._self._c},u=[]},9869:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=e("b946"),u=(getApp(),{name:"kefuIcon",props:{ids:{type:Number,default:0},routineContact:{type:Number,default:0},storeInfo:{type:Object,default:function(){}},goodsCon:{type:Number,default:0}},data:function(){return{top:"480"}},mounted:function(){},methods:{goCustomer:function(){(0,c.getCustomer)("/pages/extension/customer_list/chat?productId=".concat(this.ids))},setTouchMove:function(t){t.touches[0].clientY<480&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY)}},created:function(){}});n.default=u},b2db:function(t,n,e){"use strict";e.r(n);var c=e("35c7"),u=e("c371");for(var o in u)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("f1c6");var i=e("f0c5"),f=Object(i["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],void 0);n["default"]=f.exports},c2dc:function(t,n,e){},c371:function(t,n,e){"use strict";e.r(n);var c=e("9869"),u=e.n(c);for(var o in c)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(o);n["default"]=u.a},f1c6:function(t,n,e){"use strict";var c=e("c2dc"),u=e.n(c);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kefuIcon/index-create-component',
    {
        'components/kefuIcon/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b2db"))
        })
    },
    [['components/kefuIcon/index-create-component']]
]);
