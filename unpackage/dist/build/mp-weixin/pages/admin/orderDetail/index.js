require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/orderDetail/index"],{"05d2":function(e,t,r){"use strict";r.r(t);var o=r("e2aa"),n=r("0b9e");for(var i in n)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("7bc2");var d=r("f0c5"),u=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=u.exports},"0b9e":function(e,t,r){"use strict";r.r(t);var o=r("d9ed"),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(i);t["default"]=n.a},"110a":function(e,t,r){"use strict";(function(e,t){var o=r("4ea4");r("363e");o(r("66fd"));var n=o(r("05d2"));e.__webpack_require_UNI_MP_PLUGIN__=r,t(n.default)}).call(this,r("bc2e")["default"],r("543d")["createPage"])},"6dba":function(e,t,r){},"7bc2":function(e,t,r){"use strict";var o=r("6dba"),n=r.n(o);n.a},d9ed:function(e,t,r){"use strict";(function(e){var o=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("2eee")),i=o(r("c973")),d=r("96d8"),u=r("95a7"),l={name:"AdminOrder",components:{PriceChange:function(){r.e("pages/admin/components/PriceChange/index").then(function(){return resolve(r("74ba"))}.bind(null,r)).catch(r.oe)}},props:{},data:function(){return{order:!1,change:!1,order_id:"",orderInfo:{_status:{}},status:"",title:"",payType:"",types:"",order_type:"",clickNum:1,goname:"",customForm:[]}},watch:{"$route.params.oid":function(e){void 0!=e&&(this.order_id=e,this.getIndex())}},onShow:function(){this.getIndex()},onLoad:function(e){this.order_id=e.id,this.goname=e.goname,this.order_type=e.types},methods:{more:function(){this.order=!this.order},modify:function(e){this.change=!0,this.status=e},changeclose:function(e){this.change=e},getIndex:function(){var e=this,t=-3==this.order_type?d.getAdminRefundOrderDetail:d.getAdminOrderDetail;t(e.order_id).then((function(t){if(e.orderInfo=t.data,e.types=t.data._status._type,e.title=t.data._status._title,e.payType=t.data._status._payType,e.orderInfo.custom_form&&e.orderInfo.custom_form.length){var r=[];e.orderInfo.custom_form.map((function(e){""!=e.value&&r.push(e)})),e.$set(e,"customForm",r)}}),(function(e){}))},agreeExpress:function(e){var t=this;(0,d.agreeExpress)({id:e}).then((function(e){t.$util.Tips({title:e.msg}),t.init()})).catch((function(e){t.$util.Tips({title:e})}))},savePrice:function(e){var t=this;return(0,i.default)(n.default.mark((function r(){var o,i,l,a,s,f;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=t,i={},l=e.price,a=e.refund_price,o.orderInfo.refund_status,s=e.remark,i.order_id=o.orderInfo.order_id,0!=o.status){r.next=9;break}if((0,u.isMoney)(l)){r.next=5;break}return r.abrupt("return",o.$util.Tips({title:o.$t("请输入正确的金额")}));case 5:i.price=l,(0,d.setAdminOrderPrice)(i).then((function(e){o.change=!1,o.$util.Tips({title:o.$t("改价成功"),icon:"success"},"/pages/admin/orderDetail/index?id="+e.data.order_id+"&types=0")}),(function(e){o.change=!1,o.$util.Tips({title:o.$t("改价失败"),icon:"none"})})),r.next=22;break;case 9:if(2!=o.status){r.next=17;break}if((0,u.isMoney)(a)){r.next=12;break}return r.abrupt("return",o.$util.Tips({title:o.$t("请输入正确的金额")}));case 12:i.price=a,i.type=e.type,(0,d.setOrderRefund)(i).then((function(e){o.change=!1,o.$util.Tips({title:e.msg}),o.getIndex()}),(function(e){o.change=!1,o.$util.Tips({title:e})})),r.next=22;break;case 17:if(s){r.next=19;break}return r.abrupt("return",o.$util.Tips({title:o.$t("请输入备注")}));case 19:i.remark=s,f=-3==o.order_type?(0,d.setAdminRefundRemark)(i):(0,d.setAdminOrderRemark)(i),f.then((function(e){o.change=!1,o.$util.Tips({title:e.msg,icon:"success"}),o.getIndex()}),(function(e){o.change=!1,o.$util.Tips({title:e})}));case 22:case"end":return r.stop()}}),r)})))()},offlinePay:function(){var e=this;(0,d.setOfflinePay)({order_id:this.orderInfo.order_id}).then((function(t){e.$util.Tips({title:t.msg,icon:"success"}),e.getIndex()}),(function(t){e.$util.Tips({title:t})}))},copyNum:function(t){e.setClipboardData({data:t,success:function(){}})}}};t.default=l}).call(this,r("543d")["default"])},e2aa:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,r=(e._self._c,e.$t("订单")),o="looks"==e.goname||e.orderInfo.remark?null:e.$t("订单未备注，点击添加备注信息"),n=e.$t("复制"),i=e.$t("￥"),d=e.__map(e.orderInfo.cartInfo,(function(t,r){var o=e.__get_orig(t),n=t.productInfo.attrInfo?e.$t("￥"):null,i=t.productInfo.attrInfo?null:e.$t("￥");return{$orig:o,m4:n,m5:i}})),u=e.orderInfo.total_num?e.$t("共"):null,l=e.orderInfo.total_num?e.$t("件商品，应支付"):null,a=e.orderInfo.total_num?e.$t("￥"):null,s=e.orderInfo.total_num?e.$t("邮费"):null,f=e.orderInfo.total_num?e.$t("￥"):null,c=e.orderInfo.order_id?e.$t("订单编号"):null,p=e.orderInfo.order_id?e.$t("复制"):null,m=e.orderInfo.order_id?e.$t("下单时间"):null,_=e.orderInfo.order_id?e.$t("支付状态"):null,I=e.orderInfo.order_id&&1==e.orderInfo.paid?e.$t("已支付"):null,y=e.orderInfo.order_id&&1!=e.orderInfo.paid?e.$t("未支付"):null,$=e.orderInfo.order_id?e.$t("支付方式"):null,g=e.orderInfo.order_id?e.$t("买家留言"):null,h=e.customForm&&e.customForm.length,v=e.$t("商品总价"),b=e.$t("￥"),x=(parseFloat(e.orderInfo.total_price||0)+parseFloat(e.orderInfo.vip_true_price||0)).toFixed(2),k=e.orderInfo.pay_postage>0?e.$t("配送运费"):null,F=e.orderInfo.pay_postage>0?e.$t("￥"):null,P=e.orderInfo.pay_postage>0?parseFloat(e.orderInfo.pay_postage).toFixed(2):null,T=e.orderInfo.levelPrice>0?e.$t("用户等级优惠"):null,O=e.orderInfo.levelPrice>0?e.$t("￥"):null,w=e.orderInfo.levelPrice>0?parseFloat(e.orderInfo.levelPrice).toFixed(2):null,A=e.orderInfo.memberPrice>0?e.$t("付费会员优惠"):null,D=e.orderInfo.memberPrice>0?e.$t("￥"):null,R=e.orderInfo.memberPrice>0?parseFloat(e.orderInfo.memberPrice).toFixed(2):null,M=e.orderInfo.coupon_price>0?e.$t("优惠券抵扣"):null,N=e.orderInfo.coupon_price>0?e.$t("￥"):null,j=e.orderInfo.coupon_price>0?parseFloat(e.orderInfo.coupon_price).toFixed(2):null,C=e.orderInfo.use_integral>0?e.$t("积分抵扣"):null,E=e.orderInfo.use_integral>0?e.$t("￥"):null,S=e.orderInfo.use_integral>0?parseFloat(e.orderInfo.deduction_price).toFixed(2):null,J=e.$t("实付款"),L=e.$t("￥"),U=parseFloat(e.orderInfo.pay_price||0).toFixed(2),q="fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type?e.$t("配送方式"):null,G="fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type&&"express"===e.orderInfo.delivery_type?e.$t("快递"):null,z="fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type&&"send"===e.orderInfo.delivery_type?e.$t("送货"):null,B="fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type&&"express"===e.orderInfo.delivery_type?e.$t("快递公司"):null,H="fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type&&"send"===e.orderInfo.delivery_type?e.$t("送货人"):null,K="fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type&&"express"===e.orderInfo.delivery_type?e.$t("快递单号"):null,Q="fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type&&"send"===e.orderInfo.delivery_type?e.$t("送货人电话"):null,V="fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type?e.$t("复制"):null,W="looks"!=e.goname&&0==e.types?e.$t("一键改价"):null,X="looks"!=e.goname&&-1==e.types&&1==e.orderInfo.refund_type?e.$t("立即退款"):null,Y="looks"!=e.goname&&-1==e.types&&2==e.orderInfo.refund_type?e.$t("同意退货"):null,Z="looks"!=e.goname&&-1==e.types&&4==e.orderInfo.refund_type?e.$t("待用户发货"):null,ee="looks"!=e.goname?e.$t("订单备注"):null,te="looks"!=e.goname&&"offline"===e.orderInfo.pay_type&&0===e.orderInfo.paid?e.$t("确认付款"):null,re="looks"!=e.goname&&"express"==e.orderInfo.delivery_type&&1==e.orderInfo.status?e.$t("查看物流"):null,oe="looks"==e.goname||1!=e.types||1!==e.orderInfo.shipping_type||null!==e.orderInfo.pinkStatus&&2!==e.orderInfo.pinkStatus?null:e.$t("去发货");e.$mp.data=Object.assign({},{$root:{m0:r,m1:o,m2:n,m3:i,l0:d,m6:u,m7:l,m8:a,m9:s,m10:f,m11:c,m12:p,m13:m,m14:_,m15:I,m16:y,m17:$,m18:g,g0:h,m19:v,m20:b,g1:x,m21:k,m22:F,g2:P,m23:T,m24:O,g3:w,m25:A,m26:D,g4:R,m27:M,m28:N,g5:j,m29:C,m30:E,g6:S,m31:J,m32:L,g7:U,m33:q,m34:G,m35:z,m36:B,m37:H,m38:K,m39:Q,m40:V,m41:W,m42:X,m43:Y,m44:Z,m45:ee,m46:te,m47:re,m48:oe}})},n=[]}},[["110a","common/runtime","common/vendor"]]]);