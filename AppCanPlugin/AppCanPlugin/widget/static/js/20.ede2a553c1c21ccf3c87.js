webpackJsonp([20],{WYEW:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,"\n.allPage[data-v-9e2b1e9e] {\n  width: 100%;\n  height: 100%;\n}\n",""])},Y93j:function(e,n,t){var a=t("WYEW");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("15fc38f9",a,!0,{})},hPBl:function(e,n,t){"use strict";function a(e){t("Y93j")}Object.defineProperty(n,"__esModule",{value:!0});var r=t("f1Vj"),o=t.n(r),i=t("NYxO"),s=t("ABCa"),c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l=(s.a,c({},Object(i.b)(["device"])),Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}),u={components:{XHeader:s.a},name:"webPage",data:function(){return{}},computed:l({},Object(i.b)(["device"])),methods:{init:function(){var e=o.a.val("CARD_PARAM");e=JSON.parse(e);var n=JSON.parse(o.a.val("emmToken")),t=n.info.accessToken,a=n.info.username;"移动OA"===e.name&&(e.url=e.url+"?loginName="+a+"&accessToken="+t),uexWindow.openPopover({name:"webApp",url:e.url,x:0,y:65})}},mounted:function(){this.init()}},f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"background",attrs:{id:"app"}},[t("view-box",{ref:"viewBox"},[t("div",{attrs:{classs:"allPage"}})])],1)},p=[],v={render:f,staticRenderFns:p},d=v,b=t("VU/8"),O=a,h=b(u,d,!1,O,"data-v-9e2b1e9e",null);n.default=h.exports}});