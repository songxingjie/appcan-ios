webpackJsonp([27],{"7bwy":function(t,e,n){var a=n("UJE/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("2b77f8ad",a,!0,{})},"UJE/":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.submitBox {\n  padding-left: 3.28125rem;\n  padding-right: 3.28125rem;\n  padding-top: 2.8125rem;\n}\n.submitbtn {\n  background-color: #1998df;\n  border-radius: 2rem;\n}\n",""])},poRS:function(t,e,n){"use strict";function a(t){n("7bwy")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("g5qz"),s=n("f1Vj"),r=n.n(s),i=n("NYxO"),c=n("pDNl"),l=n("2sLL"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},d=(c.a,l.a,u({},Object(i.b)(["device"])),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}),p={components:{XInput:c.a,XButton:l.a},computed:d({},Object(i.b)(["device"])),data:function(){return{msg:"Hello World!",curPass:"",newPass:"",confiPass:""}},methods:{CheckPassWord:function(t){var e=t;return!(null==e||e.length<6||e.length>18)&&(!!new RegExp(/^[0-9A-Za-z]+$/).test(e)&&!!new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/).test(e))},CheckPassWord1:function(t){var e=t;return!(null==e||e.length<8)&&(!!new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/).test(e)||void 0)},showLoading:function(){this.$vux.loading.show({text:"Loading"})},hideLoading:function(){this.$vux.loading.hide()},remindToast:function(t,e){this.$vux.toast.show({type:t,text:e,time:2e3})},changePws:function(){this.showLoading();var t=this;o.a.modifyPassword(t.curPass).then(function(e){var n=e;"0"!==n.ret&&0!==n.ret||(t.hideLoading(),t.remindToast("success",n.msg),setTimeout(function(){r.a.clear("userInfo"),t.$router.push({path:"/login"})},2e3))}).catch(function(t){alert(t)})}}},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[n("x-header",{staticClass:"allHeader",attrs:{slot:"header"},slot:"header"},[t._v("修改密码")]),t._v(" "),n("group",[n("x-input",{attrs:{type:"password",title:"当前密码",placeholder:"请输入当前的登录密码",novalidate:"","icon-type":t.iconType,"show-clear":!1,"placeholder-align":"right"},on:{"on-blur":t.onBlur},model:{value:t.curPass,callback:function(e){t.curPass=e},expression:"curPass"}}),t._v(" "),n("x-input",{attrs:{type:"password",title:"新密码密码",placeholder:"请输入6-18位字母或数字作为登录密码",novalidate:"","icon-type":t.iconType,"show-clear":!1,"placeholder-align":"right"},on:{"on-blur":t.onBlur},model:{value:t.newPass,callback:function(e){t.newPass=e},expression:"newPass"}}),t._v(" "),n("x-input",{attrs:{type:"password",title:"确定新密码",placeholder:"再次输入新密码",novalidate:"","icon-type":t.iconType,"show-clear":!1,"placeholder-align":"right"},on:{"on-blur":t.onBlur},model:{value:t.confiPass,callback:function(e){t.confiPass=e},expression:"confiPass"}})],1),t._v(" "),n("div",{staticClass:"submitBox"},[n("x-button",{staticClass:"submitbtn",attrs:{type:"primary"},nativeOn:{click:function(e){return t.changePws(e)}}},[t._v(" 确  定 ")])],1)],1)],1)},f=[],g={render:h,staticRenderFns:f},v=g,b=n("VU/8"),w=a,x=b(p,v,!1,w,null,null);e.default=x.exports}});