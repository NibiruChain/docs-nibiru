(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{397:function(e,t,r){},429:function(e,t,r){"use strict";r(397)},450:function(e,t,r){"use strict";r.r(t);var i=r(12),n=r(62),s=r.n(n),a={props:{aside:{type:Boolean,default:!0},tree:{type:Array}},mounted(){this.emitPrereqLinks();const e=e=>{e.target.setAttribute("data-header-anchor-text","Copied!"),s()(e.target.href),setTimeout(()=>{e.target.setAttribute("data-header-anchor-text","Copy link")},4e3),e.preventDefault()};if(document.querySelectorAll('h1[id*="requisite"], h2[id*="requisite"], h3[id*="requisite"], h4[id*="requisite"], h5[id*="requisite"], h6[id*="requisite"]').forEach(e=>{e.addEventListener("click",this.prereqToggle)}),document.querySelectorAll(".content__default a.header-anchor").forEach(t=>{t.setAttribute("data-header-anchor-text","Copy link"),t.addEventListener("click",e)}),window.location.hash){const e=document.querySelector(window.location.hash);e&&e.scrollIntoView()}},methods:{emitPrereqLinks(){const e=[...document.querySelectorAll("[prereq]")].map(e=>{const t=e.querySelector("[href]");return{href:t.getAttribute("href"),text:t.innerText}});this.$emit("prereq",e)},prereqToggle(e){e.target.classList.contains("header-anchor")||(e.target.classList.toggle("prereqTitleShow"),document.querySelectorAll("[prereq]").forEach(e=>{e.classList.toggle("prereqLinkShow")}))}},computed:{noAside(){return!this.aside},linkPrevNext(){if(!this.tree)return;let e={};const t=r=>r.forEach(r=>{const n=r.children;if(n){const s=Object(i.findIndex)(n,["regularPath",this.$page.path]);return s>=0&&n[s-1]&&(e.prev=n[s-1]),s>=0&&n[s+1]&&(e.next=n[s+1]),t(r.children)}});return t(this.tree),e}}},c=(r(429),r(0)),o=Object(c.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"100%"}},[t("div",{staticClass:"search__container"},[t("div",{staticClass:"search",on:{click:function(t){return e.$emit("search",!0)}}},[t("div",{staticClass:"search__icon"},[t("icon-search")],1),t("div",{staticClass:"search__text"},[e._v("Search")])])]),t("div",{staticClass:"container"},[e._t("default"),e.$frontmatter.cards?t("tm-content-cards"):e._e()],2)])}),[],!1,null,"044dd287",null);t.default=o.exports}}]);