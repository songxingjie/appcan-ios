webpackJsonp([19],{BmE2:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.searchWrap {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.inputWrap {\n  background-color: #ffffff;\n  width: 100%;\n  border-radius: 0.3rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  /* padding-top: 0.6rem;\n  padding-bottom: 0.6rem; */\n  box-sizing: border-box;\n}\n.inputWrap input {\n  background-color: #f4f6f7;\n  width: 80%;\n  padding-left: 0.3rem;\n  padding-right: 0.8rem;\n  height: 2rem;\n  border: none;\n}\n.myApp {\n  background-color: #ffffff;\n}\n.searchImg img {\n  width: 1.05rem;\n  height: 1.05rem;\n}\n.searchNotice {\n  font-size: 0.8125rem;\n  color: #c0c0c0;\n}\n.myIcon {\n  color: #308cf5;\n  font-size: 1.3rem;\n}\n.myAppword {\n  font-size: 1rem;\n  color: #1c2437;\n}\n.weui-grids .weui-grid {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.appName {\n  text-align: center;\n  margin-top: 0.625rem;\n  color: #49505f;\n  font-size: 0.875rem;\n}\n.delete {\n  width: 1.0625rem;\n  height: 1.0625rem;\n  display: block;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/* .weui-tab__panel {\n  padding-bottom: 0 !important;\n} */\n.tabcontent {\n  height: 12rem;\n  width: 100%;\n  background-color: #ffffff;\n}\n.noDataBox {\n  text-align: center;\n  padding-top: 1rem;\n}\n.demo1-item {\n  border: 1px solid #ececec;\n  padding: 5px 15px;\n}\n.demo1-item-selected {\n  border: 1px solid green;\n}\n.w25 {\n  /* width: 50px; */\n  margin-right: 0.5rem;\n  margin-top: 0.5rem;\n}\n",""])},SowH:function(n,t,e){var i=e("BmE2");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("06a533a1",i,!0,{})},thau:function(n,t,e){"use strict";function i(n){e("SowH")}Object.defineProperty(t,"__esModule",{value:!0});var o=e("NYxO"),r=e("tXUq"),a=e("yrgR"),c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},s=(r.a,a.a,c({},Object(o.b)(["device"])),Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}),p={components:{orzname:r.a,person:a.a},data:function(){return{qlist:[{name:"北京电控"},{name:"北京电控"},{name:"北京电控"}],person:[{img:"http://www.pajktj.com/UploadFiles/AdminUpload/2014-05-14-497935bc09-0b52-4ee3-8066-1c856196b082.png",name:"张三",unit:"公司>部门"},{img:"http://www.pajktj.com/UploadFiles/AdminUpload/2014-05-14-497935bc09-0b52-4ee3-8066-1c856196b082.png",name:"张三",unit:"公司>部门"},{img:"http://www.pajktj.com/UploadFiles/AdminUpload/2014-05-14-497935bc09-0b52-4ee3-8066-1c856196b082.png",name:"张三",unit:"公司>部门"}],glist:[{name:"姓名一二三"},{name:"组名字"},{name:"好友聊天群"}]}},computed:s({},Object(o.b)(["device"])),methods:{clearSearch:function(){this.$router.go(-1)}}},d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticStyle:{height:"100%"}},[e("view-box",{ref:"viewBox"},[e("div",[e("div",{staticClass:"inputWrap"},[e("div",{staticClass:"searchNotice",staticStyle:{padding:".5rem 0"}},[e("span",{staticClass:"uc-a",staticStyle:{"background-color":"#f4f6f7",padding:"0.5rem 0"}},[e("span",{staticStyle:{position:"relative",top:"0.15rem",left:".5rem"}},[e("i",{staticClass:"icon iconfont icon-color",attrs:{slot:"icon"},slot:"icon"},[n._v("")])]),n._v(" "),e("input",{staticClass:"boxsize font24",attrs:{type:"text",placeholder:"请输入关键词搜索"}})]),n._v(" "),e("span",{staticStyle:{position:"relative",right:"-.5rem",color:"#259bff"},on:{click:n.clearSearch}},[n._v("取消")])])]),n._v(" "),e("div",[e("div",{staticClass:"font24 fc999 patitle"},[n._v("单位")]),n._v(" "),e("orzname",{attrs:{list:n.qlist,type:"1"}})],1),n._v(" "),e("div",[e("div",{staticClass:"font24 fc999 patitle"},[n._v("联系人")]),n._v(" "),e("person",{attrs:{list:n.person,type:n.collectionPerson}})],1),n._v(" "),e("div",[e("div",{staticClass:"font24 fc999 patitle"},[n._v("群组")]),n._v(" "),e("orzname",{attrs:{list:n.glist,type:"3"}})],1)])])],1)},l=[],m={render:d,staticRenderFns:l},f=m,g=e("VU/8"),b=i,u=g(p,f,!1,b,null,null);t.default=u.exports}});