require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_address/index"],{"00aa":function(t,i,e){"use strict";var n=e("fc81"),s=e.n(n);s.a},"3c52":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=(t._self._c,t.$t("姓名")),n=t.$t("请输入姓名"),s=t.$t("联系电话"),o=t.$t("请输入联系电话"),r=t.$t("所在地区"),c=t.$t("详细地址"),d=t.$t("请填写具体地址"),a=t.$t("设置为默认地址"),u=t.$t("立即保存"),l=t.id?null:t.$t("导入微信地址");t.$mp.data=Object.assign({},{$root:{m0:e,m1:n,m2:s,m3:o,m4:r,m5:c,m6:d,m7:a,m8:u,m9:l}})},s=[]},5497:function(t,i,e){"use strict";e.r(i);var n=e("e5ca"),s=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=s.a},5974:function(t,i,e){"use strict";(function(t,i){var n=e("4ea4");e("363e");n(e("66fd"));var s=n(e("8543"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(s.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},8543:function(t,i,e){"use strict";e.r(i);var n=e("3c52"),s=e("5497");for(var o in s)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(o);e("00aa");var r=e("f0c5"),c=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"69da04bc",null,!1,n["a"],void 0);i["default"]=c.exports},e5ca:function(t,i,e){"use strict";(function(t){var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e("e97d"),o=e("52c6"),r=e("88d5"),c=e("26cb"),d=n(e("0e62")),a={components:{authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("e29b"))}.bind(null,e)).catch(e.oe)},home:function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("aa1a"))}.bind(null,e)).catch(e.oe)}},mixins:[d.default],data:function(){return{regionDval:[this.$t("浙江省"),this.$t("杭州市"),this.$t("滨江区")],cartId:"",pinkId:0,couponId:0,id:0,userAddress:{is_default:!1},region:[this.$t("省"),this.$t("市"),this.$t("区")],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:[],multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:[this.$t("广东省"),this.$t("广州市"),this.$t("番禺区")],defaultRegionCode:"110101",news:"",noCoupon:0}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getUserAddress()},deep:!0}},onLoad:function(i){this.isLogin?(this.cartId=i.cartId||"",this.pinkId=i.pinkId||0,this.couponId=i.couponId||0,this.id=i.id||0,this.noCoupon=i.noCoupon||0,this.news=i.new||"",t.setNavigationBarTitle({title:i.id?this.$t("修改地址"):this.$t("添加地址")}),this.getUserAddress(),this.getCityList()):(0,r.toLogin)()},methods:{getCityList:function(){var t=this,i=this;(0,o.getCity)().then((function(e){t.district=e.data,i.initialize()}))},initialize:function(){var t=this,i=[],e=[],n=[],s=this.district[0].c||[];s.length&&s[0].c;this.district.forEach((function(e,n){i.push(e.n),e.n===t.region[0]&&(t.valueRegion[0]=n,t.multiIndex[0]=n)})),this.district[this.valueRegion[0]].c.forEach((function(i,n){t.region[1]==i.c&&(t.valueRegion[1]=n,t.multiIndex[1]=n),e.push(i.n)})),this.district[this.valueRegion[0]].c[this.valueRegion[1]].c.forEach((function(i,e){t.region[2]==i.c&&(t.valueRegion[2]=e,t.multiIndex[2]=e),n.push(i.n)})),this.multiArray=[i,e,n]},bindRegionChange:function(t){var i=this.multiIndex,e=this.district[i[0]]||{c:[]},n=e.c[i[1]]||{v:0},s=this.multiArray,o=t.detail.value;this.region=[s[0][o[0]],s[1][o[1]],s[2][o[2]]],this.cityId=n.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var i=t.detail.column,e=t.detail.value,n=this.district[e]||{c:[]},s=this.multiArray,o=this.multiIndex;switch(o[i]=e,i){case 0:var r=n.c[0]||{c:[]};s[1]=n.c.map((function(t){return t.n})),s[2]=r.c.map((function(t){return t.n}));break;case 1:var c=this.district[o[0]].c[o[1]].c||[];s[2]=c.map((function(t){return t.n}));break;case 2:break}this.$set(this.multiArray,0,s[0]),this.$set(this.multiArray,1,s[1]),this.$set(this.multiArray,2,s[2]),this.multiIndex=o},onLoadFun:function(){this.getUserAddress()},authColse:function(t){this.isShowAuth=t},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.region=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2]},getUserAddress:function(){if(!this.id)return!1;var t=this;(0,s.getAddressDetail)(this.id).then((function(i){var e=[i.data.province,i.data.city,i.data.district];t.$set(t,"userAddress",i.data),t.$set(t,"region",e),t.cityId=i.data.city_id}))},getWxAddress:function(){var i=this;t.authorize({scope:"scope.address",success:function(e){t.chooseAddress({success:function(e){var n={};n.province=e.provinceName,n.city=e.cityName,n.district=e.countyName,(0,s.editAddress)({address:n,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){return setTimeout((function(){if(i.cartId){var n=i.cartId,s=i.pinkId,o=i.couponId;i.cartId="",i.pinkId="",i.couponId="",t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+n+"&addressId="+(i.id?i.id:e.data.id)+"&pinkId="+s+"&couponId="+o+"&new="+i.news+"&noCoupon="+i.noCoupon})}else t.navigateBack({delta:1})}),1e3),i.$util.Tips({title:i.$t("添加成功"),icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return i.$util.Tips({title:i.$t("取消选择")})}})},fail:function(e){t.showModal({title:i.$t("您已拒绝导入微信地址权限"),content:i.$t("是否进入权限管理，调整授权？"),success:function(e){if(e.confirm)t.openSetting({success:function(t){}});else if(e.cancel)return i.$util.Tips({title:i.$t("已取消！")})}})}})},getAddress:function(){var i=this,e=this;e.$wechat.openAddress().then((function(n){(0,s.editAddress)({id:i.id,real_name:n.userName,phone:n.telNumber,address:{province:n.provinceName,city:n.cityName,district:n.countryName},detail:n.detailInfo,is_default:1,post_code:n.postalCode,type:1}).then((function(i){e.$util.Tips({title:e.$t("添加成功"),icon:"success"},(function(){if(e.cartId){var n=e.cartId,s=e.pinkId,o=e.couponId;e.cartId="",e.pinkId="",e.couponId="",t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+n+"&addressId="+(e.id?e.id:i.data.id)+"&pinkId="+s+"&couponId="+o+"&new="+e.news})}else t.navigateTo({url:"/pages/users/user_address_list/index"})}))})).catch((function(t){return e.$util.Tips({title:t||e.$t("添加失败")})}))})).catch((function(t){}))},formSubmit:function(i){var e=this,n=i.detail.value;if(!n.real_name.trim())return e.$util.Tips({title:e.$t("请填写收货人姓名")});if(!n.phone)return e.$util.Tips({title:e.$t("请填写联系电话")});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.phone))return e.$util.Tips({title:e.$t("请输入正确的手机号码")});if(e.region[0]==e.$t("省"))return e.$util.Tips({title:e.$t("请选择所在地区")});if(!n.detail.trim())return e.$util.Tips({title:e.$t("请填写详细地址")});n.id=e.id;var o=e.region;n.address={province:o[0],city:o[1],district:o[2],city_id:e.cityId},n.is_default=e.userAddress.is_default?1:0,t.showLoading({title:e.$t("保存中"),mask:!0}),(0,s.editAddress)(n).then((function(i){e.id?e.$util.Tips({title:e.$t("修改成功"),icon:"success"}):e.$util.Tips({title:e.$t("添加成功"),icon:"success"}),setTimeout((function(){if(!e.cartId)return t.navigateBack({delta:1});var n=e.cartId,s=e.pinkId,o=e.couponId;e.cartId="",e.pinkId="",e.couponId="",t.navigateTo({url:"/pages/goods/order_confirm/index?new="+e.news+"&cartId="+n+"&addressId="+(e.id?e.id:i.data.id)+"&pinkId="+s+"&couponId="+o+"&noCoupon="+e.noCoupon})}),1e3)})).catch((function(t){return e.$util.Tips({title:t})}))},ChangeIsDefault:function(t){this.$set(this.userAddress,"is_default",!this.userAddress.is_default)}}};i.default=a}).call(this,e("543d")["default"])},fc81:function(t,i,e){}},[["5974","common/runtime","common/vendor"]]]);