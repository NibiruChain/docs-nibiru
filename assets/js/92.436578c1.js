(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{506:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vpool"}},[e._v("#")]),e._v(" vpool")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("The vpool module manages the virtual AMM pools (vpools) that support Nibi-Perps.")]),e._v(" "),t("h4",{attrs:{id:"queries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[t("code",[e._v("nibid query vpool")])]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"#nibid-query-vpool-all-pools"}},[e._v("all-pools")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("The most informative query. Retusn all prices and parameters on every pool.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"#nibid-query-vpool-reserve-assets"}},[e._v("reserve-assets")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Solves the constant-product formulate for the required base asset amount. Calls the "),t("code",[e._v("GetBaseAssetPrice")]),e._v(" function. Direction is 1 ("),t("code",[e._v("ADD_TO_POOL")]),e._v(") or 2 ("),t("code",[e._v("REMOVE_FROM_POOL")]),e._v(")")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"#nibid-query-vpool-prices"}},[e._v("prices")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Query the quote and base asset reserves for a vpool.")])])])]),e._v(" "),t("h3",{attrs:{id:"nibid-query-vpool-reserve-assets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nibid-query-vpool-reserve-assets"}},[e._v("#")]),e._v(" nibid query vpool reserve-assets")]),e._v(" "),t("p",[e._v("Returns the virtual pool liquidity")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bmliaWQgcSB2cG9vbCByZXNlcnZlLWFzc2V0cyBbcGFpcl0gW2ZsYWdzXQo="}}),e._v(" "),t("ul",[t("li",[t("code",[e._v("pair")]),e._v(': A pair is a string of the form "'),t("code",[e._v("base:quote")]),e._v('". For example, '),t("code",[e._v("ubtc:unusd")]),e._v(" or "),t("code",[e._v("ueth:unusd")]),e._v(".")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBFeGFtcGxlcwpuaWJpZCBxIHZwb29sIHJlc2VydmUtYXNzZXRzIHVidGM6dW51c2QgCm5pYmlkIHEgdnBvb2wgcmVzZXJ2ZS1hc3NldHMgdWV0aDp1bnVzZAo="}}),e._v(" "),t("h3",{attrs:{id:"nibid-query-vpool-prices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nibid-query-vpool-prices"}},[e._v("#")]),e._v(" nibid query vpool prices")]),e._v(" "),t("p",[e._v("A perpetual swap on a virtual pool is just like a swap on Uniswap V2 or SushiSwap.\nWhen the trader goes long, she's essentially buying base assets, "),t("code",[e._v("x")]),e._v(" (selling "),t("code",[e._v("y")]),e._v("). Similarly, going short means selling "),t("code",[e._v("x")]),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("vpool prices")]),e._v(" query returns the amount of "),t("code",[e._v("y")]),e._v(" (virtual quote) received or required to swap with some amount of "),t("code",[e._v("x")]),e._v(" (virtual base). In other words, it solves "),t("code",[e._v("xy=k")]),e._v(" for "),t("code",[e._v("x")]),e._v(" (base amount) .")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bmliaWQgcSB2cG9vbCBwcmljZXMgW3BhaXJdIFtkaXJlY3Rpb25dIFtiYXNlLWFzc2V0LWFtb3VudF0gW2ZsYWdzXQo="}}),e._v(" "),t("ul",[t("li",[t("code",[e._v("pair")]),e._v(': A pair is a string of the form "'),t("code",[e._v("base:quote")]),e._v('". For example, '),t("code",[e._v("ubtc:unusd")]),e._v(" or "),t("code",[e._v("ueth:unusd")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("direction")]),e._v(": The direction is an integer representing long (1) or short (0). Note that values greater than 1 will still run. The default "),t("code",[e._v("direction")]),e._v(" is short if you enter a value an integer greater than 1.")]),e._v(" "),t("li",[t("code",[e._v("base-asset-amount")]),e._v(": Amount of virtual pool, "),t("code",[e._v("x")]),e._v(" tokens. These are the derivatives assets meant to track the underlying. In other words, a "),t("code",[e._v("ueth")]),e._v(" pair uses the price of Ether as its index price.")])]),e._v(" "),t("h4",{attrs:{id:"examples-q-vpool-prices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-q-vpool-prices"}},[e._v("#")]),e._v(" Examples - "),t("code",[e._v("q vpool prices")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bmliaWQgcSB2cG9vbCBwcmljZXMgdWJ0Yzp1bnVzZCAwIDcKIyBSZXR1cm5zIHRoZSBhbW91bnQgb2YgdW51c2QgcmVxdWlyZWQgdG8gcHVyY2hhc2UgNyB1YnRjIG9mIHNob3J0IGV4cG9zdXJlIAojIEVxdWl2YWxlbnRseSwgdGhlIG51c2QgcmVjaWV2ZWQgZnJvbSBjbG9zaW5nIDcgdWJ0YyBvZiBsb25nIGV4cG9zdXJlCg=="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bmliaWQgcSB2cG9vbCBwcmljZXMgdWV0aDp1bnVzZCAxIDQ1CiMgUmV0dXJucyB0aGUgYW1vdW50IG9mIHVudXNkIHJlcXVpcmVkIHRvIHB1cmNoYXNlIDQ1IHVldGggb2YgbG9uZyBleHBvc3VyZSAKIyBFcXVpdmFsZW50bHksIHRoZSBudXNkIHJlY2lldmVkIGZyb20gY2xvc2luZyA0NSB1YnRjIG9mIHNob3J0IGV4cG9zdXJlCg=="}}),e._v(" "),t("h3",{attrs:{id:"nibid-query-vpool-all-pools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nibid-query-vpool-all-pools"}},[e._v("#")]),e._v(" nibid query vpool all-pools")]),e._v(" "),t("p",[e._v("This command fetches all pools and corresponding prices. It doesn't require any arguments.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bmliaWQgcXVlcnkgdnBvb2wgYWxsLXBvb2xzIAo="}}),e._v(" "),t("p",[e._v("Here's an example output in YAML format.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"cG9vbHM6Ci0gYmFzZV9hc3NldF9yZXNlcnZlOiAmcXVvdDs0OTk5OTk5OTk5OS45NjAwMDAwMDAwMDAwMzIwMDAmcXVvdDsKICBmbHVjdHVhdGlvbl9saW1pdF9yYXRpbzogJnF1b3Q7MC4xMDAwMDAwMDAwMDAwMDAwMDAmcXVvdDsKICBtYWludGVuYW5jZV9tYXJnaW5fcmF0aW86ICZxdW90OzAuMDYyNTAwMDAwMDAwMDAwMDAwJnF1b3Q7CiAgbWF4X2xldmVyYWdlOiAmcXVvdDsxMi4wMDAwMDAwMDAwMDAwMDAwMDAmcXVvdDsKICBtYXhfb3JhY2xlX3NwcmVhZF9yYXRpbzogJnF1b3Q7MC4xMDAwMDAwMDAwMDAwMDAwMDAmcXVvdDsKICBwYWlyOgogICAgdG9rZW4wOiB1YnRjCiAgICB0b2tlbjE6IHVudXNkCiAgcXVvdGVfYXNzZXRfcmVzZXJ2ZTogJnF1b3Q7MTAwMDAwMDAwMDAwMDgwMC4wMDAwMDAwMDAwMDAwMDAwMDAmcXVvdDsKICB0cmFkZV9saW1pdF9yYXRpbzogJnF1b3Q7MC4xMDAwMDAwMDAwMDAwMDAwMDAmcXVvdDsKcHJpY2VzOgotIGJsb2NrX251bWJlcjogJnF1b3Q7MzkwMCZxdW90OwogIGluZGV4X3ByaWNlOiAmcXVvdDswLjAwMDAwMDAwMDAwMDAwMDAwMCZxdW90OwogIG1hcmtfcHJpY2U6ICZxdW90OzIwMDAwLjAwMDAwMDAzMjAwMDAwMDAwMCZxdW90OwogIHN3YXBfaW52YXJpYW50OiAmcXVvdDs1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCZxdW90OwogIHR3YXBfbWFyazogJnF1b3Q7MjAwMDAuMDAwMDAwMDE1MjEzMzc3MTc0JnF1b3Q7Cg=="}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);