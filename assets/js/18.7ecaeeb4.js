(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{410:function(e,t,n){},443:function(e,t,n){"use strict";n(410)},466:function(e,t,n){"use strict";n.r(t);var s={data:()=>({selectedItem:""}),mounted(){const e=window.location.pathname.replace("/","").replace(/\/$/,""),t=window.location.href.match(/[a-zA-Z]{1}\d+(\.\d+)+/g);this.versionValue==this.versionValue?this.selectedItem=null!==t?t[0]:e:this.selectedItem=""},computed:{versions(){return this.$themeConfig.versions},versionValue(){for(var e in this.versions){return this.versions[e].key}}},methods:{versionChange(e){window.location.href=`${window.location.origin}/${e}`}}},i=(n(443),n(0)),o=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"container"},[t("span",{staticClass:"sr-only"},[e._v("Docs Version Switcher")]),e.versions?t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedItem,expression:"selectedItem"}],on:{input:function(t){return e.versionChange(t.target.value)},change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedItem=t.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"",disabled:""}},[e._v("Version")]),e._l(e.versions,(function(n){return t("option",{domProps:{value:n.key}},[e._v(e._s(n.label))])}))],2)]):e._e()])])}),[],!1,null,"e53601b4",null);t.default=o.exports}}]);