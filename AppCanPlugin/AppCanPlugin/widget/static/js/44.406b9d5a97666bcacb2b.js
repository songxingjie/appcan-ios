webpackJsonp([44],{MeJH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";if(!t)return"";"string"==typeof t&&(t=new Date(t.replace(/-/g,"/"))),"number"==typeof t&&(t=new Date(t));var i={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours()%12==0?12:t.getHours()%12,"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()},s={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};/(Y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+s[t.getDay()+""]));for(var a in i)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?i[a]:("00"+i[a]).substr((""+i[a]).length)));return e},a=i("f1Vj"),n=i.n(a),o=i("g5qz"),l={data:function(){return{msg:"Hello World!",image:{default:i("QinQ")},image1:{default:i("GDhk")},image2:{default:i("yNNo")},image3:{default:i("FF/J"),logo:i("YDGL")},isShow:!1,isShow1:!1,isShow2:!1,unhandleVal:"",taskVal:"",noticeVal:""}},activated:function(){this.getHomeInfo()},beforeRouteEnter:function(t,e,i){var s=e.name;console.log("fname===",s),i(function(t){if("selectPerson"===s)if(2===t.$store.state.im.groupIds.ids.length){var e={conversationType:"private",targetId:t.$store.state.im.groupIds.ids[1],conversationTitle:t.$store.state.im.groupIds.name};uexIMEx.startUIConversation(JSON.stringify(e))}else{var i={groupType:"0",groupOriginType:"1",groupName:t.$store.state.im.groupIds.name,groupDesc:t.$store.state.im.groupIds.name,departmentId:"",memberIds:t.$store.state.im.groupIds.ids};uexIMEx.createChatGroup(JSON.stringify(i))}})},watch:{createChatGroup:function(t){if(4e5===t.code){var e=t.content.groupId,i={conversationType:"group",targetId:e,conversationTitle:this.$store.state.im.groupIds.name};uexIMEx.startUIConversation(JSON.stringify(i))}}},computed:{createChatGroup:function(){return this.$store.state.im.createChatGroupResult},netStatus:function(){return this.$store.state.im.netStatus},loginStatus:function(){return this.$store.state.im.loginStatus},recentConversationList:function(){return this.$store.state.im.recentConversationList}},methods:{getHomeInfo:function(){var t=this;o.a.getHomeInfo().then(function(e){"0"!==e.status&&0!==e.status||(t.taskVal=e.data[0],t.noticeVal=e.data[1],t.unhandleVal=e.data[2],"0"!==e.data[0].total&&(t.isShow=!0),"0"!==e.data[1].total&&(t.isShow1=!0),"0"!==e.data[2].total&&(t.isShow2=!0))}).catch(function(t){alert(t)})},handleOnLoginClick:function(){var t=JSON.parse(n.a.val("userInfo")).username,e=JSON.parse(n.a.val("userInfo")).password,i=JSON.stringify({imId:t,imPassword:e,imDomainName:"企业移动门户统一认证"});uexIMEx.login(i),console.log(JSON.stringify(i)),this.$store.commit("im/setLoginStatus",{loginStatus:2})},handleOnDeleteButtonClick:function(t){var e={targetId:t.targetId,conversationType:t.conversationType};uexIMEx.removeConversation(JSON.stringify(e))},getStyleObject:function(t){return t.isTop?{background:"#EEE"}:{}},getTime:function(t){return s(new Date(t),"MM-DD")},handleOnMessageClick:function(t){var e={conversationType:t.conversationType,targetId:t.targetId,conversationTitle:t.conversationTitle};uexIMEx.startUIConversation(JSON.stringify(e))},selectPerson:function(){this.$router.push({name:"selectPerson"})},show:function(){},onShow:function(){console.log("on show")},onHide:function(){console.log("on hide")},open:function(t,e,i){"unhandle"===e||"task"===e||"notice"===e?this.$router.push({name:"notice",params:{type:e,title:i}}):this.$router.push(t)}}},r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mes_box",staticStyle:{height:"100%",background:"#FFF"}},[s("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px","body-padding-bottom":"0"}},[s("x-header",{staticClass:"allHeader",attrs:{slot:"header","left-options":{showBack:!1}},slot:"header"},[s("img",{staticStyle:{display:"block"},attrs:{slot:"left",width:"30",src:t.image3.logo},slot:"left"}),t._v(" "),t._v("\n      消息\n      "),t._v(" "),s("popover",{staticClass:"ub icon",attrs:{slot:"right",id:"tips",placement:"bottom"},on:{"on-show":t.onShow,"on-hide":t.onHide},slot:"right"},[s("div",{staticClass:"popover-demo-content us",staticStyle:{"text-align":"center"},attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"ulev-2 tip",staticStyle:{padding:".5rem 0",color:"#fff"},on:{click:t.selectPerson}},[t._v("发起群聊")])]),t._v(" "),s("a",{staticClass:"ub icon iconfont icon-color",staticStyle:{"font-size":"1.5rem"},on:{"on-show":t.onShow,"on-hide":t.onHide}},[t._v("")])])],1),t._v(" "),s("div",{staticClass:"content"},[""!==t.loginStatus?s("div",{staticStyle:{"text-align":"center",padding:"1rem"},on:{click:t.handleOnLoginClick}},[s("span",{staticStyle:{"vertical-align":"middle",display:"inline-block","font-size":"14px"}},[t._v(t._s(t.loginStatus)+"  ")]),s("inline-loading")],1):t._e(),t._v(" "),""!==t.netStatus?s("div",{staticStyle:{"text-align":"center",padding:"1rem"},on:{click:t.handleOnLoginClick}},[s("span",{staticStyle:{"vertical-align":"middle",display:"inline-block","font-size":"14px"}},[t._v(t._s(t.netStatus)+"  ")]),s("inline-loading")],1):t._e(),t._v(" "),s("div",{attrs:{id:"list"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.taskVal.info.pushDate,expression:"taskVal.info.pushDate"}]},[s("div",{staticClass:"ub ub-pc ub-ac c-ffP",on:{click:function(e){t.open("/notice","task","任务提醒")}}},[s("div",{staticClass:"ub ub-ac ub-pc c-ff",staticStyle:{"min-width":"3rem","min-height":"3rem","border-radius":".5rem",position:"relative","margin-left":".9375rem"}},[s("img",{staticStyle:{display:"block"},attrs:{slot:"icon",width:"20",src:t.image.default},slot:"icon"}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"msgToatl"},[t._v(t._s(t.taskVal.total))])]),t._v(" "),s("div",{staticClass:"ub ub-f1 b-b1 umar-9 ub-ver"},[s("div",{staticClass:"ub ub-pj"},[s("div",{},[s("div",{staticClass:"ulev-1"},[t._v("\n                      任务\n                    ")])]),t._v(" "),s("div",{staticClass:"right c-gra ub ub-ac ub-pc ub-ver ulev-2"},[s("div",{staticClass:"fc999"},[t._v(t._s(t.taskVal.info.pushDate))])])]),t._v(" "),s("div",{staticClass:"ub ub-pj"},[s("div",{staticClass:"ulev-2 c-gra fc999"},[t._v("\n                    "+t._s(t.taskVal.info.title)+"\n                    ")]),t._v(" "),s("div",{staticClass:"ub-pe"})])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.noticeVal.info.pushDate,expression:"noticeVal.info.pushDate"}]},[s("div",{staticClass:"ub ub-pc ub-ac c-ffP",on:{click:function(e){t.open("/notice","notice","公告")}}},[s("div",{staticClass:"ub ub-ac ub-pc c-ff9",staticStyle:{"min-width":"3rem","min-height":"3rem","border-radius":".5rem",position:"relative","margin-left":".9375rem"}},[s("img",{staticStyle:{display:"block"},attrs:{slot:"icon",width:"20",src:t.image1.default},slot:"icon"}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow1,expression:"isShow1"}],staticClass:"msgToatl"},[t._v(t._s(t.noticeVal.total))])]),t._v(" "),s("div",{staticClass:"ub ub-f1 b-b1 umar-9 ub-ver"},[s("div",{staticClass:"ub ub-pj"},[s("div",{},[s("div",{staticClass:"ulev-1"},[t._v("\n                      公告\n                    ")])]),t._v(" "),s("div",{staticClass:"right c-gra ub ub-ac ub-pc ub-ver ulev-2"},[s("div",{staticClass:"fc999"},[t._v(t._s(t.noticeVal.info.pushDate))])])]),t._v(" "),s("div",{staticClass:"ub ub-pj"},[s("div",{staticClass:"ulev-2 c-gra fc999"},[t._v("\n                    "+t._s(t.noticeVal.info.title)+"\n                  ")])])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.unhandleVal.info.pushDate,expression:"unhandleVal.info.pushDate"}]},[s("div",{staticClass:"ub ub-pc ub-ac c-ffP",on:{click:function(e){t.open("/systemMes","unhandle","待办")}}},[s("div",{staticClass:"ub ub-ac ub-pc c-ff9",staticStyle:{"min-width":"3rem","min-height":"3rem","border-radius":".5rem",position:"relative","margin-left":".9375rem"}},[s("img",{staticStyle:{display:"block"},attrs:{slot:"icon",width:"20",src:t.image2.default},slot:"icon"}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow2,expression:"isShow2"}],staticClass:"msgToatl"},[t._v(t._s(t.unhandleVal.total))])]),t._v(" "),s("div",{staticClass:"ub ub-f1 b-b1 umar-9 ub-ver"},[s("div",{staticClass:"ub ub-pj"},[s("div",{},[s("div",{staticClass:"ulev-1"},[t._v("\n                      待办\n                    ")])]),t._v(" "),s("div",{staticClass:"right c-gra ub ub-ac ub-pc ub-ver ulev-2"},[s("div",{staticClass:"fc999"},[t._v(t._s(t.unhandleVal.info.pushDate))])])]),t._v(" "),s("div",{staticClass:"ub ub-pj"},[s("div",{staticClass:"ulev-2 c-gra fc999"},[t._v("\n                    "+t._s(t.unhandleVal.info.title)+"\n                    ")])])])])]),t._v(" "),s("div",{staticClass:"ub ub-pc ub-ac c-ffP"},[s("div",{staticClass:"ub ub-ac ub-pc c-76",staticStyle:{"min-width":"3rem","min-height":"3rem","border-radius":".5rem",position:"relative","margin-left":".9375rem"}},[s("img",{staticStyle:{display:"block"},attrs:{slot:"icon",width:"20",src:t.image2.default},slot:"icon"})]),t._v(" "),s("div",{staticClass:"ub ub-f1 b-b1 umar-9 ub-ver"},[s("div",{staticClass:"ub ub-pj"},[s("div",{},[s("div",{staticClass:"ulev-1"},[t._v("\n                    系统消息\n                  ")])]),t._v(" "),s("div",{staticClass:"right c-gra ub ub-ac ub-pc ub-ver ulev-2"},[s("div",{staticClass:"fc999"},[t._v("11月27日")])])]),t._v(" "),s("div",{staticClass:"ub ub-pj",staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s("div",{staticClass:"ulev-2 c-gra fc999"},[t._v("\n                  张波：上次沟通的意见已归档，新的意见已发出\n                ")])])])]),t._v(" "),s("swipeout",t._l(t.recentConversationList,function(e,a){return s("swipeout-item",{key:a,attrs:{"transition-mode":"follow"}},[s("div",{attrs:{slot:"right-menu"},slot:"right-menu"},[s("swipeout-button",{attrs:{type:"warn"},nativeOn:{click:function(i){t.handleOnDeleteButtonClick(e)}}},[t._v("删除")])],1),t._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("cell",{staticStyle:{"border-bottom":"1px solid #e9eaec"},style:t.getStyleObject(e),nativeOn:{click:function(i){t.handleOnMessageClick(e)}}},[s("div",{staticStyle:{"min-height":"1rem",width:"13rem","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[s("span",[t._v(t._s(e.conversationTitle))])]),t._v(" "),s("div",{staticStyle:{"min-height":"1rem",width:"13rem","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"inline-desc"},slot:"inline-desc"},[s("span",[t._v(t._s(e.latestMessage))])]),t._v(" "),s("div",{staticClass:"ub ub-ac ub-pc c-76",staticStyle:{"margin-right":"1rem","min-width":"3rem","min-height":"3rem","border-radius":".5rem",position:"relative"},attrs:{slot:"icon"},slot:"icon"},[s("img",{staticStyle:{display:"block",width:"3rem",height:"3rem","border-radius":".5rem"},attrs:{src:e.conversationPortraitUrl}})]),t._v(" "),e.unreadMessageCount?s("badge",{staticStyle:{position:"absolute",left:"3.2rem",top:"0.3rem"},attrs:{text:e.unreadMessageCount}}):t._e(),t._v(" "),s("flexbox",{staticStyle:{color:"#c0c0c0","min-width":"3rem",width:"2rem"},attrs:{slot:"value",orient:"vertical"},slot:"value"},[s("flexbox-item",{staticStyle:{"min-height":"1rem"},attrs:{span:.5}},[s("div",[t._v(t._s(t.getTime(e.sentTime)))])]),t._v(" "),s("flexbox-item",{staticStyle:{"min-height":"1rem","text-align":"center"},attrs:{span:.5}},[0===e.isNeedNotify?s("img",{staticStyle:{width:".85rem"},attrs:{src:i("du8Y")}}):t._e()])],1)],1)],1)])}))],1)])],1)],1)},c=[],u={render:r,staticRenderFns:c},d=u,v=i("VU/8"),g=v(l,d,!1,null,null,null);e.default=g.exports},du8Y:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAADyElEQVRIiZ2WT4hXVRTHv99z3/v9BocJRcyFIIUYaRFBQoswTFQMiigoM4KoRQthiKIQoUXLKVtI1KJNi4KxzGohRiHiImghRARNf6Ctk5OKwSA67917vi28b+bN+Pv95uWBA+++++77nPu95513ePHiRWTb4u6HAHwCYIYkJDVzPQDHAewg+V4I4SMA7fmRZpIgCe7+EoA3JJ0jOVGWJcyseW4SwDMANkv6MKV0V0oJrbUgOdQtxogYI9z9UwDXAGyQdDqlhFa0m9uRuftEA2ggI3diZiCJEMJfIYT9WaadKaUpSSD5NIBHVyx6m+SuZkxyJIRXrlxZGpCoqmoyxvhBCAGSfgewbcT6aZKvSrpWFMVoSPuQ3R0xxs/c/cXVIsz2K4CdRVH8OxQyNze37EYj340bN2bMbHsXCoCfiqLYMWzS2gNJG9z9XjNDr9fbLelaxzR9KKV0xN0xyC2EgBACyrIEyVfquj4fYxwLIcyFEJ7suBNIegfAHQN30qRwVVVw9/0kJ+q6Pp1z/xyA1ztyepIODoS0Ilkr6ZF82LtjjFMAEEI4JumL1WTL8/vKskRRFMt8EUJyO4AyXyOldFjSwbIsUZbl8yT/6ADaWtc1GnUat9YBrV+2RTOklKbrur6PJMxsD4DrwwBZgQkAYahcAG6pDXlHZ6uqGgNwoUMimCRrlxxJyyADtSC5UdKpXHrOSnprBMQHvccGPDgItMfdpwCgLMv3SZ7oWub/DwTufriu6wO5IhyQ9FtnSFu71UCSPk8pbcupucfdq06QnDkws1UXkESM8Yy7rymK4m8ze2LFIzH7ckhZluj1ejCzfkedN8UYT6WU0Ov1zpjZkda6dTnglX7zWCQ924WQZdtd1/XRXHqmSJ7M0+slPR5jREppsUDy0qVLqKpqH8nvu0BW2HNm9iVJxhj/JLlV0gWSW1NK12OMN//x7n4/gNO3AYCkEyml7e6uoigeA7AAYFMI4dt8fjfLSozxB5LD/50jLJeSGUlbzOyCmT2VG4tdAI71+32MjY2Bs7OzPwJYiwFZ0dE2AviK5KSZJXd/092P5grxgpkd5+zs7G2+e8kk3Qngcr/fdwBYWFiYJnlQEkIID68KIWmS1gCo862Qfb5pNJrmrigKSELu2X6R9EAI4eehZ9HqHvdK+g7A1QYi6TKAewCklBKaDzrGJcVJ7pX0rpl9cwtEEswMue8CgPPuXgNY1wrgJIAkCU2/NeBD/gfAywBwC6SRoOl1SV4l+aCkjwHc7e5fj4+Pv9bv9xdlmp+fX7weZP8B74pH5me9wpoAAAAASUVORK5CYII="}});