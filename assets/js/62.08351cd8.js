(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{F3eC:function(t,e,n){"use strict";n.r(e);n("07d7");var s=n("Kw5r"),i={props:{items:{default:[]}},components:{List:function(){return Promise.resolve().then(n.bind(null,"F3eC"))}},data:function(){return{list:this.items}},methods:{toggle:function(t){s.a.set(this.list[t],"isOpen",!this.list[t].isOpen)}}},l=n("KHd+"),u=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"menu menu-tree"},t._l(t.list,(function(e,s){return n("li",{key:s},[e.link?n("g-link",{staticClass:"menu__item menu__link",attrs:{to:e.link,exact:"/docs/"==e.link}},[t._v(t._s(e.title))]):[n("h4",{staticClass:"menu__item menu__title",on:{click:function(e){return t.toggle(s)}}},[t._v("\n        "+t._s(e.title)+"\n        "),n("span",[t._v("["+t._s(!0===e.isOpen?"-":"+")+"]")])]),n("List",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"item.isOpen"}],attrs:{items:e.items}})]],2)})),0)}),[],!1,null,null,null);e.default=u.exports}}]);