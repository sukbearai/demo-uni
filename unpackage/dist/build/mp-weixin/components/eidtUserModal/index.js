(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/eidtUserModal/index"],{"0243":function(t,n,a){"use strict";(function(t){var i=a("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(a("0e62")),u=(i(a("9b34")),a("e97d")),s={mixins:[e.default],props:{isShow:{type:Boolean,default:!1}},data:function(){return{defHead:a("ec12"),mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,userInfo:{avatar:"",nickname:""},mpData:t.getStorageSync("copyRight"),canvasStatus:!1}},mounted:function(){},methods:{uploadpic:function(){var t=this,n=this;this.canvasStatus=!0,n.$util.uploadImageChange("upload/image",(function(a){var i=n.userInfo;void 0!==i&&(n.userInfo.avatar=a.data.url),t.canvasStatus=!1}),(function(n){t.canvasStatus=!1}),(function(n){t.canvasWidth=n.w,t.canvasHeight=n.h}))},onChooseAvatar:function(t){var n=this,a=t.detail.avatarUrl;this.$util.uploadImgs("upload/image",a,(function(t){n.userInfo.avatar=t.data.url}),(function(t){}))},closeAttr:function(){this.$emit("closeEdit")},formSubmit:function(t){var n=this,a=this;return this.userInfo.avatar?t.detail.value.nickname?(this.userInfo.nickname=t.detail.value.nickname,void(0,u.userEdit)(this.userInfo).then((function(t){return n.$emit("editSuccess"),a.$util.Tips({title:t.msg,icon:"success"},{tab:3})})).catch((function(t){return a.$util.Tips({title:t||a.$t("保存失败")},{tab:3,url:1})}))):a.$util.Tips({title:a.$t("请输入昵称")}):a.$util.Tips({title:a.$t("请上传头像")})}}};n.default=s}).call(this,a("543d")["default"])},"0985":function(t,n,a){"use strict";var i=a("e724"),e=a.n(i);e.a},2022:function(t,n,a){},8049:function(t,n,a){"use strict";a.r(n);var i=a("89c1"),e=a("cc0c");for(var u in e)["default"].indexOf(u)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(u);a("fd7d"),a("0985");var s=a("f0c5"),c=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"7192451d",null,!1,i["a"],void 0);n["default"]=c.exports},"89c1":function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return e})),a.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=(this._self._c,this.$t("获取您的昵称、头像")),a=this.$t("提供具有辨识度的用户中心界面"),i=this.$t("头像"),e=this.$t("昵称"),u=this.$t("请输入昵称"),s=this.$t("保存");this.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:i,m3:e,m4:u,m5:s}})},e=[]},cc0c:function(t,n,a){"use strict";a.r(n);var i=a("0243"),e=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(u);n["default"]=e.a},e724:function(t,n,a){},fd7d:function(t,n,a){"use strict";var i=a("2022"),e=a.n(i);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/eidtUserModal/index-create-component',
    {
        'components/eidtUserModal/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8049"))
        })
    },
    [['components/eidtUserModal/index-create-component']]
]);
