(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/richText"],{"5e16":function(n,t,e){"use strict";e.r(t);var o=e("de90"),r=e("c9b2");for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);e("d089");var a=e("f0c5"),c=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=c.exports},9334:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"richText",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},components:{"jyf-parser":function(){Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(e("3b1c"))}.bind(null,e)).catch(e.oe)}},data:function(){return{tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},bgColor:this.dataConfig.bgColor.color[0].item,lrConfig:this.dataConfig.lrConfig.val,description:this.dataConfig.richText.val,udConfig:this.dataConfig.udConfig.val}},created:function(){},methods:{}};t.default=o},abc4:function(n,t,e){},c9b2:function(n,t,e){"use strict";e.r(t);var o=e("9334"),r=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=r.a},d089:function(n,t,e){"use strict";var o=e("abc4"),r=e.n(o);r.a},de90:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var o={jyfParser:function(){return Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(e.bind(null,"3b1c"))}},r=function(){var n=this.$createElement;this._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/richText-create-component',
    {
        'pages/index/diy/components/richText-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5e16"))
        })
    },
    [['pages/index/diy/components/richText-create-component']]
]);