(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{413:function(t,e,i){},446:function(t,e,i){"use strict";i(413)},469:function(t,e,i){"use strict";i.r(e);i(61);var n=i(12),r=i(18),o=i.n(r),a={name:"tm-sidebar-tree",props:["value","title","tree","level"],data:function(){return{show:null}},mounted(){Object(n.find)(this.value,["key",this.$page.key])&&this.$emit("active",this.title)},watch:{$route(t,e){Object(n.find)(this.value,["key",t.name])&&this.revealParent(this.title)}},methods:{hide(t){const e=this.indexFile(t),i=t.frontmatter&&!1===t.frontmatter.order;return e&&e.frontmatter&&e.frontmatter.parent&&!1===e.frontmatter.parent.order||i},iconCollapsed(t){return!(!t.directory||this.iconExpanded(t))||!t.path&&this.show!=t.title&&(t.children||t.directory)},iconExpanded(t){return this.show==t.title&&!t.key},iconActive(t){return""!==this.$page.path&&(t.path==this.$page.path||t.key==this.$page.key)},outboundLink:t=>/^[a-z]+:/i.test(t),isInternalLink(t){return t.path&&!t.directory&&!t.static&&!this.outboundLink(t.path)},isOutboundLink(t){return t.path&&this.outboundLink(t.path)||t.static},handleEnter(t){console.log("enter"),this.revealChild(t.title)},componentName(t){return this.isInternalLink(t)?"router-link":(this.isOutboundLink(t),"a")},indexFile:t=>!!t.children&&Object(n.find)(t.children,t=>{const e=t.relativePath;return!!e&&(e.toLowerCase().match(/index.md$/i)||e.toLowerCase().match(/readme.md$/i))}),setHeight(t){t.style.setProperty("--max-height",t.scrollHeight+"px")},titleFormatted:t=>`<div>${new o.a({html:!0,linkify:!0}).renderInline(t)}</div>`,titleText(t){const e=this.indexFile(t);return t.frontmatter?t.frontmatter.title||t.title:e?e.frontmatter&&e.frontmatter.parent&&e.frontmatter.parent.title?e.frontmatter.parent.title:e.title.match(/readme\.md/i)||e.title.match(/index\.md/i)?t.title:e.title:t.title},revealChild(t){this.show=this.show==t?null:t},revealParent(t){this.show=t,this.$emit("active",this.title)},directoryChildren(t){if(!0===t.directory){let e=t.path&&t.path.split("/").filter(t=>""!=t);return e=e.reduce((t,e)=>Object(n.find)(t.children||t,["title",e]),this.tree),e.children||[]}return[]}}},l=(i(446),i(0)),s=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",t._l(t.value,(function(i){return e("div",[t.hide(i)?t._e():e(t.componentName(i),{tag:"component",staticClass:"item",class:[t.level>0&&"item__child",{item__dir:!i.path}],style:{"--vline":t.level<1?"hidden":"visible","--vline-color":!t.iconActive(i)&&!t.iconExpanded(i)||t.iconExpanded(i)?"rgba(0,0,0,0.1)":"var(--color-primary)"},attrs:{to:i.path,target:t.outboundLink(i.path)&&"_blank",rel:t.outboundLink(i.path)&&"noreferrer noopener",href:t.outboundLink(i.path)||i.static?i.path:"#",tag:"a",role:!i.path&&"button"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEnter(i)},click:function(e){!t.outboundLink(i.path)&&t.revealChild(i.title)}}},[t.iconExpanded(i)&&t.level<1?e("tm-icon-hex",{staticClass:"item__icon item__icon__expanded",staticStyle:{"--icon-color":"var(--color-primary, blue)"}}):t._e(),t.iconCollapsed(i)&&t.level<1?e("tm-icon-hex",{staticClass:"item__icon item__icon__collapsed",staticStyle:{"--icon-color":"rgba(0,0,0,0.18)"}}):!t.outboundLink(i.path)&&t.level<1&&!t.iconExpanded(i)?e("tm-icon-hex",{staticClass:"item__icon item__icon__internal"}):t.outboundLink(i.path)||i.static?e("tm-icon-outbound",{staticClass:"item__icon item__icon__outbound"}):t._e(),e("div",{class:{item__selected:t.iconActive(i)||t.iconExpanded(i),item__selected__dir:t.iconCollapsed(i),item__selected__alt:t.iconExpanded(i)},style:{"padding-left":1*t.level+"rem"},domProps:{innerHTML:t._s(t.titleFormatted(t.titleText(i)))}})],1),(i.children||t.directoryChildren(i),e("div",[e("transition",{attrs:{name:"reveal"},on:{enter:t.setHeight,leave:t.setHeight}},[t.hide(i)?t._e():e("tm-sidebar-tree",{directives:[{name:"show",rawName:"v-show",value:i.title==t.show,expression:"item.title == show"}],attrs:{level:t.level+1,value:i.children||t.directoryChildren(i)||[],title:i.title},on:{active:function(e){return t.revealParent(e)}}})],1)],1))],1)})),0)}),[],!1,null,"2f311672",null);e.default=s.exports}}]);