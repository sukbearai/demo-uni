(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/columnGoods/HotNewGoods/feedback"],{1384:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,this.$t("商城客服已离线")),n=this.$t("我要反馈"),i=this.$t("请输入姓名"),a=this.$t("请输入手机号"),o=this.$t("请填写内容"),c=this.$t("提交");this.$mp.data=Object.assign({},{$root:{m0:e,m1:n,m2:i,m3:a,m4:o,m5:c}})},a=[]},2347:function(t,e,n){"use strict";var i=n("f156"),a=n.n(i);a.a},5703:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("363e");i(n("66fd"));var a=i(n("f186"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"5a48":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("d940"),a={name:"feedback",data:function(){return{name:"",phone:"",con:"",feedback:""}},onLoad:function(){this.getInfo()},methods:{getInfo:function(){var t=this;(0,i.serviceFeedBack)().then((function(e){t.feedback=e.data.feedback}))},subMit:function(){var t=this;return this.name?this.phone&&/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)?this.con?void(0,i.feedBackPost)({rela_name:this.name,phone:this.phone,content:this.con}).then((function(e){t.$util.Tips({title:e.msg,icon:"success"},{tab:3})})).catch((function(t){that.$util.Tips({title:t})})):this.$util.Tips({title:this.$t("请填写内容")}):this.$util.Tips({title:this.$t("请输入正确的手机号码")}):this.$util.Tips({title:this.$t("请输入姓名")})}}};e.default=a},a431:function(t,e,n){"use strict";n.r(e);var i=n("5a48"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f156:function(t,e,n){},f186:function(t,e,n){"use strict";n.r(e);var i=n("1384"),a=n("a431");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2347");var c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=s.exports}},[["5703","common/runtime","common/vendor"]]]);