webpackJsonp([10],{"5Qj+":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.informateBox[data-v-60cd5bec] {\n  border-bottom: 1px solid #e9eaec;\n  background-color: #ffffff;\n}\n.columnBox[data-v-60cd5bec] {\n  background-color: #ffffff;\n}\n.column li[data-v-60cd5bec] {\n  float: left;\n  list-style: none;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.9375rem;\n}\n.column li.selectLi[data-v-60cd5bec] {\n  color: #1998df;\n  border-bottom: 2px solid #1998df;\n}\n.moreColumn[data-v-60cd5bec] {\n  width: 0.9375rem;\n  height: 0.8125rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.informateBox[data-v-60cd5bec] {\n  padding: 0.625rem 0.9375rem;\n}\n.msgImg[data-v-60cd5bec] {\n  width: 5.625rem;\n  height: 4.375rem;\n  margin-right: 0.625rem;\n}\n.title[data-v-60cd5bec] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-break: break-all;\n  font-size: 1rem;\n  color: #1c2437;\n}\n.typeBox[data-v-60cd5bec] {\n  font-size: 0.8125rem;\n  color: #c0c0c0;\n  margin-top: 0.625rem;\n}\n.wrapper[data-v-60cd5bec] {\n  position: relative;\n  width: calc(90%);\n  overflow: hidden;\n  text-align: center;\n}\n.content[data-v-60cd5bec] {\n  display: -webkit-box;\n  width: auto;\n}\n.content li[data-v-60cd5bec] {\n  list-style: none;\n  white-space: normal;\n  word-break: break-all;\n  overflow: hidden;\n}\n",""])},"W5+0":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAM9JREFUeNrslk0KwjAQhadFBY/g9dx7CleKVEXUiIJ4Mq+g9bda0DdlFiWQ1RQDMg++0qSvPGbzkqTnjiMiGoAuKMBW1r7WoA86pNMbHBIEv/DSrn0ovXX9hxY1ozLFgyc+y8YFzAPmFbg1EPoAjiemGEopkizYgv8zeCzF8ZGCyALeJbiLT8OT65cLpPD692eVOQNX2eCJFgHzRg4Rrfhs2FtlWrAFW7AqeAhO0qM5mAS8mTSctqurdox6vZ3KlZOki13AvJOe1aq60H8FGABaa1uo/a533AAAAABJRU5ErkJggg=="},awUy:function(t,e,n){var i=n("5Qj+");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("fd1c6b16",i,!0,{})},cmYJ:function(t,e,n){t.exports=n.p+"static/img/noImg.4c0214b.png"},qE6d:function(t,e,n){"use strict";function i(t){n("awUy")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("bh5B"),o=n("g5qz"),a=n("GQaK"),r=n("NYxO"),c=n("f1Vj"),l=n.n(c),u=n("8pLc"),d=n("nFMJ"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},f=(u.a,s.a,h({},Object(r.b)(["device"]),{scrollElement:function(){return this.$refs.scroll},forma:function(t){return t.split(".")[0]}}),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}),m={data:function(){return{msg:"Hello World!",newList:[],contentList:[],ID:"collection",isNoData:!1,userName:"",startY:0,pullDownRefreshObj:{threshold:50,stop:40,txt:"刷新成功"},pullUpLoadObj:{threshold:0,txt:{more:"",noMore:"无更多数据"}},queryParams:{page:1,num:20},isHasMore:!0}},components:{noData:u.a,scroll:s.a},watch:{},activated:function(){this.getList("collection")},computed:f({},Object(r.b)(["device"]),{scrollElement:function(){return this.$refs.scroll},forma:function(t){return t.split(".")[0]}}),beforeRouteLeave:function(t,e,n){var i=this.scroll.x;null===i&&(i=0),sessionStorage.setItem("changeY",i),n()},mounted:function(){},created:function(){this.username=JSON.parse(l.a.val("userInfo")).username,this.getTitlelist()},methods:{refresh:function(){this.queryParams={page:1,num:20},this.isHasMore=!0,this.pullDownRefreshObj={threshold:50,stop:40,txt:"刷新成功"},this.pullUpLoadObj={threshold:0,txt:{more:"",noMore:"无更多数据"}},this.getList(this.ID)},isChild:function(t){for(var e=0;e<t.length;e++)t[e].children&&this.isChild(t[e].children),this.ID+=","+t[e].CODE},imgSrc:function(t){return""!==t.CONTENT&&t.CONTENT.replace(/\r|\n/g,"").match(/<img.*?src=['|"](.*?)['|"].*?>/)[1]},isImg:function(t){return""!==t.CONTENT&&null!==t.CONTENT.replace(/\r|\n/g,"").match(/<img.*?src=['|"](.*?)['|"].*?>/)&&""!==t.CONTENT.replace(/\r|\n/g,"").match(/<img.*?src=['|"](.*?)['|"].*?>/)[1]},openDetail:function(t){sessionStorage.setItem("mationDetail",JSON.stringify(t)),this.$router.push({path:"/informationDetail"})},showLoading:function(){this.$vux.loading.show({text:"加载中"})},hideLoading:function(){this.$vux.loading.hide()},remindToast:function(t,e){this.$vux.toast.show({type:"text",text:e,time:2e3})},onButtonClick:function(t,e){"fav"===t&&this.collection(e),"delete"===t&&this.delFav(e)},delFav:function(t){this.showLoading();var e=this;o.a.delCollection(t).then(function(t){var n=t;"0"!==n.status&&0!==n.status||(e.hideLoading(),e.remindToast("success",n.data),setTimeout(function(){e.getList(e.ID)},2e3))}).catch(function(t){alert(t)})},collection:function(t){this.showLoading();var e=this;o.a.getCollection(t).then(function(t){var n=t;"0"!==n.status&&0!==n.status||(e.hideLoading(),e.remindToast("success",n.data),setTimeout(function(){e.getList(e.ID)},2e3))}).catch(function(t){alert(t)})},getList:function(t){var e=this;if(!this.isHasMore)return void this.$nextTick(function(t){e.$refs.scroll.forceUpdate()});this.showLoading(),this.contentList=[],this.ID=t;var n=this,i=d.a.crypt(JSON.parse(l.a.val("userInfo")).username)+"",s={};s={user_id:i,columnid:n.ID,page:n.queryParams.page,num:n.queryParams.num},o.a.getArticleList(s).then(function(t){var e=t;"0"!==e.status&&0!==e.status||(n.hideLoading(),e.data.length>0?n.isNoData=!1:n.isNoData=!0,1===n.queryParams.page&&e.data.length<20?n.isHasMore=!1:n.isHasMore=e.data.length>0,n.isHasMore&&n.queryParams.page++,n.contentList=n.contentList.concat(e.data),n.$nextTick(function(t){n.$refs.scroll.forceUpdate()}))}).catch(function(t){alert(t)})},getTitlelist:function(){var t=this;if(this.userName=JSON.parse(l.a.val("userInfo")).username,l.a.val("myInfo"+this.userName))return this.newList=l.a.val("myInfo"+this.userName)?JSON.parse(l.a.val("myInfo"+this.userName)):[],void this.$nextTick(function(){t.calcWidth()});var e=this;o.a.getNewlist().then(function(t){var n=t;"0"===n.status&&(e.newList=n.data.columnList,l.a.val("myInfo"+e.userName,e.newList),e.$nextTick(function(){e.calcWidth()}))}).catch(function(t){alert(t)})},open:function(){this.$router.push({path:"/editInformation"})},change:function(t,e){for(var n=document.getElementsByTagName("li"),i=0;i<n.length;i++)n[i].className="ub";t.target.className="ub selectLi",this.ID=e.CODE,this.isHasMore=!0,this.queryParams={page:1,num:20},"collection"===e?this.getList(e):e.children?(this.isChild(e.children),this.getList(this.ID)):this.getList(e.CODE)},initScroll:function(){var t=this;this.$nextTick(function(){t.scroll?(t.scroll.scrollTo(sessionStorage.getItem("changeY"),0),t.scroll.refresh()):(t.scroll=new a.a(t.$refs.news,{startX:0,click:!0,scrollX:!0,scrollY:!1,eventPassthrough:"vertical"}),t.scroll.scrollTo(sessionStorage.getItem("changeY"),0),t.scroll.refresh())})},calcWidth:function(){for(var t=0,e=this.$refs.contents.children,n=0;n<e.length;n++)t+=e[n].offsetWidth;this.$refs.contents.style.width=t+"px",this.initScroll()},_getStyle:function(t,e){return t.currentStyle?t.currentStyle[e]:window.getComputedStyle(t,null)[e]}}},g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%","background-color":"#fff"}},[i("view-box",{ref:"viewBox",attrs:{"body-padding-top":"88px"}},[i("div",{staticStyle:{width:"100%",position:"absolute",top:"0",right:"0","z-index":"10000","border-bottom":"1px solid #e9eaec"},attrs:{slot:"header"},slot:"header"},[i("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        资讯\n        "),i("img",{staticStyle:{display:"block"},attrs:{slot:"left",width:"30",src:n("YDGL")},slot:"left"})]),t._v(" "),i("div",{staticClass:"ub ub-ac columnBox"},[i("div",{ref:"news",staticClass:"wrapper"},[i("ul",{ref:"contents",staticClass:"column ub ub-ac ub-f1 content",attrs:{id:"newUl"}},[i("li",{staticClass:"ub selectLi",attrs:{id:"new"},on:{click:function(e){t.change(e,"collection")}}},[t._v("收藏")]),t._v(" "),t._l(t.newList,function(e,n){return i("li",{key:n,staticClass:"ub newLi",on:{click:function(n){t.change(n,e)}}},[t._v(t._s(e.NAME))])})],2)]),t._v(" "),i("img",{staticClass:"moreColumn",staticStyle:{position:"absolute",top:"15px",right:"0"},attrs:{src:n("W5+0"),alt:""},on:{click:function(e){t.open()}}})])],1),t._v(" "),i("scroll",{ref:"scroll",staticStyle:{background:"none"},attrs:{scrollbar:!1,pullDownRefresh:t.pullDownRefreshObj,pullUpLoad:t.pullUpLoadObj,startY:t.startY},on:{pullingDown:t.refresh,pullingUp:t.getList}},[i("div",{staticClass:"contentNew"},[i("swipeout",t._l(t.contentList,function(e,s){return i("swipeout-item",{key:s,attrs:{"transition-mode":"follow"},on:{"on-close":function(e){t.handleEvents("on-close")},"on-open":function(e){t.handleEvents("on-open")}}},[i("div",{attrs:{slot:"right-menu"},slot:"right-menu"},["F"===e.STATUS?i("swipeout-button",{attrs:{type:"primary"},nativeOn:{click:function(n){t.onButtonClick("fav",e.CODE)}}},[t._v("收藏")]):i("swipeout-button",{attrs:{type:"warn"},nativeOn:{click:function(n){t.onButtonClick("delete",e.CODE)}}},[t._v("取消收藏")])],1),t._v(" "),i("div",{staticClass:"demo-content vux-1px-t",attrs:{slot:"content"},slot:"content"},[!0===t.isImg(e)?i("div",{staticClass:"ub informateBox ub-pc ub-ac",on:{click:function(n){t.openDetail(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:t.imgSrc(e),error:n("cmYJ"),loading:n("cmYJ")},expression:"{src:imgSrc(item),error:require('@/assets/image/noImg.png'),loading:require('@/assets/image/noImg.png')}"}],staticClass:"ub msgImg",attrs:{alt:""}}),t._v(" "),i("div",{staticClass:"ub-f1 ub ub-ver"},[i("div",{staticClass:"title"},[t._v(t._s(e.TITLE))]),t._v(" "),i("div",{staticClass:"ub typeBox ub-ver"},[i("div",{staticClass:"ub"},[t._v(t._s(e.SRC))]),t._v(" "),i("div",{staticClass:"ub"},[t._v(t._s(e.PUBTIME))])])])]):i("div",{staticClass:"ub informateBox ub-ver",on:{click:function(n){t.openDetail(e)}}},[i("div",{staticClass:"title ub"},[t._v(t._s(e.TITLE))]),t._v(" "),i("div",{staticClass:"ub ub-ac typeBox"},[i("div",{staticClass:"ub ub-f1"},[t._v(t._s(e.SRC))]),t._v(" "),i("div",{staticClass:"ub"},[t._v(t._s(e.PUBTIME))])])])])])})),t._v(" "),i("noData",{directives:[{name:"show",rawName:"v-show",value:t.isNoData,expression:"isNoData"}],attrs:{text:"暂无数据"}})],1)])],1)],1)},v=[],p={render:g,staticRenderFns:v},b=p,w=n("VU/8"),x=i,y=w(m,b,!1,x,"data-v-60cd5bec",null);e.default=y.exports}});