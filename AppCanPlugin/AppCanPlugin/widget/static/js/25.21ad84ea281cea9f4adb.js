webpackJsonp([25],{FxRt:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.searchWrap {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.inputWrap {\n  background-color: #ffffff;\n  width: 100%;\n  border-radius: 0.3rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  /* padding-top: 0.6rem;\n  padding-bottom: 0.6rem; */\n  box-sizing: border-box;\n}\n.inputWrap input {\n  background-color: #f4f6f7;\n  width: 80%;\n  padding-left: 0.3rem;\n  padding-right: 0.8rem;\n  height: 2rem;\n  border: none;\n}\n.myApp {\n  background-color: #ffffff;\n}\n.searchImg img {\n  width: 1.05rem;\n  height: 1.05rem;\n}\n.searchNotice {\n  font-size: 0.8125rem;\n  color: #c0c0c0;\n}\n.myIcon {\n  color: #308cf5;\n  font-size: 1.3rem;\n}\n.myAppword {\n  font-size: 1rem;\n  color: #1c2437;\n}\n.weui-grids .weui-grid {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.appName {\n  text-align: center;\n  margin-top: 0.625rem;\n  color: #49505f;\n  font-size: 0.875rem;\n}\n.delete {\n  width: 1.0625rem;\n  height: 1.0625rem;\n  display: block;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/* .weui-tab__panel {\n  padding-bottom: 0 !important;\n} */\n.tabcontent {\n  height: 12rem;\n  width: 100%;\n  background-color: #ffffff;\n}\n.noDataBox {\n  text-align: center;\n  padding-top: 1rem;\n}\n.demo1-item {\n  border: 1px solid #ececec;\n  padding: 5px 15px;\n}\n.demo1-item-selected {\n  border: 1px solid green;\n}\n.w25 {\n  /* width: 50px; */\n  margin-right: 0.5rem;\n  margin-top: 0.5rem;\n}\n",""])},VpgM:function(t,e,n){var r=n("FxRt");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("b61b0a44",r,!0,{})},ykHu:function(t,e,n){"use strict";function r(t){n("VpgM")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("NYxO"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=(a({},Object(i.b)(["device"])),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),c={data:function(){return{msg:"Hello World!",searchKey:[{name:"联系人",value:1},{name:"职位",value:2},{name:"组织结构",value:3},{name:"岗位",value:4},{name:"任务消息",value:5},{name:"通知消息",value:6},{name:"业务消息",value:7},{name:"聊天记录",value:8}]}},computed:o({},Object(i.b)(["device"])),methods:{clearSearch:function(){this.$router.go(-1)}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("view-box",{ref:"viewBox",staticClass:"c-ffP",attrs:{"body-padding-top":"0px"}},[n("div",[n("div",{staticClass:"inputWrap"},[n("div",{staticClass:"searchNotice",staticStyle:{padding:".5rem 0"}},[n("span",{staticClass:"uc-a",staticStyle:{"background-color":"#f4f6f7",padding:"0.5rem 0"}},[n("span",{staticStyle:{position:"relative",top:"0.15rem",left:".5rem"}},[n("i",{staticClass:"icon iconfont icon-color",attrs:{slot:"icon"},slot:"icon"},[t._v("")])]),t._v(" "),n("input",{staticClass:"boxsize font24",attrs:{type:"text",placeholder:"请输入关键词搜索"}})]),t._v(" "),n("span",{staticStyle:{position:"relative",right:"-.5rem",color:"#259bff"},on:{click:t.clearSearch}},[t._v("取消")])])]),t._v(" "),n("div",{staticClass:"font24 fc999 patitle"},[t._v("标签名字")]),t._v(" "),n("checker",{staticClass:"font24",staticStyle:{padding:"0 1rem","text-align":"justify","text-justify":"inter-ideograph"},attrs:{"default-item-class":"demo1-item","selected-item-class":"demo1-item-selected"},model:{value:t.demo1,callback:function(e){t.demo1=e},expression:"demo1"}},t._l(t.searchKey,function(e,r){return n("checker-item",{key:r,staticClass:"w25 tac",attrs:{value:e.value}},[t._v(t._s(e.name))])})),t._v(" "),n("div",{staticClass:"font24 fc999 patitle"},[t._v("标签名字")]),t._v(" "),n("div",[n("group",{attrs:{gutter:"0"}},[t._l(5,function(t,e){return n("cell",{key:e,attrs:{title:"历史记录"}},[n("div",[n("icon",{attrs:{type:"clear"}})],1)])}),t._v(" "),n("cell",[n("div",{staticClass:"tac",attrs:{slot:"title"},slot:"title"},[t._v("清空历史记录")])])],2)],1)],1)])],1)},l=[],d={render:s,staticRenderFns:l},p=d,m=n("VU/8"),f=r,g=m(c,p,!1,f,null,null);e.default=g.exports}});