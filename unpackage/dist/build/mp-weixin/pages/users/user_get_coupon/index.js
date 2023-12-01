require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_get_coupon/index"],{4289:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.couponsList.length),i=n?t.__map(t.couponsList,(function(e,n){var i=t.__get_orig(e),o=t.$t("￥"),u=e.use_min_price>0?t.$t("满"):null,a=e.use_min_price>0?t.$t("元可用"):null,s=e.use_min_price>0?null:t.$t("无门槛券"),c=0===e.type?t.$t("通用劵"):null,l=0!==e.type&&1===e.type?t.$t("品类券"):null,r=0!==e.type&&1!==e.type?t.$t("商品券"):null,p=t.$t(e.title),d=e.coupon_time?t.$t("领取后"):null,f=e.coupon_time?t.$t("天内可用"):null,m=e.is_use>=e.receive_limit?t.$t("已领取"):null,h=e.is_use>=e.receive_limit||0!=e.is_permanent||0!=e.remain_count?null:t.$t("已领完"),g=e.is_use>=e.receive_limit||0==e.is_permanent&&0==e.remain_count?null:t.$t("立即领取");return{$orig:i,m0:o,m1:u,m2:a,m3:s,m4:c,m5:l,m6:r,m7:p,m8:d,m9:f,m10:m,m11:h,m12:g}})):null,o=t.couponsList.length,u=o?null:!t.couponsList.length&&2===t.page;t.$mp.data=Object.assign({},{$root:{g0:n,l0:i,g1:o,g2:u}})},o=[]},"4aaa":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("52c6"),u=n("88d5"),a=n("26cb"),s=i(n("0e62")),c=n("6503"),l={components:{authorize:function(){n.e("components/Authorize").then(function(){return resolve(n("e29b"))}.bind(null,n)).catch(n.oe)},home:function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("aa1a"))}.bind(null,n)).catch(n.oe)}},mixins:[s.default],data:function(){return{imgHost:c.HTTP_REQUEST_URL,couponsList:[],loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:20,isAuto:!1,isShowAuth:!1,type:0,navList:[{type:0,name:this.$t("通用券"),count:0},{type:1,name:this.$t("品类券"),count:0},{type:2,name:this.$t("商品券"),count:0}],count:0,receiveLoading:!1}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin||(0,u.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,e){if(!this.receiveLoading){var n=this;this.receiveLoading=!0,(0,o.setCouponReceive)(t).then((function(t){e.is_use+=1,n.$util.Tips({title:n.$t("领取成功")}),setTimeout((function(t){n.receiveLoading=!1}),500)})).catch((function(t){return n.receiveLoading=!1,n.$util.Tips({title:t})}))}},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&(t.loading=!0,t.loadTitle=t.$t("加载更多"),void(0,o.getCoupons)({type:t.type,page:t.page,limit:t.limit}).then((function(e){var n=e.data.list,i=n.length<t.limit,o=t.$util.SplitArray(n,t.couponsList);e.data.count.forEach((function(e,n){t.navList[n].count=e,e&&t.count++})),t.$set(t,"couponsList",o),t.loadend=i,t.loading=!1,t.loadTitle=i?t.$t("我也是有底线的"):t.$t("加载更多"),t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle=t.$t("加载更多")}))))},setType:function(t){this.type!==t&&(this.type=t,this.couponsList=[],this.page=1,this.loadend=!1,this.getUseCoupons())}}};e.default=l},"4ef8":function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("363e");i(n("66fd"));var o=i(n("867b"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"867b":function(t,e,n){"use strict";n.r(e);var i=n("4289"),o=n("e143");for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("aa07");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"5d8b35cc",null,!1,i["a"],void 0);e["default"]=s.exports},a5af:function(t,e,n){},aa07:function(t,e,n){"use strict";var i=n("a5af"),o=n.n(i);o.a},e143:function(t,e,n){"use strict";n.r(e);var i=n("4aaa"),o=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a}},[["4ef8","common/runtime","common/vendor"]]]);