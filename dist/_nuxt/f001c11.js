(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{395:function(t,e,r){var content=r(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("c2b3506e",content,!0,{sourceMap:!1})},409:function(t,e,r){var content=r(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("cc25d444",content,!0,{sourceMap:!1})},410:function(t,e,r){var content=r(488);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("353356fc",content,!0,{sourceMap:!1})},412:function(t,e,r){"use strict";r.r(e);r(62),r(91);var n=r(3),o=r(84),l=r(421);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{statusList:["power","contact","base_speed","defense_speed","defense_range","throw_power","throw_skill","dex"],currPagination:1,paginationLimit:5,maxCard:12,sortVal:null,sortDecrease:!0,sortList:l}},computed:d(d(d({},Object(o.c)(["player"])),Object(o.b)("player",{upgradedPlayerList:"GetUpgradedPlayerList"})),{},{isMobile:function(){return document.body.clientWidth<500},shownPlayerList:function(){var t=this.upgradedPlayerList.length>0?this.upgradedPlayerList:[],e=this.currPagination;return 1==e?t.slice(0,this.maxCard):e!=this.upgradedPlayerList.length?t.slice(this.maxCard*(e-1),this.maxCard*e):t.slice(this.maxCard*(e-1),this.maxCard*(e-1)+t.length%this.maxCard-1)},pagnitionList:function(){for(var t=this.upgradedPlayerList.length>0?this.upgradedPlayerList:[],e=Math.ceil(t.length/this.maxCard),r=[],i=0;i<e;i++)r.push(i+1);return r},shownPagnitionList:function(){var t=this.pagnitionList,e=t.length,r=this.currPagination;return t.length<=5?t:r<4?t.filter((function(t,e){if(e<5)return t})):t.length-r<=2?[e-4,e-3,e-2,e-1,e]:[r-2,r-1,r,r+1,r+2]}}),watch:{"player.loading":function(t){this.currPagination=1},sortVal:function(t){this.$store.commit("player/SET_SORT_VAL",t)},sortDecrease:function(t){this.$store.commit("player/SET_SORT_DECREASE",t)}},methods:{prev:function(){this.currPagination>1&&(this.currPagination-=1)},next:function(){this.currPagination<this.pagnitionList.length&&(this.currPagination+=1)}},mounted:function(){this.isMobile&&(this.maxCard=5)}},v=(r(422),r(38)),h=r(55),m=r.n(h),x=r(527),w=r(516),y=r(526),_=r(398),k=r(517),C=r(521),S=r(119),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",sm:"10"}},[n("v-sheet",{attrs:{rounded:"lg"}},[n("v-container",{staticClass:"wrapper"},[n("v-row",[t.shownPlayerList.length>0?[n("v-col",{staticClass:"filter-header",attrs:{cols:"12",lg:"12",md:"12",sm:"12"}},[n("div",[n("v-btn",{staticClass:"white--text",attrs:{small:"",fab:"",color:"success"},on:{click:function(e){t.sortDecrease=!t.sortDecrease}}},[n("v-icon",[t._v(t._s(t.sortDecrease?"fas fa-sort-amount-down":"fas fa-sort-amount-up"))])],1),t._v(" "),n("v-select",{attrs:{items:t.sortList,label:"排序依據",dense:"",solo:""},model:{value:t.sortVal,callback:function(e){t.sortVal=e},expression:"sortVal"}})],1)]),t._v(" "),t._l(t.shownPlayerList,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",lg:"4",md:"4",sm:"3"}},[n("div",{staticClass:"player-block"},[n("div",{staticClass:"header"},[n("span",[t._v(t._s(e.year)+" "+t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(t.$getIdText(e.field))+" "+t._s(e.ovr)+" ")])]),t._v(" "),n("div",{staticClass:"left"},[n("div",{staticClass:"avatar-container",class:t.$id2ovr2color(e.id)},[n("div",{staticClass:"avatar-pic"},[n("img",{attrs:{src:r(418)("./"+e.team+".png"),alt:""}}),t._v(" "),n("span",{staticClass:"avatar-ovr"},[t._v(t._s(e.ovr))]),t._v(" "),n("v-icon",{staticClass:"avatar-weather",class:e.weather,attrs:{small:""}},[t._v("\n                      fas fa-"+t._s(t.$getWeatherIcon(e.weather))+"\n                    ")]),t._v(" "),n("span",{staticClass:"avatar-field"},[t._v("\n                      "+t._s(e.field.toUpperCase())+"\n                    ")]),t._v(" "),n("span",{class:t.$getLevelColor(t.player.level)},[t._v("\n                      +"+t._s(t.player.level)+"\n                    ")])],1),t._v(" "),n("div",{staticClass:"avatar-name"},[n("span",[t._v("\n                      "+t._s(""+e.year.substr(2,2)+e.name)+"\n                    ")])])]),t._v(" "),n("div",{staticClass:"avatar-info"},[n("span",[t._v(t._s(t.$getIdText(e.team)))]),t._v(" "),n("span",[t._v(t._s(t.$getIdText(e.side)))]),t._v(" "),n("span",[t._v(t._s(t.$getIdText(e.type)))])])]),t._v(" "),n("div",{staticClass:"right"},[n("ul",t._l(t.statusList,(function(r){return n("li",{key:r,class:{"be-sorted":r==t.player.sort.val}},[n("span",[t._v(t._s(t.$getStatusText(r)))]),t._v(" "),n("span",{style:{color:t.$getStatusColor(e[r])}},[t._v("\n                      "+t._s(e[r])+"\n                    ")])])})),0)])])])})),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12"}},[n("div",{staticStyle:{width:"100%",height:"50px"}},[n("ul",{staticClass:"custom-pagnition"},[n("li",{staticClass:"pc",class:{_disabled:1==t.currPagination,_hover:1!=t.currPagination},on:{click:function(e){t.currPagination=1}}},[n("v-icon",[t._v("fa-angle-double-left")])],1),t._v(" "),n("li",{class:{_disabled:1==t.currPagination,_hover:1!=t.currPagination},on:{click:t.prev}},[n("v-icon",[t._v("fas fa-angle-left")])],1),t._v(" "),t._l(t.shownPagnitionList,(function(e,r){return n("li",{key:r,class:{_active:e==t.currPagination,_hover:e!=t.currPagination},on:{click:function(r){t.currPagination=e}}},[n("span",[t._v(t._s(e))])])})),t._v(" "),n("li",{class:{_disabled:t.currPagination==t.pagnitionList.length,_hover:t.currPagination!=t.pagnitionList.length},on:{click:t.next}},[n("v-icon",[t._v("fas fa-angle-right")])],1),t._v(" "),n("li",{staticClass:"pc",class:{_disabled:t.currPagination==t.pagnitionList.length,_hover:t.currPagination!=t.pagnitionList.length},on:{click:function(e){t.currPagination=t.pagnitionList.length}}},[n("v-icon",[t._v("fas fa-angle-double-right")])],1)],2)])])]:[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("div",{staticClass:"no-content-block"},[t.player.loading?n("div",{staticClass:"spinner"},[n("div",{staticClass:"rect1"}),t._v(" "),n("div",{staticClass:"rect2"}),t._v(" "),n("div",{staticClass:"rect3"}),t._v(" "),n("div",{staticClass:"rect4"}),t._v(" "),n("div",{staticClass:"rect5"})]):[n("img",{attrs:{src:"/images/common/logo.png",alt:""}}),t._v(" "),n("p",[t._v("請設定詳細搜尋項目或球員名稱")])]],2)])]],2)],1)],1)],1)}),[],!1,null,"743bbb80",null);e.default=component.exports;m()(component,{VBtn:x.a,VCol:w.a,VContainer:y.a,VIcon:_.a,VRow:k.a,VSelect:C.a,VSheet:S.a})},413:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(84);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={data:function(){return{asVal:0,yearVal:0,extraVal:null,asList:[0,28],yearList:[0,15,20,24,28],extraList:[{text:"無加成",value:null},{text:"力5打5速5速5",value:"SPEED"},{text:"力5打5速5傳5",value:"THROW"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["player"])),watch:{asVal:function(t){this.$store.commit("player/SET_AS_MEMBER",t)},yearVal:function(t){this.$store.commit("player/SET_YEAR_MEMBER",t)},extraVal:function(t){this.$store.commit("player/SET_EXTRA_MEMBER",t)},"player.member":{handler:function(t){this.asVal=t.as,this.yearVal=t.year,this.extraVal=t.extra},deep:!0}},methods:{setSearchModal:function(){this.$emit("setSearchModal",!0)},clearList:function(){this.$store.commit("player/CLEAR_PLAYER_LIST")},addLevel:function(){this.player.level<10&&this.$store.commit("player/SET_LEVEL",1)},minusLevel:function(){this.player.level>0&&this.$store.commit("player/SET_LEVEL",-1)},justifyPlus:function(t){this.$store.commit("player/JUSTIFY_PLUS",t)}}},d=(r(473),r(38)),f=r(55),v=r.n(f),h=r(527),m=r(516),x=r(398),w=r(521),y=r(119),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{cols:"12",sm:"2"}},[r("v-sheet",{attrs:{"min-height":"40vh",rounded:"lg"}},[r("ul",{staticClass:"setting-list"},[r("li",[r("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue"},on:{click:t.setSearchModal}},[r("v-icon",{attrs:{left:""}},[t._v("fas fa-search")]),t._v(" "),r("span",[t._v("詳細搜尋")])],1)],1),t._v(" "),r("li",[r("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"error"},on:{click:t.clearList}},[r("v-icon",{attrs:{left:""}},[t._v("fas fa-trash")]),t._v(" "),r("span",[t._v("清空列表")])],1)],1),t._v(" "),r("li",[r("v-btn",{staticClass:"ma-2 white--text rainbow",on:{click:function(e){return t.justifyPlus(!0)}}},[r("v-icon",{attrs:{left:""}},[t._v("fas fa-fire")]),t._v(" "),r("span",[t._v("最高加成")])],1)],1),t._v(" "),r("li",[r("v-btn",{staticClass:"ma-2 white--text copper",on:{click:function(e){return t.justifyPlus(!1)}}},[r("v-icon",{attrs:{left:""}},[t._v("fas fa-broom")]),t._v(" "),r("span",[t._v("清除加成")])],1)],1),t._v(" "),r("li",{staticStyle:{width:"40%"}},[r("div",[r("span",[t._v("當前等級 : "+t._s(t.player.level))])])]),t._v(" "),r("li",[r("v-btn",{staticClass:"ma-2 white--text",attrs:{small:"",fab:"",color:"primary"},on:{click:t.minusLevel}},[r("v-icon",[t._v("fas fa-minus")])],1),t._v(" "),r("v-btn",{staticClass:"ma-2 white--text",attrs:{small:"",fab:"",color:"success"},on:{click:t.addLevel}},[r("v-icon",[t._v("fas fa-plus")])],1)],1),t._v(" "),r("li",{staticStyle:{width:"90%"}},[r("v-select",{attrs:{items:t.asList,label:"相同隊伍","prepend-icon":"fas fa-users",dense:"",solo:""},model:{value:t.asVal,callback:function(e){t.asVal=e},expression:"asVal"}})],1),t._v(" "),r("li",{staticStyle:{width:"90%"}},[r("v-select",{attrs:{items:t.yearList,label:"相同年度","prepend-icon":"far fa-clock",dense:"",solo:""},model:{value:t.yearVal,callback:function(e){t.yearVal=e},expression:"yearVal"}})],1),t._v(" "),r("li",{staticStyle:{width:"90%"}},[r("v-select",{attrs:{items:t.extraList,label:"額外加成","prepend-icon":"fas fa-star",dense:"",solo:""},model:{value:t.extraVal,callback:function(e){t.extraVal=e},expression:"extraVal"}})],1)])])],1)}),[],!1,null,"69fa25d2",null);e.default=component.exports;v()(component,{VBtn:h.a,VCol:m.a,VIcon:x.a,VSelect:w.a,VSheet:y.a})},414:function(t,e,r){"use strict";r.r(e);r(45),r(92),r(247),r(29),r(61);var n=r(483),o=r(484),l=r(485),c=r(486),d={props:{searchDialog:{type:Boolean,default:!1}},data:function(){return{save:!1,currTab:{id:"name",text:"名稱"},tabList:[{id:"name",text:"球員名"},{id:"team",text:"球團"},{id:"field",text:"位置"},{id:"ovr",text:"OVR"},{id:"year",text:"年度"},{id:"weather",text:"氣候"},{id:"type",text:"升級類型"}],form:{name:"",team:[],field:[],ovr:[],year:[],weather:[],type:[]},database:{name:"",team:n,field:o,ovr:[56,92],year:[2007,2020],weather:l,type:c}}},computed:{currSearchDialog:{get:function(){return this.searchDialog},set:function(){return!1}},isNotSelection:function(){return["name","ovr","year"].includes(this.currTab.id)}},methods:{setSearchModal:function(){this.$emit("setSearchModal",!1),this.resetField()},doSearch:function(){this.$store.commit("player/SET_LOADING",!0),this.$store.commit("player/CLEAR_PLAYER_LIST"),this.$store.dispatch("player/fetchPlayerList",this.form),this.resetField(),this.$emit("setSearchModal",!1)},resetField:function(){this.save||(this.currTab=JSON.parse(JSON.stringify({id:"name",text:"名稱"})),this.form.name="",this.form.team=["all"],this.form.field=["all"],this.form.ovr=[],this.form.ovr.push(this.database.ovr[0]),this.form.ovr.push(this.database.ovr[1]),this.form.year=[],this.form.year.push(this.database.year[0]),this.form.year.push(this.database.year[1]),this.form.weather=["all"],this.form.type=["all"])},changeList:function(t){var e=this.currTab.id;if(this.form[e].includes(t.id)){var r=this.form[e].indexOf(t.id);this.form[e].splice(r,1),0==this.form[e].length&&this.form[e].push("all")}else"all"==t.id?this.form[e]=["all"]:(1==this.form[e].length&&this.form[e].includes("all")&&(this.form[e]=[]),this.form[e].push(t.id))}},mounted:function(){this.resetField()}},f=(r(487),r(38)),v=r(55),h=r.n(v),m=r(374),x=r(527),w=r(411),y=r(392),_=r(516),k=r(523),C=r(398),S=r(525),O=r(517),L=r(519),P=r(524),V=r(511),j=r(503),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600"},on:{"click:outside":t.setSearchModal},model:{value:t.currSearchDialog,callback:function(e){t.currSearchDialog=e},expression:"currSearchDialog"}},[n("v-card",{staticClass:"wrapper"},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-toolbar-title",{staticClass:"title black--text pl-0"},[n("div",{staticClass:"form-title"},[n("v-icon",[t._v("fab fa-searchengin")]),t._v(" "),n("span",[t._v("詳細搜尋")])],1)]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"black",icon:""},on:{click:t.setSearchModal}},[n("v-icon",[t._v("fas fa-times")])],1)],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{staticClass:"side",attrs:{cols:"12",sm:"4"}},[n("ul",{staticClass:"tab-list"},t._l(t.tabList,(function(e){return n("li",{key:e.id,class:{active:e.id==t.currTab.id},on:{click:function(r){t.currTab=e}}},[t._v("\n              "+t._s(e.text)+"\n            ")])})),0)]),t._v(" "),n("v-col",{staticClass:"main",class:{filtered:!t.isNotSelection},attrs:{cols:"12",sm:"8"}},[t.isNotSelection?n("p",{staticClass:"content-title"},[t._v("\n            "+t._s(t.currTab.text)+"\n          ")]):t._e(),t._v(" "),"name"==t.currTab.id?n("div",[n("v-text-field",{attrs:{label:"球員名稱",solo:"",dense:"",clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1):t._e(),t._v(" "),"ovr"==t.currTab.id?n("div",[n("v-range-slider",{attrs:{min:t.database.ovr[0],max:t.database.ovr[1]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("span",{staticClass:"slider-txt"},[t._v(t._s(t.form.ovr[0]))])]},proxy:!0},{key:"append",fn:function(){return[n("span",{staticClass:"slider-txt"},[t._v(t._s(t.form.ovr[1]))])]},proxy:!0}],null,!1,1914619454),model:{value:t.form.ovr,callback:function(e){t.$set(t.form,"ovr",e)},expression:"form.ovr"}})],1):t._e(),t._v(" "),"year"==t.currTab.id?n("div",[n("v-range-slider",{attrs:{min:t.database.year[0],max:t.database.year[1]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("span",{staticClass:"slider-txt"},[t._v(t._s(t.form.year[0]))])]},proxy:!0},{key:"append",fn:function(){return[n("span",{staticClass:"slider-txt"},[t._v(t._s(t.form.year[1]))])]},proxy:!0}],null,!1,3608252958),model:{value:t.form.year,callback:function(e){t.$set(t.form,"year",e)},expression:"form.year"}})],1):t._e(),t._v(" "),t.isNotSelection?t._e():n("div",[n("ul",{staticClass:"filter-list"},t._l(t.database[t.currTab.id],(function(e){return n("li",{key:e.id,class:{active:t.form[t.currTab.id].includes(e.id)},on:{click:function(r){return t.changeList(e)}}},[n("div",[n("v-icon",{staticClass:"check-circle"},[t._v("fas fa-circle")]),t._v(" "),n("span",[t._v(" "+t._s(e.text))])],1),t._v(" "),e.icon?[n("v-icon",{style:{color:e.color}},[t._v("\n                    "+t._s(e.icon)+"\n                  ")])]:t._e(),t._v(" "),e.img?[n("img",{staticStyle:{"max-width":"11%"},attrs:{src:r(475)("./"+e.img+".png"),alt:""}})]:t._e(),t._v(" "),e.hint?[n("span",[t._v(" "+t._s(e.hint))])]:t._e()],2)})),0)])])],1)],1),t._v(" "),n("v-card-actions",{staticStyle:{"margin-top":"50px"}},[n("v-switch",{staticStyle:{"padding-left":"3%"},attrs:{inset:""},model:{value:t.save,callback:function(e){t.save=e},expression:"save"}}),t._v(" "),n("v-icon",{staticClass:"save-icon",attrs:{color:"success"}},[t._v("fas fa-save")]),t._v(" "),n("span",{staticClass:"save-txt"},[t._v("保存紀錄")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"warning"},on:{click:t.resetField}},[n("v-icon",{attrs:{left:""}},[t._v("fas fa-sync-alt")]),t._v(" "),n("span",[t._v("重置")])],1),t._v(" "),n("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue"},on:{click:t.doSearch}},[n("v-icon",{attrs:{left:""}},[t._v("fas fa-search")]),t._v(" "),n("span",[t._v("搜尋")])],1)],1)],1)],1)}),[],!1,null,"25072de2",null);e.default=component.exports;h()(component,{VAppBar:m.a,VBtn:x.a,VCard:w.a,VCardActions:y.a,VCardText:y.b,VCol:_.a,VDialog:k.a,VIcon:C.a,VRangeSlider:S.a,VRow:O.a,VSpacer:L.a,VSwitch:P.a,VTextField:V.a,VToolbarTitle:j.a})},418:function(t,e,r){var map={"./brothers.png":419,"./ctbc_brothers.png":420};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=418},419:function(t,e,r){t.exports=r.p+"img/brothers.e6ae9a8.png"},420:function(t,e,r){t.exports=r.p+"img/ctbc_brothers.074c8b6.png"},421:function(t){t.exports=JSON.parse('[{"text":"預設","value":null},{"text":"力量","value":"power"},{"text":"打擊","value":"contact"},{"text":"跑壘速度","value":"base_speed"},{"text":"守備速度","value":"defense_speed"},{"text":"守備範圍","value":"defense_range"},{"text":"傳球力量","value":"throw_power"},{"text":"傳球技能","value":"throw_skill"},{"text":"敏捷","value":"dex"}]')},422:function(t,e,r){"use strict";r(395)},423:function(t,e,r){(e=r(21)(!1)).push([t.i,'@charset "UTF-8";.wrapper[data-v-743bbb80]{background:#e0e0e0;font-family:Overpass;min-height:90vh;position:relative}.wrapper .filter-header[data-v-743bbb80]{display:flex;justify-content:flex-end;height:50px}.wrapper .filter-header>div[data-v-743bbb80]{display:flex;align-items:flex-start;line-height:1}.wrapper .filter-header>div>button[data-v-743bbb80]{margin-right:10px}.wrapper .player-block[data-v-743bbb80]{display:flex;flex-wrap:wrap;border-radius:4px;box-shadow:0 0 5px #333;font-weight:600}.wrapper .player-block .header[data-v-743bbb80]{display:flex;justify-content:space-between;width:100%;padding:10px 7% 10px 10px;border-bottom:1.5px solid #bebebe;margin-bottom:10px}.wrapper .player-block .left[data-v-743bbb80]{display:flex;flex-wrap:wrap;width:40%;padding:0 10% 10px 10px}@media screen and (max-width:500px){.wrapper .player-block .left[data-v-743bbb80]{width:35%;padding:0 0 10px 10px}}.wrapper .player-block .left .avatar-container[data-v-743bbb80]{width:100%;min-height:170px;position:relative;border-radius:4px;color:#fff;font-size:1em;border:.5px solid #6c6c6c;box-shadow:3px 3px 3px rgba(0,0,0,.7)}@media screen and (max-width:500px){.wrapper .player-block .left .avatar-container[data-v-743bbb80]{font-size:.6em}}.wrapper .player-block .left .avatar-container.purple-card[data-v-743bbb80]{background:linear-gradient(180deg,#be77ff,#8600ff 80%,#fff 81%,#000 82%)}.wrapper .player-block .left .avatar-container.red-card[data-v-743bbb80]{background:linear-gradient(180deg,#d4292e,#72060a 80%,#fff 81%,#000 82%)}.wrapper .player-block .left .avatar-container.orange-card[data-v-743bbb80]{background:linear-gradient(180deg,#ffa042,#db7202 80%,#fff 81%,#000 82%)}.wrapper .player-block .left .avatar-container.blue-card[data-v-743bbb80]{background:linear-gradient(180deg,#46a3ff,#005ab5 80%,#fff 81%,#000 82%)}.wrapper .player-block .left .avatar-container .avatar-pic[data-v-743bbb80]{width:100%;height:80%;display:flex;justify-content:center;align-items:center;position:relative}.wrapper .player-block .left .avatar-container .avatar-pic>img[data-v-743bbb80]{width:80%;min-height:100%}.wrapper .player-block .left .avatar-container .avatar-pic .avatar-ovr[data-v-743bbb80]{position:absolute;top:0;right:2%;text-shadow:0 0 5px #000}.wrapper .player-block .left .avatar-container .avatar-pic .avatar-weather[data-v-743bbb80]{position:absolute;top:16%;right:2%;transform:translateX(4%)}.wrapper .player-block .left .avatar-container .avatar-pic .avatar-weather.sun[data-v-743bbb80]{color:red}.wrapper .player-block .left .avatar-container .avatar-pic .avatar-weather.cloud[data-v-743bbb80]{color:#f0f0f0}.wrapper .player-block .left .avatar-container .avatar-pic .avatar-weather.snow[data-v-743bbb80]{color:#66b3ff}.wrapper .player-block .left .avatar-container .avatar-pic .avatar-weather.rain[data-v-743bbb80]{color:#0080ff}.wrapper .player-block .left .avatar-container .avatar-pic .avatar-weather.none[data-v-743bbb80]{color:green}.wrapper .player-block .left .avatar-container .avatar-pic .avatar-field[data-v-743bbb80]{position:absolute;bottom:2%;right:2%;text-shadow:0 0 5px #000}.wrapper .player-block .left .avatar-container .avatar-pic>span[data-v-743bbb80]:last-child{position:absolute;left:2%;bottom:2%;font-weight:700;font-size:1em;padding:2px 6px;border:.5px solid #3c3c3c;border-radius:4px}.wrapper .player-block .left .avatar-container .avatar-pic>span:last-child.none[data-v-743bbb80]{display:none}.wrapper .player-block .left .avatar-container .avatar-pic>span:last-child.copper[data-v-743bbb80]{color:#fff;text-shadow:0 0 5px #000;background:linear-gradient(45deg,#ca7345,#ffdeca 16%,#ca7345 21%,#ffdeca 24%,#a14521 27%,#ca7345 36%,#ffdeca 45%,#ffdeca 60%,#ca7345 72%,#ffdeca 80%,#ca7345 84%,#732100)}.wrapper .player-block .left .avatar-container .avatar-pic>span:last-child.silver[data-v-743bbb80]{color:#fff;text-shadow:0 0 5px #000;background:linear-gradient(45deg,#dedede,#fff 16%,#dedede 21%,#fff 24%,#dedede 36%,#fff 45%,#fff 60%,#dedede 72%,#fff 80%,#dedede 84%,#a1a1a1)}.wrapper .player-block .left .avatar-container .avatar-pic>span:last-child.gold[data-v-743bbb80]{color:#fff;text-shadow:0 0 5px #000;background:linear-gradient(45deg,#bf953f,#fcf6ba,#b38728,#fbf5b7,#aa771c)}.wrapper .player-block .left .avatar-container .avatar-pic>span:last-child.rainbow[data-v-743bbb80]{color:#fff;text-shadow:0 0 5px #000;background:linear-gradient(0deg,#ffd306,#98c9d6,#8600ff)}.wrapper .player-block .left .avatar-container .avatar-name[data-v-743bbb80]{width:100%;height:20%;display:flex;justify-content:center;align-items:center}.wrapper .player-block .left .avatar-container .avatar-name>span[data-v-743bbb80]{font-size:100%}@media screen and (max-width:500px){.wrapper .player-block .left .avatar-container .avatar-name>span[data-v-743bbb80]{font-size:150%}}.wrapper .player-block .left .avatar-info[data-v-743bbb80]{padding-top:10px}.wrapper .player-block .left .avatar-info>span[data-v-743bbb80]{font-size:.5em;display:block;width:100%}.wrapper .player-block .right[data-v-743bbb80]{display:flex;flex-wrap:wrap;width:60%;font-size:.5em;font-weight:800}@media screen and (max-width:500px){.wrapper .player-block .right[data-v-743bbb80]{width:65%}}.wrapper .player-block .right>ul[data-v-743bbb80]{list-style:none;width:100%;padding:0 10%}.wrapper .player-block .right>ul>li[data-v-743bbb80]{position:relative;display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:2px}.wrapper .player-block .right>ul>li.be-sorted[data-v-743bbb80]:before{content:"⚾";position:absolute;left:-10%}.wrapper .player-block .right>ul>li>span[data-v-743bbb80]{text-align:center}.wrapper .player-block .right>ul>li>span[data-v-743bbb80]:first-child{text-overflow:ellipsis}.wrapper .player-block .right>ul>li>span[data-v-743bbb80]:last-child{background:#000;color:red;padding:2px 8px;border-radius:5px;width:45px;max-width:45px}.wrapper .custom-pagnition[data-v-743bbb80]{cursor:pointer;color:#fff;display:flex;justify-content:center;padding:0 20%;position:absolute;bottom:1vh;left:50%;transform:translateX(-50%)}.wrapper .custom-pagnition>li[data-v-743bbb80]{float:left;height:38px;list-style:none;margin-right:10px;text-align:center;border:1px solid #fff;background:linear-gradient(45deg,#fff,#c4cace,#bec2cb);color:#000;padding:2px 1vw;border-radius:10px;cursor:pointer;display:flex;justify-content:center}.wrapper .custom-pagnition>li>span[data-v-743bbb80]{font-size:20px;height:38px}@media screen and (max-width:500px){.wrapper .custom-pagnition>li[data-v-743bbb80]{padding:2px 2.5vw}.wrapper .custom-pagnition>li.pc[data-v-743bbb80]{display:none}}@media screen and (min-width:500px){.wrapper .custom-pagnition>li._hover[data-v-743bbb80]:hover{background:linear-gradient(45deg,#fff,#ffd306,#eac100);color:#fff}}.wrapper .custom-pagnition>li._active[data-v-743bbb80]{background:linear-gradient(45deg,#fff,#ffd306,#eac100);color:#fff}.wrapper .custom-pagnition>li._disabled[data-v-743bbb80]{background:none;color:hsla(0,2.1%,62%,.667);cursor:not-allowed;opacity:.5}.wrapper .no-content-block[data-v-743bbb80]{text-align:center;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);pointer-events:none}.wrapper .no-content-block .spinner[data-v-743bbb80]{margin:100px auto;width:100px;height:40px;text-align:center;font-size:10px}.wrapper .no-content-block .spinner>div[data-v-743bbb80]{background-color:#ff0;height:100%;width:6px;display:inline-block;-webkit-animation:sk-stretchdelay-data-v-743bbb80 1.2s ease-in-out infinite;animation:sk-stretchdelay-data-v-743bbb80 1.2s ease-in-out infinite}.wrapper .no-content-block .spinner .rect2[data-v-743bbb80]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.wrapper .no-content-block .spinner .rect3[data-v-743bbb80]{-webkit-animation-delay:-1s;animation-delay:-1s}.wrapper .no-content-block .spinner .rect4[data-v-743bbb80]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.wrapper .no-content-block .spinner .rect5[data-v-743bbb80]{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-stretchdelay-data-v-743bbb80{0%,40%,to{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-stretchdelay-data-v-743bbb80{0%,40%,to{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.wrapper .no-content-block>img[data-v-743bbb80]{width:100%;display:block;position:absolute;left:50%;transform:translateX(-50%);opacity:.5}.wrapper .no-content-block p[data-v-743bbb80]{display:block;margin:200px 0 0;color:#000;font-weight:600;opacity:.8}',""]),t.exports=e},473:function(t,e,r){"use strict";r(409)},474:function(t,e,r){(e=r(21)(!1)).push([t.i,".setting-list[data-v-69fa25d2]{padding:0;flex-wrap:wrap;font-weight:600}.setting-list[data-v-69fa25d2],.setting-list>li[data-v-69fa25d2]{display:flex;justify-content:center}.setting-list>li[data-v-69fa25d2]{align-items:center}.setting-list>li .rainbow[data-v-69fa25d2]{color:#fff;text-shadow:0 0 5px #000;background:linear-gradient(0deg,#ffd306,#98c9d6,#8600ff)}.setting-list>li .copper[data-v-69fa25d2]{color:#fff;text-shadow:0 0 5px #000;background:linear-gradient(45deg,#ca7345,#ffdeca 16%,#ca7345 21%,#ffdeca 24%,#a14521 27%,#ca7345 36%,#ffdeca 45%,#ffdeca 60%,#ca7345 72%,#ffdeca 80%,#ca7345 84%,#732100)}",""]),t.exports=e},475:function(t,e,r){var map={"./brothers.png":476,"./cpbl.png":477,"./ctbc_brothers.png":478,"./fubon.png":479,"./lions.png":480,"./logo.png":481,"./rakuten.png":482};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=475},476:function(t,e,r){t.exports=r.p+"img/brothers.248ef2f.png"},477:function(t,e,r){t.exports=r.p+"img/cpbl.f0e6c8d.png"},478:function(t,e,r){t.exports=r.p+"img/ctbc_brothers.4264e6e.png"},479:function(t,e,r){t.exports=r.p+"img/fubon.fdbb927.png"},480:function(t,e,r){t.exports=r.p+"img/lions.d7e9c9d.png"},481:function(t,e,r){t.exports=r.p+"img/logo.8a5c406.png"},482:function(t,e,r){t.exports=r.p+"img/rakuten.8a7a078.png"},483:function(t){t.exports=JSON.parse('[{"id":"all","text":"所有球團","img":"cpbl"},{"id":"ctbc_brothers","text":"中信兄弟","img":"ctbc_brothers"},{"id":"brothers","text":"兄弟象","img":"brothers"},{"id":"lions","text":"統一 7-ELEVEN 獅","img":"lions"},{"id":"fubon","text":"富邦悍將","img":"fubon"},{"id":"rakuten","text":"樂天桃猿","img":"rakuten"}]')},484:function(t){t.exports=JSON.parse('[{"id":"all","text":"所有的位置","hint":"ALL"},{"id":"dh","text":"指定打擊","hint":"DH"},{"id":"c","text":"捕手","hint":"C"},{"id":"1b","text":"1壘手","hint":"1B"},{"id":"2b","text":"2壘手","hint":"2B"},{"id":"3b","text":"3壘手","hint":"3B"},{"id":"ss","text":"游擊手","hint":"SS"},{"id":"lf","text":"左外野手","hint":"LF"},{"id":"cf","text":"中堅手","hint":"CF"},{"id":"rf","text":"右外野手","hint":"RF"}]')},485:function(t){t.exports=JSON.parse('[{"id":"all","text":"所有的氣候","icon":null,"color":null},{"id":"sun","text":"太陽","icon":"fas fa-sun","color":"red"},{"id":"cloud","text":"雲","icon":"fas fa-cloud","color":"#F0F0F0"},{"id":"snow","text":"雪","icon":"fas fa-snowflake","color":"#66B3FF"},{"id":"rain","text":"雨","icon":"fas fa-umbrella","color":"#0080FF"},{"id":"none","text":"無屬性","icon":"fas fa-circle","color":"green"}]')},486:function(t){t.exports=JSON.parse('[{"id":"all","text":"所有的類型","icon":""},{"id":"p-sa","text":"力量速度A型","icon":"fas fa-baseball-ball","color":"#6C6C6C"},{"id":"p-sb","text":"力量速度B型","icon":"fas fa-baseball-ball","color":"#0080FF"},{"id":"p-da","text":"力量守備A型","icon":""},{"id":"p-db","text":"力量守備B型","icon":""},{"id":"p-ta","text":"力量傳球A型","icon":""},{"id":"p-tb","text":"力量傳球B型","icon":""},{"id":"c-sa","text":"擊球速度A型","icon":"fas fa-baseball-ball","color":"#6C6C6C"},{"id":"c-sb","text":"擊球速度B型","icon":"fas fa-baseball-ball","color":"#0080FF"},{"id":"c-da","text":"擊球守備A型","icon":""},{"id":"c-db","text":"擊球守備B型","icon":""},{"id":"c-ta","text":"擊球傳球A型","icon":""},{"id":"c-tb","text":"擊球傳球B型","icon":""}]')},487:function(t,e,r){"use strict";r(410)},488:function(t,e,r){(e=r(21)(!1)).push([t.i,'.wrapper[data-v-25072de2]{background:linear-gradient(45deg,#cbd0d4,#919aa9)}.wrapper .form-title[data-v-25072de2]{padding-left:8px}.wrapper .side .tab-list[data-v-25072de2]{padding-left:0;list-style:none}.wrapper .side .tab-list>li[data-v-25072de2]{margin-top:5px;padding:10px;font-size:14px;cursor:pointer;background:#5b5b5b;color:#fff}.wrapper .side .tab-list>li.active[data-v-25072de2]{background:#e0e0e0;color:#000}.wrapper .main[data-v-25072de2]{background:linear-gradient(45deg,#cfd4d8,#b4bbc5)}.wrapper .main.filtered[data-v-25072de2]{padding:0}.wrapper .main .content-title[data-v-25072de2]{color:#000;font-size:20px;font-weight:700;padding-left:10px;position:relative}.wrapper .main .content-title[data-v-25072de2]:before{content:"|";position:absolute;left:0;top:-2px}.wrapper .main .slider-txt[data-v-25072de2]{background:#fff;color:#000;padding:2px 4px}.wrapper .main .filter-list[data-v-25072de2]{padding-left:0;list-style:none}.wrapper .main .filter-list>li[data-v-25072de2]{padding:10px 20px;display:flex;justify-content:space-between;cursor:pointer}.wrapper .main .filter-list>li.active[data-v-25072de2]{background:#fff}.wrapper .main .filter-list>li.active>div .check-circle[data-v-25072de2]{color:#dfb63a}.wrapper .save-icon[data-v-25072de2]{display:none}@media screen and (max-width:500px){.wrapper .save-icon[data-v-25072de2]{display:inline-block}}.wrapper .save-txt[data-v-25072de2]{pointer-events:none;font-weight:600;display:inline-block}@media screen and (max-width:500px){.wrapper .save-txt[data-v-25072de2]{display:none}}',""]),t.exports=e},522:function(t,e,r){"use strict";r.r(e);var n=r(412),o=r(413),l=r(414),c={components:{indexMainContent:n.default,indexSetting:o.default,indexSearchDialog:l.default},data:function(){return{searchDialog:!1}},watch:{},methods:{setSearchModal:function(t){this.searchDialog=t}}},d=r(38),f=r(55),v=r.n(f),h=r(526),m=r(517),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-row",[e("index-main-content"),this._v(" "),e("index-setting",{on:{setSearchModal:this.setSearchModal}}),this._v(" "),e("index-search-dialog",{attrs:{searchDialog:this.searchDialog},on:{setSearchModal:this.setSearchModal}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{IndexMainContent:r(412).default,IndexSetting:r(413).default,IndexSearchDialog:r(414).default}),v()(component,{VContainer:h.a,VRow:m.a})}}]);