require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/order_details/index"],{1116:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}));var n={zbCode:function(){return Promise.all([o.e("common/vendor"),o.e("components/zb-code/zb-code")]).then(o.bind(null,"ae25"))}},r=function(){var e=this,t=e.$createElement,o=(e._self._c,[4,5].includes(e.orderInfo.refund_type)),n=o&&""!=e.orderInfo._status.refund_name?e.$t("复制"):null,r=o&&""!=e.orderInfo._status.refund_name?e.$t("请按以上退货信息将商品退回"):null,i=o&&""==e.orderInfo._status.refund_name?e.$t("请联系管理员获取退货地址"):null,s=[4,5].includes(e.orderInfo.refund_type),d=0==e.isGoodsReturn?e.$t("待付款"):null,u=0==e.isGoodsReturn&&1==e.orderInfo.shipping_type?e.$t("待发货"):null,a=0==e.isGoodsReturn&&1!=e.orderInfo.shipping_type?e.$t("待核销"):null,l=0==e.isGoodsReturn&&1==e.orderInfo.shipping_type?e.$t("待收货"):null,f=0==e.isGoodsReturn?e.$t("待评价"):null,c=0==e.isGoodsReturn?e.$t("已完成"):null,p=0==e.isGoodsReturn&&e.orderInfo.verify_code&&1==e.orderInfo.paid?e.$t("核销信息"):null,_=0==e.isGoodsReturn&&e.orderInfo.verify_code&&1==e.orderInfo.paid&&2==e.orderInfo.shipping_type?e.$t("营业时间"):null,I=0==e.isGoodsReturn&&e.orderInfo.verify_code&&1==e.orderInfo.paid&&2==e.orderInfo.shipping_type?e.$t("每日"):null,y=0==e.isGoodsReturn&&e.orderInfo.verify_code&&1==e.orderInfo.paid?e.$t("使用说明"):null,h=0==e.isGoodsReturn&&e.orderInfo.verify_code&&1==e.orderInfo.paid&&2==e.orderInfo.shipping_type?e.$t("可将二维码出示给店员扫描或提供数字核销码"):null,m=0==e.isGoodsReturn&&e.orderInfo.verify_code&&1==e.orderInfo.paid&&2!=e.orderInfo.shipping_type?e.$t("可将二维码出示给配送员进行核销"):null,v=0==e.isGoodsReturn&&2==e.orderInfo.shipping_type?e.$t("地址信息"):null,$=0!=e.isGoodsReturn&&3==e.orderInfo.refund_type?e.$t("拒绝退款"):null,g=0!=e.isGoodsReturn&&3==e.orderInfo.refund_type?e.$t("拒绝原因"):null,R=0==e.routineContact?e.$t("联系客服"):null,b=0!=e.routineContact?e.$t("联系客服"):null,x=1==e.isReturen?e.$t("申请理由"):null,G=1==e.isReturen?e.$t("用户备注"):null,T=1==e.isReturen?e.orderInfo.refund_img.length:null,w=1==e.isReturen&&T?e.$t("申请图片"):null,S=e.$t("订单号"),C=e.$t("复制"),k=e.$t("下单时间"),F=e.$t("支付状态"),L=e.orderInfo.paid?e.$t("已支付"):null,O=e.orderInfo.paid?null:e.$t("未支付"),P=e.orderInfo.paid?e.$t("支付方式"):null,D=e.orderInfo.paid?e.$t(e.orderInfo._status._payType):null,M=e.orderInfo.mark&&1!=e.isReturen&&e.orderInfo.pid?e.$t("买家备注"):null,z=e.orderInfo.mark&&1!=e.isReturen&&!e.orderInfo.pid?e.$t("买家留言"):null,B=e.orderInfo.remark?e.$t("商家备注"):null,U=e.orderInfo.remark&&1==e.orderInfo.virtual_type?e.$t("复制"):null,A=e.customForm&&e.customForm.length,N=A?e.$t("复制"):null,E=e.isGoodsReturn&&3!=e.orderInfo.cartInfo[0].productInfo.virtual_type?e.$t("收货人"):null,j=e.isGoodsReturn&&3!=e.orderInfo.cartInfo[0].productInfo.virtual_type?e.$t("联系电话"):null,J=e.isGoodsReturn&&3!=e.orderInfo.cartInfo[0].productInfo.virtual_type&&e.orderInfo.shipping_type&&1==e.orderInfo.shipping_type?e.$t("收货地址"):null,Q=0!=e.orderInfo.status&&"express"==e.orderInfo.delivery_type?e.$t("配送方式"):null,q=0!=e.orderInfo.status&&"express"==e.orderInfo.delivery_type?e.$t("发货"):null,H=0!=e.orderInfo.status&&"express"==e.orderInfo.delivery_type?e.$t("快递公司"):null,V=0!=e.orderInfo.status&&"express"==e.orderInfo.delivery_type?e.$t("快递单号"):null,K=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("配送方式"):null,W=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("送货"):null,X=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("配送人姓名"):null,Y=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("送货人电话"):null,Z=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("拨打"):null,ee=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"!=e.orderInfo.delivery_type&&"fictitious"==e.orderInfo.delivery_type?e.$t("虚拟发货"):null,te=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"!=e.orderInfo.delivery_type&&"fictitious"==e.orderInfo.delivery_type?e.$t("已发货，请注意查收"):null,oe=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"!=e.orderInfo.delivery_type&&"fictitious"==e.orderInfo.delivery_type&&e.orderInfo.fictitious_content?e.$t("虚拟备注"):null,ne=e.orderInfo.total_price?e.$t("商品总价"):null,re=e.orderInfo.total_price?e.$t("￥"):null,ie=e.orderInfo.total_price?(parseFloat(e.orderInfo.total_price)+parseFloat(e.orderInfo.vip_true_price)).toFixed(2):null,se=e.orderInfo.total_price&&e.orderInfo.pay_postage>0?e.$t("配送运费"):null,de=e.orderInfo.total_price&&e.orderInfo.pay_postage>0?e.$t("￥"):null,ue=e.orderInfo.total_price&&e.orderInfo.pay_postage>0?parseFloat(e.orderInfo.pay_postage).toFixed(2):null,ae=e.orderInfo.total_price&&e.orderInfo.levelPrice>0?e.$t("用户等级优惠"):null,le=e.orderInfo.total_price&&e.orderInfo.levelPrice>0?e.$t("￥"):null,fe=e.orderInfo.total_price&&e.orderInfo.levelPrice>0?parseFloat(e.orderInfo.levelPrice).toFixed(2):null,ce=e.orderInfo.total_price&&e.orderInfo.memberPrice>0?e.$t("付费会员优惠"):null,pe=e.orderInfo.total_price&&e.orderInfo.memberPrice>0?e.$t("￥"):null,_e=e.orderInfo.total_price&&e.orderInfo.memberPrice>0?parseFloat(e.orderInfo.memberPrice).toFixed(2):null,Ie=e.orderInfo.total_price&&e.orderInfo.coupon_price>0?e.$t("优惠券抵扣"):null,ye=e.orderInfo.total_price&&e.orderInfo.coupon_price>0?e.$t("￥"):null,he=e.orderInfo.total_price&&e.orderInfo.coupon_price>0?parseFloat(e.orderInfo.coupon_price).toFixed(2):null,me=e.orderInfo.total_price&&e.orderInfo.use_integral>0?e.$t("积分抵扣"):null,ve=e.orderInfo.total_price&&e.orderInfo.use_integral>0?e.$t("￥"):null,$e=e.orderInfo.total_price&&e.orderInfo.use_integral>0?parseFloat(e.orderInfo.deduction_price).toFixed(2):null,ge=e.orderInfo.total_price&&!e.orderInfo.help_info.help_status?e.$t("实付款"):null,Re=e.orderInfo.total_price&&!e.orderInfo.help_info.help_status?e.$t("￥"):null,be=e.orderInfo.total_price&&!e.orderInfo.help_info.help_status?parseFloat(e.orderInfo.pay_price).toFixed(2):null,xe=e.orderInfo.total_price&&e.orderInfo.help_info.help_status?e.$t("总代付"):null,Ge=e.orderInfo.total_price&&e.orderInfo.help_info.help_status?e.$t("￥"):null,Te=e.orderInfo.total_price&&e.orderInfo.help_info.help_status?parseFloat(e.orderInfo.pay_price).toFixed(2):null,we=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&(e.invoice_func||e.invoiceData)&&e.orderInfo.paid&&!e.orderInfo.refund_status?e.$t("更多"):null,Se=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&e.moreBtn&&e.invoice_func&&!e.invoiceData?e.$t("申请开票"):null,Ce=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&e.moreBtn&&e.invoiceData?e.$t("查看发票"):null,ke=0!=e.isGoodsReturn&&9!=e.status.type&&!e.orderInfo.refund_type&&!e.orderInfo.is_apply_refund||0!=e.status.type&&-9!=e.status.type?null:e.$t("取消订单"),Fe=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&0==e.status.type?e.$t("立即付款"):null,Le=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&0!=e.status.type?e.orderInfo.is_apply_refund&&0==e.orderInfo.refund_status&&e.cartInfo.length>1&&!e.orderInfo.virtual_type&&e.orderInfo.is_refund_available:null,Oe=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&0!=e.status.type&&Le?e.cartInfo.length:null,Pe=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&0!=e.status.type&&Le?e.cartInfo.length:null,De=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&0!=e.status.type&&Le&&Pe>1?e.$t("批量退款"):null,Me=0!=e.isGoodsReturn&&9!=e.status.type&&!e.orderInfo.refund_type&&!e.orderInfo.is_apply_refund||0==e.status.type||!Le||Pe>1?null:e.$t("申请退款"),ze=0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund?"express"==e.orderInfo.delivery_type&&3==e.status.class_status&&2==e.status.type&&!e.split.length:null,Be=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&ze?e.$t("查看物流"):null,Ue=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&3==e.orderInfo.type&&0==e.orderInfo.refund_type&&e.orderInfo.paid?e.$t("查看拼团"):null,Ae=0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund?3==e.status.class_status&&!e.split.length:null,Ne=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&Ae?e.$t("确认收货"):null,Ee=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&5==e.status.class_status?e.$t("再次购买"):null,je=0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund?[1,2,4].includes(e.orderInfo.refund_type)&&!e.orderInfo.is_cancel&&3!=e.orderInfo.type&&2!=e.orderInfo.refund_status:null,Je=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&je?e.$t("取消申请"):null,Qe=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&4==e.orderInfo.refund_type?e.$t("填写退货信息"):null,qe=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&5==e.orderInfo.refund_type?e.$t("查看退货物流"):null,He=0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund?4==e.status.type&&!e.split.length||-2==e.status.type:null,Ve=(0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund)&&He?e.$t("删除订单"):null;e._isMounted||(e.e0=function(t){e.refund_close=!1},e.e1=function(t){e.aleartStatus=!1},e.e2=function(t){e.aleartStatus=!1},e.e3=function(t){e.moreBtn=!1}),e.$mp.data=Object.assign({},{$root:{g0:o,m0:n,m1:r,m2:i,g1:s,m3:d,m4:u,m5:a,m6:l,m7:f,m8:c,m9:p,m10:_,m11:I,m12:y,m13:h,m14:m,m15:v,m16:$,m17:g,m18:R,m19:b,m20:x,m21:G,g2:T,m22:w,m23:S,m24:C,m25:k,m26:F,m27:L,m28:O,m29:P,m30:D,m31:M,m32:z,m33:B,m34:U,g3:A,m35:N,m36:E,m37:j,m38:J,m39:Q,m40:q,m41:H,m42:V,m43:K,m44:W,m45:X,m46:Y,m47:Z,m48:ee,m49:te,m50:oe,m51:ne,m52:re,g4:ie,m53:se,m54:de,g5:ue,m55:ae,m56:le,g6:fe,m57:ce,m58:pe,g7:_e,m59:Ie,m60:ye,g8:he,m61:me,m62:ve,g9:$e,m63:ge,m64:Re,g10:be,m65:xe,m66:Ge,g11:Te,m67:we,m68:Se,m69:Ce,m70:ke,m71:Fe,g12:Le,g13:Oe,g14:Pe,m72:De,m73:Me,g15:ze,m74:Be,m75:Ue,g16:Ae,m76:Ne,m77:Ee,g17:je,m78:Je,m79:Qe,m80:qe,g18:He,m81:Ve}})},i=[]},"25a9":function(e,t,o){"use strict";(function(e,n){var r=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o("350e"),s=o("6bd7"),d=o("52c6"),u=o("b946"),a=o("e97d"),l=(r(o("f702")),o("88d5")),f=o("26cb"),c=r(o("0e62")),p=o("6503"),_={components:{home:function(){Promise.all([o.e("common/vendor"),o.e("components/home/index")]).then(function(){return resolve(o("aa1a"))}.bind(null,o)).catch(o.oe)},invoicePicker:function(){o.e("pages/goods/components/invoicePicker/index").then(function(){return resolve(o("e3bb"))}.bind(null,o)).catch(o.oe)},invoiceModal:function(){o.e("pages/goods/components/invoiceModal/index").then(function(){return resolve(o("bc70"))}.bind(null,o)).catch(o.oe)},orderGoods:function(){o.e("components/orderGoods/index").then(function(){return resolve(o("aed1"))}.bind(null,o)).catch(o.oe)},zbCode:function(){Promise.all([o.e("common/vendor"),o.e("components/zb-code/zb-code")]).then(function(){return resolve(o("ae25"))}.bind(null,o)).catch(o.oe)},authorize:function(){o.e("components/Authorize").then(function(){return resolve(o("e29b"))}.bind(null,o)).catch(o.oe)}},mixins:[c.default],data:function(){return{customForm:"",codeShow:!1,cid:"1",ifShow:!0,val:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#000",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",wd:0,hg:0,mpUrl:"",order_id:"",evaluate:0,cartInfo:[],pid:0,split:[],orderInfo:{help_info:{},system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},refund_close:!1,isClose:!1,payMode:[{name:this.$t("微信支付"),icon:"icon-weixinzhifu",value:"weixin",title:this.$t("使用微信快捷支付"),payStatus:!0},{name:this.$t("余额支付"),icon:"icon-yuezhifu",value:"yue",title:this.$t("可用余额"),number:0,payStatus:!0},{name:this.$t("好友代付"),icon:"icon-haoyoudaizhifu",value:"friend",title:this.$t("找微信好友支付"),payStatus:1},{name:this.$t("通联支付"),icon:"icon-tonglianzhifu1",value:"allinpay",title:this.$t("使用通联支付付款"),payStatus:1}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,routineContact:0,express_num:"",invoice_func:!1,invoiceData:{},invoice_id:0,invChecked:"",moreBtn:!1,invShow:!1,aleartStatus:!1,special_invoice:!1,invList:[],customerInfo:{},userInfo:{},isReturen:"",urlQuery:""}},computed:(0,f.mapGetters)(["isLogin"]),onLoad:function(e){e.order_id&&(this.$set(this,"order_id",e.order_id),this.isReturen=e.isReturen),e.invoice_id&&(this.invoice_id=e.invoice_id)},onShow:function(){if(this.isLogin){this.getOrderInfo(),this.getUserInfo(),this.getCustomerType();var t=e.getEnterOptionsSync();if("1038"==t.scene&&"wxef277996acc166c3"==t.referrerInfo.appId){var o=t.referrerInfo.extraData;o?"success"==o.code?this.getOrderInfo():"cancel"==o.code?this.$util.Tips({title:this.$t("支付已取消")}):this.$util.Tips({title:this.$t("支付失败：".concat(o.errmsg))}):this.getOrderInfo()}}else(0,l.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){},methods:{qrR:function(e){this.codeSrc=e},cancelRefundOrder:function(e){var t=this;n.showModal({title:t.$t("取消申请"),content:t.$t("您确认放弃此次申请吗"),success:function(e){e.confirm&&(0,i.cancelRefundOrder)(t.order_id).then((function(e){return t.$util.Tips({title:t.$t("操作成功"),icon:"success"},{tab:4,url:"/pages/users/user_return_list/index"})})).catch((function(e){return t.$util.Tips({title:e})}))}})},refundInput:function(){n.navigateTo({url:"/pages/goods/order_refund_goods/index?orderId="+this.order_id})},getCustomerType:function(){var e=this;(0,d.getCustomerType)().then((function(t){e.customerInfo=t.data})).catch((function(t){e.$util.Tips({title:t})}))},goGoodCall:function(){(0,u.getCustomer)("/pages/extension/customer_list/chat?orderId=".concat(this.order_id,"&isReturen=").concat(this.isReturen))},openSubcribe:function(e){var t=e;n.showLoading({title:this.$t("正在加载中")}),(0,s.openOrderRefundSubscribe)().then((function(e){n.hideLoading(),n.navigateTo({url:t})})).catch((function(e){n.hideLoading()}))},goReturnGoods:function(){},makePhone:function(){n.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:this.$t("缺少经纬度信息无法查看地图")});n.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailed_address,success:function(){}})},pay_open:function(){n.navigateTo({url:"/pages/goods/cashier/index?order_id=".concat(this.orderInfo.order_id,"&from_type=order")})},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.getOrderInfo(),this.getUserInfo()},getUserInfo:function(){var e=this;(0,a.getUserInfo)().then((function(t){e.userInfo=t.data,e.payMode[1].number=t.data.now_money,e.$set(e,"payMode",e.payMode)}))},getOrderInfo:function(){var e=this,t=this;n.showLoading({title:this.$t("正在加载中")});var o="";o=t.isReturen?(0,i.refundOrderDetail)(this.order_id):(0,i.getOrderDetail)(this.order_id),o.then((function(o){o.data.pid&&-1==o.data.pid&&t.$util.Tips({title:e.$t("订单信息不存在")},"/pages/goods/order_list/index");var r=o.data._status._type;n.hideLoading(),t.$set(t,"orderInfo",o.data);var i=[];t.orderInfo.custom_form.map((function(e){""!=e.value&&i.push(e)})),t.$set(t,"customForm",i),t.$set(t,"cartInfo",o.data.cartInfo),t.$set(t,"pid",o.data.pid),t.$set(t,"split",o.data.split),t.$set(t,"evaluate",3==r?3:0),t.$set(t,"system_store",o.data.system_store),t.$set(t,"invoiceData",o.data.invoice),t.invoiceData&&(t.invoiceData.pay_price=o.data.pay_price),t.$set(t,"invoice_func",o.data.invoice_func),t.$set(t,"special_invoice",o.data.special_invoice),t.$set(t,"routineContact",Number(o.data.routine_contact_type)),t.orderInfo.code?e.codeSrc=t.orderInfo.code||"":e.$nextTick((function(){t.val=p.HTTP_REQUEST_URL+"/pages/admin/order_cancellation/index?verify_code="+t.orderInfo.verify_code})),0!=e.orderInfo.refund_status?e.isGoodsReturn=!0:e.isReturen=0,t.invoice_id&&!t.invoiceData&&(t.invChecked=t.invoice_id||"",e.invoiceApply()),t.payMode.map((function(e){"weixin"==e.value&&(e.payStatus=!!o.data.pay_weixin_open),"alipay"==e.value&&(e.payStatus=!!o.data.ali_pay_status),"yue"==e.value&&(e.payStatus=1==o.data.yue_pay_status),"friend"==e.value&&(e.payStatus=1==o.data.friend_pay_status),"allinpay"==e.value&&(e.payStatus=1==o.data.pay_allin_open)})),t.getOrderStatus()})).catch((function(e){n.hideLoading(),t.$util.Tips({title:e},"/pages/goods/order_list/index")}))},invCancel:function(){this.invChecked="",this.invTitle=this.$t("不开发票"),this.invShow=!1},invSub:function(e){var t=this;this.invChecked=e;var o={order_id:this.order_id,invoice_id:this.invChecked};(0,a.makeUpinvoice)(o).then((function(e){n.showToast({title:t.$t("申请成功"),icon:"success"}),t.invShow=!1,t.aleartStatus=!0,t.getOrderInfo()})).catch((function(e){n.showToast({title:e,icon:"none"})}))},invClose:function(){this.invShow=!1,this.getInvoiceList()},invoiceApply:function(){this.urlQuery="&specialInvoice=".concat(this.userInfo.special_invoice),this.getInvoiceList(),this.moreBtn=!1,this.invShow=!0},aleartStatusChange:function(){this.moreBtn=!1,this.aleartStatus=!0},getInvoiceList:function(){var e=this;n.showLoading({title:this.$t("正在加载中")}),(0,a.invoiceList)().then((function(t){n.hideLoading(),e.invList=t.data.map((function(e){return e.id=e.id.toString(),e}));var o=e.invList.find((function(t){return t.id==e.invChecked}));if(o){var r="";r+=1===o.header_type?e.$t("个人"):e.$t("企业"),r+=1===o.type?e.$t("普通"):e.$t("专用"),r+=e.$t("发票"),e.invTitle=r}})).catch((function(e){n.showToast({title:e,icon:"none"})}))},more:function(){this.moreBtn=!this.moreBtn},copy:function(e){n.setClipboardData({data:e})},copyAddress:function(){n.setClipboardData({data:this.orderInfo._status.refund_name+this.orderInfo._status.refund_phone+this.orderInfo._status.refund_address,success:function(){n.Tips({title:this.$t("复制成功"),icon:"success"})}})},copyText:function(e){var t="";this.customForm.map((function(e){"img"!==e.label&&(t+=e.title+e.value)})),n.setClipboardData({data:t})},goTel:function(){n.makePhoneCall({phoneNumber:this.orderInfo.delivery_id})},getOrderStatus:function(){var e=this.orderInfo||{},t=e._status||{_type:0},o={},n=parseInt(t._type),r=e.delivery_type,i=e.seckill_id?parseInt(e.seckill_id):0,s=e.bargain_id?parseInt(e.bargain_id):0,d=e.discount_id?parseInt(e.discount_id):0,u=e.combination_id?parseInt(e.combination_id):0;o={type:9==n?-9:n,class_status:0},1==n&&u>0&&(o.class_status=1),2==n&&"express"==r&&(o.class_status=2),2==n&&(o.class_status=3),4!=n&&0!=n||(o.class_status=4),i||s||u||d||e.type||3!=n&&4!=n||(o.class_status=5),this.$set(this,"status",o)},goJoinPink:function(){n.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pink_id})},goOrderConfirm:function(){var e=this;(0,i.orderAgain)(e.orderInfo.order_id).then((function(e){return n.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+e.data.cateId})})).catch((function(t){return e.$util.Tips({title:t})}))},confirmOrder:function(t){var o=this;e.openBusinessView&&this.orderInfo.order_shipping_open&&this.orderInfo.trade_no?(n.showLoading({title:this.$t("加载中")}),e.openBusinessView({businessType:"weappOrderConfirm",extraData:{transaction_id:this.orderInfo.trade_no},success:function(){},fail:function(e){return n.hideLoading(),o.$util.Tips({title:e.errMsg})},complete:function(){n.hideLoading()}})):this.defaultTake(t)},defaultTake:function(e){var t=this;n.showModal({title:t.$t("确认收货"),content:t.$t("为保障权益，请收到货确认无误后，再确认收货"),success:function(o){o.confirm&&(0,i.orderTake)(e||t.order_id).then((function(e){return t.$util.Tips({title:t.$t("操作成功"),icon:"success"},(function(){t.getOrderInfo()}))})).catch((function(e){return t.$util.Tips({title:e})}))}})},delOrder:function(){var e=this;n.showModal({title:this.$t("删除订单"),content:this.$t("确定删除该订单"),success:function(t){if(t.confirm)(e.isReturen?i.refundOrderDel:i.orderDel)(e.order_id).then((function(t){return-2==e.status.type?e.$util.Tips({title:e.$t("删除成功"),icon:"success"},{tab:5,url:"/pages/users/user_return_list/index"}):e.$util.Tips({title:e.$t("删除成功"),icon:"success"},{tab:5,url:"/pages/goods/order_list/index"})})).catch((function(t){return e.$util.Tips({title:t})}));else if(t.cancel)return e.$util.Tips({title:e.$t("已取消")})}})},cancelOrder:function(){var e=this;n.showModal({title:this.$t("提示"),content:this.$t("确认取消该订单"),success:function(t){t.confirm?(0,i.orderCancel)(e.orderInfo.order_id).then((function(t){e.$util.Tips({title:t.msg},"/pages/goods/order_list/index")})).catch((function(){e.getOrderInfo()})):t.cancel}})}}};t.default=_}).call(this,o("bc2e")["default"],o("543d")["default"])},5911:function(e,t,o){"use strict";o.r(t);var n=o("1116"),r=o("e885");for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);o("9050"),o("f54f");var s=o("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"169d35fd",null,!1,n["a"],void 0);t["default"]=d.exports},9050:function(e,t,o){"use strict";var n=o("f095"),r=o.n(n);r.a},9657:function(e,t,o){"use strict";(function(e,t){var n=o("4ea4");o("363e");n(o("66fd"));var r=n(o("5911"));e.__webpack_require_UNI_MP_PLUGIN__=o,t(r.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},e885:function(e,t,o){"use strict";o.r(t);var n=o("25a9"),r=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},f095:function(e,t,o){},f54f:function(e,t,o){"use strict";var n=o("fc56"),r=o.n(n);r.a},fc56:function(e,t,o){}},[["9657","common/runtime","common/vendor"]]]);