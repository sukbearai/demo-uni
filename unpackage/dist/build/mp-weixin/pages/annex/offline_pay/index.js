require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/offline_pay/index"],{3288:function(t,e,n){"use strict";var i=n("6365"),a=n.n(i);a.a},"54bb":function(t,e,n){"use strict";var i=n("8605"),a=n.n(i);a.a},6365:function(t,e,n){},7774:function(t,e,n){"use strict";n.r(e);var i=n("dbdb"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"7f0b":function(t,e,n){"use strict";n.r(e);var i=n("cc60"),a=n("7774");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("54bb"),n("3288");var s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"0607860b",null,!1,i["a"],void 0);e["default"]=c.exports},"82f8":function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("363e");i(n("66fd"));var a=i(n("7f0b"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},8605:function(t,e,n){},cc60:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("支付金额")),i=t.$t("￥"),a=t.payPrice&&t.show?t.$t("会员优惠价"):null,o=t.payPrice&&t.show?t.$t("￥"):null,s=t.$t("支付方式"),c=t.yuePay?t.$t("余额支付"):null,u=t.yuePay?t.$t("可用余额"):null,r=t.yuePay?t.$t("￥"):null,l=t.wxpay?t.$t("微信支付"):null,f=t.$t("确认");t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:a,m3:o,m4:s,m5:c,m6:u,m7:r,m8:l,m9:f}})},a=[]},dbdb:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("350e"),o=n("88d5"),s=n("26cb"),c=i(n("0e62")),u=(getApp(),{mixins:[c.default],data:function(){return{money:"",payPrice:"",payType:"weixin",alipayHtml:"",alipay:!1,wxpay:!1,yuePay:!1,paying:!1,now_money:0,isWeixin:!1,site_name:"",isCommitted:!1,show:!1}},computed:(0,s.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin||(0,o.toLogin)()},onShow:function(){this.isLogin&&this.getPayType()},methods:{inputChange:function(t){var e=this;t.target.value=t.target.value.match(/^\d*(.?\d{0,2})/g)[0]||"",this.$nextTick((function(){e.money=t.target.value,e.checkPrice()}))},getPayType:function(){var e=this;(0,a.orderOfflinePayType)().then((function(n){var i=n.data,a=i.ali_pay_status,o=i.pay_weixin_open,s=i.yue_pay_status,c=i.offline_pay_status,u=i.site_name,r=i.now_money;e.alipay=a,e.wxpay=o,e.yuePay=s,e.now_money=r,e.site_name=u,c||t.showModal({title:e.$t("支付提醒"),content:e.$t("线下支付已关闭，请点击确认按钮返回主页"),showCancel:!1,success:function(){t.switchTab({url:"/pages/index/index"})}}),u&&t.setNavigationBarTitle({title:u})})).catch((function(e){t.showToast({title:e,icon:"none"})}))},checkForm:function(e){var n=e.detail.value,i=n.money,a=n.method;i?this.combData(a):t.showToast({title:this.$t("请输入支付金额"),icon:"none"})},checkPrice:function(){var e=this;(0,a.offlineCheckPrice)({pay_price:this.money}).then((function(t){e.payPrice=t.data.pay_price,e.show=t.data.show})).catch((function(e){t.showToast({title:e,icon:"none"})}))},combData:function(e){var n=this,i={type:3,pay_type:e,from:"weixinh5",price:this.payPrice||this.money,money:this.money};i.from="routine",this.paying||(this.paying=!0,t.showLoading({title:this.$t("正在确认")}),(0,a.offlineCreate)(i).then((function(e){t.hideLoading(),n.callPay(e)})).catch((function(e){n.paying=!1,t.showToast({title:e,icon:"none"})})))},callPay:function(e){var n=e.data,i=n.status,a=n.result,o=a.orderId,s=a.jsConfig,c="/pages/annex/offline_result/index?site_name="+this.site_name;switch(i){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":this.paying=!1,this.$util.Tips({title:e.msg},{tab:5,url:c});break;case"SUCCESS":this.paying=!1,this.money="",this.$util.Tips({title:e.msg,icon:"success"},{tab:5,url:c});break;case"WECHAT_PAY":var u=this,r="";r=t.requestOrderPayment?"requestOrderPayment":"requestPayment",t[r]({timeStamp:s.timestamp,nonceStr:s.nonceStr,package:s.package,signType:s.signType,paySign:s.paySign,success:function(t){u.$util.Tips({title:u.$t("支付成功"),icon:"success"},{tab:5,url:"/pages/annex/offline_result/index"})},fail:function(){t.showToast({title:u.$t("取消支付"),icon:"none",success:function(){u.paying=!1}})},complete:function(){u.paying=!1,t.hideLoading()}});break;case"PAY_DEFICIENCY":this.paying=!1,this.$util.Tips({title:e.msg});break;case"WECHAT_H5_PAY":this.paying=!1,t.showToast({title:e.msg,success:function(){location.href=s.h5_url}});break;case"ALIPAY_PAY":this.paying=!1,t.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(o,"&link=").concat(s.qrCode)});break}}}});e.default=u}).call(this,n("543d")["default"])}},[["82f8","common/runtime","common/vendor"]]]);