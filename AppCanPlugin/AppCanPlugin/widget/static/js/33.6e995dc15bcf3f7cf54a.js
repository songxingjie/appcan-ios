webpackJsonp([33],{Csoi:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"\n.bookIcon {\n  width: 2.6875rem;\n  height: 2.6875rem;\n  display: block;\n  margin-right: 5px;\n}\n",""])},poq0:function(t,e,s){var i=s("Csoi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("2ca5857e",i,!0,{})},"wM+J":function(t,e,s){"use strict";function i(t){s("poq0")}Object.defineProperty(e,"__esModule",{value:!0});var n=s("bh5B"),a=s("NYxO"),r=s("wKE4"),o=s("LuSs"),l=s("tXUq"),u=s("g5qz"),c=s("8pLc"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},p=(n.a,r.a,o.a,l.a,c.a,d({},Object(a.b)(["device"]),Object(a.b)("login",["userId"]),Object(a.b)("selectPerson",["personList"])),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t}),h={components:{scroll:n.a,searchHeadr:r.a,navigation:o.a,orzname:l.a,noData:c.a},data:function(){return{startY:0,pullDownRefreshObj:{threshold:50,stop:40,txt:"刷新成功"},pullUpLoadObj:{threshold:0,txt:{more:"",noMore:"无更多数据"}},isSelPerson:"",title:"",selUnitId:"",navList:[],qlist:[],ulist:[],plist:[],queryParams:{pageNo:1,pageSize:20},isHasMore:!0}},computed:p({},Object(a.b)(["device"]),Object(a.b)("login",["userId"]),Object(a.b)("selectPerson",["personList"])),methods:{clickNav:function(t,e){if(0===e&&"sg"===t.id)return void this.$router.go(-1);var s=this.navList;this.navList=s.slice(0,e),this.selUnit(t)},navationList:function(){var t={name:sessionStorage.getItem("unitName"),id:sessionStorage.getItem("unitId")};this.navList=this.navList.concat(t)},selUnit:function(t){sessionStorage.setItem("unitName",t.name),sessionStorage.setItem("unitId",t.id),this.navationList(),this.refresh()},refresh:function(){this.queryParams={pageNo:1,pageSize:20},this.isHasMore=!0,this.pullDownRefreshObj={threshold:50,stop:40,txt:"刷新成功"},this.pullUpLoadObj={threshold:0,txt:{more:"",noMore:"无更多数据"}},this.getAllList()},selPerson:function(t){if("true"===this.isSelPerson)return!1;var e={userId:t.id};uexIMEx.startUIUserDetail(JSON.stringify(e))},init:function(){this.navationList(),this.getAllList()},getAllList:function(){var t=this;if(!t.isHasMore)return void t.$nextTick(function(e){t.$refs.scroll.forceUpdate()});t.title=sessionStorage.getItem("unitName");var e=t.queryParams;e.uniqueField=t.userId.userId,e.orgId=sessionStorage.getItem("unitId");var s="other"===t.inOrzType?"unitAndPerson":"myorz";u.a.postRequest(e,s).then(function(s){if(t.$vux.loading.hide(),1===e.pageNo){s.data.userList.length<e.pageSize&&(t.pullDownRefreshObj=null,t.pullUpLoadObj=null),t.qlist=[],t.ulist=[],t.plist=[];var i=s.data.companyList||[];t.qlist=i.map(function(t,e){return{name:t.name,id:t.orgId}});var n=s.data.deptList||[];t.ulist=n.map(function(t,e){return{name:t.name,id:t.orgId}}),t.plist=[]}var a=s.data.userList||[],r=a.map(function(e,s){var i={name:e.name,id:e.uniqueField,deptName:"",isSelect:!0};return"true"===t.isSelPerson&&(i.isSelect=t.isHasSel(e.uniqueField)),i});t.isHasMore=r.length>0,t.isHasMore&&t.queryParams.pageNo++,t.plist=t.plist.concat(r),t.$nextTick(function(e){t.$refs.scroll.forceUpdate()})}).catch(function(e){t.$vux.loading.hide(),console.log(e)})},isHasSel:function(t){return this.personList[t]}},mounted:function(){this.isSelPerson=sessionStorage.getItem("isSelect")},beforeRouteEnter:function(t,e,s){var i=e.name;s(function(t){"cityMangeEnterprises"===i&&(t.navList=[{name:"市管企业",id:"sg"}]),t.inOrzType=sessionStorage.getItem("inOrzType"),t.init()})}},v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"allBody"},[s("view-box",{ref:"viewBox",attrs:{"body-padding-top":"102px","body-padding-bottom":"0"}},[s("div",{staticClass:"allHeader",attrs:{slot:"header"},slot:"header"},[s("x-header",{attrs:{title:t.title}}),t._v(" "),s("searchHeadr")],1),t._v(" "),s("scroll",{directives:[{name:"show",rawName:"v-show",value:!(0==t.qlist.length&&0==t.ulist.length&&0==t.plist.length),expression:"!(qlist.length == 0&&ulist.length == 0&&plist.length == 0)"}],ref:"scroll",staticStyle:{background:"none"},attrs:{scrollbar:!1,pullDownRefresh:t.pullDownRefreshObj,pullUpLoad:t.pullUpLoadObj,startY:t.startY},on:{pullingDown:t.refresh,pullingUp:t.getAllList}},[s("div",[s("navigation",{staticClass:"c-ffP",attrs:{list:t.navList},on:{clickEvent:t.clickNav}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.qlist.length>0,expression:"qlist.length>0"}]},[s("orzname",{attrs:{list:t.qlist,type:"1"},on:{runEvent:t.selUnit}}),t._v(" "),s("div",{staticClass:"mtd75"})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ulist.length>0,expression:"ulist.length>0"}]},[s("orzname",{attrs:{list:t.ulist,type:"2"},on:{runEvent:t.selUnit}}),t._v(" "),s("div",{staticClass:"mtd75"})],1),t._v(" "),s("orzname",{directives:[{name:"show",rawName:"v-show",value:t.plist.length>0,expression:"plist.length>0"}],attrs:{list:t.plist,type:"3"},on:{runEvent:t.selPerson}})],1)]),t._v(" "),s("no-data",{directives:[{name:"show",rawName:"v-show",value:0==t.qlist.length&&0==t.ulist.length&&0==t.plist.length,expression:"qlist.length == 0&&ulist.length == 0&&plist.length == 0"}],attrs:{text:"暂无数据"}})],1)],1)},g=[],m={render:v,staticRenderFns:g},f=m,b=s("VU/8"),w=i,L=b(h,f,!1,w,null,null);e.default=L.exports}});