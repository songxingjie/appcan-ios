webpackJsonp([12],{"+TiH":function(t,e,a){t.exports=a.p+"static/img/headerImg.e933f9c.png"},"8vBX":function(t,e,a){"use strict";function i(t){a("C/Y7")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("NYxO"),o=a("f1Vj"),s=a.n(o),l=a("g5qz"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},c=(r({},Object(n.b)(["device"]),{avatar:function(){return this.imagePath}}),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}),u={data:function(){return{menuShow:!1,menus1:{menu1:"拍照",menu2:"从相册选择"},imagePath:"",chooseData:{min:1,max:1,style:1},cropperData:{src:"",mode:1},showLoading:!1,textLoading:"上传中...",defaultIcon:a("+TiH"),images:"",orgDetail:"",detail:[]}},mounted:function(){this.getUserId()},computed:c({},Object(n.b)(["device"]),{avatar:function(){return this.imagePath}}),methods:{showLoading:function(){this.$vux.loading.show({text:"Loading"})},hideLoading:function(){this.$vux.loading.hide()},remindToast:function(t,e){this.$vux.toast.show({type:t,text:e,time:2e3})},getUserId:function(){this.detail=JSON.parse(sessionStorage.getItem("myDetail")).data;for(var t in this.detail.orgDetail)for(var e in this.detail.orgDetail[t])this.orgDetail=this.detail.orgDetail[t][e];this.images=l.a.api_url.demoUrl+"/uploads/"+this.detail.avatorLoc},itemClick:function(){this.menuShow=!0},selectAction:function(t,e){var a=this;"menu1"===t?setTimeout(function(){a.takePicture()},300):"menu2"===t&&setTimeout(function(){a.chooseImage()},300)},takePicture:function(){var t=this;t.imagePath="",s.a.takePicture(0,50,function(e){t.imagePath=e,t.openCropper()})},chooseImage:function(){var t=this;t.imagePath="",s.a.chooseImage(t.chooseData,function(e){e.error||(t.imagePath=e.images[0],t.openCropper())})},openCropper:function(){var t=this;t.cropperData.src=t.imagePath,s.a.openCropper(t.cropperData,function(e){e.error||t.uploadImg(e.path)})},uploadImg:function(t){var e=this;e.showLoading=!0,l.a.modifymAvatar(t,function(t){100===t?e.showLoading=!1:e.textLoading=t+" %"}).then(function(t){e.showLoading=!1;var a=t.iconLoc;e.images=a,e.$vux.toast.show({text:"上传成功",onShow:function(){console.log("Plugin: I'm showing")},onHide:function(){console.log("Plugin: I'm hiding")}})})}}},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[a("x-header",{staticClass:"allHeader",attrs:{slot:"header","left-options":{showBack:!0}},slot:"header"},[t._v("个人资料")]),t._v(" "),a("group",[a("div",{staticClass:"weui-cell ub ub-pc vux-tap-active weui-cell_access",on:{click:function(e){t.itemClick()}}},[a("div",{staticClass:"weui-cell__hd"}),t._v(" "),a("div",{staticClass:"vux-cell-bd vux-cell-primary"},[a("p",[a("label",{staticClass:"vux-label"},[t._v("头像")])]),t._v(" "),a("span",{staticClass:"vux-label-desc"})]),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[a("img",{staticStyle:{display:"block","margin-right":".8rem",width:"4rem",height:"4rem","border-radius":"50%"},attrs:{slot:"right",src:t.images},slot:"right"})])]),t._v(" "),a("cell",{staticClass:"ub ub-pc",attrs:{title:"姓名",link:"",value:t.detail.name}}),t._v(" "),a("cell",{staticClass:"ub ub-pc",attrs:{title:"性别",link:"",value:t.detail.sex}}),t._v(" "),a("cell",{staticClass:"ub ub-pc",attrs:{title:"手机",link:"",value:t.detail.mobileNo}}),t._v(" "),a("cell",{staticClass:"ub ub-pc",attrs:{title:"固话",link:"",value:t.detail.officePhone}})],1),t._v(" "),a("group",[a("cell",{staticClass:"ub ub-pc",attrs:{title:"部门",link:"",value:t.orgDetail}}),t._v(" "),a("cell",{staticClass:"ub ub-pc",attrs:{title:"房间",link:"",value:t.detail.roomNum}}),t._v(" "),a("cell",{staticClass:"ub ub-pc",attrs:{title:"岗位",link:"",value:t.detail.jobNameStr}}),t._v(" "),a("cell",{staticClass:"ub ub-pc",attrs:{title:"邮箱",link:"",value:t.detail.email}})],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("loading",{attrs:{show:t.showLoading,text:t.textLoading}})],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("actionsheet",{attrs:{menus:t.menus1,"show-cancel":""},on:{"on-click-menu":t.selectAction},model:{value:t.menuShow,callback:function(e){t.menuShow=e},expression:"menuShow"}})],1)],1)],1)},h=[],m={render:d,staticRenderFns:h},v=m,g=a("VU/8"),p=i,f=g(u,v,!1,p,null,null);e.default=f.exports},"C/Y7":function(t,e,a){var i=a("lG51");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("160987f0",i,!0,{})},lG51:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.headerImg {\n  width: 3.6875rem;\n  height: 3.6875rem;\n  display: block;\n  margin-right: 0.625rem;\n}\n.icon-size {\n  font-size: 2rem;\n}\n.weui-cells .weui-cell {\n  padding: 0.9375rem;\n}\n",""])}});