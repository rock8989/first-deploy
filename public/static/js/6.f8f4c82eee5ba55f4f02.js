webpackJsonp([6],{gVpZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("mof7"),l=n("CNLv"),a=n.n(l),r=n("lbHh"),c=n.n(r),i={data:function(){return{noticeData:[],total:1,pageSize:10,currentPage:1,options:[{value:"10",label:"전체"},{value:"20",label:"제목"},{value:"30",label:"내용"}],noticeOption:"10",search:""}},methods:{onList:function(){var e=this;console.log(this.search),Object(o.c)({search:this.search}).then(function(t){console.log("res = ",t.data.body);var n=a()(t.data.body);console.log("res = ",n),e.total=n.length;var o=e.currentPage*e.pageSize,l=o-e.pageSize;console.log(o,l),e.noticeData=n.slice(l,o)}).catch(function(e){console.log(e)}).finally(function(){})},onDetail:function(e){console.log("no = ",e),this.$router.push({path:"/notice/detail",query:{no:e}})},onPageChange:function(e){console.log(e),this.currentPage=e,this.onList()}},mounted:function(){this.onList()},beforeRouteEnter:function(e,t,n){console.log("======    to     ======"),console.log(e),console.log("======    to     ======"),console.log("======    from     ======"),console.log(t),console.log("======    from     ======"),c.a.get("token")?"/login"===e.path?n({path:"/"}):n():"/login"!==e.path?n({path:"/login?redirect="+e.path}):n()}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("el-form",{staticClass:"toolbar",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"검색"}},[n("el-row",{attrs:{gutter:5}},[n("el-col",{attrs:{span:6}},[n("el-select",{attrs:{placeholder:"Select"},model:{value:e.noticeOption,callback:function(t){e.noticeOption=t},expression:"noticeOption"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),n("el-col",{attrs:{span:14}},[n("el-input",{attrs:{placeholder:"검색어를 입력하세요"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onList(t):null}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary"},on:{click:e.onList}},[e._v("검색")])],1)],1)],1)],1),e._v(" "),n("el-table",{attrs:{data:e.noticeData}},[n("el-table-column",{attrs:{prop:"noticeMngNo",label:"No",width:"70",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"subj",label:"제목","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"link",on:{click:function(n){e.onDetail(t.row.noticeMngNo)}}},[e._v(e._s(t.row.subj))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"noticeTp",align:"center",label:"구분",width:"150"}}),e._v(" "),n("el-table-column",{attrs:{prop:"regDt",align:"center",label:"등록일",width:"220"}})],1),e._v(" "),n("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.pageSize,total:e.total,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"current-change":e.onPageChange}}),e._v(" "),n("div",{staticClass:"bottomBtns"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$router.push("/notice/register")}}},[e._v("공지사항 등록")])],1)],1)},staticRenderFns:[]},u=n("VU/8")(i,s,!1,null,null,null);t.default=u.exports}});
//# sourceMappingURL=6.f8f4c82eee5ba55f4f02.js.map