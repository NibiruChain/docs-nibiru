(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{412:function(t,e,o){},445:function(t,e,o){"use strict";o(412)},468:function(t,e,o){"use strict";o.r(e);o(12);var s={props:["value","tree","compact"],data:function(){return{search:{query:null},products:[{label:"sdk",name:"Cosmos<br>SDK",url:"https://docs.cosmos.network/",color:"#5064FB"},{label:"hub",name:"Cosmos<br>Hub",url:"https://hub.cosmos.network/",color:"#BA3FD9"},{label:"ibc",name:"IBC<br>Go",url:"https://ibc.cosmos.network",color:"#E6900A"},{label:"core",name:"Tendermint<br>Core",url:"https://docs.tendermint.com/",color:"#00BB00"}]}},computed:{searchResults(){return this.$site.pages.filter(t=>{const e=t.headers?t.headers.map(t=>t.title):[],o=t.title;return o&&[o,...e].join(" ").toLowerCase().match(this.search.query.toLowerCase())})},logo(){return this.$themeConfig.logo},sidebar(){return this.value}}},r=(o(445),o(0)),i=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"100%",position:"relative"}},[e("div",{staticClass:"container"},[!0!==t.compact?e("router-link",{staticClass:"logo__container",attrs:{to:"/"}},[e("div",{staticClass:"logo"},[t.$themeConfig.logo&&t.$themeConfig.logo.src?e("div",{staticClass:"logo__img__custom"},[e("img",{attrs:{src:t.$themeConfig.logo.src}})]):e("div",{staticClass:"logo__img"},[e("logo-"+(t.$themeConfig.label||"sdk"),{tag:"component"})],1),t.$themeConfig.logo?t._e():e("div",{staticClass:"logo__text"},[t._v(t._s(t.$site.title||"Documentation"))])])]):t._e(),e("div",{staticClass:"items",class:["footer__compact__"+!(!0!==t.compact)]},[t._l(t.value,(function(o){return e("div",{staticClass:"sidebar",style:{display:0==t.$themeConfig.sidebar.auto&&""===o.title?"none":"block"}},[e("div",{staticClass:"title"},[t._v(t._s(o.title))]),e("client-only",[o.children?e("tm-sidebar-tree",{staticClass:"section",attrs:{value:o.children,tree:t.tree,level:0}}):t._e()],1)],1)})),e("div",{staticClass:"sidebar version"},[e("tm-select-version")],1)],2),t.$themeConfig.custom?t._e():e("div",{staticClass:"footer",class:["footer__compact__"+!(!0!==t.compact)]},t._l(t.products,(function(o){return t.$themeConfig.label!=o.label?e("a",{staticClass:"footer__item",style:{"--color":o.color},attrs:{href:o.url,target:"_blank",rel:"noreferrer noopener"}},[e("tm-logo-"+o.label,{tag:"component",staticClass:"footer__item__icon"}),e("div",{staticClass:"footer__item__title",domProps:{innerHTML:t._s(t.md(o.name))}})],1):t._e()})),0)],1)])}),[],!1,null,"442e5432",null);e.default=i.exports}}]);