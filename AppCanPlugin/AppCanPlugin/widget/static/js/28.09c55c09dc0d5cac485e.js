webpackJsonp([28],{"2x3b":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"\n.bookIcon {\n  width: 2.6875rem;\n  height: 2.6875rem;\n  display: block;\n  margin-right: 5px;\n}\n",""])},eEqo:function(e,t,a){var n=a("2x3b");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("4d226273",n,!0,{})},wXl8:function(e,t,a){"use strict";function n(e){a("eEqo")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("bh5B"),r=a("NYxO"),s=a("yrgR"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=(s.a,o.a,l({},Object(r.b)(["device"])),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}),c={components:{person:s.a,scroll:o.a},data:function(){return{isNoData:!1,msg:"Hello World!",startY:0,pullDownRefreshObj:{threshold:50,stop:40,txt:"刷新成功"},pullUpLoadObj:{threshold:0,txt:{more:"拖动获取更多数据",noMore:"到底了"}},labelList:[{name:"集团领导"},{name:"办公室"},{name:"北京电控"},{name:"北京电控"},{name:"北京电控"},{name:"办公室"},{name:"北京电控"},{name:"北京电控"},{name:"北京电控"}]}},computed:i({},Object(r.b)(["device"])),methods:{refresh:function(){var e=this;console.log("11111111111111"),this.labelList=[{name:"集团领导"},{name:"办公室"},{name:"北京电控"},{name:"北京电控"},{name:"北京电控"},{name:"办公室"},{name:"北京电控"},{name:"北京电控"},{name:"北京电控"}],this.$nextTick(function(t){e.$refs.scroll.forceUpdate()})},getHealthNumList:function(){var e=this;console.log("2222222222222222"),this.labelList=this.labelList.concat(this.labelList),this.$nextTick(function(t){e.$refs.scroll.forceUpdate()})}}},p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[a("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px","body-padding-bottom":"0"}},[a("x-header",{staticClass:"allHeader",attrs:{slot:"header"},slot:"header"},[e._v("市管企业")]),e._v(" "),a("scroll",{directives:[{name:"show",rawName:"v-show",value:!e.isNoData,expression:"!isNoData"}],ref:"scroll",attrs:{scrollbar:!1,pullDownRefresh:e.pullDownRefreshObj,pullUpLoad:e.pullUpLoadObj,startY:e.startY},on:{pullingDown:e.refresh,pullingUp:e.getHealthNumList}},[a("person",{staticClass:"noBorder",attrs:{list:e.labelList,type:"labelList"}})],1)],1)],1)},h=[],u={render:p,staticRenderFns:h},d=u,f=a("VU/8"),m=n,b=f(c,d,!1,m,null,null);t.default=b.exports}});