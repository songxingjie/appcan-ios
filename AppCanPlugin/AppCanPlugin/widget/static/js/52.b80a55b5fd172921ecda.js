webpackJsonp([52],{NazN:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("yrgR"),n=s("NYxO"),l=s("162o"),o=s("g5qz"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},r=(a.a,i({},Object(n.b)("login",["userId"]),Object(n.b)("selectPerson",["personList"])),i({},Object(n.c)("selectPerson",["set_personList"]),{selectPerson:function(){this.$router.push({name:"selectPerson"})},showSelPerson:function(){var e=this.personList,t=[];for(var s in e)t.push({id:e[s].id,name:e[s].name,desc:e[s].deptName});this.pnum=t.length,this.showPlist=t},delPerson:function(e){var t=this,s=this.personList;delete s[e.id],t.personList=s,Object(l.setTimeout)(function(){t.showSelPerson(),t.set_personList(s)},300)},addNewLabel:function(){var e=this;if(!e.labelName)return void e.$vux.toast.show({text:"请输入标签名",type:"text"});var t=e.showPlist.map(function(e,t){return e.id}),s={labelName:e.labelName,userId:e.userId.userId,labelUserId:t};e.selectLabelId&&(s.id=e.selectLabelId),o.a.postRequest(s,"savelabel").then(function(t){e.$vux.loading.hide(),e.$router.go(-1)}).catch(function(t){e.$vux.loading.hide(),console.log(t)})},getLabelById:function(){var e=this,t=e.queryParams;t.labelId=e.selectLabelId,o.a.postRequest(t,"labelList").then(function(t){e.$vux.loading.hide();var s=t.data.labelUserList;s.length>0&&e.userToSave(s)}).catch(function(t){e.$vux.loading.hide(),console.log(t)})},userToSave:function(e){for(var t={},s=0;s<e.length;s++){var a={name:e[s].labelUserName,id:e[s].labelUserId,deptName:e[s].deptName.join(">"),isSelect:!0};t[e[s].labelUserId]=a}this.set_personList(t),this.showSelPerson()},init:function(){this.selectLabelId&&this.getLabelById()}}),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}),c={components:{person:a.a},data:function(){return{queryParams:{pageSize:20,pageNo:1},labelName:"",pnum:0,showPlist:[]}},watch:{labelName:function(e,t){sessionStorage.setItem("selLabelTitle",e)}},computed:r({},Object(n.b)("login",["userId"]),Object(n.b)("selectPerson",["personList"])),methods:r({},Object(n.c)("selectPerson",["set_personList"]),{selectPerson:function(){this.$router.push({name:"selectPerson"})},showSelPerson:function(){var e=this.personList,t=[];for(var s in e)t.push({id:e[s].id,name:e[s].name,desc:e[s].deptName});this.pnum=t.length,this.showPlist=t},delPerson:function(e){var t=this,s=this.personList;delete s[e.id],t.personList=s,Object(l.setTimeout)(function(){t.showSelPerson(),t.set_personList(s)},300)},addNewLabel:function(){var e=this;if(!e.labelName)return void e.$vux.toast.show({text:"请输入标签名",type:"text"});var t=e.showPlist.map(function(e,t){return e.id}),s={labelName:e.labelName,userId:e.userId.userId,labelUserId:t};e.selectLabelId&&(s.id=e.selectLabelId),o.a.postRequest(s,"savelabel").then(function(t){e.$vux.loading.hide(),e.$router.go(-1)}).catch(function(t){e.$vux.loading.hide(),console.log(t)})},getLabelById:function(){var e=this,t=e.queryParams;t.labelId=e.selectLabelId,o.a.postRequest(t,"labelList").then(function(t){e.$vux.loading.hide();var s=t.data.labelUserList;s.length>0&&e.userToSave(s)}).catch(function(t){e.$vux.loading.hide(),console.log(t)})},userToSave:function(e){for(var t={},s=0;s<e.length;s++){var a={name:e[s].labelUserName,id:e[s].labelUserId,deptName:e[s].deptName.join(">"),isSelect:!0};t[e[s].labelUserId]=a}this.set_personList(t),this.showSelPerson()},init:function(){this.selectLabelId&&this.getLabelById()}}),mounted:function(){},beforeRouteEnter:function(e,t,s){var a=t.name;s(function(e){e.labelName=sessionStorage.getItem("selLabelTitle")||"",e.selectLabelId=sessionStorage.getItem("selLabelId"),"labelList"===a&&e.init(),e.showSelPerson()})}},d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{height:"100%"}},[s("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[s("x-header",{staticClass:"allHeader",attrs:{slot:"header"},slot:"header"},[e._v("新建标签\n      "),s("span",{attrs:{slot:"right"},on:{click:e.addNewLabel},slot:"right"},[e._v("完成")])]),e._v(" "),s("div",{staticClass:"font24 fc999 patitle"},[e._v("标签名字")]),e._v(" "),s("group",{attrs:{gutter:"0"}},[s("x-input",{staticClass:"font30",attrs:{placeholder:"未设置标签名字"},model:{value:e.labelName,callback:function(t){e.labelName=t},expression:"labelName"}})],1),e._v(" "),s("div",{staticClass:"font24 fc999 patitle"},[e._v("标签成员（"+e._s(e.pnum)+"）")]),e._v(" "),s("div",[s("group",{attrs:{gutter:"0"}},[s("cell",{staticClass:"fc1c9ce3",nativeOn:{click:function(t){return e.selectPerson(t)}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("添加成员")]),e._v(" "),s("span",{staticClass:"pr22",attrs:{slot:"icon"},slot:"icon"},[s("i",{staticClass:"iconfont fontSize"},[e._v("")])])])],1),e._v(" "),s("person",{staticClass:"noBorder",attrs:{list:e.showPlist,type:"addlabel"},on:{delperson:e.delPerson}})],1)],1)],1)},u=[],h={render:d,staticRenderFns:u},b=h,p=s("VU/8"),v=p(c,b,!1,null,null,null);t.default=v.exports}});