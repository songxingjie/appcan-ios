webpackJsonp([25],{"72Iz":function(t,e,n){var r=n("ybnL");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("264b96f4",r,!0,{})},"9h4F":function(t,e,n){"use strict";function r(t){n("72Iz")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("g5qz"),a=n("NYxO"),i=n("f1Vj"),s=n.n(i),l=n("nFMJ"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=(d({},Object(a.b)(["device"])),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),c={data:function(){return{dataList:[],msg:"Hello World!",image:{default:n("QinQ")},image1:{default:n("GDhk")},image2:{default:n("yNNo")},image3:{default:n("FF/J")},page:"1",size:"10",refresh:!1,infinite:!0,listItem:[],titleName:""}},computed:f({},Object(a.b)(["device"])),mounted:function(){this.show()},methods:{scrollRefresh:function(){console.log("下拉刷新"),this.page="1",this.refresh=!0,this.dataList.length=0,this.show(),this.$refs.myscroller.finishPullToRefresh()},scrollInfinite:function(){var t=this;if("1"===this.page)return void setTimeout(function(){t.$refs.myscroller.finishInfinite(2)});this.show()},showLoading:function(){this.$vux.loading.show({text:"Loading"})},hideLoading:function(){this.$vux.loading.hide()},remindToast:function(t,e){this.$vux.toast.show({type:t,text:e,time:2e3})},show:function(){this.titleName=this.$route.params.title;var t=this,e=l.a.crypt(JSON.parse(s.a.val("userInfo")).username)+"",n={user_id:e,type:t.$route.params.type,page:t.page,pageNum:t.size};o.a.noticeList(n).then(function(e){if("0"===e.status){"1"===t.page&&(t.$refs.myscroller.finishPullToRefresh(),t.$refs.myscroller.resize(),t.dataList=[]),t.listItem=e.data;for(var n=t.listItem.length,r=0;r<n;r++)t.dataList.push(t.listItem[r]);if(!e.data.length)return t.$refs.myscroller.finishInfinite(2);t.page++,t.$refs.myscroller.finishInfinite(0),t.$refs.myscroller.resize()}}).catch(function(t){alert(t)})},onShow:function(){console.log("on show")},onHide:function(){console.log("on hide")},open:function(){alert(uexWidget.startWidget),uexWidget.startWidget("test2","10","","","250")}}},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mes_box",staticStyle:{height:"100%"}},[n("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[n("x-header",{staticClass:"allHeader",attrs:{slot:"header"},slot:"header"},[t._v("\n      "+t._s(t.titleName)+"\n    ")]),t._v(" "),n("scroller",{ref:"myscroller",attrs:{"on-refresh":t.scrollRefresh,"on-infinite":t.scrollInfinite}},[n("div",{staticClass:"content",staticStyle:{"margin-top":"64px"}},[n("div",{attrs:{id:"list"}},t._l(t.dataList,function(e,r){return n("div",{key:r,staticClass:"ub ub-pc ub-ac c-ffP",on:{click:function(e){t.open()}}},[n("div",{staticClass:"ub ub-ac ub-pc c-ff",staticStyle:{"min-width":"3rem","min-height":"3rem","border-radius":".5rem",position:"relative","margin-left":".9375rem"}},[n("img",{staticStyle:{display:"block"},attrs:{slot:"icon",width:"20",src:t.image.default},slot:"icon"})]),t._v(" "),n("div",{staticClass:"ub ub-f1 b-b1 umar-9 ub-ver"},[n("div",{staticClass:"ub ub-pj"},[n("div",{},[n("div",{staticClass:"ulev-1"},[t._v("\n                    "+t._s(e.title)+"\n                  ")])]),t._v(" "),n("div",{staticClass:"right c-gra ub ub-ac ub-pc ub-ver ulev-2"},[n("div",{},[t._v(t._s(e.pushDate))])])]),t._v(" "),n("div",{staticClass:"ub ub-pj ub-ver"},[n("div",{staticClass:"ulev-2 c-gra"},[t._v("\n                  "+t._s(e.body)+"\n                ")]),t._v(" "),n("div",{staticClass:"ulev-2 c-gra"},[t._v("\n                  "+t._s(e.type)+"\n                ")])])])])}))])])],1)],1)},u=[],h={render:p,staticRenderFns:u},b=h,v=n("VU/8"),g=r,m=v(c,b,!1,g,"data-v-61ade46e",null);e.default=m.exports},ybnL:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.popover-demo-content[data-v-61ade46e] {\n  padding-top: 5px;\n}\n.arrow_box[data-v-61ade46e] {\n  position: relative;\n  border: 1px solid #c2e1f5;\n  padding: 10px;\n  width: 200px;\n  height: 100px;\n  border-radius: 6px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  margin: 50px;\n  float: left;\n}\n.arrow_box[data-v-61ade46e]:before,\n.arrow_box[data-v-61ade46e]:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n  pointer-events: none;\n  content: '';\n  border-color: rgba(136, 183, 213, 0);\n}\n.arrow_box.down[data-v-61ade46e]:before {\n  border-bottom-color: #c2e1f5;\n  border-width: 12px;\n  left: 49%;\n  margin-left: -10px;\n  bottom: 100%;\n}\n.arrow_box.down[data-v-61ade46e]:after {\n  border-bottom-color: #fff;\n  border-width: 10px;\n  left: 50%;\n  margin-left: -10px;\n  bottom: 100%;\n}\n.arrow_box.up[data-v-61ade46e]:before {\n  border-top-color: #c2e1f5;\n  border-width: 12px;\n  left: 49%;\n  margin-left: -10px;\n  top: 100%;\n}\n.arrow_box.up[data-v-61ade46e]:after {\n  border-top-color: #fff;\n  border-width: 10px;\n  left: 50%;\n  margin-left: -10px;\n  top: 100%;\n}\n.arrow_box.left[data-v-61ade46e]:before {\n  border-left-color: #c2e1f5;\n  border-width: 13px;\n  top: 38%;\n  left: 100%;\n}\n.arrow_box.left[data-v-61ade46e]:after {\n  border-left-color: #fff;\n  border-width: 10px;\n  top: 41%;\n  left: 100%;\n}\n.arrow_box.right[data-v-61ade46e]:before {\n  border-right-color: #c2e1f5;\n  border-width: 13px;\n  top: 38%;\n  right: 100%;\n}\n.arrow_box.right[data-v-61ade46e]:after {\n  border-right-color: #fff;\n  border-width: 10px;\n  top: 41%;\n  right: 100%;\n}\n.c-gra[data-v-61ade46e] {\n  color: #c0c0c0;\n}\n",""])}});